"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCreateOrConnectWithoutSharesInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
const ExpenseCreateWithoutSharesInput_schema_1 = require("./ExpenseCreateWithoutSharesInput.schema");
const ExpenseUncheckedCreateWithoutSharesInput_schema_1 = require("./ExpenseUncheckedCreateWithoutSharesInput.schema");
exports.ExpenseCreateOrConnectWithoutSharesInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutSharesInput_schema_1.ExpenseCreateWithoutSharesInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutSharesInput_schema_1.ExpenseUncheckedCreateWithoutSharesInputObjectSchema)])
}).strict();
