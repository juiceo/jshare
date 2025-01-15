"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantUpdateWithWhereUniqueWithoutGroupInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupParticipantWhereUniqueInput_schema_1 = require("./GroupParticipantWhereUniqueInput.schema");
const GroupParticipantUpdateWithoutGroupInput_schema_1 = require("./GroupParticipantUpdateWithoutGroupInput.schema");
const GroupParticipantUncheckedUpdateWithoutGroupInput_schema_1 = require("./GroupParticipantUncheckedUpdateWithoutGroupInput.schema");
exports.GroupParticipantUpdateWithWhereUniqueWithoutGroupInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantUpdateWithoutGroupInput_schema_1.GroupParticipantUpdateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => GroupParticipantUncheckedUpdateWithoutGroupInput_schema_1.GroupParticipantUncheckedUpdateWithoutGroupInputObjectSchema)])
}).strict();
