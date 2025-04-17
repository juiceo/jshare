"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseListRelationFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ExpenseWhereInput_schema_1 = require("./ExpenseWhereInput.schema");
exports.ExpenseListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema).optional().optional(), some: zod_1.z.lazy(() => ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema).optional().optional(), none: zod_1.z.lazy(() => ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema).optional().optional()
}).strict();
