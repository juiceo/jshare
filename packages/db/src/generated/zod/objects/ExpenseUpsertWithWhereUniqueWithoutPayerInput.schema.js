"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUpsertWithWhereUniqueWithoutPayerInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
const ExpenseUpdateWithoutPayerInput_schema_1 = require("./ExpenseUpdateWithoutPayerInput.schema");
const ExpenseUncheckedUpdateWithoutPayerInput_schema_1 = require("./ExpenseUncheckedUpdateWithoutPayerInput.schema");
const ExpenseCreateWithoutPayerInput_schema_1 = require("./ExpenseCreateWithoutPayerInput.schema");
const ExpenseUncheckedCreateWithoutPayerInput_schema_1 = require("./ExpenseUncheckedCreateWithoutPayerInput.schema");
exports.ExpenseUpsertWithWhereUniqueWithoutPayerInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpdateWithoutPayerInput_schema_1.ExpenseUpdateWithoutPayerInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedUpdateWithoutPayerInput_schema_1.ExpenseUncheckedUpdateWithoutPayerInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutPayerInput_schema_1.ExpenseCreateWithoutPayerInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutPayerInput_schema_1.ExpenseUncheckedCreateWithoutPayerInputObjectSchema)])
}).strict();
