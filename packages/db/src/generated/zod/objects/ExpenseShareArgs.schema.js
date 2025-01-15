"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareArgsObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ExpenseShareSelect_schema_1 = require("./ExpenseShareSelect.schema");
const ExpenseShareInclude_schema_1 = require("./ExpenseShareInclude.schema");
exports.ExpenseShareArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => ExpenseShareSelect_schema_1.ExpenseShareSelectObjectSchema).optional(), include: zod_1.z.lazy(() => ExpenseShareInclude_schema_1.ExpenseShareIncludeObjectSchema).optional()
}).strict();
