"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupListRelationFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
exports.GroupListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema).optional(), some: zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema).optional(), none: zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema).optional()
}).strict();
