"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageInputSchema = void 0;
const zod_1 = require("zod");
;
;
const MessageSelect_schema_1 = require("../objects/MessageSelect.schema");
const MessageInclude_schema_1 = require("../objects/MessageInclude.schema");
const MessageWhereUniqueInput_schema_1 = require("../objects/MessageWhereUniqueInput.schema");
const MessageWhereInput_schema_1 = require("../objects/MessageWhereInput.schema");
const MessageOrderByWithRelationInput_schema_1 = require("../objects/MessageOrderByWithRelationInput.schema");
const MessageScalarFieldEnum_schema_1 = require("../enums/MessageScalarFieldEnum.schema");
const MessageCreateInput_schema_1 = require("../objects/MessageCreateInput.schema");
const MessageUncheckedCreateInput_schema_1 = require("../objects/MessageUncheckedCreateInput.schema");
const MessageCreateManyInput_schema_1 = require("../objects/MessageCreateManyInput.schema");
const MessageUpdateInput_schema_1 = require("../objects/MessageUpdateInput.schema");
const MessageUncheckedUpdateInput_schema_1 = require("../objects/MessageUncheckedUpdateInput.schema");
const MessageUpdateManyMutationInput_schema_1 = require("../objects/MessageUpdateManyMutationInput.schema");
const MessageUncheckedUpdateManyInput_schema_1 = require("../objects/MessageUncheckedUpdateManyInput.schema");
const MessageCountAggregateInput_schema_1 = require("../objects/MessageCountAggregateInput.schema");
const MessageMinAggregateInput_schema_1 = require("../objects/MessageMinAggregateInput.schema");
const MessageMaxAggregateInput_schema_1 = require("../objects/MessageMaxAggregateInput.schema");
const MessageOrderByWithAggregationInput_schema_1 = require("../objects/MessageOrderByWithAggregationInput.schema");
const MessageScalarWhereWithAggregatesInput_schema_1 = require("../objects/MessageScalarWhereWithAggregatesInput.schema");
exports.MessageInputSchema = {
    findUnique: zod_1.z.object({
        select: zod_1.z.lazy(() => MessageSelect_schema_1.MessageSelectObjectSchema.optional()), include: zod_1.z.lazy(() => MessageInclude_schema_1.MessageIncludeObjectSchema.optional()), where: MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema
    }).strict(), findFirst: zod_1.z.object({
        select: zod_1.z.lazy(() => MessageSelect_schema_1.MessageSelectObjectSchema.optional()), include: zod_1.z.lazy(() => MessageInclude_schema_1.MessageIncludeObjectSchema.optional()), where: MessageWhereInput_schema_1.MessageWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([MessageOrderByWithRelationInput_schema_1.MessageOrderByWithRelationInputObjectSchema, MessageOrderByWithRelationInput_schema_1.MessageOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(MessageScalarFieldEnum_schema_1.MessageScalarFieldEnumSchema).optional()
    }).strict(), findMany: zod_1.z.object({
        select: zod_1.z.lazy(() => MessageSelect_schema_1.MessageSelectObjectSchema.optional()), include: zod_1.z.lazy(() => MessageInclude_schema_1.MessageIncludeObjectSchema.optional()), where: MessageWhereInput_schema_1.MessageWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([MessageOrderByWithRelationInput_schema_1.MessageOrderByWithRelationInputObjectSchema, MessageOrderByWithRelationInput_schema_1.MessageOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(MessageScalarFieldEnum_schema_1.MessageScalarFieldEnumSchema).optional()
    }).strict(), create: zod_1.z.object({
        select: zod_1.z.lazy(() => MessageSelect_schema_1.MessageSelectObjectSchema.optional()), include: zod_1.z.lazy(() => MessageInclude_schema_1.MessageIncludeObjectSchema.optional()), data: zod_1.z.union([MessageCreateInput_schema_1.MessageCreateInputObjectSchema, MessageUncheckedCreateInput_schema_1.MessageUncheckedCreateInputObjectSchema])
    }).strict(), createMany: zod_1.z.object({
        data: zod_1.z.union([MessageCreateManyInput_schema_1.MessageCreateManyInputObjectSchema, zod_1.z.array(MessageCreateManyInput_schema_1.MessageCreateManyInputObjectSchema)]), skipDuplicates: zod_1.z.boolean().optional()
    }).strict(), 'delete': zod_1.z.object({
        select: zod_1.z.lazy(() => MessageSelect_schema_1.MessageSelectObjectSchema.optional()), include: zod_1.z.lazy(() => MessageInclude_schema_1.MessageIncludeObjectSchema.optional()), where: MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema
    }).strict(), deleteMany: zod_1.z.object({
        where: MessageWhereInput_schema_1.MessageWhereInputObjectSchema.optional()
    }).strict(), update: zod_1.z.object({
        select: zod_1.z.lazy(() => MessageSelect_schema_1.MessageSelectObjectSchema.optional()), include: zod_1.z.lazy(() => MessageInclude_schema_1.MessageIncludeObjectSchema.optional()), data: zod_1.z.union([MessageUpdateInput_schema_1.MessageUpdateInputObjectSchema, MessageUncheckedUpdateInput_schema_1.MessageUncheckedUpdateInputObjectSchema]), where: MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema
    }).strict(), updateMany: zod_1.z.object({
        data: zod_1.z.union([MessageUpdateManyMutationInput_schema_1.MessageUpdateManyMutationInputObjectSchema, MessageUncheckedUpdateManyInput_schema_1.MessageUncheckedUpdateManyInputObjectSchema]), where: MessageWhereInput_schema_1.MessageWhereInputObjectSchema.optional()
    }).strict(), upsert: zod_1.z.object({
        select: zod_1.z.lazy(() => MessageSelect_schema_1.MessageSelectObjectSchema.optional()), include: zod_1.z.lazy(() => MessageInclude_schema_1.MessageIncludeObjectSchema.optional()), where: MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema, create: zod_1.z.union([MessageCreateInput_schema_1.MessageCreateInputObjectSchema, MessageUncheckedCreateInput_schema_1.MessageUncheckedCreateInputObjectSchema]), update: zod_1.z.union([MessageUpdateInput_schema_1.MessageUpdateInputObjectSchema, MessageUncheckedUpdateInput_schema_1.MessageUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: zod_1.z.object({
        where: MessageWhereInput_schema_1.MessageWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([MessageOrderByWithRelationInput_schema_1.MessageOrderByWithRelationInputObjectSchema, MessageOrderByWithRelationInput_schema_1.MessageOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), _count: zod_1.z.union([zod_1.z.literal(true), MessageCountAggregateInput_schema_1.MessageCountAggregateInputObjectSchema]).optional(), _min: MessageMinAggregateInput_schema_1.MessageMinAggregateInputObjectSchema.optional(), _max: MessageMaxAggregateInput_schema_1.MessageMaxAggregateInputObjectSchema.optional()
    }).strict(), groupBy: zod_1.z.object({
        where: MessageWhereInput_schema_1.MessageWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([MessageOrderByWithAggregationInput_schema_1.MessageOrderByWithAggregationInputObjectSchema, MessageOrderByWithAggregationInput_schema_1.MessageOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MessageScalarWhereWithAggregatesInput_schema_1.MessageScalarWhereWithAggregatesInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), by: zod_1.z.array(MessageScalarFieldEnum_schema_1.MessageScalarFieldEnumSchema), _count: zod_1.z.union([zod_1.z.literal(true), MessageCountAggregateInput_schema_1.MessageCountAggregateInputObjectSchema]).optional(), _min: MessageMinAggregateInput_schema_1.MessageMinAggregateInputObjectSchema.optional(), _max: MessageMaxAggregateInput_schema_1.MessageMaxAggregateInputObjectSchema.optional()
    }).strict(), count: zod_1.z.object({
        where: MessageWhereInput_schema_1.MessageWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([MessageOrderByWithRelationInput_schema_1.MessageOrderByWithRelationInputObjectSchema, MessageOrderByWithRelationInput_schema_1.MessageOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(MessageScalarFieldEnum_schema_1.MessageScalarFieldEnumSchema).optional(), select: zod_1.z.union([zod_1.z.literal(true), MessageCountAggregateInput_schema_1.MessageCountAggregateInputObjectSchema]).optional()
    }).strict(),
};
