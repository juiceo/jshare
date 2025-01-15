"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantUpdateWithWhereUniqueWithoutUserInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupParticipantWhereUniqueInput_schema_1 = require("./GroupParticipantWhereUniqueInput.schema");
const GroupParticipantUpdateWithoutUserInput_schema_1 = require("./GroupParticipantUpdateWithoutUserInput.schema");
const GroupParticipantUncheckedUpdateWithoutUserInput_schema_1 = require("./GroupParticipantUncheckedUpdateWithoutUserInput.schema");
exports.GroupParticipantUpdateWithWhereUniqueWithoutUserInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantUpdateWithoutUserInput_schema_1.GroupParticipantUpdateWithoutUserInputObjectSchema), zod_1.z.lazy(() => GroupParticipantUncheckedUpdateWithoutUserInput_schema_1.GroupParticipantUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
