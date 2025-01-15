"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpsertWithoutParticipantsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupUpdateWithoutParticipantsInput_schema_1 = require("./GroupUpdateWithoutParticipantsInput.schema");
const GroupUncheckedUpdateWithoutParticipantsInput_schema_1 = require("./GroupUncheckedUpdateWithoutParticipantsInput.schema");
const GroupCreateWithoutParticipantsInput_schema_1 = require("./GroupCreateWithoutParticipantsInput.schema");
const GroupUncheckedCreateWithoutParticipantsInput_schema_1 = require("./GroupUncheckedCreateWithoutParticipantsInput.schema");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
exports.GroupUpsertWithoutParticipantsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateWithoutParticipantsInput_schema_1.GroupUpdateWithoutParticipantsInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedUpdateWithoutParticipantsInput_schema_1.GroupUncheckedUpdateWithoutParticipantsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutParticipantsInput_schema_1.GroupCreateWithoutParticipantsInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutParticipantsInput_schema_1.GroupUncheckedCreateWithoutParticipantsInputObjectSchema)]), where: zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema).optional()
}).strict();
