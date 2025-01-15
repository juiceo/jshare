"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpsertWithoutMessagesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileUpdateWithoutMessagesInput_schema_1 = require("./ProfileUpdateWithoutMessagesInput.schema");
const ProfileUncheckedUpdateWithoutMessagesInput_schema_1 = require("./ProfileUncheckedUpdateWithoutMessagesInput.schema");
const ProfileCreateWithoutMessagesInput_schema_1 = require("./ProfileCreateWithoutMessagesInput.schema");
const ProfileUncheckedCreateWithoutMessagesInput_schema_1 = require("./ProfileUncheckedCreateWithoutMessagesInput.schema");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
exports.ProfileUpsertWithoutMessagesInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateWithoutMessagesInput_schema_1.ProfileUpdateWithoutMessagesInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutMessagesInput_schema_1.ProfileUncheckedUpdateWithoutMessagesInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutMessagesInput_schema_1.ProfileCreateWithoutMessagesInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutMessagesInput_schema_1.ProfileUncheckedCreateWithoutMessagesInputObjectSchema)]), where: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional()
}).strict();
