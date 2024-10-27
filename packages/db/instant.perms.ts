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
            update: 'auth.id == data.userId && auth.id == newData.userId',
            delete: 'false',
        },
    },
    groups: {
        allow: {
            view: 'true',
            create: 'true',
            update: 'true',
            delete: 'true',
        },
    },
    participants: {
        allow: {
            view: 'true',
            create: 'true',
            update: 'true',
            delete: 'true',
        },
    },
    // groups: i.entity({
    //     name: i.string(),
    //     currency: i.string<CurrencyCode>(),
    // }),
    // participants: i.entity({
    //     role: i.string<'admin' | 'member'>(),
    //     groupId: i.string(),
    //     userId: i.string(),
    // }),
};

export default perms;
