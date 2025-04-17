"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSelectObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupArgs_schema_1 = require("./GroupArgs.schema");
const ProfileArgs_schema_1 = require("./ProfileArgs.schema");
exports.PaymentSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional().optional(), archived: zod_1.z.boolean().optional().optional(), archivedAt: zod_1.z.boolean().optional().optional(), createdAt: zod_1.z.boolean().optional().optional(), updatedAt: zod_1.z.boolean().optional().optional(), groupId: zod_1.z.boolean().optional().optional(), group: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => GroupArgs_schema_1.GroupArgsObjectSchema)]).optional(), amount: zod_1.z.boolean().optional().optional(), currency: zod_1.z.boolean().optional().optional(), conversion: zod_1.z.boolean().optional().optional(), recipientId: zod_1.z.boolean().optional().optional(), recipient: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileArgs_schema_1.ProfileArgsObjectSchema)]).optional(), payerId: zod_1.z.boolean().optional().optional(), payer: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileArgs_schema_1.ProfileArgsObjectSchema)]).optional()
}).strict();
