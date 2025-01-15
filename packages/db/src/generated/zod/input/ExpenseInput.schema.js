"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseInputSchema = void 0;
const zod_1 = require("zod");
;
;
const ExpenseSelect_schema_1 = require("../objects/ExpenseSelect.schema");
const ExpenseInclude_schema_1 = require("../objects/ExpenseInclude.schema");
const ExpenseWhereUniqueInput_schema_1 = require("../objects/ExpenseWhereUniqueInput.schema");
const ExpenseWhereInput_schema_1 = require("../objects/ExpenseWhereInput.schema");
const ExpenseOrderByWithRelationInput_schema_1 = require("../objects/ExpenseOrderByWithRelationInput.schema");
const ExpenseScalarFieldEnum_schema_1 = require("../enums/ExpenseScalarFieldEnum.schema");
const ExpenseCreateInput_schema_1 = require("../objects/ExpenseCreateInput.schema");
const ExpenseUncheckedCreateInput_schema_1 = require("../objects/ExpenseUncheckedCreateInput.schema");
const ExpenseCreateManyInput_schema_1 = require("../objects/ExpenseCreateManyInput.schema");
const ExpenseUpdateInput_schema_1 = require("../objects/ExpenseUpdateInput.schema");
const ExpenseUncheckedUpdateInput_schema_1 = require("../objects/ExpenseUncheckedUpdateInput.schema");
const ExpenseUpdateManyMutationInput_schema_1 = require("../objects/ExpenseUpdateManyMutationInput.schema");
const ExpenseUncheckedUpdateManyInput_schema_1 = require("../objects/ExpenseUncheckedUpdateManyInput.schema");
const ExpenseCountAggregateInput_schema_1 = require("../objects/ExpenseCountAggregateInput.schema");
const ExpenseMinAggregateInput_schema_1 = require("../objects/ExpenseMinAggregateInput.schema");
const ExpenseMaxAggregateInput_schema_1 = require("../objects/ExpenseMaxAggregateInput.schema");
const ExpenseAvgAggregateInput_schema_1 = require("../objects/ExpenseAvgAggregateInput.schema");
const ExpenseSumAggregateInput_schema_1 = require("../objects/ExpenseSumAggregateInput.schema");
const ExpenseOrderByWithAggregationInput_schema_1 = require("../objects/ExpenseOrderByWithAggregationInput.schema");
const ExpenseScalarWhereWithAggregatesInput_schema_1 = require("../objects/ExpenseScalarWhereWithAggregatesInput.schema");
exports.ExpenseInputSchema = {
    findUnique: zod_1.z.object({
        select: zod_1.z.lazy(() => ExpenseSelect_schema_1.ExpenseSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ExpenseInclude_schema_1.ExpenseIncludeObjectSchema.optional()), where: ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema
    }).strict(), findFirst: zod_1.z.object({
        select: zod_1.z.lazy(() => ExpenseSelect_schema_1.ExpenseSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ExpenseInclude_schema_1.ExpenseIncludeObjectSchema.optional()), where: ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ExpenseOrderByWithRelationInput_schema_1.ExpenseOrderByWithRelationInputObjectSchema, ExpenseOrderByWithRelationInput_schema_1.ExpenseOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(ExpenseScalarFieldEnum_schema_1.ExpenseScalarFieldEnumSchema).optional()
    }).strict(), findMany: zod_1.z.object({
        select: zod_1.z.lazy(() => ExpenseSelect_schema_1.ExpenseSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ExpenseInclude_schema_1.ExpenseIncludeObjectSchema.optional()), where: ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ExpenseOrderByWithRelationInput_schema_1.ExpenseOrderByWithRelationInputObjectSchema, ExpenseOrderByWithRelationInput_schema_1.ExpenseOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(ExpenseScalarFieldEnum_schema_1.ExpenseScalarFieldEnumSchema).optional()
    }).strict(), create: zod_1.z.object({
        select: zod_1.z.lazy(() => ExpenseSelect_schema_1.ExpenseSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ExpenseInclude_schema_1.ExpenseIncludeObjectSchema.optional()), data: zod_1.z.union([ExpenseCreateInput_schema_1.ExpenseCreateInputObjectSchema, ExpenseUncheckedCreateInput_schema_1.ExpenseUncheckedCreateInputObjectSchema])
    }).strict(), createMany: zod_1.z.object({
        data: zod_1.z.union([ExpenseCreateManyInput_schema_1.ExpenseCreateManyInputObjectSchema, zod_1.z.array(ExpenseCreateManyInput_schema_1.ExpenseCreateManyInputObjectSchema)]), skipDuplicates: zod_1.z.boolean().optional()
    }).strict(), 'delete': zod_1.z.object({
        select: zod_1.z.lazy(() => ExpenseSelect_schema_1.ExpenseSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ExpenseInclude_schema_1.ExpenseIncludeObjectSchema.optional()), where: ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema
    }).strict(), deleteMany: zod_1.z.object({
        where: ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema.optional()
    }).strict(), update: zod_1.z.object({
        select: zod_1.z.lazy(() => ExpenseSelect_schema_1.ExpenseSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ExpenseInclude_schema_1.ExpenseIncludeObjectSchema.optional()), data: zod_1.z.union([ExpenseUpdateInput_schema_1.ExpenseUpdateInputObjectSchema, ExpenseUncheckedUpdateInput_schema_1.ExpenseUncheckedUpdateInputObjectSchema]), where: ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema
    }).strict(), updateMany: zod_1.z.object({
        data: zod_1.z.union([ExpenseUpdateManyMutationInput_schema_1.ExpenseUpdateManyMutationInputObjectSchema, ExpenseUncheckedUpdateManyInput_schema_1.ExpenseUncheckedUpdateManyInputObjectSchema]), where: ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema.optional()
    }).strict(), upsert: zod_1.z.object({
        select: zod_1.z.lazy(() => ExpenseSelect_schema_1.ExpenseSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ExpenseInclude_schema_1.ExpenseIncludeObjectSchema.optional()), where: ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema, create: zod_1.z.union([ExpenseCreateInput_schema_1.ExpenseCreateInputObjectSchema, ExpenseUncheckedCreateInput_schema_1.ExpenseUncheckedCreateInputObjectSchema]), update: zod_1.z.union([ExpenseUpdateInput_schema_1.ExpenseUpdateInputObjectSchema, ExpenseUncheckedUpdateInput_schema_1.ExpenseUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: zod_1.z.object({
        where: ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ExpenseOrderByWithRelationInput_schema_1.ExpenseOrderByWithRelationInputObjectSchema, ExpenseOrderByWithRelationInput_schema_1.ExpenseOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), _count: zod_1.z.union([zod_1.z.literal(true), ExpenseCountAggregateInput_schema_1.ExpenseCountAggregateInputObjectSchema]).optional(), _min: ExpenseMinAggregateInput_schema_1.ExpenseMinAggregateInputObjectSchema.optional(), _max: ExpenseMaxAggregateInput_schema_1.ExpenseMaxAggregateInputObjectSchema.optional(), _avg: ExpenseAvgAggregateInput_schema_1.ExpenseAvgAggregateInputObjectSchema.optional(), _sum: ExpenseSumAggregateInput_schema_1.ExpenseSumAggregateInputObjectSchema.optional()
    }).strict(), groupBy: zod_1.z.object({
        where: ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ExpenseOrderByWithAggregationInput_schema_1.ExpenseOrderByWithAggregationInputObjectSchema, ExpenseOrderByWithAggregationInput_schema_1.ExpenseOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ExpenseScalarWhereWithAggregatesInput_schema_1.ExpenseScalarWhereWithAggregatesInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), by: zod_1.z.array(ExpenseScalarFieldEnum_schema_1.ExpenseScalarFieldEnumSchema), _count: zod_1.z.union([zod_1.z.literal(true), ExpenseCountAggregateInput_schema_1.ExpenseCountAggregateInputObjectSchema]).optional(), _min: ExpenseMinAggregateInput_schema_1.ExpenseMinAggregateInputObjectSchema.optional(), _max: ExpenseMaxAggregateInput_schema_1.ExpenseMaxAggregateInputObjectSchema.optional(), _avg: ExpenseAvgAggregateInput_schema_1.ExpenseAvgAggregateInputObjectSchema.optional(), _sum: ExpenseSumAggregateInput_schema_1.ExpenseSumAggregateInputObjectSchema.optional()
    }).strict(), count: zod_1.z.object({
        where: ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ExpenseOrderByWithRelationInput_schema_1.ExpenseOrderByWithRelationInputObjectSchema, ExpenseOrderByWithRelationInput_schema_1.ExpenseOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(ExpenseScalarFieldEnum_schema_1.ExpenseScalarFieldEnumSchema).optional(), select: zod_1.z.union([zod_1.z.literal(true), ExpenseCountAggregateInput_schema_1.ExpenseCountAggregateInputObjectSchema]).optional()
    }).strict(),
};
