"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareUpsertWithWhereUniqueWithoutExpenseInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ExpenseShareWhereUniqueInput_schema_1 = require("./ExpenseShareWhereUniqueInput.schema");
const ExpenseShareUpdateWithoutExpenseInput_schema_1 = require("./ExpenseShareUpdateWithoutExpenseInput.schema");
const ExpenseShareUncheckedUpdateWithoutExpenseInput_schema_1 = require("./ExpenseShareUncheckedUpdateWithoutExpenseInput.schema");
const ExpenseShareCreateWithoutExpenseInput_schema_1 = require("./ExpenseShareCreateWithoutExpenseInput.schema");
const ExpenseShareUncheckedCreateWithoutExpenseInput_schema_1 = require("./ExpenseShareUncheckedCreateWithoutExpenseInput.schema");
exports.ExpenseShareUpsertWithWhereUniqueWithoutExpenseInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareUpdateWithoutExpenseInput_schema_1.ExpenseShareUpdateWithoutExpenseInputObjectSchema), zod_1.z.lazy(() => ExpenseShareUncheckedUpdateWithoutExpenseInput_schema_1.ExpenseShareUncheckedUpdateWithoutExpenseInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareCreateWithoutExpenseInput_schema_1.ExpenseShareCreateWithoutExpenseInputObjectSchema), zod_1.z.lazy(() => ExpenseShareUncheckedCreateWithoutExpenseInput_schema_1.ExpenseShareUncheckedCreateWithoutExpenseInputObjectSchema)])
}).strict();
