"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantUpdateManyWithoutGroupNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupParticipantCreateWithoutGroupInput_schema_1 = require("./GroupParticipantCreateWithoutGroupInput.schema");
const GroupParticipantUncheckedCreateWithoutGroupInput_schema_1 = require("./GroupParticipantUncheckedCreateWithoutGroupInput.schema");
const GroupParticipantCreateOrConnectWithoutGroupInput_schema_1 = require("./GroupParticipantCreateOrConnectWithoutGroupInput.schema");
const GroupParticipantUpsertWithWhereUniqueWithoutGroupInput_schema_1 = require("./GroupParticipantUpsertWithWhereUniqueWithoutGroupInput.schema");
const GroupParticipantCreateManyGroupInputEnvelope_schema_1 = require("./GroupParticipantCreateManyGroupInputEnvelope.schema");
const GroupParticipantWhereUniqueInput_schema_1 = require("./GroupParticipantWhereUniqueInput.schema");
const GroupParticipantUpdateWithWhereUniqueWithoutGroupInput_schema_1 = require("./GroupParticipantUpdateWithWhereUniqueWithoutGroupInput.schema");
const GroupParticipantUpdateManyWithWhereWithoutGroupInput_schema_1 = require("./GroupParticipantUpdateManyWithWhereWithoutGroupInput.schema");
const GroupParticipantScalarWhereInput_schema_1 = require("./GroupParticipantScalarWhereInput.schema");
exports.GroupParticipantUpdateManyWithoutGroupNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantCreateWithoutGroupInput_schema_1.GroupParticipantCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => GroupParticipantCreateWithoutGroupInput_schema_1.GroupParticipantCreateWithoutGroupInputObjectSchema).array(), zod_1.z.lazy(() => GroupParticipantUncheckedCreateWithoutGroupInput_schema_1.GroupParticipantUncheckedCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => GroupParticipantUncheckedCreateWithoutGroupInput_schema_1.GroupParticipantUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantCreateOrConnectWithoutGroupInput_schema_1.GroupParticipantCreateOrConnectWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantCreateOrConnectWithoutGroupInput_schema_1.GroupParticipantCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantUpsertWithWhereUniqueWithoutGroupInput_schema_1.GroupParticipantUpsertWithWhereUniqueWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantUpsertWithWhereUniqueWithoutGroupInput_schema_1.GroupParticipantUpsertWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => GroupParticipantCreateManyGroupInputEnvelope_schema_1.GroupParticipantCreateManyGroupInputEnvelopeObjectSchema).optional().optional(), set: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantUpdateWithWhereUniqueWithoutGroupInput_schema_1.GroupParticipantUpdateWithWhereUniqueWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantUpdateWithWhereUniqueWithoutGroupInput_schema_1.GroupParticipantUpdateWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantUpdateManyWithWhereWithoutGroupInput_schema_1.GroupParticipantUpdateManyWithWhereWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantUpdateManyWithWhereWithoutGroupInput_schema_1.GroupParticipantUpdateManyWithWhereWithoutGroupInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantScalarWhereInput_schema_1.GroupParticipantScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantScalarWhereInput_schema_1.GroupParticipantScalarWhereInputObjectSchema).array()]).optional()
}).strict();
