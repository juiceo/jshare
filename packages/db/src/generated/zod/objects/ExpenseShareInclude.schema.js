"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareIncludeObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileArgs_schema_1 = require("./ProfileArgs.schema");
const ExpenseArgs_schema_1 = require("./ExpenseArgs.schema");
exports.ExpenseShareIncludeObjectSchema = zod_1.z.object({
    user: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ProfileArgs_schema_1.ProfileArgsObjectSchema)]).optional(), expense: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ExpenseArgs_schema_1.ExpenseArgsObjectSchema)]).optional()
}).strict();
