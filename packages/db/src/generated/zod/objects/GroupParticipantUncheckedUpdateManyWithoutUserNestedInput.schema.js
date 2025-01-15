"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantUncheckedUpdateManyWithoutUserNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupParticipantCreateWithoutUserInput_schema_1 = require("./GroupParticipantCreateWithoutUserInput.schema");
const GroupParticipantUncheckedCreateWithoutUserInput_schema_1 = require("./GroupParticipantUncheckedCreateWithoutUserInput.schema");
const GroupParticipantCreateOrConnectWithoutUserInput_schema_1 = require("./GroupParticipantCreateOrConnectWithoutUserInput.schema");
const GroupParticipantUpsertWithWhereUniqueWithoutUserInput_schema_1 = require("./GroupParticipantUpsertWithWhereUniqueWithoutUserInput.schema");
const GroupParticipantCreateManyUserInputEnvelope_schema_1 = require("./GroupParticipantCreateManyUserInputEnvelope.schema");
const GroupParticipantWhereUniqueInput_schema_1 = require("./GroupParticipantWhereUniqueInput.schema");
const GroupParticipantUpdateWithWhereUniqueWithoutUserInput_schema_1 = require("./GroupParticipantUpdateWithWhereUniqueWithoutUserInput.schema");
const GroupParticipantUpdateManyWithWhereWithoutUserInput_schema_1 = require("./GroupParticipantUpdateManyWithWhereWithoutUserInput.schema");
const GroupParticipantScalarWhereInput_schema_1 = require("./GroupParticipantScalarWhereInput.schema");
exports.GroupParticipantUncheckedUpdateManyWithoutUserNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantCreateWithoutUserInput_schema_1.GroupParticipantCreateWithoutUserInputObjectSchema), zod_1.z.lazy(() => GroupParticipantCreateWithoutUserInput_schema_1.GroupParticipantCreateWithoutUserInputObjectSchema).array(), zod_1.z.lazy(() => GroupParticipantUncheckedCreateWithoutUserInput_schema_1.GroupParticipantUncheckedCreateWithoutUserInputObjectSchema), zod_1.z.lazy(() => GroupParticipantUncheckedCreateWithoutUserInput_schema_1.GroupParticipantUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantCreateOrConnectWithoutUserInput_schema_1.GroupParticipantCreateOrConnectWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantCreateOrConnectWithoutUserInput_schema_1.GroupParticipantCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantUpsertWithWhereUniqueWithoutUserInput_schema_1.GroupParticipantUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantUpsertWithWhereUniqueWithoutUserInput_schema_1.GroupParticipantUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => GroupParticipantCreateManyUserInputEnvelope_schema_1.GroupParticipantCreateManyUserInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantUpdateWithWhereUniqueWithoutUserInput_schema_1.GroupParticipantUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantUpdateWithWhereUniqueWithoutUserInput_schema_1.GroupParticipantUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantUpdateManyWithWhereWithoutUserInput_schema_1.GroupParticipantUpdateManyWithWhereWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantUpdateManyWithWhereWithoutUserInput_schema_1.GroupParticipantUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantScalarWhereInput_schema_1.GroupParticipantScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantScalarWhereInput_schema_1.GroupParticipantScalarWhereInputObjectSchema).array()]).optional()
}).strict();
