"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateManyWithWhereWithoutAvatarInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileScalarWhereInput_schema_1 = require("./ProfileScalarWhereInput.schema");
const ProfileUpdateManyMutationInput_schema_1 = require("./ProfileUpdateManyMutationInput.schema");
const ProfileUncheckedUpdateManyWithoutAvatarInput_schema_1 = require("./ProfileUncheckedUpdateManyWithoutAvatarInput.schema");
exports.ProfileUpdateManyWithWhereWithoutAvatarInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ProfileScalarWhereInput_schema_1.ProfileScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateManyMutationInput_schema_1.ProfileUpdateManyMutationInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateManyWithoutAvatarInput_schema_1.ProfileUncheckedUpdateManyWithoutAvatarInputObjectSchema)])
}).strict();
