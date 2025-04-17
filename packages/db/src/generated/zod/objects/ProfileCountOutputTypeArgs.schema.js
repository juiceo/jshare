"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCountOutputTypeArgsObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCountOutputTypeSelect_schema_1 = require("./ProfileCountOutputTypeSelect.schema");
exports.ProfileCountOutputTypeArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => ProfileCountOutputTypeSelect_schema_1.ProfileCountOutputTypeSelectObjectSchema).optional().optional()
}).strict();
