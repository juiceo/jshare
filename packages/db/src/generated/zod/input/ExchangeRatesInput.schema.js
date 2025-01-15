"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRatesInputSchema = void 0;
const zod_1 = require("zod");
;
;
const ExchangeRatesSelect_schema_1 = require("../objects/ExchangeRatesSelect.schema");
;
const ExchangeRatesWhereUniqueInput_schema_1 = require("../objects/ExchangeRatesWhereUniqueInput.schema");
const ExchangeRatesWhereInput_schema_1 = require("../objects/ExchangeRatesWhereInput.schema");
const ExchangeRatesOrderByWithRelationInput_schema_1 = require("../objects/ExchangeRatesOrderByWithRelationInput.schema");
const ExchangeRatesScalarFieldEnum_schema_1 = require("../enums/ExchangeRatesScalarFieldEnum.schema");
const ExchangeRatesCreateInput_schema_1 = require("../objects/ExchangeRatesCreateInput.schema");
const ExchangeRatesUncheckedCreateInput_schema_1 = require("../objects/ExchangeRatesUncheckedCreateInput.schema");
const ExchangeRatesCreateManyInput_schema_1 = require("../objects/ExchangeRatesCreateManyInput.schema");
const ExchangeRatesUpdateInput_schema_1 = require("../objects/ExchangeRatesUpdateInput.schema");
const ExchangeRatesUncheckedUpdateInput_schema_1 = require("../objects/ExchangeRatesUncheckedUpdateInput.schema");
const ExchangeRatesUpdateManyMutationInput_schema_1 = require("../objects/ExchangeRatesUpdateManyMutationInput.schema");
const ExchangeRatesUncheckedUpdateManyInput_schema_1 = require("../objects/ExchangeRatesUncheckedUpdateManyInput.schema");
const ExchangeRatesCountAggregateInput_schema_1 = require("../objects/ExchangeRatesCountAggregateInput.schema");
const ExchangeRatesMinAggregateInput_schema_1 = require("../objects/ExchangeRatesMinAggregateInput.schema");
const ExchangeRatesMaxAggregateInput_schema_1 = require("../objects/ExchangeRatesMaxAggregateInput.schema");
const ExchangeRatesOrderByWithAggregationInput_schema_1 = require("../objects/ExchangeRatesOrderByWithAggregationInput.schema");
const ExchangeRatesScalarWhereWithAggregatesInput_schema_1 = require("../objects/ExchangeRatesScalarWhereWithAggregatesInput.schema");
exports.ExchangeRatesInputSchema = {
    findUnique: zod_1.z.object({
        select: zod_1.z.lazy(() => ExchangeRatesSelect_schema_1.ExchangeRatesSelectObjectSchema.optional()), where: ExchangeRatesWhereUniqueInput_schema_1.ExchangeRatesWhereUniqueInputObjectSchema
    }).strict(), findFirst: zod_1.z.object({
        select: zod_1.z.lazy(() => ExchangeRatesSelect_schema_1.ExchangeRatesSelectObjectSchema.optional()), where: ExchangeRatesWhereInput_schema_1.ExchangeRatesWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ExchangeRatesOrderByWithRelationInput_schema_1.ExchangeRatesOrderByWithRelationInputObjectSchema, ExchangeRatesOrderByWithRelationInput_schema_1.ExchangeRatesOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ExchangeRatesWhereUniqueInput_schema_1.ExchangeRatesWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(ExchangeRatesScalarFieldEnum_schema_1.ExchangeRatesScalarFieldEnumSchema).optional()
    }).strict(), findMany: zod_1.z.object({
        select: zod_1.z.lazy(() => ExchangeRatesSelect_schema_1.ExchangeRatesSelectObjectSchema.optional()), where: ExchangeRatesWhereInput_schema_1.ExchangeRatesWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ExchangeRatesOrderByWithRelationInput_schema_1.ExchangeRatesOrderByWithRelationInputObjectSchema, ExchangeRatesOrderByWithRelationInput_schema_1.ExchangeRatesOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ExchangeRatesWhereUniqueInput_schema_1.ExchangeRatesWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(ExchangeRatesScalarFieldEnum_schema_1.ExchangeRatesScalarFieldEnumSchema).optional()
    }).strict(), create: zod_1.z.object({
        select: zod_1.z.lazy(() => ExchangeRatesSelect_schema_1.ExchangeRatesSelectObjectSchema.optional()), data: zod_1.z.union([ExchangeRatesCreateInput_schema_1.ExchangeRatesCreateInputObjectSchema, ExchangeRatesUncheckedCreateInput_schema_1.ExchangeRatesUncheckedCreateInputObjectSchema])
    }).strict(), createMany: zod_1.z.object({
        data: zod_1.z.union([ExchangeRatesCreateManyInput_schema_1.ExchangeRatesCreateManyInputObjectSchema, zod_1.z.array(ExchangeRatesCreateManyInput_schema_1.ExchangeRatesCreateManyInputObjectSchema)]), skipDuplicates: zod_1.z.boolean().optional()
    }).strict(), 'delete': zod_1.z.object({
        select: zod_1.z.lazy(() => ExchangeRatesSelect_schema_1.ExchangeRatesSelectObjectSchema.optional()), where: ExchangeRatesWhereUniqueInput_schema_1.ExchangeRatesWhereUniqueInputObjectSchema
    }).strict(), deleteMany: zod_1.z.object({
        where: ExchangeRatesWhereInput_schema_1.ExchangeRatesWhereInputObjectSchema.optional()
    }).strict(), update: zod_1.z.object({
        select: zod_1.z.lazy(() => ExchangeRatesSelect_schema_1.ExchangeRatesSelectObjectSchema.optional()), data: zod_1.z.union([ExchangeRatesUpdateInput_schema_1.ExchangeRatesUpdateInputObjectSchema, ExchangeRatesUncheckedUpdateInput_schema_1.ExchangeRatesUncheckedUpdateInputObjectSchema]), where: ExchangeRatesWhereUniqueInput_schema_1.ExchangeRatesWhereUniqueInputObjectSchema
    }).strict(), updateMany: zod_1.z.object({
        data: zod_1.z.union([ExchangeRatesUpdateManyMutationInput_schema_1.ExchangeRatesUpdateManyMutationInputObjectSchema, ExchangeRatesUncheckedUpdateManyInput_schema_1.ExchangeRatesUncheckedUpdateManyInputObjectSchema]), where: ExchangeRatesWhereInput_schema_1.ExchangeRatesWhereInputObjectSchema.optional()
    }).strict(), upsert: zod_1.z.object({
        select: zod_1.z.lazy(() => ExchangeRatesSelect_schema_1.ExchangeRatesSelectObjectSchema.optional()), where: ExchangeRatesWhereUniqueInput_schema_1.ExchangeRatesWhereUniqueInputObjectSchema, create: zod_1.z.union([ExchangeRatesCreateInput_schema_1.ExchangeRatesCreateInputObjectSchema, ExchangeRatesUncheckedCreateInput_schema_1.ExchangeRatesUncheckedCreateInputObjectSchema]), update: zod_1.z.union([ExchangeRatesUpdateInput_schema_1.ExchangeRatesUpdateInputObjectSchema, ExchangeRatesUncheckedUpdateInput_schema_1.ExchangeRatesUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: zod_1.z.object({
        where: ExchangeRatesWhereInput_schema_1.ExchangeRatesWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ExchangeRatesOrderByWithRelationInput_schema_1.ExchangeRatesOrderByWithRelationInputObjectSchema, ExchangeRatesOrderByWithRelationInput_schema_1.ExchangeRatesOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ExchangeRatesWhereUniqueInput_schema_1.ExchangeRatesWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), _count: zod_1.z.union([zod_1.z.literal(true), ExchangeRatesCountAggregateInput_schema_1.ExchangeRatesCountAggregateInputObjectSchema]).optional(), _min: ExchangeRatesMinAggregateInput_schema_1.ExchangeRatesMinAggregateInputObjectSchema.optional(), _max: ExchangeRatesMaxAggregateInput_schema_1.ExchangeRatesMaxAggregateInputObjectSchema.optional()
    }).strict(), groupBy: zod_1.z.object({
        where: ExchangeRatesWhereInput_schema_1.ExchangeRatesWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ExchangeRatesOrderByWithAggregationInput_schema_1.ExchangeRatesOrderByWithAggregationInputObjectSchema, ExchangeRatesOrderByWithAggregationInput_schema_1.ExchangeRatesOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ExchangeRatesScalarWhereWithAggregatesInput_schema_1.ExchangeRatesScalarWhereWithAggregatesInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), by: zod_1.z.array(ExchangeRatesScalarFieldEnum_schema_1.ExchangeRatesScalarFieldEnumSchema), _count: zod_1.z.union([zod_1.z.literal(true), ExchangeRatesCountAggregateInput_schema_1.ExchangeRatesCountAggregateInputObjectSchema]).optional(), _min: ExchangeRatesMinAggregateInput_schema_1.ExchangeRatesMinAggregateInputObjectSchema.optional(), _max: ExchangeRatesMaxAggregateInput_schema_1.ExchangeRatesMaxAggregateInputObjectSchema.optional()
    }).strict(), count: zod_1.z.object({
        where: ExchangeRatesWhereInput_schema_1.ExchangeRatesWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ExchangeRatesOrderByWithRelationInput_schema_1.ExchangeRatesOrderByWithRelationInputObjectSchema, ExchangeRatesOrderByWithRelationInput_schema_1.ExchangeRatesOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ExchangeRatesWhereUniqueInput_schema_1.ExchangeRatesWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(ExchangeRatesScalarFieldEnum_schema_1.ExchangeRatesScalarFieldEnumSchema).optional(), select: zod_1.z.union([zod_1.z.literal(true), ExchangeRatesCountAggregateInput_schema_1.ExchangeRatesCountAggregateInputObjectSchema]).optional()
    }).strict(),
};
