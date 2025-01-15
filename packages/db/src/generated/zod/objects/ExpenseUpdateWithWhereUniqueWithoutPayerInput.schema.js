"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUpdateWithWhereUniqueWithoutPayerInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
const ExpenseUpdateWithoutPayerInput_schema_1 = require("./ExpenseUpdateWithoutPayerInput.schema");
const ExpenseUncheckedUpdateWithoutPayerInput_schema_1 = require("./ExpenseUncheckedUpdateWithoutPayerInput.schema");
exports.ExpenseUpdateWithWhereUniqueWithoutPayerInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpdateWithoutPayerInput_schema_1.ExpenseUpdateWithoutPayerInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedUpdateWithoutPayerInput_schema_1.ExpenseUncheckedUpdateWithoutPayerInputObjectSchema)])
}).strict();
