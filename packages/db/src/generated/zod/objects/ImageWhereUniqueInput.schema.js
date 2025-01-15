"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageWhereUniqueInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ImageWhereInput_schema_1 = require("./ImageWhereInput.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const GroupListRelationFilter_schema_1 = require("./GroupListRelationFilter.schema");
const ProfileListRelationFilter_schema_1 = require("./ProfileListRelationFilter.schema");
exports.ImageWhereUniqueInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), AND: zod_1.z.union([zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema),
        zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema),
        zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema).array()]).optional(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), path: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), bucket: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), uploadedById: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), blurhash: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), Group: zod_1.z.lazy(() => GroupListRelationFilter_schema_1.GroupListRelationFilterObjectSchema).optional(), Profile: zod_1.z.lazy(() => ProfileListRelationFilter_schema_1.ProfileListRelationFilterObjectSchema).optional()
}).strict();
