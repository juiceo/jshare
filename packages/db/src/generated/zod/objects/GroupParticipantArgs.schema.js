"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantArgsObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupParticipantSelect_schema_1 = require("./GroupParticipantSelect.schema");
const GroupParticipantInclude_schema_1 = require("./GroupParticipantInclude.schema");
exports.GroupParticipantArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => GroupParticipantSelect_schema_1.GroupParticipantSelectObjectSchema).optional(), include: zod_1.z.lazy(() => GroupParticipantInclude_schema_1.GroupParticipantIncludeObjectSchema).optional()
}).strict();
