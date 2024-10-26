import { useCallback, useState } from 'react';

export type FormField<T, TValidated> = {
    value: T;
    setValue: (value: T) => void;
    error: string | null;
    setError: (err: string | null) => void;
    validate: () => { ok: true; value: TValidated } | { ok: false; error: string };
};

export const useFormField = <T, TValidated extends T = T>(
    initialValue: T,
    validator?: (value: T) => string | { value: TValidated }
): FormField<T, TValidated> => {
    const [value, _setValue] = useState<T>(initialValue);
    const [error, setError] = useState<string | null>(null);

    const validateValue = useCallback(
        (value: T) => {
            if (!validator) {
                setError(null);
                return {
                    ok: true as true,
                    value: value as TValidated,
                };
            }
            const validation = validator(value);
            if (typeof validation === 'string') {
                setError(validation);
                return {
                    ok: false as false,
                    error: validation,
                };
            } else {
                setError(null);
                return {
                    ok: true as true,
                    value: validation.value,
                };
            }
        },
        [validator]
    );

    const validate = useCallback(() => {
        return validateValue(value);
    }, [validateValue, value]);

    const setValue = useCallback(
        (newValue: T) => {
            if (error) {
                const validation = validateValue(newValue);
                if (validation.ok) {
                    setError(null);
                }
            }
            _setValue(newValue);
        },
        [error, validateValue]
    );

    return {
        value,
        setValue,
        error,
        setError,
        validate,
    };
};
