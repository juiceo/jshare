import { z } from 'zod';
/**
 * `Expense` schema excluding foreign keys and relations.
 */
export declare const ExpenseScalarSchema: z.ZodObject<{
    id: z.ZodString;
    archived: z.ZodDefault<z.ZodBoolean>;
    archivedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    amount: z.ZodNumber;
    currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversion: z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>;
}, "strict", z.ZodTypeAny, {
    id: string;
    archived: boolean;
    createdAt: Date;
    updatedAt: Date;
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
    amount: number;
    archivedAt?: Date | null | undefined;
    description?: string | null | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}, {
    id: string;
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
    amount: number;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    description?: string | null | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}>;
/**
 * `Expense` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export declare const ExpenseSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodString;
    archived: z.ZodDefault<z.ZodBoolean>;
    archivedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    amount: z.ZodNumber;
    currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversion: z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>;
}, {
    ownerId: z.ZodString;
    payerId: z.ZodString;
    groupId: z.ZodString;
}>, {
    owner: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    payer: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    group: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    shares: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>>;
    messageAttachments: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    archived: boolean;
    createdAt: Date;
    updatedAt: Date;
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
    groupId: string;
    ownerId: string;
    payerId: string;
    amount: number;
    archivedAt?: Date | null | undefined;
    owner?: Record<string, unknown> | undefined;
    payer?: Record<string, unknown> | undefined;
    group?: Record<string, unknown> | undefined;
    messageAttachments?: unknown[] | undefined;
    description?: string | null | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
    shares?: unknown[] | undefined;
}, {
    id: string;
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
    groupId: string;
    ownerId: string;
    payerId: string;
    amount: number;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    owner?: Record<string, unknown> | undefined;
    payer?: Record<string, unknown> | undefined;
    group?: Record<string, unknown> | undefined;
    messageAttachments?: unknown[] | undefined;
    description?: string | null | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
    shares?: unknown[] | undefined;
}>;
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export declare const ExpensePrismaCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    amount: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    conversion: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    amount: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    conversion: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    amount: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    conversion: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export declare const ExpensePrismaUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    amount: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodRecord<z.ZodString, z.ZodUnknown>]>>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    conversion: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    amount: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodRecord<z.ZodString, z.ZodUnknown>]>>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    conversion: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    amount: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodRecord<z.ZodString, z.ZodUnknown>]>>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    conversion: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * `Expense` schema for create operations excluding foreign keys and relations.
 */
export declare const ExpenseCreateScalarSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
    amount: z.ZodNumber;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversion: z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>;
}, "strict", z.ZodTypeAny, {
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
    amount: number;
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    description?: string | null | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}, {
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
    amount: number;
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    description?: string | null | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}>;
/**
 * `Expense` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export declare const ExpenseCreateSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
    amount: z.ZodNumber;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversion: z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>;
}, {
    ownerId: z.ZodString;
    payerId: z.ZodString;
    groupId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
    groupId: string;
    ownerId: string;
    payerId: string;
    amount: number;
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    description?: string | null | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}, {
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
    groupId: string;
    ownerId: string;
    payerId: string;
    amount: number;
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    description?: string | null | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}>;
/**
 * `Expense` schema for update operations excluding foreign keys and relations.
 */
export declare const ExpenseUpdateScalarSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    amount: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    conversion: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>>;
}, "strict", z.ZodTypeAny, {
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    currency?: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS" | undefined;
    amount?: number | undefined;
    description?: string | null | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}, {
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    currency?: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS" | undefined;
    amount?: number | undefined;
    description?: string | null | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}>;
/**
 * `Expense` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export declare const ExpenseUpdateSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    amount: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    conversion: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>>;
}, {
    ownerId: z.ZodOptional<z.ZodString>;
    payerId: z.ZodOptional<z.ZodString>;
    groupId: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    currency?: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS" | undefined;
    groupId?: string | undefined;
    ownerId?: string | undefined;
    payerId?: string | undefined;
    amount?: number | undefined;
    description?: string | null | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}, {
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    currency?: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS" | undefined;
    groupId?: string | undefined;
    ownerId?: string | undefined;
    payerId?: string | undefined;
    amount?: number | undefined;
    description?: string | null | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}>;
