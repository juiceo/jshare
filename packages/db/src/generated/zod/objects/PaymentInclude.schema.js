"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentIncludeObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupArgs_schema_1 = require("./GroupArgs.schema");
const ProfileArgs_schema_1 = require("./ProfileArgs.schema");
exports.PaymentIncludeObjectSchema = zod_1.z.object({
    group: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => GroupArgs_schema_1.GroupArgsObjectSchema)]).optional(), recipient: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileArgs_schema_1.ProfileArgsObjectSchema)]).optional(), payer: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileArgs_schema_1.ProfileArgsObjectSchema)]).optional()
}).strict();
