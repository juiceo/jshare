import { z } from 'zod';
/**
 * `Message` schema excluding foreign keys and relations.
 */
export declare const MessageScalarSchema: z.ZodObject<{
    id: z.ZodString;
    archived: z.ZodDefault<z.ZodBoolean>;
    archivedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    key: z.ZodString;
    text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    authorType: z.ZodEnum<["User", "System"]>;
}, "strict", z.ZodTypeAny, {
    id: string;
    archived: boolean;
    createdAt: Date;
    updatedAt: Date;
    key: string;
    authorType: "User" | "System";
    archivedAt?: Date | null | undefined;
    text?: string | null | undefined;
}, {
    id: string;
    key: string;
    authorType: "User" | "System";
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    text?: string | null | undefined;
}>;
/**
 * `Message` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export declare const MessageSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodString;
    archived: z.ZodDefault<z.ZodBoolean>;
    archivedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    key: z.ZodString;
    text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    authorType: z.ZodEnum<["User", "System"]>;
}, {
    authorId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    groupId: z.ZodString;
}>, {
    author: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    group: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    attachments: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    archived: boolean;
    createdAt: Date;
    updatedAt: Date;
    groupId: string;
    key: string;
    authorType: "User" | "System";
    archivedAt?: Date | null | undefined;
    author?: Record<string, unknown> | undefined;
    group?: Record<string, unknown> | undefined;
    text?: string | null | undefined;
    authorId?: string | null | undefined;
    attachments?: unknown[] | undefined;
}, {
    id: string;
    groupId: string;
    key: string;
    authorType: "User" | "System";
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    author?: Record<string, unknown> | undefined;
    group?: Record<string, unknown> | undefined;
    text?: string | null | undefined;
    authorId?: string | null | undefined;
    attachments?: unknown[] | undefined;
}>;
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export declare const MessagePrismaCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    key: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    authorType: z.ZodOptional<z.ZodEnum<["User", "System"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    key: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    authorType: z.ZodOptional<z.ZodEnum<["User", "System"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    key: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    authorType: z.ZodOptional<z.ZodEnum<["User", "System"]>>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export declare const MessagePrismaUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    key: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    authorType: z.ZodOptional<z.ZodEnum<["User", "System"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    key: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    authorType: z.ZodOptional<z.ZodEnum<["User", "System"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    key: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    authorType: z.ZodOptional<z.ZodEnum<["User", "System"]>>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * `Message` schema for create operations excluding foreign keys and relations.
 */
export declare const MessageCreateScalarSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    key: z.ZodString;
    text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    authorType: z.ZodEnum<["User", "System"]>;
}, "strict", z.ZodTypeAny, {
    key: string;
    authorType: "User" | "System";
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    text?: string | null | undefined;
}, {
    key: string;
    authorType: "User" | "System";
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    text?: string | null | undefined;
}>;
/**
 * `Message` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export declare const MessageCreateSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    key: z.ZodString;
    text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    authorType: z.ZodEnum<["User", "System"]>;
}, {
    authorId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    groupId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    groupId: string;
    key: string;
    authorType: "User" | "System";
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    text?: string | null | undefined;
    authorId?: string | null | undefined;
}, {
    groupId: string;
    key: string;
    authorType: "User" | "System";
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    text?: string | null | undefined;
    authorId?: string | null | undefined;
}>;
/**
 * `Message` schema for update operations excluding foreign keys and relations.
 */
export declare const MessageUpdateScalarSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    key: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    authorType: z.ZodOptional<z.ZodEnum<["User", "System"]>>;
}, "strict", z.ZodTypeAny, {
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    key?: string | undefined;
    text?: string | null | undefined;
    authorType?: "User" | "System" | undefined;
}, {
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    key?: string | undefined;
    text?: string | null | undefined;
    authorType?: "User" | "System" | undefined;
}>;
/**
 * `Message` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export declare const MessageUpdateSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    archivedAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDate>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    key: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    authorType: z.ZodOptional<z.ZodEnum<["User", "System"]>>;
}, {
    authorId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    groupId: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    groupId?: string | undefined;
    key?: string | undefined;
    text?: string | null | undefined;
    authorType?: "User" | "System" | undefined;
    authorId?: string | null | undefined;
}, {
    id?: string | undefined;
    archived?: boolean | undefined;
    archivedAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    groupId?: string | undefined;
    key?: string | undefined;
    text?: string | null | undefined;
    authorType?: "User" | "System" | undefined;
    authorId?: string | null | undefined;
}>;
