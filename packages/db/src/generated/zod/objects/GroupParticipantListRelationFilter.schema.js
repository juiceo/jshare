"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantListRelationFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupParticipantWhereInput_schema_1 = require("./GroupParticipantWhereInput.schema");
exports.GroupParticipantListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => GroupParticipantWhereInput_schema_1.GroupParticipantWhereInputObjectSchema).optional().optional(), some: zod_1.z.lazy(() => GroupParticipantWhereInput_schema_1.GroupParticipantWhereInputObjectSchema).optional().optional(), none: zod_1.z.lazy(() => GroupParticipantWhereInput_schema_1.GroupParticipantWhereInputObjectSchema).optional().optional()
}).strict();
