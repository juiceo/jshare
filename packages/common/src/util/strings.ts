export const plural = (args: { singular: string; plural: string; count: number }): string => {
    if (Math.abs(args.count) === 1) {
        return `${args.count} ${args.singular}`;
    } else {
        return `${args.count} ${args.plural}`;
    }
};

export const getRandomKey = (length: number = 16): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};
