"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareInputSchema = void 0;
const zod_1 = require("zod");
;
;
const ExpenseShareSelect_schema_1 = require("../objects/ExpenseShareSelect.schema");
const ExpenseShareInclude_schema_1 = require("../objects/ExpenseShareInclude.schema");
const ExpenseShareWhereUniqueInput_schema_1 = require("../objects/ExpenseShareWhereUniqueInput.schema");
const ExpenseShareWhereInput_schema_1 = require("../objects/ExpenseShareWhereInput.schema");
const ExpenseShareOrderByWithRelationInput_schema_1 = require("../objects/ExpenseShareOrderByWithRelationInput.schema");
const ExpenseShareScalarFieldEnum_schema_1 = require("../enums/ExpenseShareScalarFieldEnum.schema");
const ExpenseShareCreateInput_schema_1 = require("../objects/ExpenseShareCreateInput.schema");
const ExpenseShareUncheckedCreateInput_schema_1 = require("../objects/ExpenseShareUncheckedCreateInput.schema");
const ExpenseShareCreateManyInput_schema_1 = require("../objects/ExpenseShareCreateManyInput.schema");
const ExpenseShareUpdateInput_schema_1 = require("../objects/ExpenseShareUpdateInput.schema");
const ExpenseShareUncheckedUpdateInput_schema_1 = require("../objects/ExpenseShareUncheckedUpdateInput.schema");
const ExpenseShareUpdateManyMutationInput_schema_1 = require("../objects/ExpenseShareUpdateManyMutationInput.schema");
const ExpenseShareUncheckedUpdateManyInput_schema_1 = require("../objects/ExpenseShareUncheckedUpdateManyInput.schema");
const ExpenseShareCountAggregateInput_schema_1 = require("../objects/ExpenseShareCountAggregateInput.schema");
const ExpenseShareMinAggregateInput_schema_1 = require("../objects/ExpenseShareMinAggregateInput.schema");
const ExpenseShareMaxAggregateInput_schema_1 = require("../objects/ExpenseShareMaxAggregateInput.schema");
const ExpenseShareAvgAggregateInput_schema_1 = require("../objects/ExpenseShareAvgAggregateInput.schema");
const ExpenseShareSumAggregateInput_schema_1 = require("../objects/ExpenseShareSumAggregateInput.schema");
const ExpenseShareOrderByWithAggregationInput_schema_1 = require("../objects/ExpenseShareOrderByWithAggregationInput.schema");
const ExpenseShareScalarWhereWithAggregatesInput_schema_1 = require("../objects/ExpenseShareScalarWhereWithAggregatesInput.schema");
exports.ExpenseShareInputSchema = {
    findUnique: zod_1.z.object({
        select: zod_1.z.lazy(() => ExpenseShareSelect_schema_1.ExpenseShareSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ExpenseShareInclude_schema_1.ExpenseShareIncludeObjectSchema.optional()), where: ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema
    }).strict(), findFirst: zod_1.z.object({
        select: zod_1.z.lazy(() => ExpenseShareSelect_schema_1.ExpenseShareSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ExpenseShareInclude_schema_1.ExpenseShareIncludeObjectSchema.optional()), where: ExpenseShareWhereInput_schema_1.ExpenseShareWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ExpenseShareOrderByWithRelationInput_schema_1.ExpenseShareOrderByWithRelationInputObjectSchema, ExpenseShareOrderByWithRelationInput_schema_1.ExpenseShareOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(ExpenseShareScalarFieldEnum_schema_1.ExpenseShareScalarFieldEnumSchema).optional()
    }).strict(), findMany: zod_1.z.object({
        select: zod_1.z.lazy(() => ExpenseShareSelect_schema_1.ExpenseShareSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ExpenseShareInclude_schema_1.ExpenseShareIncludeObjectSchema.optional()), where: ExpenseShareWhereInput_schema_1.ExpenseShareWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ExpenseShareOrderByWithRelationInput_schema_1.ExpenseShareOrderByWithRelationInputObjectSchema, ExpenseShareOrderByWithRelationInput_schema_1.ExpenseShareOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(ExpenseShareScalarFieldEnum_schema_1.ExpenseShareScalarFieldEnumSchema).optional()
    }).strict(), create: zod_1.z.object({
        select: zod_1.z.lazy(() => ExpenseShareSelect_schema_1.ExpenseShareSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ExpenseShareInclude_schema_1.ExpenseShareIncludeObjectSchema.optional()), data: zod_1.z.union([ExpenseShareCreateInput_schema_1.ExpenseShareCreateInputObjectSchema, ExpenseShareUncheckedCreateInput_schema_1.ExpenseShareUncheckedCreateInputObjectSchema])
    }).strict(), createMany: zod_1.z.object({
        data: zod_1.z.union([ExpenseShareCreateManyInput_schema_1.ExpenseShareCreateManyInputObjectSchema, zod_1.z.array(ExpenseShareCreateManyInput_schema_1.ExpenseShareCreateManyInputObjectSchema)]), skipDuplicates: zod_1.z.boolean().optional()
    }).strict(), 'delete': zod_1.z.object({
        select: zod_1.z.lazy(() => ExpenseShareSelect_schema_1.ExpenseShareSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ExpenseShareInclude_schema_1.ExpenseShareIncludeObjectSchema.optional()), where: ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema
    }).strict(), deleteMany: zod_1.z.object({
        where: ExpenseShareWhereInput_schema_1.ExpenseShareWhereInputObjectSchema.optional()
    }).strict(), update: zod_1.z.object({
        select: zod_1.z.lazy(() => ExpenseShareSelect_schema_1.ExpenseShareSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ExpenseShareInclude_schema_1.ExpenseShareIncludeObjectSchema.optional()), data: zod_1.z.union([ExpenseShareUpdateInput_schema_1.ExpenseShareUpdateInputObjectSchema, ExpenseShareUncheckedUpdateInput_schema_1.ExpenseShareUncheckedUpdateInputObjectSchema]), where: ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema
    }).strict(), updateMany: zod_1.z.object({
        data: zod_1.z.union([ExpenseShareUpdateManyMutationInput_schema_1.ExpenseShareUpdateManyMutationInputObjectSchema, ExpenseShareUncheckedUpdateManyInput_schema_1.ExpenseShareUncheckedUpdateManyInputObjectSchema]), where: ExpenseShareWhereInput_schema_1.ExpenseShareWhereInputObjectSchema.optional()
    }).strict(), upsert: zod_1.z.object({
        select: zod_1.z.lazy(() => ExpenseShareSelect_schema_1.ExpenseShareSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ExpenseShareInclude_schema_1.ExpenseShareIncludeObjectSchema.optional()), where: ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema, create: zod_1.z.union([ExpenseShareCreateInput_schema_1.ExpenseShareCreateInputObjectSchema, ExpenseShareUncheckedCreateInput_schema_1.ExpenseShareUncheckedCreateInputObjectSchema]), update: zod_1.z.union([ExpenseShareUpdateInput_schema_1.ExpenseShareUpdateInputObjectSchema, ExpenseShareUncheckedUpdateInput_schema_1.ExpenseShareUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: zod_1.z.object({
        where: ExpenseShareWhereInput_schema_1.ExpenseShareWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ExpenseShareOrderByWithRelationInput_schema_1.ExpenseShareOrderByWithRelationInputObjectSchema, ExpenseShareOrderByWithRelationInput_schema_1.ExpenseShareOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), _count: zod_1.z.union([zod_1.z.literal(true), ExpenseShareCountAggregateInput_schema_1.ExpenseShareCountAggregateInputObjectSchema]).optional(), _min: ExpenseShareMinAggregateInput_schema_1.ExpenseShareMinAggregateInputObjectSchema.optional(), _max: ExpenseShareMaxAggregateInput_schema_1.ExpenseShareMaxAggregateInputObjectSchema.optional(), _avg: ExpenseShareAvgAggregateInput_schema_1.ExpenseShareAvgAggregateInputObjectSchema.optional(), _sum: ExpenseShareSumAggregateInput_schema_1.ExpenseShareSumAggregateInputObjectSchema.optional()
    }).strict(), groupBy: zod_1.z.object({
        where: ExpenseShareWhereInput_schema_1.ExpenseShareWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ExpenseShareOrderByWithAggregationInput_schema_1.ExpenseShareOrderByWithAggregationInputObjectSchema, ExpenseShareOrderByWithAggregationInput_schema_1.ExpenseShareOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ExpenseShareScalarWhereWithAggregatesInput_schema_1.ExpenseShareScalarWhereWithAggregatesInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), by: zod_1.z.array(ExpenseShareScalarFieldEnum_schema_1.ExpenseShareScalarFieldEnumSchema), _count: zod_1.z.union([zod_1.z.literal(true), ExpenseShareCountAggregateInput_schema_1.ExpenseShareCountAggregateInputObjectSchema]).optional(), _min: ExpenseShareMinAggregateInput_schema_1.ExpenseShareMinAggregateInputObjectSchema.optional(), _max: ExpenseShareMaxAggregateInput_schema_1.ExpenseShareMaxAggregateInputObjectSchema.optional(), _avg: ExpenseShareAvgAggregateInput_schema_1.ExpenseShareAvgAggregateInputObjectSchema.optional(), _sum: ExpenseShareSumAggregateInput_schema_1.ExpenseShareSumAggregateInputObjectSchema.optional()
    }).strict(), count: zod_1.z.object({
        where: ExpenseShareWhereInput_schema_1.ExpenseShareWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ExpenseShareOrderByWithRelationInput_schema_1.ExpenseShareOrderByWithRelationInputObjectSchema, ExpenseShareOrderByWithRelationInput_schema_1.ExpenseShareOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(ExpenseShareScalarFieldEnum_schema_1.ExpenseShareScalarFieldEnumSchema).optional(), select: zod_1.z.union([zod_1.z.literal(true), ExpenseShareCountAggregateInput_schema_1.ExpenseShareCountAggregateInputObjectSchema]).optional()
    }).strict(),
};
