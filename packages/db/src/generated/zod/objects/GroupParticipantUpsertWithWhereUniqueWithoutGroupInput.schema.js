"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantUpsertWithWhereUniqueWithoutGroupInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupParticipantWhereUniqueInput_schema_1 = require("./GroupParticipantWhereUniqueInput.schema");
const GroupParticipantUpdateWithoutGroupInput_schema_1 = require("./GroupParticipantUpdateWithoutGroupInput.schema");
const GroupParticipantUncheckedUpdateWithoutGroupInput_schema_1 = require("./GroupParticipantUncheckedUpdateWithoutGroupInput.schema");
const GroupParticipantCreateWithoutGroupInput_schema_1 = require("./GroupParticipantCreateWithoutGroupInput.schema");
const GroupParticipantUncheckedCreateWithoutGroupInput_schema_1 = require("./GroupParticipantUncheckedCreateWithoutGroupInput.schema");
exports.GroupParticipantUpsertWithWhereUniqueWithoutGroupInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantUpdateWithoutGroupInput_schema_1.GroupParticipantUpdateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => GroupParticipantUncheckedUpdateWithoutGroupInput_schema_1.GroupParticipantUncheckedUpdateWithoutGroupInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantCreateWithoutGroupInput_schema_1.GroupParticipantCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => GroupParticipantUncheckedCreateWithoutGroupInput_schema_1.GroupParticipantUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
