"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantCreateOrConnectWithoutGroupInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupParticipantWhereUniqueInput_schema_1 = require("./GroupParticipantWhereUniqueInput.schema");
const GroupParticipantCreateWithoutGroupInput_schema_1 = require("./GroupParticipantCreateWithoutGroupInput.schema");
const GroupParticipantUncheckedCreateWithoutGroupInput_schema_1 = require("./GroupParticipantUncheckedCreateWithoutGroupInput.schema");
exports.GroupParticipantCreateOrConnectWithoutGroupInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantCreateWithoutGroupInput_schema_1.GroupParticipantCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => GroupParticipantUncheckedCreateWithoutGroupInput_schema_1.GroupParticipantUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
