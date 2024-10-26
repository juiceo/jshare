import { useCallback, useState } from 'react';

export type FormField<T> = {
    value: T;
    setValue: (value: T) => void;
    error: string | null;
    setError: (err: string | null) => void;
    validate: () => { ok: true } | { ok: false; error: string };
};

export const useFormField = <T>(
    initialValue: T,
    validator?: (value: T) => string | null | undefined
): FormField<T> => {
    const [value, _setValue] = useState<T>(initialValue);
    const [error, setError] = useState<string | null>(null);

    const setValue = useCallback(
        (newValue: T) => {
            if (error) {
                const err = validator?.(newValue) ?? null;
                if (!err) {
                    setError(null);
                }
            }
            _setValue(newValue);
        },
        [error, validator]
    );

    const validate = useCallback(() => {
        const err = validator?.(value) ?? null;
        if (err) {
            setError(err);
            return {
                ok: false as false,
                error: err,
            };
        } else {
            return {
                ok: true as true,
            };
        }
    }, [validator, value]);

    return {
        value,
        setValue,
        error,
        setError,
        validate,
    };
};

export const validateAll = (fields: FormField<any>[]) => {
    const validations = fields.map((field) => field.validate());

    if (validations.every((validation) => validation.ok)) {
        return { ok: true };
    } else {
        return {
            ok: false,
            errors: validations
                .filter((validation) => !validation.ok)
                .map((validation) => validation.error),
        };
    }
};
