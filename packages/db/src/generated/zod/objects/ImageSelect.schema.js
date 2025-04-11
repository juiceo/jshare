"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageSelectObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupArgs_schema_1 = require("./GroupArgs.schema");
const ProfileArgs_schema_1 = require("./ProfileArgs.schema");
exports.ImageSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), archived: zod_1.z.boolean().optional(), archivedAt: zod_1.z.boolean().optional(), createdAt: zod_1.z.boolean().optional(), updatedAt: zod_1.z.boolean().optional(), path: zod_1.z.boolean().optional(), bucket: zod_1.z.boolean().optional(), uploadedById: zod_1.z.boolean().optional(), blurhash: zod_1.z.boolean().optional(), Group: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => GroupArgs_schema_1.GroupArgsObjectSchema)]).optional(), Profile: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileArgs_schema_1.ProfileArgsObjectSchema)]).optional()
}).strict();
