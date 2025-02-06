import { z } from 'zod';
/**
 * `GroupParticipant` schema excluding foreign keys and relations.
 */
export declare const GroupParticipantScalarSchema: z.ZodObject<{
    id: z.ZodString;
    archived: z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    role: z.ZodEnum<["Owner", "Admin", "Member"]>;
    invitedById: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    inviteType: z.ZodOptional<z.ZodNullable<z.ZodEnum<["Code", "Invite"]>>>;
}, "strict", z.ZodTypeAny, {
    createdAt: Date;
    updatedAt: Date;
    id: string;
    role: "Owner" | "Admin" | "Member";
    archived?: boolean | null | undefined;
    invitedById?: string | null | undefined;
    inviteType?: "Code" | "Invite" | null | undefined;
}, {
    id: string;
    role: "Owner" | "Admin" | "Member";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    archived?: boolean | null | undefined;
    invitedById?: string | null | undefined;
    inviteType?: "Code" | "Invite" | null | undefined;
}>;
/**
 * `GroupParticipant` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export declare const GroupParticipantSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodString;
    archived: z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    role: z.ZodEnum<["Owner", "Admin", "Member"]>;
    invitedById: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    inviteType: z.ZodOptional<z.ZodNullable<z.ZodEnum<["Code", "Invite"]>>>;
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
    archived?: boolean | null | undefined;
    group?: Record<string, unknown> | undefined;
    invitedById?: string | null | undefined;
    inviteType?: "Code" | "Invite" | null | undefined;
}, {
    userId: string;
    id: string;
    groupId: string;
    role: "Owner" | "Admin" | "Member";
    user?: Record<string, unknown> | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    archived?: boolean | null | undefined;
    group?: Record<string, unknown> | undefined;
    invitedById?: string | null | undefined;
    inviteType?: "Code" | "Invite" | null | undefined;
}>;
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export declare const GroupParticipantPrismaCreateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    role: z.ZodOptional<z.ZodEnum<["Owner", "Admin", "Member"]>>;
    invitedById: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    inviteType: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<["Code", "Invite"]>>>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    role: z.ZodOptional<z.ZodEnum<["Owner", "Admin", "Member"]>>;
    invitedById: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    inviteType: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<["Code", "Invite"]>>>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    role: z.ZodOptional<z.ZodEnum<["Owner", "Admin", "Member"]>>;
    invitedById: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    inviteType: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<["Code", "Invite"]>>>>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export declare const GroupParticipantPrismaUpdateSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    role: z.ZodOptional<z.ZodEnum<["Owner", "Admin", "Member"]>>;
    invitedById: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    inviteType: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<["Code", "Invite"]>>>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    role: z.ZodOptional<z.ZodEnum<["Owner", "Admin", "Member"]>>;
    invitedById: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    inviteType: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<["Code", "Invite"]>>>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    role: z.ZodOptional<z.ZodEnum<["Owner", "Admin", "Member"]>>;
    invitedById: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    inviteType: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<["Code", "Invite"]>>>>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * `GroupParticipant` schema for create operations excluding foreign keys and relations.
 */
export declare const GroupParticipantCreateScalarSchema: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    role: z.ZodEnum<["Owner", "Admin", "Member"]>;
    invitedById: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    inviteType: z.ZodOptional<z.ZodNullable<z.ZodEnum<["Code", "Invite"]>>>;
}, "strict", z.ZodTypeAny, {
    role: "Owner" | "Admin" | "Member";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    archived?: boolean | null | undefined;
    invitedById?: string | null | undefined;
    inviteType?: "Code" | "Invite" | null | undefined;
}, {
    role: "Owner" | "Admin" | "Member";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    archived?: boolean | null | undefined;
    invitedById?: string | null | undefined;
    inviteType?: "Code" | "Invite" | null | undefined;
}>;
/**
 * `GroupParticipant` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export declare const GroupParticipantCreateSchema: z.ZodObject<z.objectUtil.extendShape<{
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    role: z.ZodEnum<["Owner", "Admin", "Member"]>;
    invitedById: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    inviteType: z.ZodOptional<z.ZodNullable<z.ZodEnum<["Code", "Invite"]>>>;
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
    archived?: boolean | null | undefined;
    invitedById?: string | null | undefined;
    inviteType?: "Code" | "Invite" | null | undefined;
}, {
    userId: string;
    groupId: string;
    role: "Owner" | "Admin" | "Member";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    archived?: boolean | null | undefined;
    invitedById?: string | null | undefined;
    inviteType?: "Code" | "Invite" | null | undefined;
}>;
/**
 * `GroupParticipant` schema for update operations excluding foreign keys and relations.
 */
export declare const GroupParticipantUpdateScalarSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    role: z.ZodOptional<z.ZodEnum<["Owner", "Admin", "Member"]>>;
    invitedById: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    inviteType: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<["Code", "Invite"]>>>>;
}, "strict", z.ZodTypeAny, {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    archived?: boolean | null | undefined;
    role?: "Owner" | "Admin" | "Member" | undefined;
    invitedById?: string | null | undefined;
    inviteType?: "Code" | "Invite" | null | undefined;
}, {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    archived?: boolean | null | undefined;
    role?: "Owner" | "Admin" | "Member" | undefined;
    invitedById?: string | null | undefined;
    inviteType?: "Code" | "Invite" | null | undefined;
}>;
/**
 * `GroupParticipant` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export declare const GroupParticipantUpdateSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodDefault<z.ZodBoolean>>>>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    role: z.ZodOptional<z.ZodEnum<["Owner", "Admin", "Member"]>>;
    invitedById: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    inviteType: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<["Code", "Invite"]>>>>;
}, {
    userId: z.ZodOptional<z.ZodString>;
    groupId: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    userId?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    archived?: boolean | null | undefined;
    groupId?: string | undefined;
    role?: "Owner" | "Admin" | "Member" | undefined;
    invitedById?: string | null | undefined;
    inviteType?: "Code" | "Invite" | null | undefined;
}, {
    userId?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    id?: string | undefined;
    archived?: boolean | null | undefined;
    groupId?: string | undefined;
    role?: "Owner" | "Admin" | "Member" | undefined;
    invitedById?: string | null | undefined;
    inviteType?: "Code" | "Invite" | null | undefined;
}>;
