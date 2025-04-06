export const isDemoUserEmail = (email: string) => {
    return email.startsWith('demo') && email.endsWith('@jshare.me');
};
