"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateToOneWithWhereWithoutGroupsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
const ProfileUpdateWithoutGroupsInput_schema_1 = require("./ProfileUpdateWithoutGroupsInput.schema");
const ProfileUncheckedUpdateWithoutGroupsInput_schema_1 = require("./ProfileUncheckedUpdateWithoutGroupsInput.schema");
exports.ProfileUpdateToOneWithWhereWithoutGroupsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional().optional(), data: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateWithoutGroupsInput_schema_1.ProfileUpdateWithoutGroupsInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutGroupsInput_schema_1.ProfileUncheckedUpdateWithoutGroupsInputObjectSchema)])
}).strict();
