"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUpsertWithoutSharesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ExpenseUpdateWithoutSharesInput_schema_1 = require("./ExpenseUpdateWithoutSharesInput.schema");
const ExpenseUncheckedUpdateWithoutSharesInput_schema_1 = require("./ExpenseUncheckedUpdateWithoutSharesInput.schema");
const ExpenseCreateWithoutSharesInput_schema_1 = require("./ExpenseCreateWithoutSharesInput.schema");
const ExpenseUncheckedCreateWithoutSharesInput_schema_1 = require("./ExpenseUncheckedCreateWithoutSharesInput.schema");
const ExpenseWhereInput_schema_1 = require("./ExpenseWhereInput.schema");
exports.ExpenseUpsertWithoutSharesInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpdateWithoutSharesInput_schema_1.ExpenseUpdateWithoutSharesInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedUpdateWithoutSharesInput_schema_1.ExpenseUncheckedUpdateWithoutSharesInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutSharesInput_schema_1.ExpenseCreateWithoutSharesInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutSharesInput_schema_1.ExpenseUncheckedCreateWithoutSharesInputObjectSchema)]), where: zod_1.z.lazy(() => ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema).optional()
}).strict();
