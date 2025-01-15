"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUpdateWithWhereUniqueWithoutOwnerInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
const ExpenseUpdateWithoutOwnerInput_schema_1 = require("./ExpenseUpdateWithoutOwnerInput.schema");
const ExpenseUncheckedUpdateWithoutOwnerInput_schema_1 = require("./ExpenseUncheckedUpdateWithoutOwnerInput.schema");
exports.ExpenseUpdateWithWhereUniqueWithoutOwnerInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpdateWithoutOwnerInput_schema_1.ExpenseUpdateWithoutOwnerInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedUpdateWithoutOwnerInput_schema_1.ExpenseUncheckedUpdateWithoutOwnerInputObjectSchema)])
}).strict();
