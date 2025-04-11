"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageIncludeObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupArgs_schema_1 = require("./GroupArgs.schema");
const ProfileArgs_schema_1 = require("./ProfileArgs.schema");
exports.ImageIncludeObjectSchema = zod_1.z.object({
    Group: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => GroupArgs_schema_1.GroupArgsObjectSchema)]).optional(), Profile: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileArgs_schema_1.ProfileArgsObjectSchema)]).optional()
}).strict();
