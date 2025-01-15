"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseSelectObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileArgs_schema_1 = require("./ProfileArgs.schema");
const GroupArgs_schema_1 = require("./GroupArgs.schema");
const ExpenseShareInput_schema_1 = require("../input/ExpenseShareInput.schema");
const MessageAttachmentInput_schema_1 = require("../input/MessageAttachmentInput.schema");
const ExpenseCountOutputTypeArgs_schema_1 = require("./ExpenseCountOutputTypeArgs.schema");
exports.ExpenseSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), createdAt: zod_1.z.boolean().optional(), updatedAt: zod_1.z.boolean().optional(), ownerId: zod_1.z.boolean().optional(), owner: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileArgs_schema_1.ProfileArgsObjectSchema)]).optional(), payerId: zod_1.z.boolean().optional(), payer: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileArgs_schema_1.ProfileArgsObjectSchema)]).optional(), groupId: zod_1.z.boolean().optional(), group: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => GroupArgs_schema_1.GroupArgsObjectSchema)]).optional(), amount: zod_1.z.boolean().optional(), currency: zod_1.z.boolean().optional(), description: zod_1.z.boolean().optional(), conversion: zod_1.z.boolean().optional(), shares: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ExpenseShareInput_schema_1.ExpenseShareInputSchema.findMany)]).optional(), messageAttachments: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => MessageAttachmentInput_schema_1.MessageAttachmentInputSchema.findMany)]).optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ExpenseCountOutputTypeArgs_schema_1.ExpenseCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
