"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupScalarRelationFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
exports.GroupScalarRelationFilterObjectSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema).optional().optional(), isNot: zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema).optional().optional()
}).strict();
