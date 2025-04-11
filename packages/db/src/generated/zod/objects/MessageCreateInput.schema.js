"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCreateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const AuthorType_schema_1 = require("../enums/AuthorType.schema");
const ProfileCreateNestedOneWithoutMessagesInput_schema_1 = require("./ProfileCreateNestedOneWithoutMessagesInput.schema");
const GroupCreateNestedOneWithoutMessagesInput_schema_1 = require("./GroupCreateNestedOneWithoutMessagesInput.schema");
const MessageAttachmentCreateNestedManyWithoutMessageInput_schema_1 = require("./MessageAttachmentCreateNestedManyWithoutMessageInput.schema");
exports.MessageCreateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), archived: zod_1.z.boolean().optional(), archivedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), key: zod_1.z.string(), text: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), authorType: zod_1.z.lazy(() => AuthorType_schema_1.AuthorTypeSchema), author: zod_1.z.lazy(() => ProfileCreateNestedOneWithoutMessagesInput_schema_1.ProfileCreateNestedOneWithoutMessagesInputObjectSchema).optional(), group: zod_1.z.lazy(() => GroupCreateNestedOneWithoutMessagesInput_schema_1.GroupCreateNestedOneWithoutMessagesInputObjectSchema), attachments: zod_1.z.lazy(() => MessageAttachmentCreateNestedManyWithoutMessageInput_schema_1.MessageAttachmentCreateNestedManyWithoutMessageInputObjectSchema).optional()
}).strict();
