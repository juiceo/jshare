import { z } from 'zod';
/**
 * `MessageAttachment` schema excluding foreign keys and relations.
 */
export declare const MessageAttachmentScalarSchema: z.ZodObject<{
    id: z.ZodString;
    archived: z.ZodDefault<z.ZodBoolean>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    type: z.ZodEnum<["Expense"]>;
}, "strict", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    archived: boolean;
    type: "Expense";
}, {
    id: string;
    type: "Expense";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    archived?: boolean | undefined;
}>;
/**
 * `MessageAttachment` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export declare const MessageAttachmentSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodString;
    archived: z.ZodDefault<z.ZodBoolean>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    type: z.ZodEnum<["Expense"]>;
}, {
    messageId: z.ZodString;
    expenseId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}>, {
    message: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    expense: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    archived: boolean;
    messageId: string;
    type: "Expense";
    message?: Record<string, unknown> | undefined;
    expenseId?: string | null | undefined;
    expense?: Record<string, unknown> | undefined;
}, {
    id: string;
    messageId: string;
    type: "Expense";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    archived?: boolean | undefined;
    message?: Record<string, unknown> | undefined;
    expenseId?: string | null | undefined;
    expense?: Record<string, unknown> | undefined;
}>;
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export declare const MessageAttachmentPrismaCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    type: z.ZodOptional<z.ZodEnum<["Expense"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    type: z.ZodOptional<z.ZodEnum<["Expense"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    type: z.ZodOptional<z.ZodEnum<["Expense"]>>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export declare const MessageAttachmentPrismaUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    type: z.ZodOptional<z.ZodEnum<["Expense"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    type: z.ZodOptional<z.ZodEnum<["Expense"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    type: z.ZodOptional<z.ZodEnum<["Expense"]>>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * `MessageAttachment` schema for create operations excluding foreign keys and relations.
 */
export declare const MessageAttachmentCreateScalarSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    type: z.ZodEnum<["Expense"]>;
}, "strict", z.ZodTypeAny, {
    type: "Expense";
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    archived?: boolean | undefined;
}, {
    type: "Expense";
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    archived?: boolean | undefined;
}>;
/**
 * `MessageAttachment` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export declare const MessageAttachmentCreateSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    type: z.ZodEnum<["Expense"]>;
}, {
    messageId: z.ZodString;
    expenseId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}>, "strip", z.ZodTypeAny, {
    messageId: string;
    type: "Expense";
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    archived?: boolean | undefined;
    expenseId?: string | null | undefined;
}, {
    messageId: string;
    type: "Expense";
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    archived?: boolean | undefined;
    expenseId?: string | null | undefined;
}>;
/**
 * `MessageAttachment` schema for update operations excluding foreign keys and relations.
 */
export declare const MessageAttachmentUpdateScalarSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    type: z.ZodOptional<z.ZodEnum<["Expense"]>>;
}, "strict", z.ZodTypeAny, {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    archived?: boolean | undefined;
    type?: "Expense" | undefined;
}, {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    archived?: boolean | undefined;
    type?: "Expense" | undefined;
}>;
/**
 * `MessageAttachment` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export declare const MessageAttachmentUpdateSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    type: z.ZodOptional<z.ZodEnum<["Expense"]>>;
}, {
    messageId: z.ZodOptional<z.ZodString>;
    expenseId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}>, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    archived?: boolean | undefined;
    messageId?: string | undefined;
    type?: "Expense" | undefined;
    expenseId?: string | null | undefined;
}, {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    archived?: boolean | undefined;
    messageId?: string | undefined;
    type?: "Expense" | undefined;
    expenseId?: string | null | undefined;
}>;
