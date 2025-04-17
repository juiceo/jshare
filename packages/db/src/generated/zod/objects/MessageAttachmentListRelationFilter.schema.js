"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentListRelationFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentWhereInput_schema_1 = require("./MessageAttachmentWhereInput.schema");
exports.MessageAttachmentListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => MessageAttachmentWhereInput_schema_1.MessageAttachmentWhereInputObjectSchema).optional().optional(), some: zod_1.z.lazy(() => MessageAttachmentWhereInput_schema_1.MessageAttachmentWhereInputObjectSchema).optional().optional(), none: zod_1.z.lazy(() => MessageAttachmentWhereInput_schema_1.MessageAttachmentWhereInputObjectSchema).optional().optional()
}).strict();
