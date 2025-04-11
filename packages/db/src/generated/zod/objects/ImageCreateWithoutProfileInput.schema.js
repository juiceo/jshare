"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCreateWithoutProfileInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupCreateNestedOneWithoutCoverImageInput_schema_1 = require("./GroupCreateNestedOneWithoutCoverImageInput.schema");
exports.ImageCreateWithoutProfileInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), archived: zod_1.z.boolean().optional(), archivedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), path: zod_1.z.string(), bucket: zod_1.z.string(), uploadedById: zod_1.z.string(), blurhash: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), Group: zod_1.z.lazy(() => GroupCreateNestedOneWithoutCoverImageInput_schema_1.GroupCreateNestedOneWithoutCoverImageInputObjectSchema).optional()
}).strict();
