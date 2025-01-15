"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentInputSchema = void 0;
const zod_1 = require("zod");
;
;
const MessageAttachmentSelect_schema_1 = require("../objects/MessageAttachmentSelect.schema");
const MessageAttachmentInclude_schema_1 = require("../objects/MessageAttachmentInclude.schema");
const MessageAttachmentWhereUniqueInput_schema_1 = require("../objects/MessageAttachmentWhereUniqueInput.schema");
const MessageAttachmentWhereInput_schema_1 = require("../objects/MessageAttachmentWhereInput.schema");
const MessageAttachmentOrderByWithRelationInput_schema_1 = require("../objects/MessageAttachmentOrderByWithRelationInput.schema");
const MessageAttachmentScalarFieldEnum_schema_1 = require("../enums/MessageAttachmentScalarFieldEnum.schema");
const MessageAttachmentCreateInput_schema_1 = require("../objects/MessageAttachmentCreateInput.schema");
const MessageAttachmentUncheckedCreateInput_schema_1 = require("../objects/MessageAttachmentUncheckedCreateInput.schema");
const MessageAttachmentCreateManyInput_schema_1 = require("../objects/MessageAttachmentCreateManyInput.schema");
const MessageAttachmentUpdateInput_schema_1 = require("../objects/MessageAttachmentUpdateInput.schema");
const MessageAttachmentUncheckedUpdateInput_schema_1 = require("../objects/MessageAttachmentUncheckedUpdateInput.schema");
const MessageAttachmentUpdateManyMutationInput_schema_1 = require("../objects/MessageAttachmentUpdateManyMutationInput.schema");
const MessageAttachmentUncheckedUpdateManyInput_schema_1 = require("../objects/MessageAttachmentUncheckedUpdateManyInput.schema");
const MessageAttachmentCountAggregateInput_schema_1 = require("../objects/MessageAttachmentCountAggregateInput.schema");
const MessageAttachmentMinAggregateInput_schema_1 = require("../objects/MessageAttachmentMinAggregateInput.schema");
const MessageAttachmentMaxAggregateInput_schema_1 = require("../objects/MessageAttachmentMaxAggregateInput.schema");
const MessageAttachmentOrderByWithAggregationInput_schema_1 = require("../objects/MessageAttachmentOrderByWithAggregationInput.schema");
const MessageAttachmentScalarWhereWithAggregatesInput_schema_1 = require("../objects/MessageAttachmentScalarWhereWithAggregatesInput.schema");
exports.MessageAttachmentInputSchema = {
    findUnique: zod_1.z.object({
        select: zod_1.z.lazy(() => MessageAttachmentSelect_schema_1.MessageAttachmentSelectObjectSchema.optional()), include: zod_1.z.lazy(() => MessageAttachmentInclude_schema_1.MessageAttachmentIncludeObjectSchema.optional()), where: MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema
    }).strict(), findFirst: zod_1.z.object({
        select: zod_1.z.lazy(() => MessageAttachmentSelect_schema_1.MessageAttachmentSelectObjectSchema.optional()), include: zod_1.z.lazy(() => MessageAttachmentInclude_schema_1.MessageAttachmentIncludeObjectSchema.optional()), where: MessageAttachmentWhereInput_schema_1.MessageAttachmentWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([MessageAttachmentOrderByWithRelationInput_schema_1.MessageAttachmentOrderByWithRelationInputObjectSchema, MessageAttachmentOrderByWithRelationInput_schema_1.MessageAttachmentOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(MessageAttachmentScalarFieldEnum_schema_1.MessageAttachmentScalarFieldEnumSchema).optional()
    }).strict(), findMany: zod_1.z.object({
        select: zod_1.z.lazy(() => MessageAttachmentSelect_schema_1.MessageAttachmentSelectObjectSchema.optional()), include: zod_1.z.lazy(() => MessageAttachmentInclude_schema_1.MessageAttachmentIncludeObjectSchema.optional()), where: MessageAttachmentWhereInput_schema_1.MessageAttachmentWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([MessageAttachmentOrderByWithRelationInput_schema_1.MessageAttachmentOrderByWithRelationInputObjectSchema, MessageAttachmentOrderByWithRelationInput_schema_1.MessageAttachmentOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(MessageAttachmentScalarFieldEnum_schema_1.MessageAttachmentScalarFieldEnumSchema).optional()
    }).strict(), create: zod_1.z.object({
        select: zod_1.z.lazy(() => MessageAttachmentSelect_schema_1.MessageAttachmentSelectObjectSchema.optional()), include: zod_1.z.lazy(() => MessageAttachmentInclude_schema_1.MessageAttachmentIncludeObjectSchema.optional()), data: zod_1.z.union([MessageAttachmentCreateInput_schema_1.MessageAttachmentCreateInputObjectSchema, MessageAttachmentUncheckedCreateInput_schema_1.MessageAttachmentUncheckedCreateInputObjectSchema])
    }).strict(), createMany: zod_1.z.object({
        data: zod_1.z.union([MessageAttachmentCreateManyInput_schema_1.MessageAttachmentCreateManyInputObjectSchema, zod_1.z.array(MessageAttachmentCreateManyInput_schema_1.MessageAttachmentCreateManyInputObjectSchema)]), skipDuplicates: zod_1.z.boolean().optional()
    }).strict(), 'delete': zod_1.z.object({
        select: zod_1.z.lazy(() => MessageAttachmentSelect_schema_1.MessageAttachmentSelectObjectSchema.optional()), include: zod_1.z.lazy(() => MessageAttachmentInclude_schema_1.MessageAttachmentIncludeObjectSchema.optional()), where: MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema
    }).strict(), deleteMany: zod_1.z.object({
        where: MessageAttachmentWhereInput_schema_1.MessageAttachmentWhereInputObjectSchema.optional()
    }).strict(), update: zod_1.z.object({
        select: zod_1.z.lazy(() => MessageAttachmentSelect_schema_1.MessageAttachmentSelectObjectSchema.optional()), include: zod_1.z.lazy(() => MessageAttachmentInclude_schema_1.MessageAttachmentIncludeObjectSchema.optional()), data: zod_1.z.union([MessageAttachmentUpdateInput_schema_1.MessageAttachmentUpdateInputObjectSchema, MessageAttachmentUncheckedUpdateInput_schema_1.MessageAttachmentUncheckedUpdateInputObjectSchema]), where: MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema
    }).strict(), updateMany: zod_1.z.object({
        data: zod_1.z.union([MessageAttachmentUpdateManyMutationInput_schema_1.MessageAttachmentUpdateManyMutationInputObjectSchema, MessageAttachmentUncheckedUpdateManyInput_schema_1.MessageAttachmentUncheckedUpdateManyInputObjectSchema]), where: MessageAttachmentWhereInput_schema_1.MessageAttachmentWhereInputObjectSchema.optional()
    }).strict(), upsert: zod_1.z.object({
        select: zod_1.z.lazy(() => MessageAttachmentSelect_schema_1.MessageAttachmentSelectObjectSchema.optional()), include: zod_1.z.lazy(() => MessageAttachmentInclude_schema_1.MessageAttachmentIncludeObjectSchema.optional()), where: MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema, create: zod_1.z.union([MessageAttachmentCreateInput_schema_1.MessageAttachmentCreateInputObjectSchema, MessageAttachmentUncheckedCreateInput_schema_1.MessageAttachmentUncheckedCreateInputObjectSchema]), update: zod_1.z.union([MessageAttachmentUpdateInput_schema_1.MessageAttachmentUpdateInputObjectSchema, MessageAttachmentUncheckedUpdateInput_schema_1.MessageAttachmentUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: zod_1.z.object({
        where: MessageAttachmentWhereInput_schema_1.MessageAttachmentWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([MessageAttachmentOrderByWithRelationInput_schema_1.MessageAttachmentOrderByWithRelationInputObjectSchema, MessageAttachmentOrderByWithRelationInput_schema_1.MessageAttachmentOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), _count: zod_1.z.union([zod_1.z.literal(true), MessageAttachmentCountAggregateInput_schema_1.MessageAttachmentCountAggregateInputObjectSchema]).optional(), _min: MessageAttachmentMinAggregateInput_schema_1.MessageAttachmentMinAggregateInputObjectSchema.optional(), _max: MessageAttachmentMaxAggregateInput_schema_1.MessageAttachmentMaxAggregateInputObjectSchema.optional()
    }).strict(), groupBy: zod_1.z.object({
        where: MessageAttachmentWhereInput_schema_1.MessageAttachmentWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([MessageAttachmentOrderByWithAggregationInput_schema_1.MessageAttachmentOrderByWithAggregationInputObjectSchema, MessageAttachmentOrderByWithAggregationInput_schema_1.MessageAttachmentOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MessageAttachmentScalarWhereWithAggregatesInput_schema_1.MessageAttachmentScalarWhereWithAggregatesInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), by: zod_1.z.array(MessageAttachmentScalarFieldEnum_schema_1.MessageAttachmentScalarFieldEnumSchema), _count: zod_1.z.union([zod_1.z.literal(true), MessageAttachmentCountAggregateInput_schema_1.MessageAttachmentCountAggregateInputObjectSchema]).optional(), _min: MessageAttachmentMinAggregateInput_schema_1.MessageAttachmentMinAggregateInputObjectSchema.optional(), _max: MessageAttachmentMaxAggregateInput_schema_1.MessageAttachmentMaxAggregateInputObjectSchema.optional()
    }).strict(), count: zod_1.z.object({
        where: MessageAttachmentWhereInput_schema_1.MessageAttachmentWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([MessageAttachmentOrderByWithRelationInput_schema_1.MessageAttachmentOrderByWithRelationInputObjectSchema, MessageAttachmentOrderByWithRelationInput_schema_1.MessageAttachmentOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(MessageAttachmentScalarFieldEnum_schema_1.MessageAttachmentScalarFieldEnumSchema).optional(), select: zod_1.z.union([zod_1.z.literal(true), MessageAttachmentCountAggregateInput_schema_1.MessageAttachmentCountAggregateInputObjectSchema]).optional()
    }).strict(),
};
