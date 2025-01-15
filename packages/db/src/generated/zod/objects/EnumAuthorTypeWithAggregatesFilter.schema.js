"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAuthorTypeWithAggregatesFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const AuthorType_schema_1 = require("../enums/AuthorType.schema");
const NestedEnumAuthorTypeWithAggregatesFilter_schema_1 = require("./NestedEnumAuthorTypeWithAggregatesFilter.schema");
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedEnumAuthorTypeFilter_schema_1 = require("./NestedEnumAuthorTypeFilter.schema");
exports.EnumAuthorTypeWithAggregatesFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => AuthorType_schema_1.AuthorTypeSchema).optional(), in: zod_1.z.lazy(() => AuthorType_schema_1.AuthorTypeSchema).array().optional(), notIn: zod_1.z.lazy(() => AuthorType_schema_1.AuthorTypeSchema).array().optional(), not: zod_1.z.union([zod_1.z.lazy(() => AuthorType_schema_1.AuthorTypeSchema),
        zod_1.z.lazy(() => NestedEnumAuthorTypeWithAggregatesFilter_schema_1.NestedEnumAuthorTypeWithAggregatesFilterObjectSchema)]).optional(), _count: zod_1.z.lazy(() => NestedIntFilter_schema_1.NestedIntFilterObjectSchema).optional(), _min: zod_1.z.lazy(() => NestedEnumAuthorTypeFilter_schema_1.NestedEnumAuthorTypeFilterObjectSchema).optional(), _max: zod_1.z.lazy(() => NestedEnumAuthorTypeFilter_schema_1.NestedEnumAuthorTypeFilterObjectSchema).optional()
}).strict();
