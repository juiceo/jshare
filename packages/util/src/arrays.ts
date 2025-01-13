export const groupByUnique = <T extends { [key in string]: any }>(
    arr: T[],
    key: keyof T | ((item: T) => string)
): Record<string, T> => {
    const result: Record<string, T> = {};

    arr.forEach((item) => {
        const itemKey = typeof key === 'function' ? key(item) : item[key];
        result[itemKey] = item;
    });

    return result;
};

export const toObject = <
    T extends { [key in string]: any },
    TKey extends string | number,
    TValue extends any,
>(args: {
    data: T[];
    key: (item: T) => TKey;
    value: (item: T) => TValue;
}): Record<TKey, TValue> => {
    return args.data.reduce(
        (result, item) => {
            const itemKey = args.key(item);
            result[itemKey] = args.value(item);
            return result;
        },
        {} as Record<TKey, TValue>
    );
};
