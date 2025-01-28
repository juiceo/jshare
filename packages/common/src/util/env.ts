export const getEnv = <Required extends boolean = false, TParsed = string>(
    key: string,
    args?: {
        required?: Required;
        parse?: (value: string) => TParsed;
    }
): Required extends true ? TParsed : TParsed | undefined => {
    const value = process.env[key] || process.env[`EXPO_PUBLIC_${key}`];
    if (!value && args?.required) {
        throw new Error(`Missing required env variable: ${key}`);
    }

    if (args?.parse) {
        return (value ? args.parse(value as string) : undefined) as Required extends true
            ? TParsed
            : TParsed | undefined;
    }
    return value as Required extends true ? TParsed : TParsed | undefined;
};
