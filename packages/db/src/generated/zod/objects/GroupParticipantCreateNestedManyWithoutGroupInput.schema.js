"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantCreateNestedManyWithoutGroupInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupParticipantCreateWithoutGroupInput_schema_1 = require("./GroupParticipantCreateWithoutGroupInput.schema");
const GroupParticipantUncheckedCreateWithoutGroupInput_schema_1 = require("./GroupParticipantUncheckedCreateWithoutGroupInput.schema");
const GroupParticipantCreateOrConnectWithoutGroupInput_schema_1 = require("./GroupParticipantCreateOrConnectWithoutGroupInput.schema");
const GroupParticipantCreateManyGroupInputEnvelope_schema_1 = require("./GroupParticipantCreateManyGroupInputEnvelope.schema");
const GroupParticipantWhereUniqueInput_schema_1 = require("./GroupParticipantWhereUniqueInput.schema");
exports.GroupParticipantCreateNestedManyWithoutGroupInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantCreateWithoutGroupInput_schema_1.GroupParticipantCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => GroupParticipantCreateWithoutGroupInput_schema_1.GroupParticipantCreateWithoutGroupInputObjectSchema).array(), zod_1.z.lazy(() => GroupParticipantUncheckedCreateWithoutGroupInput_schema_1.GroupParticipantUncheckedCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => GroupParticipantUncheckedCreateWithoutGroupInput_schema_1.GroupParticipantUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantCreateOrConnectWithoutGroupInput_schema_1.GroupParticipantCreateOrConnectWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantCreateOrConnectWithoutGroupInput_schema_1.GroupParticipantCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => GroupParticipantCreateManyGroupInputEnvelope_schema_1.GroupParticipantCreateManyGroupInputEnvelopeObjectSchema).optional().optional(), connect: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
