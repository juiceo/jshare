"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupArgsObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupSelect_schema_1 = require("./GroupSelect.schema");
const GroupInclude_schema_1 = require("./GroupInclude.schema");
exports.GroupArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => GroupSelect_schema_1.GroupSelectObjectSchema).optional().optional(), include: zod_1.z.lazy(() => GroupInclude_schema_1.GroupIncludeObjectSchema).optional().optional()
}).strict();
