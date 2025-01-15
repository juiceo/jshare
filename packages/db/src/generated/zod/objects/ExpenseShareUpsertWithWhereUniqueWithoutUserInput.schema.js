"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareUpsertWithWhereUniqueWithoutUserInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ExpenseShareWhereUniqueInput_schema_1 = require("./ExpenseShareWhereUniqueInput.schema");
const ExpenseShareUpdateWithoutUserInput_schema_1 = require("./ExpenseShareUpdateWithoutUserInput.schema");
const ExpenseShareUncheckedUpdateWithoutUserInput_schema_1 = require("./ExpenseShareUncheckedUpdateWithoutUserInput.schema");
const ExpenseShareCreateWithoutUserInput_schema_1 = require("./ExpenseShareCreateWithoutUserInput.schema");
const ExpenseShareUncheckedCreateWithoutUserInput_schema_1 = require("./ExpenseShareUncheckedCreateWithoutUserInput.schema");
exports.ExpenseShareUpsertWithWhereUniqueWithoutUserInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareUpdateWithoutUserInput_schema_1.ExpenseShareUpdateWithoutUserInputObjectSchema), zod_1.z.lazy(() => ExpenseShareUncheckedUpdateWithoutUserInput_schema_1.ExpenseShareUncheckedUpdateWithoutUserInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareCreateWithoutUserInput_schema_1.ExpenseShareCreateWithoutUserInputObjectSchema), zod_1.z.lazy(() => ExpenseShareUncheckedCreateWithoutUserInput_schema_1.ExpenseShareUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
