"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpsertWithoutGroupsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileUpdateWithoutGroupsInput_schema_1 = require("./ProfileUpdateWithoutGroupsInput.schema");
const ProfileUncheckedUpdateWithoutGroupsInput_schema_1 = require("./ProfileUncheckedUpdateWithoutGroupsInput.schema");
const ProfileCreateWithoutGroupsInput_schema_1 = require("./ProfileCreateWithoutGroupsInput.schema");
const ProfileUncheckedCreateWithoutGroupsInput_schema_1 = require("./ProfileUncheckedCreateWithoutGroupsInput.schema");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
exports.ProfileUpsertWithoutGroupsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateWithoutGroupsInput_schema_1.ProfileUpdateWithoutGroupsInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutGroupsInput_schema_1.ProfileUncheckedUpdateWithoutGroupsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutGroupsInput_schema_1.ProfileCreateWithoutGroupsInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutGroupsInput_schema_1.ProfileUncheckedCreateWithoutGroupsInputObjectSchema)]), where: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional().optional()
}).strict();
