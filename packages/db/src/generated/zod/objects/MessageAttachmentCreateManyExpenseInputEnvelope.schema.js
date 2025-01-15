"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentCreateManyExpenseInputEnvelopeObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentCreateManyExpenseInput_schema_1 = require("./MessageAttachmentCreateManyExpenseInput.schema");
exports.MessageAttachmentCreateManyExpenseInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentCreateManyExpenseInput_schema_1.MessageAttachmentCreateManyExpenseInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentCreateManyExpenseInput_schema_1.MessageAttachmentCreateManyExpenseInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
