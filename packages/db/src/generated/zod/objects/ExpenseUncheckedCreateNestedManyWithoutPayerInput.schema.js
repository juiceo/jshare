"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUncheckedCreateNestedManyWithoutPayerInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseCreateWithoutPayerInput_schema_1 = require("./ExpenseCreateWithoutPayerInput.schema");
const ExpenseUncheckedCreateWithoutPayerInput_schema_1 = require("./ExpenseUncheckedCreateWithoutPayerInput.schema");
const ExpenseCreateOrConnectWithoutPayerInput_schema_1 = require("./ExpenseCreateOrConnectWithoutPayerInput.schema");
const ExpenseCreateManyPayerInputEnvelope_schema_1 = require("./ExpenseCreateManyPayerInputEnvelope.schema");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
exports.ExpenseUncheckedCreateNestedManyWithoutPayerInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutPayerInput_schema_1.ExpenseCreateWithoutPayerInputObjectSchema), zod_1.z.lazy(() => ExpenseCreateWithoutPayerInput_schema_1.ExpenseCreateWithoutPayerInputObjectSchema).array(), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutPayerInput_schema_1.ExpenseUncheckedCreateWithoutPayerInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutPayerInput_schema_1.ExpenseUncheckedCreateWithoutPayerInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateOrConnectWithoutPayerInput_schema_1.ExpenseCreateOrConnectWithoutPayerInputObjectSchema),
        zod_1.z.lazy(() => ExpenseCreateOrConnectWithoutPayerInput_schema_1.ExpenseCreateOrConnectWithoutPayerInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ExpenseCreateManyPayerInputEnvelope_schema_1.ExpenseCreateManyPayerInputEnvelopeObjectSchema).optional().optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
