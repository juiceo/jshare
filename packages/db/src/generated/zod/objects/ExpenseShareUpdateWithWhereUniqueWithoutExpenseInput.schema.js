"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareUpdateWithWhereUniqueWithoutExpenseInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseShareWhereUniqueInput_schema_1 = require("./ExpenseShareWhereUniqueInput.schema");
const ExpenseShareUpdateWithoutExpenseInput_schema_1 = require("./ExpenseShareUpdateWithoutExpenseInput.schema");
const ExpenseShareUncheckedUpdateWithoutExpenseInput_schema_1 = require("./ExpenseShareUncheckedUpdateWithoutExpenseInput.schema");
exports.ExpenseShareUpdateWithWhereUniqueWithoutExpenseInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareUpdateWithoutExpenseInput_schema_1.ExpenseShareUpdateWithoutExpenseInputObjectSchema), zod_1.z.lazy(() => ExpenseShareUncheckedUpdateWithoutExpenseInput_schema_1.ExpenseShareUncheckedUpdateWithoutExpenseInputObjectSchema)])
}).strict();
