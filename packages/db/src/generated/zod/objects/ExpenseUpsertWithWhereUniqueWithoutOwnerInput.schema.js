"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUpsertWithWhereUniqueWithoutOwnerInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
const ExpenseUpdateWithoutOwnerInput_schema_1 = require("./ExpenseUpdateWithoutOwnerInput.schema");
const ExpenseUncheckedUpdateWithoutOwnerInput_schema_1 = require("./ExpenseUncheckedUpdateWithoutOwnerInput.schema");
const ExpenseCreateWithoutOwnerInput_schema_1 = require("./ExpenseCreateWithoutOwnerInput.schema");
const ExpenseUncheckedCreateWithoutOwnerInput_schema_1 = require("./ExpenseUncheckedCreateWithoutOwnerInput.schema");
exports.ExpenseUpsertWithWhereUniqueWithoutOwnerInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpdateWithoutOwnerInput_schema_1.ExpenseUpdateWithoutOwnerInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedUpdateWithoutOwnerInput_schema_1.ExpenseUncheckedUpdateWithoutOwnerInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutOwnerInput_schema_1.ExpenseCreateWithoutOwnerInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutOwnerInput_schema_1.ExpenseUncheckedCreateWithoutOwnerInputObjectSchema)])
}).strict();
