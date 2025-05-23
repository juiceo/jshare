import type { AuthError, Session } from '@supabase/supabase-js';
import { router } from 'expo-router';
import { makeAutoObservable } from 'mobx';

import { isDemoUserEmail } from '@jshare/common';

import { hotReloadable } from '~/lib/store/util';
import { supabase } from '~/lib/supabase';

export type SessionStateAuthenticated = {
    type: 'authenticated';
    session: Session;
    error: null;
};

export type SessionStateLoading = {
    type: 'loading';
    session: null;
    error: null;
};

export type SessionStateError = {
    type: 'error';
    session: null;
    error: AuthError;
};

export type SessionStateUnauthenticated = {
    type: 'unauthenticated';
    session: null;
    error: null;
};

export type SessionState =
    | SessionStateAuthenticated
    | SessionStateLoading
    | SessionStateError
    | SessionStateUnauthenticated;

export class SessionStoreInstance {
    private _session: Session | null = null;
    private _error: AuthError | null = null;
    private _loading: boolean = true;
    cleanup: () => void = () => {};

    constructor() {
        makeAutoObservable(this);

        supabase.auth.getSession().then(async ({ data: { session }, error }) => {
            this._session = session;
            this._error = error;
            this._loading = false;
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange(async (_event, session) => {
            this._session = session;
            this._loading = false;
        });

        this.cleanup = () => {
            subscription.unsubscribe();
        };
    }

    async signOut() {
        supabase.auth.signOut();
        router.dismissAll();
        router.replace('/login');
    }

    async signIn(email: string, code: string) {
        this._loading = true;
        const authResult = isDemoUserEmail(email)
            ? await supabase.auth.signInWithPassword({
                  email,
                  password: code,
              })
            : await supabase.auth.verifyOtp({
                  email,
                  token: code,
                  type: 'email',
              });

        if (authResult.error) {
            this._error = authResult.error;
            this._session = null;
        } else {
            this._session = authResult.data.session;
            this._error = null;
        }
        this._loading = false;
    }

    get state(): SessionState {
        if (this._session) {
            return {
                type: 'authenticated',
                session: this._session,
                error: null,
            };
        }

        if (this._loading) {
            return {
                type: 'loading',
                session: null,
                error: null,
            };
        }

        if (this._error) {
            return {
                type: 'error',
                session: null,
                error: this._error,
            };
        }

        return {
            type: 'unauthenticated',
            session: null,
            error: null,
        };
    }

    get isAuthenticated() {
        return !!this._session;
    }

    get userMaybe() {
        return this._session?.user ?? null;
    }

    get user() {
        if (!this._session) {
            throw new Error(
                'Cannot call SessionStore.user outside of an authenticated context. Use SessionStore.userMaybe instead.'
            );
        }

        return this._session.user;
    }

    get sessionMaybe() {
        return this._session;
    }

    get isLoading() {
        return this._loading;
    }

    get error() {
        return this._error;
    }
}

export const SessionStore = hotReloadable('__sessionStore', () => new SessionStoreInstance());
