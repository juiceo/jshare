"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUncheckedCreateNestedManyWithoutAvatarInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateWithoutAvatarInput_schema_1 = require("./ProfileCreateWithoutAvatarInput.schema");
const ProfileUncheckedCreateWithoutAvatarInput_schema_1 = require("./ProfileUncheckedCreateWithoutAvatarInput.schema");
const ProfileCreateOrConnectWithoutAvatarInput_schema_1 = require("./ProfileCreateOrConnectWithoutAvatarInput.schema");
const ProfileCreateManyAvatarInputEnvelope_schema_1 = require("./ProfileCreateManyAvatarInputEnvelope.schema");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
exports.ProfileUncheckedCreateNestedManyWithoutAvatarInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutAvatarInput_schema_1.ProfileCreateWithoutAvatarInputObjectSchema), zod_1.z.lazy(() => ProfileCreateWithoutAvatarInput_schema_1.ProfileCreateWithoutAvatarInputObjectSchema).array(), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutAvatarInput_schema_1.ProfileUncheckedCreateWithoutAvatarInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutAvatarInput_schema_1.ProfileUncheckedCreateWithoutAvatarInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateOrConnectWithoutAvatarInput_schema_1.ProfileCreateOrConnectWithoutAvatarInputObjectSchema),
        zod_1.z.lazy(() => ProfileCreateOrConnectWithoutAvatarInput_schema_1.ProfileCreateOrConnectWithoutAvatarInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ProfileCreateManyAvatarInputEnvelope_schema_1.ProfileCreateManyAvatarInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
