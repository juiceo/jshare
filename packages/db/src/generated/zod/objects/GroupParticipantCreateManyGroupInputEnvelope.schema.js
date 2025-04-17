"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantCreateManyGroupInputEnvelopeObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupParticipantCreateManyGroupInput_schema_1 = require("./GroupParticipantCreateManyGroupInput.schema");
exports.GroupParticipantCreateManyGroupInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => GroupParticipantCreateManyGroupInput_schema_1.GroupParticipantCreateManyGroupInputObjectSchema),
        zod_1.z.lazy(() => GroupParticipantCreateManyGroupInput_schema_1.GroupParticipantCreateManyGroupInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional().optional()
}).strict();
