"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateNestedOneWithoutMessagesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateWithoutMessagesInput_schema_1 = require("./ProfileCreateWithoutMessagesInput.schema");
const ProfileUncheckedCreateWithoutMessagesInput_schema_1 = require("./ProfileUncheckedCreateWithoutMessagesInput.schema");
const ProfileCreateOrConnectWithoutMessagesInput_schema_1 = require("./ProfileCreateOrConnectWithoutMessagesInput.schema");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
exports.ProfileCreateNestedOneWithoutMessagesInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutMessagesInput_schema_1.ProfileCreateWithoutMessagesInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutMessagesInput_schema_1.ProfileUncheckedCreateWithoutMessagesInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ProfileCreateOrConnectWithoutMessagesInput_schema_1.ProfileCreateOrConnectWithoutMessagesInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).optional()
}).strict();
