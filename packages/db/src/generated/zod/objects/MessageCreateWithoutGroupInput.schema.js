"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCreateWithoutGroupInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const AuthorType_schema_1 = require("../enums/AuthorType.schema");
const ProfileCreateNestedOneWithoutMessagesInput_schema_1 = require("./ProfileCreateNestedOneWithoutMessagesInput.schema");
const MessageAttachmentCreateNestedManyWithoutMessageInput_schema_1 = require("./MessageAttachmentCreateNestedManyWithoutMessageInput.schema");
exports.MessageCreateWithoutGroupInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional().optional(), archived: zod_1.z.boolean().optional().optional(), archivedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), key: zod_1.z.string(), text: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), authorType: zod_1.z.lazy(() => AuthorType_schema_1.AuthorTypeSchema), author: zod_1.z.lazy(() => ProfileCreateNestedOneWithoutMessagesInput_schema_1.ProfileCreateNestedOneWithoutMessagesInputObjectSchema).optional().optional(), attachments: zod_1.z.lazy(() => MessageAttachmentCreateNestedManyWithoutMessageInput_schema_1.MessageAttachmentCreateNestedManyWithoutMessageInputObjectSchema).optional().optional()
}).strict();
