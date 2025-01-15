"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantInputSchema = void 0;
const zod_1 = require("zod");
;
;
const GroupParticipantSelect_schema_1 = require("../objects/GroupParticipantSelect.schema");
const GroupParticipantInclude_schema_1 = require("../objects/GroupParticipantInclude.schema");
const GroupParticipantWhereUniqueInput_schema_1 = require("../objects/GroupParticipantWhereUniqueInput.schema");
const GroupParticipantWhereInput_schema_1 = require("../objects/GroupParticipantWhereInput.schema");
const GroupParticipantOrderByWithRelationInput_schema_1 = require("../objects/GroupParticipantOrderByWithRelationInput.schema");
const GroupParticipantScalarFieldEnum_schema_1 = require("../enums/GroupParticipantScalarFieldEnum.schema");
const GroupParticipantCreateInput_schema_1 = require("../objects/GroupParticipantCreateInput.schema");
const GroupParticipantUncheckedCreateInput_schema_1 = require("../objects/GroupParticipantUncheckedCreateInput.schema");
const GroupParticipantCreateManyInput_schema_1 = require("../objects/GroupParticipantCreateManyInput.schema");
const GroupParticipantUpdateInput_schema_1 = require("../objects/GroupParticipantUpdateInput.schema");
const GroupParticipantUncheckedUpdateInput_schema_1 = require("../objects/GroupParticipantUncheckedUpdateInput.schema");
const GroupParticipantUpdateManyMutationInput_schema_1 = require("../objects/GroupParticipantUpdateManyMutationInput.schema");
const GroupParticipantUncheckedUpdateManyInput_schema_1 = require("../objects/GroupParticipantUncheckedUpdateManyInput.schema");
const GroupParticipantCountAggregateInput_schema_1 = require("../objects/GroupParticipantCountAggregateInput.schema");
const GroupParticipantMinAggregateInput_schema_1 = require("../objects/GroupParticipantMinAggregateInput.schema");
const GroupParticipantMaxAggregateInput_schema_1 = require("../objects/GroupParticipantMaxAggregateInput.schema");
const GroupParticipantOrderByWithAggregationInput_schema_1 = require("../objects/GroupParticipantOrderByWithAggregationInput.schema");
const GroupParticipantScalarWhereWithAggregatesInput_schema_1 = require("../objects/GroupParticipantScalarWhereWithAggregatesInput.schema");
exports.GroupParticipantInputSchema = {
    findUnique: zod_1.z.object({
        select: zod_1.z.lazy(() => GroupParticipantSelect_schema_1.GroupParticipantSelectObjectSchema.optional()), include: zod_1.z.lazy(() => GroupParticipantInclude_schema_1.GroupParticipantIncludeObjectSchema.optional()), where: GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema
    }).strict(), findFirst: zod_1.z.object({
        select: zod_1.z.lazy(() => GroupParticipantSelect_schema_1.GroupParticipantSelectObjectSchema.optional()), include: zod_1.z.lazy(() => GroupParticipantInclude_schema_1.GroupParticipantIncludeObjectSchema.optional()), where: GroupParticipantWhereInput_schema_1.GroupParticipantWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([GroupParticipantOrderByWithRelationInput_schema_1.GroupParticipantOrderByWithRelationInputObjectSchema, GroupParticipantOrderByWithRelationInput_schema_1.GroupParticipantOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(GroupParticipantScalarFieldEnum_schema_1.GroupParticipantScalarFieldEnumSchema).optional()
    }).strict(), findMany: zod_1.z.object({
        select: zod_1.z.lazy(() => GroupParticipantSelect_schema_1.GroupParticipantSelectObjectSchema.optional()), include: zod_1.z.lazy(() => GroupParticipantInclude_schema_1.GroupParticipantIncludeObjectSchema.optional()), where: GroupParticipantWhereInput_schema_1.GroupParticipantWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([GroupParticipantOrderByWithRelationInput_schema_1.GroupParticipantOrderByWithRelationInputObjectSchema, GroupParticipantOrderByWithRelationInput_schema_1.GroupParticipantOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(GroupParticipantScalarFieldEnum_schema_1.GroupParticipantScalarFieldEnumSchema).optional()
    }).strict(), create: zod_1.z.object({
        select: zod_1.z.lazy(() => GroupParticipantSelect_schema_1.GroupParticipantSelectObjectSchema.optional()), include: zod_1.z.lazy(() => GroupParticipantInclude_schema_1.GroupParticipantIncludeObjectSchema.optional()), data: zod_1.z.union([GroupParticipantCreateInput_schema_1.GroupParticipantCreateInputObjectSchema, GroupParticipantUncheckedCreateInput_schema_1.GroupParticipantUncheckedCreateInputObjectSchema])
    }).strict(), createMany: zod_1.z.object({
        data: zod_1.z.union([GroupParticipantCreateManyInput_schema_1.GroupParticipantCreateManyInputObjectSchema, zod_1.z.array(GroupParticipantCreateManyInput_schema_1.GroupParticipantCreateManyInputObjectSchema)]), skipDuplicates: zod_1.z.boolean().optional()
    }).strict(), 'delete': zod_1.z.object({
        select: zod_1.z.lazy(() => GroupParticipantSelect_schema_1.GroupParticipantSelectObjectSchema.optional()), include: zod_1.z.lazy(() => GroupParticipantInclude_schema_1.GroupParticipantIncludeObjectSchema.optional()), where: GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema
    }).strict(), deleteMany: zod_1.z.object({
        where: GroupParticipantWhereInput_schema_1.GroupParticipantWhereInputObjectSchema.optional()
    }).strict(), update: zod_1.z.object({
        select: zod_1.z.lazy(() => GroupParticipantSelect_schema_1.GroupParticipantSelectObjectSchema.optional()), include: zod_1.z.lazy(() => GroupParticipantInclude_schema_1.GroupParticipantIncludeObjectSchema.optional()), data: zod_1.z.union([GroupParticipantUpdateInput_schema_1.GroupParticipantUpdateInputObjectSchema, GroupParticipantUncheckedUpdateInput_schema_1.GroupParticipantUncheckedUpdateInputObjectSchema]), where: GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema
    }).strict(), updateMany: zod_1.z.object({
        data: zod_1.z.union([GroupParticipantUpdateManyMutationInput_schema_1.GroupParticipantUpdateManyMutationInputObjectSchema, GroupParticipantUncheckedUpdateManyInput_schema_1.GroupParticipantUncheckedUpdateManyInputObjectSchema]), where: GroupParticipantWhereInput_schema_1.GroupParticipantWhereInputObjectSchema.optional()
    }).strict(), upsert: zod_1.z.object({
        select: zod_1.z.lazy(() => GroupParticipantSelect_schema_1.GroupParticipantSelectObjectSchema.optional()), include: zod_1.z.lazy(() => GroupParticipantInclude_schema_1.GroupParticipantIncludeObjectSchema.optional()), where: GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema, create: zod_1.z.union([GroupParticipantCreateInput_schema_1.GroupParticipantCreateInputObjectSchema, GroupParticipantUncheckedCreateInput_schema_1.GroupParticipantUncheckedCreateInputObjectSchema]), update: zod_1.z.union([GroupParticipantUpdateInput_schema_1.GroupParticipantUpdateInputObjectSchema, GroupParticipantUncheckedUpdateInput_schema_1.GroupParticipantUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: zod_1.z.object({
        where: GroupParticipantWhereInput_schema_1.GroupParticipantWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([GroupParticipantOrderByWithRelationInput_schema_1.GroupParticipantOrderByWithRelationInputObjectSchema, GroupParticipantOrderByWithRelationInput_schema_1.GroupParticipantOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), _count: zod_1.z.union([zod_1.z.literal(true), GroupParticipantCountAggregateInput_schema_1.GroupParticipantCountAggregateInputObjectSchema]).optional(), _min: GroupParticipantMinAggregateInput_schema_1.GroupParticipantMinAggregateInputObjectSchema.optional(), _max: GroupParticipantMaxAggregateInput_schema_1.GroupParticipantMaxAggregateInputObjectSchema.optional()
    }).strict(), groupBy: zod_1.z.object({
        where: GroupParticipantWhereInput_schema_1.GroupParticipantWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([GroupParticipantOrderByWithAggregationInput_schema_1.GroupParticipantOrderByWithAggregationInputObjectSchema, GroupParticipantOrderByWithAggregationInput_schema_1.GroupParticipantOrderByWithAggregationInputObjectSchema.array()]).optional(), having: GroupParticipantScalarWhereWithAggregatesInput_schema_1.GroupParticipantScalarWhereWithAggregatesInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), by: zod_1.z.array(GroupParticipantScalarFieldEnum_schema_1.GroupParticipantScalarFieldEnumSchema), _count: zod_1.z.union([zod_1.z.literal(true), GroupParticipantCountAggregateInput_schema_1.GroupParticipantCountAggregateInputObjectSchema]).optional(), _min: GroupParticipantMinAggregateInput_schema_1.GroupParticipantMinAggregateInputObjectSchema.optional(), _max: GroupParticipantMaxAggregateInput_schema_1.GroupParticipantMaxAggregateInputObjectSchema.optional()
    }).strict(), count: zod_1.z.object({
        where: GroupParticipantWhereInput_schema_1.GroupParticipantWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([GroupParticipantOrderByWithRelationInput_schema_1.GroupParticipantOrderByWithRelationInputObjectSchema, GroupParticipantOrderByWithRelationInput_schema_1.GroupParticipantOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(GroupParticipantScalarFieldEnum_schema_1.GroupParticipantScalarFieldEnumSchema).optional(), select: zod_1.z.union([zod_1.z.literal(true), GroupParticipantCountAggregateInput_schema_1.GroupParticipantCountAggregateInputObjectSchema]).optional()
    }).strict(),
};
