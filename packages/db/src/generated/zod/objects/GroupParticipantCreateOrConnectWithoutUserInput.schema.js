"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantCreateOrConnectWithoutUserInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupParticipantWhereUniqueInput_schema_1 = require("./GroupParticipantWhereUniqueInput.schema");
const GroupParticipantCreateWithoutUserInput_schema_1 = require("./GroupParticipantCreateWithoutUserInput.schema");
const GroupParticipantUncheckedCreateWithoutUserInput_schema_1 = require("./GroupParticipantUncheckedCreateWithoutUserInput.schema");
exports.GroupParticipantCreateOrConnectWithoutUserInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupParticipantWhereUniqueInput_schema_1.GroupParticipantWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantCreateWithoutUserInput_schema_1.GroupParticipantCreateWithoutUserInputObjectSchema), zod_1.z.lazy(() => GroupParticipantUncheckedCreateWithoutUserInput_schema_1.GroupParticipantUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
