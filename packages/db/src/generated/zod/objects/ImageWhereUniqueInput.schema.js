"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageWhereUniqueInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ImageWhereInput_schema_1 = require("./ImageWhereInput.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const GroupNullableScalarRelationFilter_schema_1 = require("./GroupNullableScalarRelationFilter.schema");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
const ProfileNullableScalarRelationFilter_schema_1 = require("./ProfileNullableScalarRelationFilter.schema");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
exports.ImageWhereUniqueInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), AND: zod_1.z.union([zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema),
        zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema),
        zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema).array()]).optional(), archived: zod_1.z.union([zod_1.z.lazy(() => BoolFilter_schema_1.BoolFilterObjectSchema),
        zod_1.z.boolean()]).optional(), archivedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), path: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), bucket: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), uploadedById: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), blurhash: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), Group: zod_1.z.union([zod_1.z.lazy(() => GroupNullableScalarRelationFilter_schema_1.GroupNullableScalarRelationFilterObjectSchema),
        zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), Profile: zod_1.z.union([zod_1.z.lazy(() => ProfileNullableScalarRelationFilter_schema_1.ProfileNullableScalarRelationFilterObjectSchema),
        zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
