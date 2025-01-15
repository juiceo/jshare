"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareCreateManyExpenseInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseShareCreateManyExpenseInput_schema_1 = require("./ExpenseShareCreateManyExpenseInput.schema");
exports.ExpenseShareCreateManyExpenseInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareCreateManyExpenseInput_schema_1.ExpenseShareCreateManyExpenseInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareCreateManyExpenseInput_schema_1.ExpenseShareCreateManyExpenseInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
