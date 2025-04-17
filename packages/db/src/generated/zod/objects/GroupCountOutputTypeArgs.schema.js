"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupCountOutputTypeArgsObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupCountOutputTypeSelect_schema_1 = require("./GroupCountOutputTypeSelect.schema");
exports.GroupCountOutputTypeArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => GroupCountOutputTypeSelect_schema_1.GroupCountOutputTypeSelectObjectSchema).optional().optional()
}).strict();
