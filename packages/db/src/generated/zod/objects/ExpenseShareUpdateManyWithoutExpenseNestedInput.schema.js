"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareUpdateManyWithoutExpenseNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseShareCreateWithoutExpenseInput_schema_1 = require("./ExpenseShareCreateWithoutExpenseInput.schema");
const ExpenseShareUncheckedCreateWithoutExpenseInput_schema_1 = require("./ExpenseShareUncheckedCreateWithoutExpenseInput.schema");
const ExpenseShareCreateOrConnectWithoutExpenseInput_schema_1 = require("./ExpenseShareCreateOrConnectWithoutExpenseInput.schema");
const ExpenseShareUpsertWithWhereUniqueWithoutExpenseInput_schema_1 = require("./ExpenseShareUpsertWithWhereUniqueWithoutExpenseInput.schema");
const ExpenseShareCreateManyExpenseInputEnvelope_schema_1 = require("./ExpenseShareCreateManyExpenseInputEnvelope.schema");
const ExpenseShareWhereUniqueInput_schema_1 = require("./ExpenseShareWhereUniqueInput.schema");
const ExpenseShareUpdateWithWhereUniqueWithoutExpenseInput_schema_1 = require("./ExpenseShareUpdateWithWhereUniqueWithoutExpenseInput.schema");
const ExpenseShareUpdateManyWithWhereWithoutExpenseInput_schema_1 = require("./ExpenseShareUpdateManyWithWhereWithoutExpenseInput.schema");
const ExpenseShareScalarWhereInput_schema_1 = require("./ExpenseShareScalarWhereInput.schema");
exports.ExpenseShareUpdateManyWithoutExpenseNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareCreateWithoutExpenseInput_schema_1.ExpenseShareCreateWithoutExpenseInputObjectSchema), zod_1.z.lazy(() => ExpenseShareCreateWithoutExpenseInput_schema_1.ExpenseShareCreateWithoutExpenseInputObjectSchema).array(), zod_1.z.lazy(() => ExpenseShareUncheckedCreateWithoutExpenseInput_schema_1.ExpenseShareUncheckedCreateWithoutExpenseInputObjectSchema), zod_1.z.lazy(() => ExpenseShareUncheckedCreateWithoutExpenseInput_schema_1.ExpenseShareUncheckedCreateWithoutExpenseInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareCreateOrConnectWithoutExpenseInput_schema_1.ExpenseShareCreateOrConnectWithoutExpenseInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareCreateOrConnectWithoutExpenseInput_schema_1.ExpenseShareCreateOrConnectWithoutExpenseInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareUpsertWithWhereUniqueWithoutExpenseInput_schema_1.ExpenseShareUpsertWithWhereUniqueWithoutExpenseInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareUpsertWithWhereUniqueWithoutExpenseInput_schema_1.ExpenseShareUpsertWithWhereUniqueWithoutExpenseInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ExpenseShareCreateManyExpenseInputEnvelope_schema_1.ExpenseShareCreateManyExpenseInputEnvelopeObjectSchema).optional().optional(), set: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareUpdateWithWhereUniqueWithoutExpenseInput_schema_1.ExpenseShareUpdateWithWhereUniqueWithoutExpenseInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareUpdateWithWhereUniqueWithoutExpenseInput_schema_1.ExpenseShareUpdateWithWhereUniqueWithoutExpenseInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareUpdateManyWithWhereWithoutExpenseInput_schema_1.ExpenseShareUpdateManyWithWhereWithoutExpenseInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareUpdateManyWithWhereWithoutExpenseInput_schema_1.ExpenseShareUpdateManyWithWhereWithoutExpenseInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareScalarWhereInput_schema_1.ExpenseShareScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareScalarWhereInput_schema_1.ExpenseShareScalarWhereInputObjectSchema).array()]).optional()
}).strict();
