import { z } from 'zod';
/**
 * `Payment` schema excluding foreign keys and relations.
 */
export declare const PaymentScalarSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    amount: z.ZodNumber;
    currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
    conversion: z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>;
}, "strict", z.ZodTypeAny, {
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
    createdAt: Date;
    updatedAt: Date;
    id: string;
    amount: number;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}, {
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
    id: string;
    amount: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}>;
/**
 * `Payment` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export declare const PaymentSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodString;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    amount: z.ZodNumber;
    currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
    conversion: z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>;
}, {
    groupId: z.ZodString;
    recipientId: z.ZodString;
    payerId: z.ZodString;
}>, {
    group: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    recipient: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    payer: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}>, "strip", z.ZodTypeAny, {
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
    createdAt: Date;
    updatedAt: Date;
    id: string;
    groupId: string;
    payerId: string;
    amount: number;
    recipientId: string;
    payer?: Record<string, unknown> | undefined;
    recipient?: Record<string, unknown> | undefined;
    group?: Record<string, unknown> | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}, {
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
    id: string;
    groupId: string;
    payerId: string;
    amount: number;
    recipientId: string;
    payer?: Record<string, unknown> | undefined;
    recipient?: Record<string, unknown> | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    group?: Record<string, unknown> | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}>;
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export declare const PaymentPrismaCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    amount: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>>;
    conversion: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    amount: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>>;
    conversion: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    amount: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>>;
    conversion: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export declare const PaymentPrismaUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    amount: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodRecord<z.ZodString, z.ZodUnknown>]>>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>>;
    conversion: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    amount: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodRecord<z.ZodString, z.ZodUnknown>]>>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>>;
    conversion: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    amount: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodRecord<z.ZodString, z.ZodUnknown>]>>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>>;
    conversion: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * `Payment` schema for create operations excluding foreign keys and relations.
 */
export declare const PaymentCreateScalarSchema: z.ZodObject<{
    currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    id: z.ZodOptional<z.ZodString>;
    amount: z.ZodNumber;
    conversion: z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>;
}, "strict", z.ZodTypeAny, {
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
    amount: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}, {
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
    amount: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}>;
/**
 * `Payment` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export declare const PaymentCreateSchema: z.ZodObject<z.objectUtil.extendShape<{
    currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    id: z.ZodOptional<z.ZodString>;
    amount: z.ZodNumber;
    conversion: z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>;
}, {
    groupId: z.ZodString;
    recipientId: z.ZodString;
    payerId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
    groupId: string;
    payerId: string;
    amount: number;
    recipientId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}, {
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
    groupId: string;
    payerId: string;
    amount: number;
    recipientId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}>;
/**
 * `Payment` schema for update operations excluding foreign keys and relations.
 */
export declare const PaymentUpdateScalarSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    amount: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>>;
    conversion: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>>;
}, "strict", z.ZodTypeAny, {
    currency?: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    amount?: number | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}, {
    currency?: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    amount?: number | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
}>;
/**
 * `Payment` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export declare const PaymentUpdateSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    amount: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>>;
    conversion: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<{
        sourceCurrency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        sourceAmount: z.ZodNumber;
        currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR"]>;
        amount: z.ZodNumber;
        exchangeRate: z.ZodNumber;
        exchangeRatesId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }, {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    }>>>>>;
}, {
    groupId: z.ZodOptional<z.ZodString>;
    recipientId: z.ZodOptional<z.ZodString>;
    payerId: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    currency?: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    groupId?: string | undefined;
    payerId?: string | undefined;
    amount?: number | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
    recipientId?: string | undefined;
}, {
    currency?: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    groupId?: string | undefined;
    payerId?: string | undefined;
    amount?: number | undefined;
    conversion?: {
        currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        amount: number;
        sourceCurrency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR";
        sourceAmount: number;
        exchangeRate: number;
        exchangeRatesId: string;
    } | null | undefined;
    recipientId?: string | undefined;
}>;
