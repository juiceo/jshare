"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareCreateOrConnectWithoutExpenseInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseShareWhereUniqueInput_schema_1 = require("./ExpenseShareWhereUniqueInput.schema");
const ExpenseShareCreateWithoutExpenseInput_schema_1 = require("./ExpenseShareCreateWithoutExpenseInput.schema");
const ExpenseShareUncheckedCreateWithoutExpenseInput_schema_1 = require("./ExpenseShareUncheckedCreateWithoutExpenseInput.schema");
exports.ExpenseShareCreateOrConnectWithoutExpenseInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareCreateWithoutExpenseInput_schema_1.ExpenseShareCreateWithoutExpenseInputObjectSchema), zod_1.z.lazy(() => ExpenseShareUncheckedCreateWithoutExpenseInput_schema_1.ExpenseShareUncheckedCreateWithoutExpenseInputObjectSchema)])
}).strict();
