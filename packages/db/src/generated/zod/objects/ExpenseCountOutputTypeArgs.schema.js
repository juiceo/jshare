"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCountOutputTypeArgsObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ExpenseCountOutputTypeSelect_schema_1 = require("./ExpenseCountOutputTypeSelect.schema");
exports.ExpenseCountOutputTypeArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => ExpenseCountOutputTypeSelect_schema_1.ExpenseCountOutputTypeSelectObjectSchema).optional().optional()
}).strict();
