"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseArgsObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ExpenseSelect_schema_1 = require("./ExpenseSelect.schema");
const ExpenseInclude_schema_1 = require("./ExpenseInclude.schema");
exports.ExpenseArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => ExpenseSelect_schema_1.ExpenseSelectObjectSchema).optional().optional(), include: zod_1.z.lazy(() => ExpenseInclude_schema_1.ExpenseIncludeObjectSchema).optional().optional()
}).strict();
