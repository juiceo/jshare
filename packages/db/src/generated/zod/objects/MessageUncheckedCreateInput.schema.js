"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUncheckedCreateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const AuthorType_schema_1 = require("../enums/AuthorType.schema");
const MessageAttachmentUncheckedCreateNestedManyWithoutMessageInput_schema_1 = require("./MessageAttachmentUncheckedCreateNestedManyWithoutMessageInput.schema");
exports.MessageUncheckedCreateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional().optional(), archived: zod_1.z.boolean().optional().optional(), archivedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), key: zod_1.z.string(), text: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), authorType: zod_1.z.lazy(() => AuthorType_schema_1.AuthorTypeSchema), authorId: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), groupId: zod_1.z.string(), attachments: zod_1.z.lazy(() => MessageAttachmentUncheckedCreateNestedManyWithoutMessageInput_schema_1.MessageAttachmentUncheckedCreateNestedManyWithoutMessageInputObjectSchema).optional().optional()
}).strict();
