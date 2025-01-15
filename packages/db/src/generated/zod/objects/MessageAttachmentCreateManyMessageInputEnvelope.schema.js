"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentCreateManyMessageInputEnvelopeObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentCreateManyMessageInput_schema_1 = require("./MessageAttachmentCreateManyMessageInput.schema");
exports.MessageAttachmentCreateManyMessageInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentCreateManyMessageInput_schema_1.MessageAttachmentCreateManyMessageInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentCreateManyMessageInput_schema_1.MessageAttachmentCreateManyMessageInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
