"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUpsertWithWhereUniqueWithoutGroupInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
const ExpenseUpdateWithoutGroupInput_schema_1 = require("./ExpenseUpdateWithoutGroupInput.schema");
const ExpenseUncheckedUpdateWithoutGroupInput_schema_1 = require("./ExpenseUncheckedUpdateWithoutGroupInput.schema");
const ExpenseCreateWithoutGroupInput_schema_1 = require("./ExpenseCreateWithoutGroupInput.schema");
const ExpenseUncheckedCreateWithoutGroupInput_schema_1 = require("./ExpenseUncheckedCreateWithoutGroupInput.schema");
exports.ExpenseUpsertWithWhereUniqueWithoutGroupInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpdateWithoutGroupInput_schema_1.ExpenseUpdateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedUpdateWithoutGroupInput_schema_1.ExpenseUncheckedUpdateWithoutGroupInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutGroupInput_schema_1.ExpenseCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutGroupInput_schema_1.ExpenseUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
