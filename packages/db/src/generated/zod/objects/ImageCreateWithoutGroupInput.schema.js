"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCreateWithoutGroupInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateNestedManyWithoutAvatarInput_schema_1 = require("./ProfileCreateNestedManyWithoutAvatarInput.schema");
exports.ImageCreateWithoutGroupInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), archived: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), path: zod_1.z.string(), bucket: zod_1.z.string(), uploadedById: zod_1.z.string(), blurhash: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), Profile: zod_1.z.lazy(() => ProfileCreateNestedManyWithoutAvatarInput_schema_1.ProfileCreateNestedManyWithoutAvatarInputObjectSchema).optional()
}).strict();
