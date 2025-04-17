"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantCreateManyUserInputEnvelopeObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupParticipantCreateManyUserInput_schema_1 = require("./GroupParticipantCreateManyUserInput.schema");
exports.GroupParticipantCreateManyUserInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantCreateManyUserInput_schema_1.GroupParticipantCreateManyUserInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantCreateManyUserInput_schema_1.GroupParticipantCreateManyUserInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional().optional()
}).strict();
