"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpdateToOneWithWhereWithoutParticipantsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
const GroupUpdateWithoutParticipantsInput_schema_1 = require("./GroupUpdateWithoutParticipantsInput.schema");
const GroupUncheckedUpdateWithoutParticipantsInput_schema_1 = require("./GroupUncheckedUpdateWithoutParticipantsInput.schema");
exports.GroupUpdateToOneWithWhereWithoutParticipantsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateWithoutParticipantsInput_schema_1.GroupUpdateWithoutParticipantsInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedUpdateWithoutParticipantsInput_schema_1.GroupUncheckedUpdateWithoutParticipantsInputObjectSchema)])
}).strict();
