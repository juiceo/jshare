import React, { type PropsWithChildren } from 'react';

export type ErrorBoundaryProps = PropsWithChildren<{
    fallback: (args: ErrorBoundaryFallbackArgs) => JSX.Element;
}>;

export type ErrorBoundaryFallbackArgs = {
    reset: () => void;
    error: Error;
};

type ErrorBoundaryState = {
    error: Error | null;
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { error: null };
        this.reset = this.reset.bind(this);
    }

    static getDerivedStateFromError(error: Error) {
        return { error };
    }

    componentDidCatch() {
        /**
         * TODO: Report error to some service
         */
    }

    reset() {
        this.setState({ error: null });
    }

    render() {
        if (this.state.error) {
            return this.props.fallback({
                reset: this.reset,
                error: this.state.error,
            });
        }

        return this.props.children;
    }
}
