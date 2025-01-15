"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUncheckedCreateWithoutGroupInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const AuthorType_schema_1 = require("../enums/AuthorType.schema");
const MessageAttachmentUncheckedCreateNestedManyWithoutMessageInput_schema_1 = require("./MessageAttachmentUncheckedCreateNestedManyWithoutMessageInput.schema");
exports.MessageUncheckedCreateWithoutGroupInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), key: zod_1.z.string(), text: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), authorType: zod_1.z.lazy(() => AuthorType_schema_1.AuthorTypeSchema), authorId: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), attachments: zod_1.z.lazy(() => MessageAttachmentUncheckedCreateNestedManyWithoutMessageInput_schema_1.MessageAttachmentUncheckedCreateNestedManyWithoutMessageInputObjectSchema).optional()
}).strict();
