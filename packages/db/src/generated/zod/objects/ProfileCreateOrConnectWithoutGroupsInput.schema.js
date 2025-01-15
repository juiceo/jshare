"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateOrConnectWithoutGroupsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
const ProfileCreateWithoutGroupsInput_schema_1 = require("./ProfileCreateWithoutGroupsInput.schema");
const ProfileUncheckedCreateWithoutGroupsInput_schema_1 = require("./ProfileUncheckedCreateWithoutGroupsInput.schema");
exports.ProfileCreateOrConnectWithoutGroupsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutGroupsInput_schema_1.ProfileCreateWithoutGroupsInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutGroupsInput_schema_1.ProfileUncheckedCreateWithoutGroupsInputObjectSchema)])
}).strict();
