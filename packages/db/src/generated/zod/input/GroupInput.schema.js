"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupInputSchema = void 0;
const zod_1 = require("zod");
;
;
const GroupSelect_schema_1 = require("../objects/GroupSelect.schema");
const GroupInclude_schema_1 = require("../objects/GroupInclude.schema");
const GroupWhereUniqueInput_schema_1 = require("../objects/GroupWhereUniqueInput.schema");
const GroupWhereInput_schema_1 = require("../objects/GroupWhereInput.schema");
const GroupOrderByWithRelationInput_schema_1 = require("../objects/GroupOrderByWithRelationInput.schema");
const GroupScalarFieldEnum_schema_1 = require("../enums/GroupScalarFieldEnum.schema");
const GroupCreateInput_schema_1 = require("../objects/GroupCreateInput.schema");
const GroupUncheckedCreateInput_schema_1 = require("../objects/GroupUncheckedCreateInput.schema");
const GroupCreateManyInput_schema_1 = require("../objects/GroupCreateManyInput.schema");
const GroupUpdateInput_schema_1 = require("../objects/GroupUpdateInput.schema");
const GroupUncheckedUpdateInput_schema_1 = require("../objects/GroupUncheckedUpdateInput.schema");
const GroupUpdateManyMutationInput_schema_1 = require("../objects/GroupUpdateManyMutationInput.schema");
const GroupUncheckedUpdateManyInput_schema_1 = require("../objects/GroupUncheckedUpdateManyInput.schema");
const GroupCountAggregateInput_schema_1 = require("../objects/GroupCountAggregateInput.schema");
const GroupMinAggregateInput_schema_1 = require("../objects/GroupMinAggregateInput.schema");
const GroupMaxAggregateInput_schema_1 = require("../objects/GroupMaxAggregateInput.schema");
const GroupOrderByWithAggregationInput_schema_1 = require("../objects/GroupOrderByWithAggregationInput.schema");
const GroupScalarWhereWithAggregatesInput_schema_1 = require("../objects/GroupScalarWhereWithAggregatesInput.schema");
exports.GroupInputSchema = {
    findUnique: zod_1.z.object({
        select: zod_1.z.lazy(() => GroupSelect_schema_1.GroupSelectObjectSchema.optional()), include: zod_1.z.lazy(() => GroupInclude_schema_1.GroupIncludeObjectSchema.optional()), where: GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema
    }).strict(), findFirst: zod_1.z.object({
        select: zod_1.z.lazy(() => GroupSelect_schema_1.GroupSelectObjectSchema.optional()), include: zod_1.z.lazy(() => GroupInclude_schema_1.GroupIncludeObjectSchema.optional()), where: GroupWhereInput_schema_1.GroupWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([GroupOrderByWithRelationInput_schema_1.GroupOrderByWithRelationInputObjectSchema, GroupOrderByWithRelationInput_schema_1.GroupOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(GroupScalarFieldEnum_schema_1.GroupScalarFieldEnumSchema).optional()
    }).strict(), findMany: zod_1.z.object({
        select: zod_1.z.lazy(() => GroupSelect_schema_1.GroupSelectObjectSchema.optional()), include: zod_1.z.lazy(() => GroupInclude_schema_1.GroupIncludeObjectSchema.optional()), where: GroupWhereInput_schema_1.GroupWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([GroupOrderByWithRelationInput_schema_1.GroupOrderByWithRelationInputObjectSchema, GroupOrderByWithRelationInput_schema_1.GroupOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(GroupScalarFieldEnum_schema_1.GroupScalarFieldEnumSchema).optional()
    }).strict(), create: zod_1.z.object({
        select: zod_1.z.lazy(() => GroupSelect_schema_1.GroupSelectObjectSchema.optional()), include: zod_1.z.lazy(() => GroupInclude_schema_1.GroupIncludeObjectSchema.optional()), data: zod_1.z.union([GroupCreateInput_schema_1.GroupCreateInputObjectSchema, GroupUncheckedCreateInput_schema_1.GroupUncheckedCreateInputObjectSchema])
    }).strict(), createMany: zod_1.z.object({
        data: zod_1.z.union([GroupCreateManyInput_schema_1.GroupCreateManyInputObjectSchema, zod_1.z.array(GroupCreateManyInput_schema_1.GroupCreateManyInputObjectSchema)]), skipDuplicates: zod_1.z.boolean().optional()
    }).strict(), 'delete': zod_1.z.object({
        select: zod_1.z.lazy(() => GroupSelect_schema_1.GroupSelectObjectSchema.optional()), include: zod_1.z.lazy(() => GroupInclude_schema_1.GroupIncludeObjectSchema.optional()), where: GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema
    }).strict(), deleteMany: zod_1.z.object({
        where: GroupWhereInput_schema_1.GroupWhereInputObjectSchema.optional()
    }).strict(), update: zod_1.z.object({
        select: zod_1.z.lazy(() => GroupSelect_schema_1.GroupSelectObjectSchema.optional()), include: zod_1.z.lazy(() => GroupInclude_schema_1.GroupIncludeObjectSchema.optional()), data: zod_1.z.union([GroupUpdateInput_schema_1.GroupUpdateInputObjectSchema, GroupUncheckedUpdateInput_schema_1.GroupUncheckedUpdateInputObjectSchema]), where: GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema
    }).strict(), updateMany: zod_1.z.object({
        data: zod_1.z.union([GroupUpdateManyMutationInput_schema_1.GroupUpdateManyMutationInputObjectSchema, GroupUncheckedUpdateManyInput_schema_1.GroupUncheckedUpdateManyInputObjectSchema]), where: GroupWhereInput_schema_1.GroupWhereInputObjectSchema.optional()
    }).strict(), upsert: zod_1.z.object({
        select: zod_1.z.lazy(() => GroupSelect_schema_1.GroupSelectObjectSchema.optional()), include: zod_1.z.lazy(() => GroupInclude_schema_1.GroupIncludeObjectSchema.optional()), where: GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema, create: zod_1.z.union([GroupCreateInput_schema_1.GroupCreateInputObjectSchema, GroupUncheckedCreateInput_schema_1.GroupUncheckedCreateInputObjectSchema]), update: zod_1.z.union([GroupUpdateInput_schema_1.GroupUpdateInputObjectSchema, GroupUncheckedUpdateInput_schema_1.GroupUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: zod_1.z.object({
        where: GroupWhereInput_schema_1.GroupWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([GroupOrderByWithRelationInput_schema_1.GroupOrderByWithRelationInputObjectSchema, GroupOrderByWithRelationInput_schema_1.GroupOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), _count: zod_1.z.union([zod_1.z.literal(true), GroupCountAggregateInput_schema_1.GroupCountAggregateInputObjectSchema]).optional(), _min: GroupMinAggregateInput_schema_1.GroupMinAggregateInputObjectSchema.optional(), _max: GroupMaxAggregateInput_schema_1.GroupMaxAggregateInputObjectSchema.optional()
    }).strict(), groupBy: zod_1.z.object({
        where: GroupWhereInput_schema_1.GroupWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([GroupOrderByWithAggregationInput_schema_1.GroupOrderByWithAggregationInputObjectSchema, GroupOrderByWithAggregationInput_schema_1.GroupOrderByWithAggregationInputObjectSchema.array()]).optional(), having: GroupScalarWhereWithAggregatesInput_schema_1.GroupScalarWhereWithAggregatesInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), by: zod_1.z.array(GroupScalarFieldEnum_schema_1.GroupScalarFieldEnumSchema), _count: zod_1.z.union([zod_1.z.literal(true), GroupCountAggregateInput_schema_1.GroupCountAggregateInputObjectSchema]).optional(), _min: GroupMinAggregateInput_schema_1.GroupMinAggregateInputObjectSchema.optional(), _max: GroupMaxAggregateInput_schema_1.GroupMaxAggregateInputObjectSchema.optional()
    }).strict(), count: zod_1.z.object({
        where: GroupWhereInput_schema_1.GroupWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([GroupOrderByWithRelationInput_schema_1.GroupOrderByWithRelationInputObjectSchema, GroupOrderByWithRelationInput_schema_1.GroupOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(GroupScalarFieldEnum_schema_1.GroupScalarFieldEnumSchema).optional(), select: zod_1.z.union([zod_1.z.literal(true), GroupCountAggregateInput_schema_1.GroupCountAggregateInputObjectSchema]).optional()
    }).strict(),
};
