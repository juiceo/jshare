"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateToOneWithWhereWithoutMessagesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
const ProfileUpdateWithoutMessagesInput_schema_1 = require("./ProfileUpdateWithoutMessagesInput.schema");
const ProfileUncheckedUpdateWithoutMessagesInput_schema_1 = require("./ProfileUncheckedUpdateWithoutMessagesInput.schema");
exports.ProfileUpdateToOneWithWhereWithoutMessagesInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateWithoutMessagesInput_schema_1.ProfileUpdateWithoutMessagesInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutMessagesInput_schema_1.ProfileUncheckedUpdateWithoutMessagesInputObjectSchema)])
}).strict();
