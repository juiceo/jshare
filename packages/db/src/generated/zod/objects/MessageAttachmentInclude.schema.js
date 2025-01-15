"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentIncludeObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageArgs_schema_1 = require("./MessageArgs.schema");
const ExpenseArgs_schema_1 = require("./ExpenseArgs.schema");
exports.MessageAttachmentIncludeObjectSchema = zod_1.z.object({
    message: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => MessageArgs_schema_1.MessageArgsObjectSchema)]).optional(), expense: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ExpenseArgs_schema_1.ExpenseArgsObjectSchema)]).optional()
}).strict();
