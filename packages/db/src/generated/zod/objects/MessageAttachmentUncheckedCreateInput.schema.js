"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentUncheckedCreateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentType_schema_1 = require("../enums/MessageAttachmentType.schema");
exports.MessageAttachmentUncheckedCreateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional().optional(), archived: zod_1.z.boolean().optional().optional(), archivedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), messageId: zod_1.z.string(), type: zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema), expenseId: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable()
}).strict();
