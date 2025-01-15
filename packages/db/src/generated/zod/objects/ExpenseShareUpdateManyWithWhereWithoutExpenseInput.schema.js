"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareUpdateManyWithWhereWithoutExpenseInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseShareScalarWhereInput_schema_1 = require("./ExpenseShareScalarWhereInput.schema");
const ExpenseShareUpdateManyMutationInput_schema_1 = require("./ExpenseShareUpdateManyMutationInput.schema");
const ExpenseShareUncheckedUpdateManyWithoutExpenseInput_schema_1 = require("./ExpenseShareUncheckedUpdateManyWithoutExpenseInput.schema");
exports.ExpenseShareUpdateManyWithWhereWithoutExpenseInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseShareScalarWhereInput_schema_1.ExpenseShareScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareUpdateManyMutationInput_schema_1.ExpenseShareUpdateManyMutationInputObjectSchema), zod_1.z.lazy(() => ExpenseShareUncheckedUpdateManyWithoutExpenseInput_schema_1.ExpenseShareUncheckedUpdateManyWithoutExpenseInputObjectSchema)])
}).strict();
