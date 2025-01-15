"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareCreateNestedManyWithoutExpenseInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseShareCreateWithoutExpenseInput_schema_1 = require("./ExpenseShareCreateWithoutExpenseInput.schema");
const ExpenseShareUncheckedCreateWithoutExpenseInput_schema_1 = require("./ExpenseShareUncheckedCreateWithoutExpenseInput.schema");
const ExpenseShareCreateOrConnectWithoutExpenseInput_schema_1 = require("./ExpenseShareCreateOrConnectWithoutExpenseInput.schema");
const ExpenseShareCreateManyExpenseInputEnvelope_schema_1 = require("./ExpenseShareCreateManyExpenseInputEnvelope.schema");
const ExpenseShareWhereUniqueInput_schema_1 = require("./ExpenseShareWhereUniqueInput.schema");
exports.ExpenseShareCreateNestedManyWithoutExpenseInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareCreateWithoutExpenseInput_schema_1.ExpenseShareCreateWithoutExpenseInputObjectSchema), zod_1.z.lazy(() => ExpenseShareCreateWithoutExpenseInput_schema_1.ExpenseShareCreateWithoutExpenseInputObjectSchema).array(), zod_1.z.lazy(() => ExpenseShareUncheckedCreateWithoutExpenseInput_schema_1.ExpenseShareUncheckedCreateWithoutExpenseInputObjectSchema), zod_1.z.lazy(() => ExpenseShareUncheckedCreateWithoutExpenseInput_schema_1.ExpenseShareUncheckedCreateWithoutExpenseInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareCreateOrConnectWithoutExpenseInput_schema_1.ExpenseShareCreateOrConnectWithoutExpenseInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareCreateOrConnectWithoutExpenseInput_schema_1.ExpenseShareCreateOrConnectWithoutExpenseInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ExpenseShareCreateManyExpenseInputEnvelope_schema_1.ExpenseShareCreateManyExpenseInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
