"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUncheckedCreateWithoutProfileInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupUncheckedCreateNestedOneWithoutCoverImageInput_schema_1 = require("./GroupUncheckedCreateNestedOneWithoutCoverImageInput.schema");
exports.ImageUncheckedCreateWithoutProfileInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional().optional(), archived: zod_1.z.boolean().optional().optional(), archivedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), path: zod_1.z.string(), bucket: zod_1.z.string(), uploadedById: zod_1.z.string(), blurhash: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), Group: zod_1.z.lazy(() => GroupUncheckedCreateNestedOneWithoutCoverImageInput_schema_1.GroupUncheckedCreateNestedOneWithoutCoverImageInputObjectSchema).optional().optional()
}).strict();
