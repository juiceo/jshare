"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUncheckedCreateNestedManyWithoutOwnerInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseCreateWithoutOwnerInput_schema_1 = require("./ExpenseCreateWithoutOwnerInput.schema");
const ExpenseUncheckedCreateWithoutOwnerInput_schema_1 = require("./ExpenseUncheckedCreateWithoutOwnerInput.schema");
const ExpenseCreateOrConnectWithoutOwnerInput_schema_1 = require("./ExpenseCreateOrConnectWithoutOwnerInput.schema");
const ExpenseCreateManyOwnerInputEnvelope_schema_1 = require("./ExpenseCreateManyOwnerInputEnvelope.schema");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
exports.ExpenseUncheckedCreateNestedManyWithoutOwnerInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutOwnerInput_schema_1.ExpenseCreateWithoutOwnerInputObjectSchema), zod_1.z.lazy(() => ExpenseCreateWithoutOwnerInput_schema_1.ExpenseCreateWithoutOwnerInputObjectSchema).array(), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutOwnerInput_schema_1.ExpenseUncheckedCreateWithoutOwnerInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutOwnerInput_schema_1.ExpenseUncheckedCreateWithoutOwnerInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateOrConnectWithoutOwnerInput_schema_1.ExpenseCreateOrConnectWithoutOwnerInputObjectSchema),
        zod_1.z.lazy(() => ExpenseCreateOrConnectWithoutOwnerInput_schema_1.ExpenseCreateOrConnectWithoutOwnerInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ExpenseCreateManyOwnerInputEnvelope_schema_1.ExpenseCreateManyOwnerInputEnvelopeObjectSchema).optional().optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
