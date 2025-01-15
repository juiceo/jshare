"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUpdateManyWithoutPayerNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseCreateWithoutPayerInput_schema_1 = require("./ExpenseCreateWithoutPayerInput.schema");
const ExpenseUncheckedCreateWithoutPayerInput_schema_1 = require("./ExpenseUncheckedCreateWithoutPayerInput.schema");
const ExpenseCreateOrConnectWithoutPayerInput_schema_1 = require("./ExpenseCreateOrConnectWithoutPayerInput.schema");
const ExpenseUpsertWithWhereUniqueWithoutPayerInput_schema_1 = require("./ExpenseUpsertWithWhereUniqueWithoutPayerInput.schema");
const ExpenseCreateManyPayerInputEnvelope_schema_1 = require("./ExpenseCreateManyPayerInputEnvelope.schema");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
const ExpenseUpdateWithWhereUniqueWithoutPayerInput_schema_1 = require("./ExpenseUpdateWithWhereUniqueWithoutPayerInput.schema");
const ExpenseUpdateManyWithWhereWithoutPayerInput_schema_1 = require("./ExpenseUpdateManyWithWhereWithoutPayerInput.schema");
const ExpenseScalarWhereInput_schema_1 = require("./ExpenseScalarWhereInput.schema");
exports.ExpenseUpdateManyWithoutPayerNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutPayerInput_schema_1.ExpenseCreateWithoutPayerInputObjectSchema), zod_1.z.lazy(() => ExpenseCreateWithoutPayerInput_schema_1.ExpenseCreateWithoutPayerInputObjectSchema).array(), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutPayerInput_schema_1.ExpenseUncheckedCreateWithoutPayerInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutPayerInput_schema_1.ExpenseUncheckedCreateWithoutPayerInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateOrConnectWithoutPayerInput_schema_1.ExpenseCreateOrConnectWithoutPayerInputObjectSchema),
        zod_1.z.lazy(() => ExpenseCreateOrConnectWithoutPayerInput_schema_1.ExpenseCreateOrConnectWithoutPayerInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpsertWithWhereUniqueWithoutPayerInput_schema_1.ExpenseUpsertWithWhereUniqueWithoutPayerInputObjectSchema),
        zod_1.z.lazy(() => ExpenseUpsertWithWhereUniqueWithoutPayerInput_schema_1.ExpenseUpsertWithWhereUniqueWithoutPayerInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ExpenseCreateManyPayerInputEnvelope_schema_1.ExpenseCreateManyPayerInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpdateWithWhereUniqueWithoutPayerInput_schema_1.ExpenseUpdateWithWhereUniqueWithoutPayerInputObjectSchema),
        zod_1.z.lazy(() => ExpenseUpdateWithWhereUniqueWithoutPayerInput_schema_1.ExpenseUpdateWithWhereUniqueWithoutPayerInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpdateManyWithWhereWithoutPayerInput_schema_1.ExpenseUpdateManyWithWhereWithoutPayerInputObjectSchema),
        zod_1.z.lazy(() => ExpenseUpdateManyWithWhereWithoutPayerInput_schema_1.ExpenseUpdateManyWithWhereWithoutPayerInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => ExpenseScalarWhereInput_schema_1.ExpenseScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => ExpenseScalarWhereInput_schema_1.ExpenseScalarWhereInputObjectSchema).array()]).optional()
}).strict();
