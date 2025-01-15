"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileInputSchema = void 0;
const zod_1 = require("zod");
;
;
const ProfileSelect_schema_1 = require("../objects/ProfileSelect.schema");
const ProfileInclude_schema_1 = require("../objects/ProfileInclude.schema");
const ProfileWhereUniqueInput_schema_1 = require("../objects/ProfileWhereUniqueInput.schema");
const ProfileWhereInput_schema_1 = require("../objects/ProfileWhereInput.schema");
const ProfileOrderByWithRelationInput_schema_1 = require("../objects/ProfileOrderByWithRelationInput.schema");
const ProfileScalarFieldEnum_schema_1 = require("../enums/ProfileScalarFieldEnum.schema");
const ProfileCreateInput_schema_1 = require("../objects/ProfileCreateInput.schema");
const ProfileUncheckedCreateInput_schema_1 = require("../objects/ProfileUncheckedCreateInput.schema");
const ProfileCreateManyInput_schema_1 = require("../objects/ProfileCreateManyInput.schema");
const ProfileUpdateInput_schema_1 = require("../objects/ProfileUpdateInput.schema");
const ProfileUncheckedUpdateInput_schema_1 = require("../objects/ProfileUncheckedUpdateInput.schema");
const ProfileUpdateManyMutationInput_schema_1 = require("../objects/ProfileUpdateManyMutationInput.schema");
const ProfileUncheckedUpdateManyInput_schema_1 = require("../objects/ProfileUncheckedUpdateManyInput.schema");
const ProfileCountAggregateInput_schema_1 = require("../objects/ProfileCountAggregateInput.schema");
const ProfileMinAggregateInput_schema_1 = require("../objects/ProfileMinAggregateInput.schema");
const ProfileMaxAggregateInput_schema_1 = require("../objects/ProfileMaxAggregateInput.schema");
const ProfileOrderByWithAggregationInput_schema_1 = require("../objects/ProfileOrderByWithAggregationInput.schema");
const ProfileScalarWhereWithAggregatesInput_schema_1 = require("../objects/ProfileScalarWhereWithAggregatesInput.schema");
exports.ProfileInputSchema = {
    findUnique: zod_1.z.object({
        select: zod_1.z.lazy(() => ProfileSelect_schema_1.ProfileSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ProfileInclude_schema_1.ProfileIncludeObjectSchema.optional()), where: ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema
    }).strict(), findFirst: zod_1.z.object({
        select: zod_1.z.lazy(() => ProfileSelect_schema_1.ProfileSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ProfileInclude_schema_1.ProfileIncludeObjectSchema.optional()), where: ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ProfileOrderByWithRelationInput_schema_1.ProfileOrderByWithRelationInputObjectSchema, ProfileOrderByWithRelationInput_schema_1.ProfileOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(ProfileScalarFieldEnum_schema_1.ProfileScalarFieldEnumSchema).optional()
    }).strict(), findMany: zod_1.z.object({
        select: zod_1.z.lazy(() => ProfileSelect_schema_1.ProfileSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ProfileInclude_schema_1.ProfileIncludeObjectSchema.optional()), where: ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ProfileOrderByWithRelationInput_schema_1.ProfileOrderByWithRelationInputObjectSchema, ProfileOrderByWithRelationInput_schema_1.ProfileOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(ProfileScalarFieldEnum_schema_1.ProfileScalarFieldEnumSchema).optional()
    }).strict(), create: zod_1.z.object({
        select: zod_1.z.lazy(() => ProfileSelect_schema_1.ProfileSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ProfileInclude_schema_1.ProfileIncludeObjectSchema.optional()), data: zod_1.z.union([ProfileCreateInput_schema_1.ProfileCreateInputObjectSchema, ProfileUncheckedCreateInput_schema_1.ProfileUncheckedCreateInputObjectSchema])
    }).strict(), createMany: zod_1.z.object({
        data: zod_1.z.union([ProfileCreateManyInput_schema_1.ProfileCreateManyInputObjectSchema, zod_1.z.array(ProfileCreateManyInput_schema_1.ProfileCreateManyInputObjectSchema)]), skipDuplicates: zod_1.z.boolean().optional()
    }).strict(), 'delete': zod_1.z.object({
        select: zod_1.z.lazy(() => ProfileSelect_schema_1.ProfileSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ProfileInclude_schema_1.ProfileIncludeObjectSchema.optional()), where: ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema
    }).strict(), deleteMany: zod_1.z.object({
        where: ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema.optional()
    }).strict(), update: zod_1.z.object({
        select: zod_1.z.lazy(() => ProfileSelect_schema_1.ProfileSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ProfileInclude_schema_1.ProfileIncludeObjectSchema.optional()), data: zod_1.z.union([ProfileUpdateInput_schema_1.ProfileUpdateInputObjectSchema, ProfileUncheckedUpdateInput_schema_1.ProfileUncheckedUpdateInputObjectSchema]), where: ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema
    }).strict(), updateMany: zod_1.z.object({
        data: zod_1.z.union([ProfileUpdateManyMutationInput_schema_1.ProfileUpdateManyMutationInputObjectSchema, ProfileUncheckedUpdateManyInput_schema_1.ProfileUncheckedUpdateManyInputObjectSchema]), where: ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema.optional()
    }).strict(), upsert: zod_1.z.object({
        select: zod_1.z.lazy(() => ProfileSelect_schema_1.ProfileSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ProfileInclude_schema_1.ProfileIncludeObjectSchema.optional()), where: ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema, create: zod_1.z.union([ProfileCreateInput_schema_1.ProfileCreateInputObjectSchema, ProfileUncheckedCreateInput_schema_1.ProfileUncheckedCreateInputObjectSchema]), update: zod_1.z.union([ProfileUpdateInput_schema_1.ProfileUpdateInputObjectSchema, ProfileUncheckedUpdateInput_schema_1.ProfileUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: zod_1.z.object({
        where: ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ProfileOrderByWithRelationInput_schema_1.ProfileOrderByWithRelationInputObjectSchema, ProfileOrderByWithRelationInput_schema_1.ProfileOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), _count: zod_1.z.union([zod_1.z.literal(true), ProfileCountAggregateInput_schema_1.ProfileCountAggregateInputObjectSchema]).optional(), _min: ProfileMinAggregateInput_schema_1.ProfileMinAggregateInputObjectSchema.optional(), _max: ProfileMaxAggregateInput_schema_1.ProfileMaxAggregateInputObjectSchema.optional()
    }).strict(), groupBy: zod_1.z.object({
        where: ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ProfileOrderByWithAggregationInput_schema_1.ProfileOrderByWithAggregationInputObjectSchema, ProfileOrderByWithAggregationInput_schema_1.ProfileOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ProfileScalarWhereWithAggregatesInput_schema_1.ProfileScalarWhereWithAggregatesInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), by: zod_1.z.array(ProfileScalarFieldEnum_schema_1.ProfileScalarFieldEnumSchema), _count: zod_1.z.union([zod_1.z.literal(true), ProfileCountAggregateInput_schema_1.ProfileCountAggregateInputObjectSchema]).optional(), _min: ProfileMinAggregateInput_schema_1.ProfileMinAggregateInputObjectSchema.optional(), _max: ProfileMaxAggregateInput_schema_1.ProfileMaxAggregateInputObjectSchema.optional()
    }).strict(), count: zod_1.z.object({
        where: ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ProfileOrderByWithRelationInput_schema_1.ProfileOrderByWithRelationInputObjectSchema, ProfileOrderByWithRelationInput_schema_1.ProfileOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(ProfileScalarFieldEnum_schema_1.ProfileScalarFieldEnumSchema).optional(), select: zod_1.z.union([zod_1.z.literal(true), ProfileCountAggregateInput_schema_1.ProfileCountAggregateInputObjectSchema]).optional()
    }).strict(),
};
