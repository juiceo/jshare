"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpsertWithoutAvatarInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileUpdateWithoutAvatarInput_schema_1 = require("./ProfileUpdateWithoutAvatarInput.schema");
const ProfileUncheckedUpdateWithoutAvatarInput_schema_1 = require("./ProfileUncheckedUpdateWithoutAvatarInput.schema");
const ProfileCreateWithoutAvatarInput_schema_1 = require("./ProfileCreateWithoutAvatarInput.schema");
const ProfileUncheckedCreateWithoutAvatarInput_schema_1 = require("./ProfileUncheckedCreateWithoutAvatarInput.schema");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
exports.ProfileUpsertWithoutAvatarInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateWithoutAvatarInput_schema_1.ProfileUpdateWithoutAvatarInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutAvatarInput_schema_1.ProfileUncheckedUpdateWithoutAvatarInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutAvatarInput_schema_1.ProfileCreateWithoutAvatarInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutAvatarInput_schema_1.ProfileUncheckedCreateWithoutAvatarInputObjectSchema)]), where: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional()
}).strict();
