"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUncheckedUpdateManyWithoutAvatarNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateWithoutAvatarInput_schema_1 = require("./ProfileCreateWithoutAvatarInput.schema");
const ProfileUncheckedCreateWithoutAvatarInput_schema_1 = require("./ProfileUncheckedCreateWithoutAvatarInput.schema");
const ProfileCreateOrConnectWithoutAvatarInput_schema_1 = require("./ProfileCreateOrConnectWithoutAvatarInput.schema");
const ProfileUpsertWithWhereUniqueWithoutAvatarInput_schema_1 = require("./ProfileUpsertWithWhereUniqueWithoutAvatarInput.schema");
const ProfileCreateManyAvatarInputEnvelope_schema_1 = require("./ProfileCreateManyAvatarInputEnvelope.schema");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
const ProfileUpdateWithWhereUniqueWithoutAvatarInput_schema_1 = require("./ProfileUpdateWithWhereUniqueWithoutAvatarInput.schema");
const ProfileUpdateManyWithWhereWithoutAvatarInput_schema_1 = require("./ProfileUpdateManyWithWhereWithoutAvatarInput.schema");
const ProfileScalarWhereInput_schema_1 = require("./ProfileScalarWhereInput.schema");
exports.ProfileUncheckedUpdateManyWithoutAvatarNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutAvatarInput_schema_1.ProfileCreateWithoutAvatarInputObjectSchema), zod_1.z.lazy(() => ProfileCreateWithoutAvatarInput_schema_1.ProfileCreateWithoutAvatarInputObjectSchema).array(), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutAvatarInput_schema_1.ProfileUncheckedCreateWithoutAvatarInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutAvatarInput_schema_1.ProfileUncheckedCreateWithoutAvatarInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateOrConnectWithoutAvatarInput_schema_1.ProfileCreateOrConnectWithoutAvatarInputObjectSchema),
        zod_1.z.lazy(() => ProfileCreateOrConnectWithoutAvatarInput_schema_1.ProfileCreateOrConnectWithoutAvatarInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => ProfileUpsertWithWhereUniqueWithoutAvatarInput_schema_1.ProfileUpsertWithWhereUniqueWithoutAvatarInputObjectSchema),
        zod_1.z.lazy(() => ProfileUpsertWithWhereUniqueWithoutAvatarInput_schema_1.ProfileUpsertWithWhereUniqueWithoutAvatarInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ProfileCreateManyAvatarInputEnvelope_schema_1.ProfileCreateManyAvatarInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateWithWhereUniqueWithoutAvatarInput_schema_1.ProfileUpdateWithWhereUniqueWithoutAvatarInputObjectSchema),
        zod_1.z.lazy(() => ProfileUpdateWithWhereUniqueWithoutAvatarInput_schema_1.ProfileUpdateWithWhereUniqueWithoutAvatarInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateManyWithWhereWithoutAvatarInput_schema_1.ProfileUpdateManyWithWhereWithoutAvatarInputObjectSchema),
        zod_1.z.lazy(() => ProfileUpdateManyWithWhereWithoutAvatarInput_schema_1.ProfileUpdateManyWithWhereWithoutAvatarInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => ProfileScalarWhereInput_schema_1.ProfileScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => ProfileScalarWhereInput_schema_1.ProfileScalarWhereInputObjectSchema).array()]).optional()
}).strict();
