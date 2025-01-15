"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseIncludeObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileArgs_schema_1 = require("./ProfileArgs.schema");
const GroupArgs_schema_1 = require("./GroupArgs.schema");
const ExpenseShareInput_schema_1 = require("../input/ExpenseShareInput.schema");
const MessageAttachmentInput_schema_1 = require("../input/MessageAttachmentInput.schema");
const ExpenseCountOutputTypeArgs_schema_1 = require("./ExpenseCountOutputTypeArgs.schema");
exports.ExpenseIncludeObjectSchema = zod_1.z.object({
    owner: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileArgs_schema_1.ProfileArgsObjectSchema)]).optional(), payer: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileArgs_schema_1.ProfileArgsObjectSchema)]).optional(), group: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => GroupArgs_schema_1.GroupArgsObjectSchema)]).optional(), shares: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ExpenseShareInput_schema_1.ExpenseShareInputSchema.findMany)]).optional(), messageAttachments: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => MessageAttachmentInput_schema_1.MessageAttachmentInputSchema.findMany)]).optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ExpenseCountOutputTypeArgs_schema_1.ExpenseCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
