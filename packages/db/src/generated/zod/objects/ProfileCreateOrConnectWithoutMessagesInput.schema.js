"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateOrConnectWithoutMessagesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
const ProfileCreateWithoutMessagesInput_schema_1 = require("./ProfileCreateWithoutMessagesInput.schema");
const ProfileUncheckedCreateWithoutMessagesInput_schema_1 = require("./ProfileUncheckedCreateWithoutMessagesInput.schema");
exports.ProfileCreateOrConnectWithoutMessagesInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutMessagesInput_schema_1.ProfileCreateWithoutMessagesInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutMessagesInput_schema_1.ProfileUncheckedCreateWithoutMessagesInputObjectSchema)])
}).strict();
