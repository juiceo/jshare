const perms = {
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
            update: 'true',
            delete: 'false',
        },
    },
};

export default perms;
