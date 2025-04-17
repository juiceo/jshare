"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUpdateManyWithoutGroupNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseCreateWithoutGroupInput_schema_1 = require("./ExpenseCreateWithoutGroupInput.schema");
const ExpenseUncheckedCreateWithoutGroupInput_schema_1 = require("./ExpenseUncheckedCreateWithoutGroupInput.schema");
const ExpenseCreateOrConnectWithoutGroupInput_schema_1 = require("./ExpenseCreateOrConnectWithoutGroupInput.schema");
const ExpenseUpsertWithWhereUniqueWithoutGroupInput_schema_1 = require("./ExpenseUpsertWithWhereUniqueWithoutGroupInput.schema");
const ExpenseCreateManyGroupInputEnvelope_schema_1 = require("./ExpenseCreateManyGroupInputEnvelope.schema");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
const ExpenseUpdateWithWhereUniqueWithoutGroupInput_schema_1 = require("./ExpenseUpdateWithWhereUniqueWithoutGroupInput.schema");
const ExpenseUpdateManyWithWhereWithoutGroupInput_schema_1 = require("./ExpenseUpdateManyWithWhereWithoutGroupInput.schema");
const ExpenseScalarWhereInput_schema_1 = require("./ExpenseScalarWhereInput.schema");
exports.ExpenseUpdateManyWithoutGroupNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutGroupInput_schema_1.ExpenseCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => ExpenseCreateWithoutGroupInput_schema_1.ExpenseCreateWithoutGroupInputObjectSchema).array(), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutGroupInput_schema_1.ExpenseUncheckedCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutGroupInput_schema_1.ExpenseUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateOrConnectWithoutGroupInput_schema_1.ExpenseCreateOrConnectWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => ExpenseCreateOrConnectWithoutGroupInput_schema_1.ExpenseCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpsertWithWhereUniqueWithoutGroupInput_schema_1.ExpenseUpsertWithWhereUniqueWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => ExpenseUpsertWithWhereUniqueWithoutGroupInput_schema_1.ExpenseUpsertWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ExpenseCreateManyGroupInputEnvelope_schema_1.ExpenseCreateManyGroupInputEnvelopeObjectSchema).optional().optional(), set: zod_1.z.union([zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpdateWithWhereUniqueWithoutGroupInput_schema_1.ExpenseUpdateWithWhereUniqueWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => ExpenseUpdateWithWhereUniqueWithoutGroupInput_schema_1.ExpenseUpdateWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpdateManyWithWhereWithoutGroupInput_schema_1.ExpenseUpdateManyWithWhereWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => ExpenseUpdateManyWithWhereWithoutGroupInput_schema_1.ExpenseUpdateManyWithWhereWithoutGroupInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => ExpenseScalarWhereInput_schema_1.ExpenseScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => ExpenseScalarWhereInput_schema_1.ExpenseScalarWhereInputObjectSchema).array()]).optional()
}).strict();
