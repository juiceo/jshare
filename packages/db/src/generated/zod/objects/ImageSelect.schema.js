"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageSelectObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupInput_schema_1 = require("../input/GroupInput.schema");
const ProfileInput_schema_1 = require("../input/ProfileInput.schema");
const ImageCountOutputTypeArgs_schema_1 = require("./ImageCountOutputTypeArgs.schema");
exports.ImageSelectObjectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(), createdAt: zod_1.z.boolean().optional(), updatedAt: zod_1.z.boolean().optional(), path: zod_1.z.boolean().optional(), bucket: zod_1.z.boolean().optional(), uploadedById: zod_1.z.boolean().optional(), blurhash: zod_1.z.boolean().optional(), Group: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => GroupInput_schema_1.GroupInputSchema.findMany)]).optional(), Profile: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileInput_schema_1.ProfileInputSchema.findMany)]).optional(), _count: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ImageCountOutputTypeArgs_schema_1.ImageCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
