import { z } from 'zod';
/**
 * `Group` schema excluding foreign keys and relations.
 */
export declare const GroupScalarSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    name: z.ZodString;
    currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT"]>;
    inviteCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastActivity: z.ZodDefault<z.ZodDate>;
}, "strict", z.ZodTypeAny, {
    lastActivity: Date;
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT";
    name: string;
    createdAt: Date;
    updatedAt: Date;
    id: string;
    inviteCode?: string | null | undefined;
}, {
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT";
    name: string;
    id: string;
    lastActivity?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    inviteCode?: string | null | undefined;
}>;
/**
 * `Group` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export declare const GroupSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodString;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    name: z.ZodString;
    currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT"]>;
    inviteCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastActivity: z.ZodDefault<z.ZodDate>;
}, {
    coverImageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}>, {
    participants: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>>;
    coverImage: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    messages: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>>;
    expenses: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>>;
    payments: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>>;
}>, "strip", z.ZodTypeAny, {
    lastActivity: Date;
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT";
    name: string;
    createdAt: Date;
    updatedAt: Date;
    id: string;
    messages?: unknown[] | undefined;
    participants?: unknown[] | undefined;
    coverImageId?: string | null | undefined;
    coverImage?: Record<string, unknown> | undefined;
    inviteCode?: string | null | undefined;
    expenses?: unknown[] | undefined;
    payments?: unknown[] | undefined;
}, {
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT";
    name: string;
    id: string;
    lastActivity?: Date | undefined;
    messages?: unknown[] | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    participants?: unknown[] | undefined;
    coverImageId?: string | null | undefined;
    coverImage?: Record<string, unknown> | undefined;
    inviteCode?: string | null | undefined;
    expenses?: unknown[] | undefined;
    payments?: unknown[] | undefined;
}>;
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export declare const GroupPrismaCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    name: z.ZodOptional<z.ZodString>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT"]>>;
    inviteCode: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    name: z.ZodOptional<z.ZodString>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT"]>>;
    inviteCode: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    name: z.ZodOptional<z.ZodString>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT"]>>;
    inviteCode: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export declare const GroupPrismaUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    name: z.ZodOptional<z.ZodString>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT"]>>;
    inviteCode: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    name: z.ZodOptional<z.ZodString>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT"]>>;
    inviteCode: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    name: z.ZodOptional<z.ZodString>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT"]>>;
    inviteCode: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * `Group` schema for create operations excluding foreign keys and relations.
 */
export declare const GroupCreateScalarSchema: z.ZodObject<{
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT"]>;
    name: z.ZodString;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    id: z.ZodOptional<z.ZodString>;
    inviteCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strict", z.ZodTypeAny, {
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT";
    name: string;
    lastActivity?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    inviteCode?: string | null | undefined;
}, {
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT";
    name: string;
    lastActivity?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    inviteCode?: string | null | undefined;
}>;
/**
 * `Group` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export declare const GroupCreateSchema: z.ZodObject<z.objectUtil.extendShape<{
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT"]>;
    name: z.ZodString;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    id: z.ZodOptional<z.ZodString>;
    inviteCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, {
    coverImageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}>, "strip", z.ZodTypeAny, {
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT";
    name: string;
    lastActivity?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    coverImageId?: string | null | undefined;
    inviteCode?: string | null | undefined;
}, {
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT";
    name: string;
    lastActivity?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    coverImageId?: string | null | undefined;
    inviteCode?: string | null | undefined;
}>;
/**
 * `Group` schema for update operations excluding foreign keys and relations.
 */
export declare const GroupUpdateScalarSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    name: z.ZodOptional<z.ZodString>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT"]>>;
    inviteCode: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
}, "strict", z.ZodTypeAny, {
    lastActivity?: Date | undefined;
    currency?: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | undefined;
    name?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    inviteCode?: string | null | undefined;
}, {
    lastActivity?: Date | undefined;
    currency?: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | undefined;
    name?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    inviteCode?: string | null | undefined;
}>;
/**
 * `Group` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export declare const GroupUpdateSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    name: z.ZodOptional<z.ZodString>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT"]>>;
    inviteCode: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
}, {
    coverImageId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}>, "strip", z.ZodTypeAny, {
    lastActivity?: Date | undefined;
    currency?: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | undefined;
    name?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    coverImageId?: string | null | undefined;
    inviteCode?: string | null | undefined;
}, {
    lastActivity?: Date | undefined;
    currency?: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | undefined;
    name?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    coverImageId?: string | null | undefined;
    inviteCode?: string | null | undefined;
}>;
