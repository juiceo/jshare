"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentInputSchema = void 0;
const zod_1 = require("zod");
;
;
const PaymentSelect_schema_1 = require("../objects/PaymentSelect.schema");
const PaymentInclude_schema_1 = require("../objects/PaymentInclude.schema");
const PaymentWhereUniqueInput_schema_1 = require("../objects/PaymentWhereUniqueInput.schema");
const PaymentWhereInput_schema_1 = require("../objects/PaymentWhereInput.schema");
const PaymentOrderByWithRelationInput_schema_1 = require("../objects/PaymentOrderByWithRelationInput.schema");
const PaymentScalarFieldEnum_schema_1 = require("../enums/PaymentScalarFieldEnum.schema");
const PaymentCreateInput_schema_1 = require("../objects/PaymentCreateInput.schema");
const PaymentUncheckedCreateInput_schema_1 = require("../objects/PaymentUncheckedCreateInput.schema");
const PaymentCreateManyInput_schema_1 = require("../objects/PaymentCreateManyInput.schema");
const PaymentUpdateInput_schema_1 = require("../objects/PaymentUpdateInput.schema");
const PaymentUncheckedUpdateInput_schema_1 = require("../objects/PaymentUncheckedUpdateInput.schema");
const PaymentUpdateManyMutationInput_schema_1 = require("../objects/PaymentUpdateManyMutationInput.schema");
const PaymentUncheckedUpdateManyInput_schema_1 = require("../objects/PaymentUncheckedUpdateManyInput.schema");
const PaymentCountAggregateInput_schema_1 = require("../objects/PaymentCountAggregateInput.schema");
const PaymentMinAggregateInput_schema_1 = require("../objects/PaymentMinAggregateInput.schema");
const PaymentMaxAggregateInput_schema_1 = require("../objects/PaymentMaxAggregateInput.schema");
const PaymentAvgAggregateInput_schema_1 = require("../objects/PaymentAvgAggregateInput.schema");
const PaymentSumAggregateInput_schema_1 = require("../objects/PaymentSumAggregateInput.schema");
const PaymentOrderByWithAggregationInput_schema_1 = require("../objects/PaymentOrderByWithAggregationInput.schema");
const PaymentScalarWhereWithAggregatesInput_schema_1 = require("../objects/PaymentScalarWhereWithAggregatesInput.schema");
exports.PaymentInputSchema = {
    findUnique: zod_1.z.object({
        select: zod_1.z.lazy(() => PaymentSelect_schema_1.PaymentSelectObjectSchema.optional()), include: zod_1.z.lazy(() => PaymentInclude_schema_1.PaymentIncludeObjectSchema.optional()), where: PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema
    }).strict(), findFirst: zod_1.z.object({
        select: zod_1.z.lazy(() => PaymentSelect_schema_1.PaymentSelectObjectSchema.optional()), include: zod_1.z.lazy(() => PaymentInclude_schema_1.PaymentIncludeObjectSchema.optional()), where: PaymentWhereInput_schema_1.PaymentWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([PaymentOrderByWithRelationInput_schema_1.PaymentOrderByWithRelationInputObjectSchema, PaymentOrderByWithRelationInput_schema_1.PaymentOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(PaymentScalarFieldEnum_schema_1.PaymentScalarFieldEnumSchema).optional()
    }).strict(), findMany: zod_1.z.object({
        select: zod_1.z.lazy(() => PaymentSelect_schema_1.PaymentSelectObjectSchema.optional()), include: zod_1.z.lazy(() => PaymentInclude_schema_1.PaymentIncludeObjectSchema.optional()), where: PaymentWhereInput_schema_1.PaymentWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([PaymentOrderByWithRelationInput_schema_1.PaymentOrderByWithRelationInputObjectSchema, PaymentOrderByWithRelationInput_schema_1.PaymentOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(PaymentScalarFieldEnum_schema_1.PaymentScalarFieldEnumSchema).optional()
    }).strict(), create: zod_1.z.object({
        select: zod_1.z.lazy(() => PaymentSelect_schema_1.PaymentSelectObjectSchema.optional()), include: zod_1.z.lazy(() => PaymentInclude_schema_1.PaymentIncludeObjectSchema.optional()), data: zod_1.z.union([PaymentCreateInput_schema_1.PaymentCreateInputObjectSchema, PaymentUncheckedCreateInput_schema_1.PaymentUncheckedCreateInputObjectSchema])
    }).strict(), createMany: zod_1.z.object({
        data: zod_1.z.union([PaymentCreateManyInput_schema_1.PaymentCreateManyInputObjectSchema, zod_1.z.array(PaymentCreateManyInput_schema_1.PaymentCreateManyInputObjectSchema)]), skipDuplicates: zod_1.z.boolean().optional()
    }).strict(), 'delete': zod_1.z.object({
        select: zod_1.z.lazy(() => PaymentSelect_schema_1.PaymentSelectObjectSchema.optional()), include: zod_1.z.lazy(() => PaymentInclude_schema_1.PaymentIncludeObjectSchema.optional()), where: PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema
    }).strict(), deleteMany: zod_1.z.object({
        where: PaymentWhereInput_schema_1.PaymentWhereInputObjectSchema.optional()
    }).strict(), update: zod_1.z.object({
        select: zod_1.z.lazy(() => PaymentSelect_schema_1.PaymentSelectObjectSchema.optional()), include: zod_1.z.lazy(() => PaymentInclude_schema_1.PaymentIncludeObjectSchema.optional()), data: zod_1.z.union([PaymentUpdateInput_schema_1.PaymentUpdateInputObjectSchema, PaymentUncheckedUpdateInput_schema_1.PaymentUncheckedUpdateInputObjectSchema]), where: PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema
    }).strict(), updateMany: zod_1.z.object({
        data: zod_1.z.union([PaymentUpdateManyMutationInput_schema_1.PaymentUpdateManyMutationInputObjectSchema, PaymentUncheckedUpdateManyInput_schema_1.PaymentUncheckedUpdateManyInputObjectSchema]), where: PaymentWhereInput_schema_1.PaymentWhereInputObjectSchema.optional()
    }).strict(), upsert: zod_1.z.object({
        select: zod_1.z.lazy(() => PaymentSelect_schema_1.PaymentSelectObjectSchema.optional()), include: zod_1.z.lazy(() => PaymentInclude_schema_1.PaymentIncludeObjectSchema.optional()), where: PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema, create: zod_1.z.union([PaymentCreateInput_schema_1.PaymentCreateInputObjectSchema, PaymentUncheckedCreateInput_schema_1.PaymentUncheckedCreateInputObjectSchema]), update: zod_1.z.union([PaymentUpdateInput_schema_1.PaymentUpdateInputObjectSchema, PaymentUncheckedUpdateInput_schema_1.PaymentUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: zod_1.z.object({
        where: PaymentWhereInput_schema_1.PaymentWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([PaymentOrderByWithRelationInput_schema_1.PaymentOrderByWithRelationInputObjectSchema, PaymentOrderByWithRelationInput_schema_1.PaymentOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), _count: zod_1.z.union([zod_1.z.literal(true), PaymentCountAggregateInput_schema_1.PaymentCountAggregateInputObjectSchema]).optional(), _min: PaymentMinAggregateInput_schema_1.PaymentMinAggregateInputObjectSchema.optional(), _max: PaymentMaxAggregateInput_schema_1.PaymentMaxAggregateInputObjectSchema.optional(), _avg: PaymentAvgAggregateInput_schema_1.PaymentAvgAggregateInputObjectSchema.optional(), _sum: PaymentSumAggregateInput_schema_1.PaymentSumAggregateInputObjectSchema.optional()
    }).strict(), groupBy: zod_1.z.object({
        where: PaymentWhereInput_schema_1.PaymentWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([PaymentOrderByWithAggregationInput_schema_1.PaymentOrderByWithAggregationInputObjectSchema, PaymentOrderByWithAggregationInput_schema_1.PaymentOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PaymentScalarWhereWithAggregatesInput_schema_1.PaymentScalarWhereWithAggregatesInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), by: zod_1.z.array(PaymentScalarFieldEnum_schema_1.PaymentScalarFieldEnumSchema), _count: zod_1.z.union([zod_1.z.literal(true), PaymentCountAggregateInput_schema_1.PaymentCountAggregateInputObjectSchema]).optional(), _min: PaymentMinAggregateInput_schema_1.PaymentMinAggregateInputObjectSchema.optional(), _max: PaymentMaxAggregateInput_schema_1.PaymentMaxAggregateInputObjectSchema.optional(), _avg: PaymentAvgAggregateInput_schema_1.PaymentAvgAggregateInputObjectSchema.optional(), _sum: PaymentSumAggregateInput_schema_1.PaymentSumAggregateInputObjectSchema.optional()
    }).strict(), count: zod_1.z.object({
        where: PaymentWhereInput_schema_1.PaymentWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([PaymentOrderByWithRelationInput_schema_1.PaymentOrderByWithRelationInputObjectSchema, PaymentOrderByWithRelationInput_schema_1.PaymentOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(PaymentScalarFieldEnum_schema_1.PaymentScalarFieldEnumSchema).optional(), select: zod_1.z.union([zod_1.z.literal(true), PaymentCountAggregateInput_schema_1.PaymentCountAggregateInputObjectSchema]).optional()
    }).strict(),
};
