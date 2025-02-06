"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantUpdateSchema = exports.GroupParticipantUpdateScalarSchema = exports.GroupParticipantCreateSchema = exports.GroupParticipantCreateScalarSchema = exports.GroupParticipantPrismaUpdateSchema = exports.GroupParticipantPrismaCreateSchema = exports.GroupParticipantSchema = exports.GroupParticipantScalarSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const Role_schema_1 = require("../enums/Role.schema");
const InviteType_schema_1 = require("../enums/InviteType.schema");
const baseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    archived: zod_1.z.boolean().nullish(),
    createdAt: zod_1.z.coerce.date().default(() => new Date()),
    updatedAt: zod_1.z.coerce.date().default(() => new Date()),
    role: Role_schema_1.RoleSchema,
    invitedById: zod_1.z.string().nullish(),
    inviteType: InviteType_schema_1.InviteTypeSchema.nullish(),
}).strict();
const relationSchema = zod_1.z.object({
    user: zod_1.z.record(zod_1.z.unknown()),
    group: zod_1.z.record(zod_1.z.unknown()),
});
const fkSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    groupId: zod_1.z.string(),
});
/**
 * `GroupParticipant` schema excluding foreign keys and relations.
 */
exports.GroupParticipantScalarSchema = baseSchema;
/**
 * `GroupParticipant` schema including all fields (scalar, foreign key, and relations) and validations.
 */
exports.GroupParticipantSchema = exports.GroupParticipantScalarSchema.merge(fkSchema).merge(relationSchema.partial());
/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
exports.GroupParticipantPrismaCreateSchema = baseSchema.partial().passthrough();
/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
exports.GroupParticipantPrismaUpdateSchema = zod_1.z.object({
    id: zod_1.z.string(),
    archived: zod_1.z.boolean().nullish(),
    createdAt: zod_1.z.coerce.date().default(() => new Date()),
    updatedAt: zod_1.z.coerce.date().default(() => new Date()),
    role: Role_schema_1.RoleSchema,
    invitedById: zod_1.z.string().nullish(),
    inviteType: InviteType_schema_1.InviteTypeSchema.nullish()
}).partial().passthrough();
/**
 * `GroupParticipant` schema for create operations excluding foreign keys and relations.
 */
exports.GroupParticipantCreateScalarSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true
});
/**
 * `GroupParticipant` schema for create operations including scalar fields, foreign key fields, and validations.
 */
exports.GroupParticipantCreateSchema = exports.GroupParticipantCreateScalarSchema.merge(fkSchema);
/**
 * `GroupParticipant` schema for update operations excluding foreign keys and relations.
 */
exports.GroupParticipantUpdateScalarSchema = baseSchema.partial();
/**
 * `GroupParticipant` schema for update operations including scalar fields, foreign key fields, and validations.
 */
exports.GroupParticipantUpdateSchema = exports.GroupParticipantUpdateScalarSchema.merge(fkSchema.partial());
