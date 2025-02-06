"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentCreateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentType_schema_1 = require("../enums/MessageAttachmentType.schema");
const MessageCreateNestedOneWithoutAttachmentsInput_schema_1 = require("./MessageCreateNestedOneWithoutAttachmentsInput.schema");
const ExpenseCreateNestedOneWithoutMessageAttachmentsInput_schema_1 = require("./ExpenseCreateNestedOneWithoutMessageAttachmentsInput.schema");
exports.MessageAttachmentCreateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), archived: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), type: zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema), message: zod_1.z.lazy(() => MessageCreateNestedOneWithoutAttachmentsInput_schema_1.MessageCreateNestedOneWithoutAttachmentsInputObjectSchema), expense: zod_1.z.lazy(() => ExpenseCreateNestedOneWithoutMessageAttachmentsInput_schema_1.ExpenseCreateNestedOneWithoutMessageAttachmentsInputObjectSchema).optional()
}).strict();
