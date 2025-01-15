"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantUpdateManyWithWhereWithoutGroupInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupParticipantScalarWhereInput_schema_1 = require("./GroupParticipantScalarWhereInput.schema");
const GroupParticipantUpdateManyMutationInput_schema_1 = require("./GroupParticipantUpdateManyMutationInput.schema");
const GroupParticipantUncheckedUpdateManyWithoutGroupInput_schema_1 = require("./GroupParticipantUncheckedUpdateManyWithoutGroupInput.schema");
exports.GroupParticipantUpdateManyWithWhereWithoutGroupInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupParticipantScalarWhereInput_schema_1.GroupParticipantScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantUpdateManyMutationInput_schema_1.GroupParticipantUpdateManyMutationInputObjectSchema), zod_1.z.lazy(() => GroupParticipantUncheckedUpdateManyWithoutGroupInput_schema_1.GroupParticipantUncheckedUpdateManyWithoutGroupInputObjectSchema)])
}).strict();
