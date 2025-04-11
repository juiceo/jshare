"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUncheckedCreateNestedOneWithoutAvatarInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateWithoutAvatarInput_schema_1 = require("./ProfileCreateWithoutAvatarInput.schema");
const ProfileUncheckedCreateWithoutAvatarInput_schema_1 = require("./ProfileUncheckedCreateWithoutAvatarInput.schema");
const ProfileCreateOrConnectWithoutAvatarInput_schema_1 = require("./ProfileCreateOrConnectWithoutAvatarInput.schema");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
exports.ProfileUncheckedCreateNestedOneWithoutAvatarInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutAvatarInput_schema_1.ProfileCreateWithoutAvatarInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutAvatarInput_schema_1.ProfileUncheckedCreateWithoutAvatarInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ProfileCreateOrConnectWithoutAvatarInput_schema_1.ProfileCreateOrConnectWithoutAvatarInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).optional()
}).strict();
