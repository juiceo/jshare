"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageArgsObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageSelect_schema_1 = require("./MessageSelect.schema");
const MessageInclude_schema_1 = require("./MessageInclude.schema");
exports.MessageArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => MessageSelect_schema_1.MessageSelectObjectSchema).optional().optional(), include: zod_1.z.lazy(() => MessageInclude_schema_1.MessageIncludeObjectSchema).optional().optional()
}).strict();
