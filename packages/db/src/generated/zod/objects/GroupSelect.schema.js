"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupSelectObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupParticipantInput_schema_1 = require("../input/GroupParticipantInput.schema");
const ImageArgs_schema_1 = require("./ImageArgs.schema");
const MessageInput_schema_1 = require("../input/MessageInput.schema");
const ExpenseInput_schema_1 = require("../input/ExpenseInput.schema");
const PaymentInput_schema_1 = require("../input/PaymentInput.schema");
const GroupCountOutputTypeArgs_schema_1 = require("./GroupCountOutputTypeArgs.schema");
exports.GroupSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), archived: zod_1.z.boolean().optional(), archivedAt: zod_1.z.boolean().optional(), createdAt: zod_1.z.boolean().optional(), updatedAt: zod_1.z.boolean().optional(), name: zod_1.z.boolean().optional(), currency: zod_1.z.boolean().optional(), participants: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => GroupParticipantInput_schema_1.GroupParticipantInputSchema.findMany)]).optional(), coverImageId: zod_1.z.boolean().optional(), coverImage: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ImageArgs_schema_1.ImageArgsObjectSchema)]).optional(), inviteCode: zod_1.z.boolean().optional(), messages: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => MessageInput_schema_1.MessageInputSchema.findMany)]).optional(), expenses: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ExpenseInput_schema_1.ExpenseInputSchema.findMany)]).optional(), payments: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => PaymentInput_schema_1.PaymentInputSchema.findMany)]).optional(), lastActivity: zod_1.z.boolean().optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => GroupCountOutputTypeArgs_schema_1.GroupCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
