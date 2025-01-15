"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantUpsertWithWhereUniqueWithoutUserInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupParticipantWhereUniqueInput_schema_1 = require("./GroupParticipantWhereUniqueInput.schema");
const GroupParticipantUpdateWithoutUserInput_schema_1 = require("./GroupParticipantUpdateWithoutUserInput.schema");
const GroupParticipantUncheckedUpdateWithoutUserInput_schema_1 = require("./GroupParticipantUncheckedUpdateWithoutUserInput.schema");
const GroupParticipantCreateWithoutUserInput_schema_1 = require("./GroupParticipantCreateWithoutUserInput.schema");
const GroupParticipantUncheckedCreateWithoutUserInput_schema_1 = require("./GroupParticipantUncheckedCreateWithoutUserInput.schema");
exports.GroupParticipantUpsertWithWhereUniqueWithoutUserInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantUpdateWithoutUserInput_schema_1.GroupParticipantUpdateWithoutUserInputObjectSchema), zod_1.z.lazy(() => GroupParticipantUncheckedUpdateWithoutUserInput_schema_1.GroupParticipantUncheckedUpdateWithoutUserInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantCreateWithoutUserInput_schema_1.GroupParticipantCreateWithoutUserInputObjectSchema), zod_1.z.lazy(() => GroupParticipantUncheckedCreateWithoutUserInput_schema_1.GroupParticipantUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
