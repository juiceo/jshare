"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantSelectObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileArgs_schema_1 = require("./ProfileArgs.schema");
const GroupArgs_schema_1 = require("./GroupArgs.schema");
exports.GroupParticipantSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), createdAt: zod_1.z.boolean().optional(), updatedAt: zod_1.z.boolean().optional(), userId: zod_1.z.boolean().optional(), user: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileArgs_schema_1.ProfileArgsObjectSchema)]).optional(), groupId: zod_1.z.boolean().optional(), group: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => GroupArgs_schema_1.GroupArgsObjectSchema)]).optional(), role: zod_1.z.boolean().optional()
}).strict();
