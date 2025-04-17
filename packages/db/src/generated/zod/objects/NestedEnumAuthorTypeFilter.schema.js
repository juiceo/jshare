"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumAuthorTypeFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const AuthorType_schema_1 = require("../enums/AuthorType.schema");
exports.NestedEnumAuthorTypeFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => AuthorType_schema_1.AuthorTypeSchema).optional().optional(), in: zod_1.z.lazy(() => AuthorType_schema_1.AuthorTypeSchema).array().optional().optional(), notIn: zod_1.z.lazy(() => AuthorType_schema_1.AuthorTypeSchema).array().optional().optional(), not: zod_1.z.union([zod_1.z.lazy(() => AuthorType_schema_1.AuthorTypeSchema),
        zod_1.z.lazy(() => exports.NestedEnumAuthorTypeFilterObjectSchema)]).optional()
}).strict();
