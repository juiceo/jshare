"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareListRelationFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ExpenseShareWhereInput_schema_1 = require("./ExpenseShareWhereInput.schema");
exports.ExpenseShareListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => ExpenseShareWhereInput_schema_1.ExpenseShareWhereInputObjectSchema).optional().optional(), some: zod_1.z.lazy(() => ExpenseShareWhereInput_schema_1.ExpenseShareWhereInputObjectSchema).optional().optional(), none: zod_1.z.lazy(() => ExpenseShareWhereInput_schema_1.ExpenseShareWhereInputObjectSchema).optional().optional()
}).strict();
