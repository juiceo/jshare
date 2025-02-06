"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUncheckedCreateWithoutProfileInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupUncheckedCreateNestedManyWithoutCoverImageInput_schema_1 = require("./GroupUncheckedCreateNestedManyWithoutCoverImageInput.schema");
exports.ImageUncheckedCreateWithoutProfileInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), archived: zod_1.z.boolean().optional(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), path: zod_1.z.string(), bucket: zod_1.z.string(), uploadedById: zod_1.z.string(), blurhash: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), Group: zod_1.z.lazy(() => GroupUncheckedCreateNestedManyWithoutCoverImageInput_schema_1.GroupUncheckedCreateNestedManyWithoutCoverImageInputObjectSchema).optional()
}).strict();
