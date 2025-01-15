"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCountOutputTypeArgsObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageCountOutputTypeSelect_schema_1 = require("./MessageCountOutputTypeSelect.schema");
exports.MessageCountOutputTypeArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => MessageCountOutputTypeSelect_schema_1.MessageCountOutputTypeSelectObjectSchema).optional()
}).strict();
