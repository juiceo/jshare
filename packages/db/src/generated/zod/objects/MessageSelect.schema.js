"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSelectObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileArgs_schema_1 = require("./ProfileArgs.schema");
const GroupArgs_schema_1 = require("./GroupArgs.schema");
const MessageAttachmentInput_schema_1 = require("../input/MessageAttachmentInput.schema");
const MessageCountOutputTypeArgs_schema_1 = require("./MessageCountOutputTypeArgs.schema");
exports.MessageSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional().optional(), archived: zod_1.z.boolean().optional().optional(), archivedAt: zod_1.z.boolean().optional().optional(), createdAt: zod_1.z.boolean().optional().optional(), updatedAt: zod_1.z.boolean().optional().optional(), key: zod_1.z.boolean().optional().optional(), text: zod_1.z.boolean().optional().optional(), authorType: zod_1.z.boolean().optional().optional(), authorId: zod_1.z.boolean().optional().optional(), author: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileArgs_schema_1.ProfileArgsObjectSchema)]).optional(), groupId: zod_1.z.boolean().optional().optional(), group: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => GroupArgs_schema_1.GroupArgsObjectSchema)]).optional(), attachments: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => MessageAttachmentInput_schema_1.MessageAttachmentInputSchema.findMany)]).optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => MessageCountOutputTypeArgs_schema_1.MessageCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
