"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileArgsObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileSelect_schema_1 = require("./ProfileSelect.schema");
const ProfileInclude_schema_1 = require("./ProfileInclude.schema");
exports.ProfileArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => ProfileSelect_schema_1.ProfileSelectObjectSchema).optional(), include: zod_1.z.lazy(() => ProfileInclude_schema_1.ProfileIncludeObjectSchema).optional()
}).strict();
