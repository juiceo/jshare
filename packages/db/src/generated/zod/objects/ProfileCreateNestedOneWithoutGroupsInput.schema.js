"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateNestedOneWithoutGroupsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateWithoutGroupsInput_schema_1 = require("./ProfileCreateWithoutGroupsInput.schema");
const ProfileUncheckedCreateWithoutGroupsInput_schema_1 = require("./ProfileUncheckedCreateWithoutGroupsInput.schema");
const ProfileCreateOrConnectWithoutGroupsInput_schema_1 = require("./ProfileCreateOrConnectWithoutGroupsInput.schema");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
exports.ProfileCreateNestedOneWithoutGroupsInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutGroupsInput_schema_1.ProfileCreateWithoutGroupsInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutGroupsInput_schema_1.ProfileUncheckedCreateWithoutGroupsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ProfileCreateOrConnectWithoutGroupsInput_schema_1.ProfileCreateOrConnectWithoutGroupsInputObjectSchema).optional().optional(), connect: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).optional().optional()
}).strict();
