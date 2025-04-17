"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentArgsObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentSelect_schema_1 = require("./MessageAttachmentSelect.schema");
const MessageAttachmentInclude_schema_1 = require("./MessageAttachmentInclude.schema");
exports.MessageAttachmentArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => MessageAttachmentSelect_schema_1.MessageAttachmentSelectObjectSchema).optional().optional(), include: zod_1.z.lazy(() => MessageAttachmentInclude_schema_1.MessageAttachmentIncludeObjectSchema).optional().optional()
}).strict();
