"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageInputSchema = void 0;
const zod_1 = require("zod");
;
;
const ImageSelect_schema_1 = require("../objects/ImageSelect.schema");
const ImageInclude_schema_1 = require("../objects/ImageInclude.schema");
const ImageWhereUniqueInput_schema_1 = require("../objects/ImageWhereUniqueInput.schema");
const ImageWhereInput_schema_1 = require("../objects/ImageWhereInput.schema");
const ImageOrderByWithRelationInput_schema_1 = require("../objects/ImageOrderByWithRelationInput.schema");
const ImageScalarFieldEnum_schema_1 = require("../enums/ImageScalarFieldEnum.schema");
const ImageCreateInput_schema_1 = require("../objects/ImageCreateInput.schema");
const ImageUncheckedCreateInput_schema_1 = require("../objects/ImageUncheckedCreateInput.schema");
const ImageCreateManyInput_schema_1 = require("../objects/ImageCreateManyInput.schema");
const ImageUpdateInput_schema_1 = require("../objects/ImageUpdateInput.schema");
const ImageUncheckedUpdateInput_schema_1 = require("../objects/ImageUncheckedUpdateInput.schema");
const ImageUpdateManyMutationInput_schema_1 = require("../objects/ImageUpdateManyMutationInput.schema");
const ImageUncheckedUpdateManyInput_schema_1 = require("../objects/ImageUncheckedUpdateManyInput.schema");
const ImageCountAggregateInput_schema_1 = require("../objects/ImageCountAggregateInput.schema");
const ImageMinAggregateInput_schema_1 = require("../objects/ImageMinAggregateInput.schema");
const ImageMaxAggregateInput_schema_1 = require("../objects/ImageMaxAggregateInput.schema");
const ImageOrderByWithAggregationInput_schema_1 = require("../objects/ImageOrderByWithAggregationInput.schema");
const ImageScalarWhereWithAggregatesInput_schema_1 = require("../objects/ImageScalarWhereWithAggregatesInput.schema");
exports.ImageInputSchema = {
    findUnique: zod_1.z.object({
        select: zod_1.z.lazy(() => ImageSelect_schema_1.ImageSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ImageInclude_schema_1.ImageIncludeObjectSchema.optional()), where: ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema
    }).strict(), findFirst: zod_1.z.object({
        select: zod_1.z.lazy(() => ImageSelect_schema_1.ImageSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ImageInclude_schema_1.ImageIncludeObjectSchema.optional()), where: ImageWhereInput_schema_1.ImageWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ImageOrderByWithRelationInput_schema_1.ImageOrderByWithRelationInputObjectSchema, ImageOrderByWithRelationInput_schema_1.ImageOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(ImageScalarFieldEnum_schema_1.ImageScalarFieldEnumSchema).optional()
    }).strict(), findMany: zod_1.z.object({
        select: zod_1.z.lazy(() => ImageSelect_schema_1.ImageSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ImageInclude_schema_1.ImageIncludeObjectSchema.optional()), where: ImageWhereInput_schema_1.ImageWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ImageOrderByWithRelationInput_schema_1.ImageOrderByWithRelationInputObjectSchema, ImageOrderByWithRelationInput_schema_1.ImageOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(ImageScalarFieldEnum_schema_1.ImageScalarFieldEnumSchema).optional()
    }).strict(), create: zod_1.z.object({
        select: zod_1.z.lazy(() => ImageSelect_schema_1.ImageSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ImageInclude_schema_1.ImageIncludeObjectSchema.optional()), data: zod_1.z.union([ImageCreateInput_schema_1.ImageCreateInputObjectSchema, ImageUncheckedCreateInput_schema_1.ImageUncheckedCreateInputObjectSchema])
    }).strict(), createMany: zod_1.z.object({
        data: zod_1.z.union([ImageCreateManyInput_schema_1.ImageCreateManyInputObjectSchema, zod_1.z.array(ImageCreateManyInput_schema_1.ImageCreateManyInputObjectSchema)]), skipDuplicates: zod_1.z.boolean().optional()
    }).strict(), 'delete': zod_1.z.object({
        select: zod_1.z.lazy(() => ImageSelect_schema_1.ImageSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ImageInclude_schema_1.ImageIncludeObjectSchema.optional()), where: ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema
    }).strict(), deleteMany: zod_1.z.object({
        where: ImageWhereInput_schema_1.ImageWhereInputObjectSchema.optional()
    }).strict(), update: zod_1.z.object({
        select: zod_1.z.lazy(() => ImageSelect_schema_1.ImageSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ImageInclude_schema_1.ImageIncludeObjectSchema.optional()), data: zod_1.z.union([ImageUpdateInput_schema_1.ImageUpdateInputObjectSchema, ImageUncheckedUpdateInput_schema_1.ImageUncheckedUpdateInputObjectSchema]), where: ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema
    }).strict(), updateMany: zod_1.z.object({
        data: zod_1.z.union([ImageUpdateManyMutationInput_schema_1.ImageUpdateManyMutationInputObjectSchema, ImageUncheckedUpdateManyInput_schema_1.ImageUncheckedUpdateManyInputObjectSchema]), where: ImageWhereInput_schema_1.ImageWhereInputObjectSchema.optional()
    }).strict(), upsert: zod_1.z.object({
        select: zod_1.z.lazy(() => ImageSelect_schema_1.ImageSelectObjectSchema.optional()), include: zod_1.z.lazy(() => ImageInclude_schema_1.ImageIncludeObjectSchema.optional()), where: ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema, create: zod_1.z.union([ImageCreateInput_schema_1.ImageCreateInputObjectSchema, ImageUncheckedCreateInput_schema_1.ImageUncheckedCreateInputObjectSchema]), update: zod_1.z.union([ImageUpdateInput_schema_1.ImageUpdateInputObjectSchema, ImageUncheckedUpdateInput_schema_1.ImageUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: zod_1.z.object({
        where: ImageWhereInput_schema_1.ImageWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ImageOrderByWithRelationInput_schema_1.ImageOrderByWithRelationInputObjectSchema, ImageOrderByWithRelationInput_schema_1.ImageOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), _count: zod_1.z.union([zod_1.z.literal(true), ImageCountAggregateInput_schema_1.ImageCountAggregateInputObjectSchema]).optional(), _min: ImageMinAggregateInput_schema_1.ImageMinAggregateInputObjectSchema.optional(), _max: ImageMaxAggregateInput_schema_1.ImageMaxAggregateInputObjectSchema.optional()
    }).strict(), groupBy: zod_1.z.object({
        where: ImageWhereInput_schema_1.ImageWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ImageOrderByWithAggregationInput_schema_1.ImageOrderByWithAggregationInputObjectSchema, ImageOrderByWithAggregationInput_schema_1.ImageOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ImageScalarWhereWithAggregatesInput_schema_1.ImageScalarWhereWithAggregatesInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), by: zod_1.z.array(ImageScalarFieldEnum_schema_1.ImageScalarFieldEnumSchema), _count: zod_1.z.union([zod_1.z.literal(true), ImageCountAggregateInput_schema_1.ImageCountAggregateInputObjectSchema]).optional(), _min: ImageMinAggregateInput_schema_1.ImageMinAggregateInputObjectSchema.optional(), _max: ImageMaxAggregateInput_schema_1.ImageMaxAggregateInputObjectSchema.optional()
    }).strict(), count: zod_1.z.object({
        where: ImageWhereInput_schema_1.ImageWhereInputObjectSchema.optional(), orderBy: zod_1.z.union([ImageOrderByWithRelationInput_schema_1.ImageOrderByWithRelationInputObjectSchema, ImageOrderByWithRelationInput_schema_1.ImageOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema.optional(), take: zod_1.z.number().optional(), skip: zod_1.z.number().optional(), distinct: zod_1.z.array(ImageScalarFieldEnum_schema_1.ImageScalarFieldEnumSchema).optional(), select: zod_1.z.union([zod_1.z.literal(true), ImageCountAggregateInput_schema_1.ImageCountAggregateInputObjectSchema]).optional()
    }).strict(),
};
