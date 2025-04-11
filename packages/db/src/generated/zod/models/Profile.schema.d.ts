import { z } from 'zod';
/**
 * `Profile` schema excluding foreign keys and relations.
 */
export declare const ProfileScalarSchema: z.ZodObject<{
    id: z.ZodString;
    archived: z.ZodDefault<z.ZodBoolean>;
    archivedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    email: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    lastActivity: z.ZodDefault<z.ZodDate>;
    currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
    temporary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    termsAcceptedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    showInSearch: z.ZodDefault<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    id: string;
    archived: boolean;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    firstName: string;
    lastName: string;
    lastActivity: Date;
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
    showInSearch: boolean;
    archivedAt?: Date | null | undefined;
    temporary?: boolean | null | undefined;
    termsAcceptedAt?: Date | null | undefined;
}, {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    lastActivity?: Date | undefined;
    temporary?: boolean | null | undefined;
    termsAcceptedAt?: Date | null | undefined;
    showInSearch?: boolean | undefined;
}>;
/**
 * `Profile` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export declare const ProfileSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodString;
    archived: z.ZodDefault<z.ZodBoolean>;
    archivedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    email: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    lastActivity: z.ZodDefault<z.ZodDate>;
    currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
    temporary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    termsAcceptedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    showInSearch: z.ZodDefault<z.ZodBoolean>;
}, {
    avatarId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}>, {
    groups: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>>;
    avatar: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    messages: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>>;
    expensesOwned: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>>;
    expensesPaid: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>>;
    expenseShares: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>>;
    paymentsReceived: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>>;
    paymentsPaid: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    archived: boolean;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    firstName: string;
    lastName: string;
    lastActivity: Date;
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
    showInSearch: boolean;
    archivedAt?: Date | null | undefined;
    groups?: unknown[] | undefined;
    avatarId?: string | null | undefined;
    avatar?: Record<string, unknown> | undefined;
    temporary?: boolean | null | undefined;
    termsAcceptedAt?: Date | null | undefined;
    messages?: unknown[] | undefined;
    expensesOwned?: unknown[] | undefined;
    expensesPaid?: unknown[] | undefined;
    expenseShares?: unknown[] | undefined;
    paymentsReceived?: unknown[] | undefined;
    paymentsPaid?: unknown[] | undefined;
}, {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    lastActivity?: Date | undefined;
    groups?: unknown[] | undefined;
    avatarId?: string | null | undefined;
    avatar?: Record<string, unknown> | undefined;
    temporary?: boolean | null | undefined;
    termsAcceptedAt?: Date | null | undefined;
    messages?: unknown[] | undefined;
    expensesOwned?: unknown[] | undefined;
    expensesPaid?: unknown[] | undefined;
    expenseShares?: unknown[] | undefined;
    paymentsReceived?: unknown[] | undefined;
    paymentsPaid?: unknown[] | undefined;
    showInSearch?: boolean | undefined;
}>;
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export declare const ProfilePrismaCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    email: z.ZodOptional<z.ZodString>;
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>>;
    temporary: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    termsAcceptedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    showInSearch: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    email: z.ZodOptional<z.ZodString>;
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>>;
    temporary: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    termsAcceptedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    showInSearch: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    email: z.ZodOptional<z.ZodString>;
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>>;
    temporary: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    termsAcceptedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    showInSearch: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export declare const ProfilePrismaUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    email: z.ZodOptional<z.ZodString>;
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>>;
    temporary: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    termsAcceptedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    showInSearch: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    email: z.ZodOptional<z.ZodString>;
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>>;
    temporary: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    termsAcceptedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    showInSearch: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    email: z.ZodOptional<z.ZodString>;
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>>;
    temporary: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    termsAcceptedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    showInSearch: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * `Profile` schema for create operations excluding foreign keys and relations.
 */
export declare const ProfileCreateScalarSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    email: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
    temporary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    termsAcceptedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    showInSearch: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, "strict", z.ZodTypeAny, {
    email: string;
    firstName: string;
    lastName: string;
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    lastActivity?: Date | undefined;
    temporary?: boolean | null | undefined;
    termsAcceptedAt?: Date | null | undefined;
    showInSearch?: boolean | undefined;
}, {
    email: string;
    firstName: string;
    lastName: string;
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    lastActivity?: Date | undefined;
    temporary?: boolean | null | undefined;
    termsAcceptedAt?: Date | null | undefined;
    showInSearch?: boolean | undefined;
}>;
/**
 * `Profile` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export declare const ProfileCreateSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    email: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    currency: z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>;
    temporary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    termsAcceptedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    showInSearch: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, {
    avatarId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}>, "strip", z.ZodTypeAny, {
    email: string;
    firstName: string;
    lastName: string;
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    lastActivity?: Date | undefined;
    avatarId?: string | null | undefined;
    temporary?: boolean | null | undefined;
    termsAcceptedAt?: Date | null | undefined;
    showInSearch?: boolean | undefined;
}, {
    email: string;
    firstName: string;
    lastName: string;
    currency: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS";
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    lastActivity?: Date | undefined;
    avatarId?: string | null | undefined;
    temporary?: boolean | null | undefined;
    termsAcceptedAt?: Date | null | undefined;
    showInSearch?: boolean | undefined;
}>;
/**
 * `Profile` schema for update operations excluding foreign keys and relations.
 */
export declare const ProfileUpdateScalarSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    email: z.ZodOptional<z.ZodString>;
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>>;
    temporary: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    termsAcceptedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    showInSearch: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, "strict", z.ZodTypeAny, {
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    lastActivity?: Date | undefined;
    currency?: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS" | undefined;
    temporary?: boolean | null | undefined;
    termsAcceptedAt?: Date | null | undefined;
    showInSearch?: boolean | undefined;
}, {
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    lastActivity?: Date | undefined;
    currency?: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS" | undefined;
    temporary?: boolean | null | undefined;
    termsAcceptedAt?: Date | null | undefined;
    showInSearch?: boolean | undefined;
}>;
/**
 * `Profile` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export declare const ProfileUpdateSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    email: z.ZodOptional<z.ZodString>;
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    lastActivity: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    currency: z.ZodOptional<z.ZodEnum<["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]>>;
    temporary: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    termsAcceptedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    showInSearch: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, {
    avatarId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}>, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    lastActivity?: Date | undefined;
    currency?: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS" | undefined;
    avatarId?: string | null | undefined;
    temporary?: boolean | null | undefined;
    termsAcceptedAt?: Date | null | undefined;
    showInSearch?: boolean | undefined;
}, {
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    lastActivity?: Date | undefined;
    currency?: "AED" | "ARS" | "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "COP" | "CZK" | "DKK" | "EGP" | "EUR" | "GBP" | "HUF" | "INR" | "KES" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "THB" | "TZS" | "USD" | "ZAR" | "KZT" | "KGS" | undefined;
    avatarId?: string | null | undefined;
    temporary?: boolean | null | undefined;
    termsAcceptedAt?: Date | null | undefined;
    showInSearch?: boolean | undefined;
}>;
