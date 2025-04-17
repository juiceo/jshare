"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUncheckedUpdateOneWithoutAvatarNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateWithoutAvatarInput_schema_1 = require("./ProfileCreateWithoutAvatarInput.schema");
const ProfileUncheckedCreateWithoutAvatarInput_schema_1 = require("./ProfileUncheckedCreateWithoutAvatarInput.schema");
const ProfileCreateOrConnectWithoutAvatarInput_schema_1 = require("./ProfileCreateOrConnectWithoutAvatarInput.schema");
const ProfileUpsertWithoutAvatarInput_schema_1 = require("./ProfileUpsertWithoutAvatarInput.schema");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
const ProfileUpdateToOneWithWhereWithoutAvatarInput_schema_1 = require("./ProfileUpdateToOneWithWhereWithoutAvatarInput.schema");
const ProfileUpdateWithoutAvatarInput_schema_1 = require("./ProfileUpdateWithoutAvatarInput.schema");
const ProfileUncheckedUpdateWithoutAvatarInput_schema_1 = require("./ProfileUncheckedUpdateWithoutAvatarInput.schema");
exports.ProfileUncheckedUpdateOneWithoutAvatarNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutAvatarInput_schema_1.ProfileCreateWithoutAvatarInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutAvatarInput_schema_1.ProfileUncheckedCreateWithoutAvatarInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ProfileCreateOrConnectWithoutAvatarInput_schema_1.ProfileCreateOrConnectWithoutAvatarInputObjectSchema).optional().optional(), upsert: zod_1.z.lazy(() => ProfileUpsertWithoutAvatarInput_schema_1.ProfileUpsertWithoutAvatarInputObjectSchema).optional().optional(), disconnect: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema)]).optional(), delete: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema)]).optional(), connect: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).optional().optional(), update: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateToOneWithWhereWithoutAvatarInput_schema_1.ProfileUpdateToOneWithWhereWithoutAvatarInputObjectSchema), zod_1.z.lazy(() => ProfileUpdateWithoutAvatarInput_schema_1.ProfileUpdateWithoutAvatarInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutAvatarInput_schema_1.ProfileUncheckedUpdateWithoutAvatarInputObjectSchema)]).optional()
}).strict();
