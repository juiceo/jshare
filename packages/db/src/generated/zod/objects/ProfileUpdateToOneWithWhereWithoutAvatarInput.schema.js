"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateToOneWithWhereWithoutAvatarInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
const ProfileUpdateWithoutAvatarInput_schema_1 = require("./ProfileUpdateWithoutAvatarInput.schema");
const ProfileUncheckedUpdateWithoutAvatarInput_schema_1 = require("./ProfileUncheckedUpdateWithoutAvatarInput.schema");
exports.ProfileUpdateToOneWithWhereWithoutAvatarInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateWithoutAvatarInput_schema_1.ProfileUpdateWithoutAvatarInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutAvatarInput_schema_1.ProfileUncheckedUpdateWithoutAvatarInputObjectSchema)])
}).strict();
