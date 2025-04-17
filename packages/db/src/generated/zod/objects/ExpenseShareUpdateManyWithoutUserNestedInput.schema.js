"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareUpdateManyWithoutUserNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseShareCreateWithoutUserInput_schema_1 = require("./ExpenseShareCreateWithoutUserInput.schema");
const ExpenseShareUncheckedCreateWithoutUserInput_schema_1 = require("./ExpenseShareUncheckedCreateWithoutUserInput.schema");
const ExpenseShareCreateOrConnectWithoutUserInput_schema_1 = require("./ExpenseShareCreateOrConnectWithoutUserInput.schema");
const ExpenseShareUpsertWithWhereUniqueWithoutUserInput_schema_1 = require("./ExpenseShareUpsertWithWhereUniqueWithoutUserInput.schema");
const ExpenseShareCreateManyUserInputEnvelope_schema_1 = require("./ExpenseShareCreateManyUserInputEnvelope.schema");
const ExpenseShareWhereUniqueInput_schema_1 = require("./ExpenseShareWhereUniqueInput.schema");
const ExpenseShareUpdateWithWhereUniqueWithoutUserInput_schema_1 = require("./ExpenseShareUpdateWithWhereUniqueWithoutUserInput.schema");
const ExpenseShareUpdateManyWithWhereWithoutUserInput_schema_1 = require("./ExpenseShareUpdateManyWithWhereWithoutUserInput.schema");
const ExpenseShareScalarWhereInput_schema_1 = require("./ExpenseShareScalarWhereInput.schema");
exports.ExpenseShareUpdateManyWithoutUserNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareCreateWithoutUserInput_schema_1.ExpenseShareCreateWithoutUserInputObjectSchema), zod_1.z.lazy(() => ExpenseShareCreateWithoutUserInput_schema_1.ExpenseShareCreateWithoutUserInputObjectSchema).array(), zod_1.z.lazy(() => ExpenseShareUncheckedCreateWithoutUserInput_schema_1.ExpenseShareUncheckedCreateWithoutUserInputObjectSchema), zod_1.z.lazy(() => ExpenseShareUncheckedCreateWithoutUserInput_schema_1.ExpenseShareUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareCreateOrConnectWithoutUserInput_schema_1.ExpenseShareCreateOrConnectWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareCreateOrConnectWithoutUserInput_schema_1.ExpenseShareCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareUpsertWithWhereUniqueWithoutUserInput_schema_1.ExpenseShareUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareUpsertWithWhereUniqueWithoutUserInput_schema_1.ExpenseShareUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ExpenseShareCreateManyUserInputEnvelope_schema_1.ExpenseShareCreateManyUserInputEnvelopeObjectSchema).optional().optional(), set: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareUpdateWithWhereUniqueWithoutUserInput_schema_1.ExpenseShareUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareUpdateWithWhereUniqueWithoutUserInput_schema_1.ExpenseShareUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareUpdateManyWithWhereWithoutUserInput_schema_1.ExpenseShareUpdateManyWithWhereWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareUpdateManyWithWhereWithoutUserInput_schema_1.ExpenseShareUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareScalarWhereInput_schema_1.ExpenseShareScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareScalarWhereInput_schema_1.ExpenseShareScalarWhereInputObjectSchema).array()]).optional()
}).strict();
