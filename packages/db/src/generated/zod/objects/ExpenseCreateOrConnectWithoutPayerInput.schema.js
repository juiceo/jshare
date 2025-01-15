"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCreateOrConnectWithoutPayerInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
const ExpenseCreateWithoutPayerInput_schema_1 = require("./ExpenseCreateWithoutPayerInput.schema");
const ExpenseUncheckedCreateWithoutPayerInput_schema_1 = require("./ExpenseUncheckedCreateWithoutPayerInput.schema");
exports.ExpenseCreateOrConnectWithoutPayerInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutPayerInput_schema_1.ExpenseCreateWithoutPayerInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutPayerInput_schema_1.ExpenseUncheckedCreateWithoutPayerInputObjectSchema)])
}).strict();
