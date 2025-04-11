"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentCreateWithoutExpenseInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentType_schema_1 = require("../enums/MessageAttachmentType.schema");
const MessageCreateNestedOneWithoutAttachmentsInput_schema_1 = require("./MessageCreateNestedOneWithoutAttachmentsInput.schema");
exports.MessageAttachmentCreateWithoutExpenseInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), archived: zod_1.z.boolean().optional(), archivedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), type: zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema), message: zod_1.z.lazy(() => MessageCreateNestedOneWithoutAttachmentsInput_schema_1.MessageCreateNestedOneWithoutAttachmentsInputObjectSchema)
}).strict();
