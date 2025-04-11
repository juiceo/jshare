"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupNullableScalarRelationFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
exports.GroupNullableScalarRelationFilterObjectSchema = zod_1.z.object({
    is: zod_1.z.union([zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), isNot: zod_1.z.union([zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
