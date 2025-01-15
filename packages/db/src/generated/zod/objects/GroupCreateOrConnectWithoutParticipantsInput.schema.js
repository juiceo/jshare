"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupCreateOrConnectWithoutParticipantsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupWhereUniqueInput_schema_1 = require("./GroupWhereUniqueInput.schema");
const GroupCreateWithoutParticipantsInput_schema_1 = require("./GroupCreateWithoutParticipantsInput.schema");
const GroupUncheckedCreateWithoutParticipantsInput_schema_1 = require("./GroupUncheckedCreateWithoutParticipantsInput.schema");
exports.GroupCreateOrConnectWithoutParticipantsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutParticipantsInput_schema_1.GroupCreateWithoutParticipantsInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutParticipantsInput_schema_1.GroupUncheckedCreateWithoutParticipantsInputObjectSchema)])
}).strict();
