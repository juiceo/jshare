"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUpdateToOneWithWhereWithoutSharesInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseWhereInput_schema_1 = require("./ExpenseWhereInput.schema");
const ExpenseUpdateWithoutSharesInput_schema_1 = require("./ExpenseUpdateWithoutSharesInput.schema");
const ExpenseUncheckedUpdateWithoutSharesInput_schema_1 = require("./ExpenseUncheckedUpdateWithoutSharesInput.schema");
exports.ExpenseUpdateToOneWithWhereWithoutSharesInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpdateWithoutSharesInput_schema_1.ExpenseUpdateWithoutSharesInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedUpdateWithoutSharesInput_schema_1.ExpenseUncheckedUpdateWithoutSharesInputObjectSchema)])
}).strict();
