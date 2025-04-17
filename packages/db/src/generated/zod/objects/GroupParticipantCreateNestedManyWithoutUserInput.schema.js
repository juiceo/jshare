"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantCreateNestedManyWithoutUserInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupParticipantCreateWithoutUserInput_schema_1 = require("./GroupParticipantCreateWithoutUserInput.schema");
const GroupParticipantUncheckedCreateWithoutUserInput_schema_1 = require("./GroupParticipantUncheckedCreateWithoutUserInput.schema");
const GroupParticipantCreateOrConnectWithoutUserInput_schema_1 = require("./GroupParticipantCreateOrConnectWithoutUserInput.schema");
const GroupParticipantCreateManyUserInputEnvelope_schema_1 = require("./GroupParticipantCreateManyUserInputEnvelope.schema");
const GroupParticipantWhereUniqueInput_schema_1 = require("./GroupParticipantWhereUniqueInput.schema");
exports.GroupParticipantCreateNestedManyWithoutUserInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantCreateWithoutUserInput_schema_1.GroupParticipantCreateWithoutUserInputObjectSchema), zod_1.z.lazy(() => GroupParticipantCreateWithoutUserInput_schema_1.GroupParticipantCreateWithoutUserInputObjectSchema).array(), zod_1.z.lazy(() => GroupParticipantUncheckedCreateWithoutUserInput_schema_1.GroupParticipantUncheckedCreateWithoutUserInputObjectSchema), zod_1.z.lazy(() => GroupParticipantUncheckedCreateWithoutUserInput_schema_1.GroupParticipantUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantCreateOrConnectWithoutUserInput_schema_1.GroupParticipantCreateOrConnectWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantCreateOrConnectWithoutUserInput_schema_1.GroupParticipantCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => GroupParticipantCreateManyUserInputEnvelope_schema_1.GroupParticipantCreateManyUserInputEnvelopeObjectSchema).optional().optional(), connect: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
