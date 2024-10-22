export const perms = {
    $users: {
        allow: {
            view: 'auth.id == data.id',
            create: 'false',
            delete: 'false',
            update: 'false',
        },
    },
    profiles: {
        allow: {
            view: 'true',
            create: 'auth.id == data.userId',
            update: 'auth.id == data.userId && data.userId == newData.userId',
            delete: 'false',
        },
    },
};

export default perms;
