import { z } from 'zod';
/**
 * `GroupParticipant` schema excluding foreign keys and relations.
 */
export declare const GroupParticipantScalarSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    role: z.ZodEnum<["Owner", "Admin", "Member"]>;
}, "strict", z.ZodTypeAny, {
    createdAt: Date;
    updatedAt: Date;
    id: string;
    role: "Owner" | "Admin" | "Member";
}, {
    id: string;
    role: "Owner" | "Admin" | "Member";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}>;
/**
 * `GroupParticipant` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export declare const GroupParticipantSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodString;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    role: z.ZodEnum<["Owner", "Admin", "Member"]>;
}, {
    userId: z.ZodString;
    groupId: z.ZodString;
}>, {
    user: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    group: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}>, "strip", z.ZodTypeAny, {
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    id: string;
    groupId: string;
    role: "Owner" | "Admin" | "Member";
    user?: Record<string, unknown> | undefined;
    group?: Record<string, unknown> | undefined;
}, {
    userId: string;
    id: string;
    groupId: string;
    role: "Owner" | "Admin" | "Member";
    user?: Record<string, unknown> | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    group?: Record<string, unknown> | undefined;
}>;
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export declare const GroupParticipantPrismaCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    role: z.ZodOptional<z.ZodEnum<["Owner", "Admin", "Member"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    role: z.ZodOptional<z.ZodEnum<["Owner", "Admin", "Member"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    role: z.ZodOptional<z.ZodEnum<["Owner", "Admin", "Member"]>>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export declare const GroupParticipantPrismaUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    role: z.ZodOptional<z.ZodEnum<["Owner", "Admin", "Member"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    role: z.ZodOptional<z.ZodEnum<["Owner", "Admin", "Member"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    role: z.ZodOptional<z.ZodEnum<["Owner", "Admin", "Member"]>>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * `GroupParticipant` schema for create operations excluding foreign keys and relations.
 */
export declare const GroupParticipantCreateScalarSchema: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    id: z.ZodOptional<z.ZodString>;
    role: z.ZodEnum<["Owner", "Admin", "Member"]>;
}, "strict", z.ZodTypeAny, {
    role: "Owner" | "Admin" | "Member";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
}, {
    role: "Owner" | "Admin" | "Member";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
}>;
/**
 * `GroupParticipant` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export declare const GroupParticipantCreateSchema: z.ZodObject<z.objectUtil.extendShape<{
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    id: z.ZodOptional<z.ZodString>;
    role: z.ZodEnum<["Owner", "Admin", "Member"]>;
}, {
    userId: z.ZodString;
    groupId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    userId: string;
    groupId: string;
    role: "Owner" | "Admin" | "Member";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
}, {
    userId: string;
    groupId: string;
    role: "Owner" | "Admin" | "Member";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
}>;
/**
 * `GroupParticipant` schema for update operations excluding foreign keys and relations.
 */
export declare const GroupParticipantUpdateScalarSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    role: z.ZodOptional<z.ZodEnum<["Owner", "Admin", "Member"]>>;
}, "strict", z.ZodTypeAny, {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    role?: "Owner" | "Admin" | "Member" | undefined;
}, {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    role?: "Owner" | "Admin" | "Member" | undefined;
}>;
/**
 * `GroupParticipant` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export declare const GroupParticipantUpdateSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    role: z.ZodOptional<z.ZodEnum<["Owner", "Admin", "Member"]>>;
}, {
    userId: z.ZodOptional<z.ZodString>;
    groupId: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    userId?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    groupId?: string | undefined;
    role?: "Owner" | "Admin" | "Member" | undefined;
}, {
    userId?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    groupId?: string | undefined;
    role?: "Owner" | "Admin" | "Member" | undefined;
}>;
