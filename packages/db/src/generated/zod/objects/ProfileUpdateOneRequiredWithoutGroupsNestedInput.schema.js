"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateOneRequiredWithoutGroupsNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateWithoutGroupsInput_schema_1 = require("./ProfileCreateWithoutGroupsInput.schema");
const ProfileUncheckedCreateWithoutGroupsInput_schema_1 = require("./ProfileUncheckedCreateWithoutGroupsInput.schema");
const ProfileCreateOrConnectWithoutGroupsInput_schema_1 = require("./ProfileCreateOrConnectWithoutGroupsInput.schema");
const ProfileUpsertWithoutGroupsInput_schema_1 = require("./ProfileUpsertWithoutGroupsInput.schema");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
const ProfileUpdateToOneWithWhereWithoutGroupsInput_schema_1 = require("./ProfileUpdateToOneWithWhereWithoutGroupsInput.schema");
const ProfileUpdateWithoutGroupsInput_schema_1 = require("./ProfileUpdateWithoutGroupsInput.schema");
const ProfileUncheckedUpdateWithoutGroupsInput_schema_1 = require("./ProfileUncheckedUpdateWithoutGroupsInput.schema");
exports.ProfileUpdateOneRequiredWithoutGroupsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutGroupsInput_schema_1.ProfileCreateWithoutGroupsInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutGroupsInput_schema_1.ProfileUncheckedCreateWithoutGroupsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ProfileCreateOrConnectWithoutGroupsInput_schema_1.ProfileCreateOrConnectWithoutGroupsInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => ProfileUpsertWithoutGroupsInput_schema_1.ProfileUpsertWithoutGroupsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateToOneWithWhereWithoutGroupsInput_schema_1.ProfileUpdateToOneWithWhereWithoutGroupsInputObjectSchema), zod_1.z.lazy(() => ProfileUpdateWithoutGroupsInput_schema_1.ProfileUpdateWithoutGroupsInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutGroupsInput_schema_1.ProfileUncheckedUpdateWithoutGroupsInputObjectSchema)]).optional()
}).strict();
