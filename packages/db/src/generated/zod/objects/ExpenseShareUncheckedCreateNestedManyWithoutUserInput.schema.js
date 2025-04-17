"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareUncheckedCreateNestedManyWithoutUserInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseShareCreateWithoutUserInput_schema_1 = require("./ExpenseShareCreateWithoutUserInput.schema");
const ExpenseShareUncheckedCreateWithoutUserInput_schema_1 = require("./ExpenseShareUncheckedCreateWithoutUserInput.schema");
const ExpenseShareCreateOrConnectWithoutUserInput_schema_1 = require("./ExpenseShareCreateOrConnectWithoutUserInput.schema");
const ExpenseShareCreateManyUserInputEnvelope_schema_1 = require("./ExpenseShareCreateManyUserInputEnvelope.schema");
const ExpenseShareWhereUniqueInput_schema_1 = require("./ExpenseShareWhereUniqueInput.schema");
exports.ExpenseShareUncheckedCreateNestedManyWithoutUserInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareCreateWithoutUserInput_schema_1.ExpenseShareCreateWithoutUserInputObjectSchema), zod_1.z.lazy(() => ExpenseShareCreateWithoutUserInput_schema_1.ExpenseShareCreateWithoutUserInputObjectSchema).array(), zod_1.z.lazy(() => ExpenseShareUncheckedCreateWithoutUserInput_schema_1.ExpenseShareUncheckedCreateWithoutUserInputObjectSchema), zod_1.z.lazy(() => ExpenseShareUncheckedCreateWithoutUserInput_schema_1.ExpenseShareUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareCreateOrConnectWithoutUserInput_schema_1.ExpenseShareCreateOrConnectWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareCreateOrConnectWithoutUserInput_schema_1.ExpenseShareCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => ExpenseShareCreateManyUserInputEnvelope_schema_1.ExpenseShareCreateManyUserInputEnvelopeObjectSchema).optional().optional(), connect: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
