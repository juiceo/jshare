"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseCreateWithoutOwnerInput_schema_1 = require("./ExpenseCreateWithoutOwnerInput.schema");
const ExpenseUncheckedCreateWithoutOwnerInput_schema_1 = require("./ExpenseUncheckedCreateWithoutOwnerInput.schema");
const ExpenseCreateOrConnectWithoutOwnerInput_schema_1 = require("./ExpenseCreateOrConnectWithoutOwnerInput.schema");
const ExpenseUpsertWithWhereUniqueWithoutOwnerInput_schema_1 = require("./ExpenseUpsertWithWhereUniqueWithoutOwnerInput.schema");
const ExpenseCreateManyOwnerInputEnvelope_schema_1 = require("./ExpenseCreateManyOwnerInputEnvelope.schema");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
const ExpenseUpdateWithWhereUniqueWithoutOwnerInput_schema_1 = require("./ExpenseUpdateWithWhereUniqueWithoutOwnerInput.schema");
const ExpenseUpdateManyWithWhereWithoutOwnerInput_schema_1 = require("./ExpenseUpdateManyWithWhereWithoutOwnerInput.schema");
const ExpenseScalarWhereInput_schema_1 = require("./ExpenseScalarWhereInput.schema");
exports.ExpenseUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutOwnerInput_schema_1.ExpenseCreateWithoutOwnerInputObjectSchema), zod_1.z.lazy(() => ExpenseCreateWithoutOwnerInput_schema_1.ExpenseCreateWithoutOwnerInputObjectSchema).array(), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutOwnerInput_schema_1.ExpenseUncheckedCreateWithoutOwnerInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutOwnerInput_schema_1.ExpenseUncheckedCreateWithoutOwnerInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateOrConnectWithoutOwnerInput_schema_1.ExpenseCreateOrConnectWithoutOwnerInputObjectSchema),
        zod_1.z.lazy(() => ExpenseCreateOrConnectWithoutOwnerInput_schema_1.ExpenseCreateOrConnectWithoutOwnerInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpsertWithWhereUniqueWithoutOwnerInput_schema_1.ExpenseUpsertWithWhereUniqueWithoutOwnerInputObjectSchema),
        zod_1.z.lazy(() => ExpenseUpsertWithWhereUniqueWithoutOwnerInput_schema_1.ExpenseUpsertWithWhereUniqueWithoutOwnerInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ExpenseCreateManyOwnerInputEnvelope_schema_1.ExpenseCreateManyOwnerInputEnvelopeObjectSchema).optional().optional(), set: zod_1.z.union([zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpdateWithWhereUniqueWithoutOwnerInput_schema_1.ExpenseUpdateWithWhereUniqueWithoutOwnerInputObjectSchema),
        zod_1.z.lazy(() => ExpenseUpdateWithWhereUniqueWithoutOwnerInput_schema_1.ExpenseUpdateWithWhereUniqueWithoutOwnerInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpdateManyWithWhereWithoutOwnerInput_schema_1.ExpenseUpdateManyWithWhereWithoutOwnerInputObjectSchema),
        zod_1.z.lazy(() => ExpenseUpdateManyWithWhereWithoutOwnerInput_schema_1.ExpenseUpdateManyWithWhereWithoutOwnerInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => ExpenseScalarWhereInput_schema_1.ExpenseScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => ExpenseScalarWhereInput_schema_1.ExpenseScalarWhereInputObjectSchema).array()]).optional()
}).strict();
