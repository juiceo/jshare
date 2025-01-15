"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateOneWithoutMessagesNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateWithoutMessagesInput_schema_1 = require("./ProfileCreateWithoutMessagesInput.schema");
const ProfileUncheckedCreateWithoutMessagesInput_schema_1 = require("./ProfileUncheckedCreateWithoutMessagesInput.schema");
const ProfileCreateOrConnectWithoutMessagesInput_schema_1 = require("./ProfileCreateOrConnectWithoutMessagesInput.schema");
const ProfileUpsertWithoutMessagesInput_schema_1 = require("./ProfileUpsertWithoutMessagesInput.schema");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
const ProfileUpdateToOneWithWhereWithoutMessagesInput_schema_1 = require("./ProfileUpdateToOneWithWhereWithoutMessagesInput.schema");
const ProfileUpdateWithoutMessagesInput_schema_1 = require("./ProfileUpdateWithoutMessagesInput.schema");
const ProfileUncheckedUpdateWithoutMessagesInput_schema_1 = require("./ProfileUncheckedUpdateWithoutMessagesInput.schema");
exports.ProfileUpdateOneWithoutMessagesNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutMessagesInput_schema_1.ProfileCreateWithoutMessagesInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutMessagesInput_schema_1.ProfileUncheckedCreateWithoutMessagesInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ProfileCreateOrConnectWithoutMessagesInput_schema_1.ProfileCreateOrConnectWithoutMessagesInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => ProfileUpsertWithoutMessagesInput_schema_1.ProfileUpsertWithoutMessagesInputObjectSchema).optional(), disconnect: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema)]).optional(), delete: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema)]).optional(), connect: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateToOneWithWhereWithoutMessagesInput_schema_1.ProfileUpdateToOneWithWhereWithoutMessagesInputObjectSchema), zod_1.z.lazy(() => ProfileUpdateWithoutMessagesInput_schema_1.ProfileUpdateWithoutMessagesInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutMessagesInput_schema_1.ProfileUncheckedUpdateWithoutMessagesInputObjectSchema)]).optional()
}).strict();
