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
