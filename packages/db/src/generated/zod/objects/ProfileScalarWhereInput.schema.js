"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileScalarWhereInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const EnumCurrencyCodeFilter_schema_1 = require("./EnumCurrencyCodeFilter.schema");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const BoolNullableFilter_schema_1 = require("./BoolNullableFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
exports.ProfileScalarWhereInputObjectSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ProfileScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ProfileScalarWhereInputObjectSchema).array()]).optional(), OR: zod_1.z.lazy(() => exports.ProfileScalarWhereInputObjectSchema).array().optional(), NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ProfileScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ProfileScalarWhereInputObjectSchema).array()]).optional(), userId: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), email: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), firstName: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), lastName: zod_1.z.union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema),
        zod_1.z.string()]).optional(), lastActivity: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), currency: zod_1.z.union([zod_1.z.lazy(() => EnumCurrencyCodeFilter_schema_1.EnumCurrencyCodeFilterObjectSchema),
        zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema)]).optional(), avatarId: zod_1.z.union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema),
        zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), temporary: zod_1.z.union([zod_1.z.lazy(() => BoolNullableFilter_schema_1.BoolNullableFilterObjectSchema),
        zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable(), termsAcceptedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), showInSearch: zod_1.z.union([zod_1.z.lazy(() => BoolFilter_schema_1.BoolFilterObjectSchema),
        zod_1.z.boolean()]).optional(), createdAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional(), updatedAt: zod_1.z.union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema),
        zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()])]).optional()
}).strict();
