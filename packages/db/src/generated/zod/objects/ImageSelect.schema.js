"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageSelectObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupArgs_schema_1 = require("./GroupArgs.schema");
const ProfileArgs_schema_1 = require("./ProfileArgs.schema");
exports.ImageSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional().optional(), archived: zod_1.z.boolean().optional().optional(), archivedAt: zod_1.z.boolean().optional().optional(), createdAt: zod_1.z.boolean().optional().optional(), updatedAt: zod_1.z.boolean().optional().optional(), path: zod_1.z.boolean().optional().optional(), bucket: zod_1.z.boolean().optional().optional(), uploadedById: zod_1.z.boolean().optional().optional(), blurhash: zod_1.z.boolean().optional().optional(), Group: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => GroupArgs_schema_1.GroupArgsObjectSchema)]).optional(), Profile: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileArgs_schema_1.ProfileArgsObjectSchema)]).optional()
}).strict();
