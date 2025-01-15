"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCreateNestedManyWithoutGroupInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseCreateWithoutGroupInput_schema_1 = require("./ExpenseCreateWithoutGroupInput.schema");
const ExpenseUncheckedCreateWithoutGroupInput_schema_1 = require("./ExpenseUncheckedCreateWithoutGroupInput.schema");
const ExpenseCreateOrConnectWithoutGroupInput_schema_1 = require("./ExpenseCreateOrConnectWithoutGroupInput.schema");
const ExpenseCreateManyGroupInputEnvelope_schema_1 = require("./ExpenseCreateManyGroupInputEnvelope.schema");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
exports.ExpenseCreateNestedManyWithoutGroupInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutGroupInput_schema_1.ExpenseCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => ExpenseCreateWithoutGroupInput_schema_1.ExpenseCreateWithoutGroupInputObjectSchema).array(), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutGroupInput_schema_1.ExpenseUncheckedCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutGroupInput_schema_1.ExpenseUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateOrConnectWithoutGroupInput_schema_1.ExpenseCreateOrConnectWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => ExpenseCreateOrConnectWithoutGroupInput_schema_1.ExpenseCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ExpenseCreateManyGroupInputEnvelope_schema_1.ExpenseCreateManyGroupInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
