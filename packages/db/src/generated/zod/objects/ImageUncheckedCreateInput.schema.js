"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUncheckedCreateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupUncheckedCreateNestedManyWithoutCoverImageInput_schema_1 = require("./GroupUncheckedCreateNestedManyWithoutCoverImageInput.schema");
const ProfileUncheckedCreateNestedManyWithoutAvatarInput_schema_1 = require("./ProfileUncheckedCreateNestedManyWithoutAvatarInput.schema");
exports.ImageUncheckedCreateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), archived: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), path: zod_1.z.string(), bucket: zod_1.z.string(), uploadedById: zod_1.z.string(), blurhash: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), Group: zod_1.z.lazy(() => GroupUncheckedCreateNestedManyWithoutCoverImageInput_schema_1.GroupUncheckedCreateNestedManyWithoutCoverImageInputObjectSchema).optional(), Profile: zod_1.z.lazy(() => ProfileUncheckedCreateNestedManyWithoutAvatarInput_schema_1.ProfileUncheckedCreateNestedManyWithoutAvatarInputObjectSchema).optional()
}).strict();
