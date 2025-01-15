"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUpdateWithWhereUniqueWithoutGroupInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
const ExpenseUpdateWithoutGroupInput_schema_1 = require("./ExpenseUpdateWithoutGroupInput.schema");
const ExpenseUncheckedUpdateWithoutGroupInput_schema_1 = require("./ExpenseUncheckedUpdateWithoutGroupInput.schema");
exports.ExpenseUpdateWithWhereUniqueWithoutGroupInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpdateWithoutGroupInput_schema_1.ExpenseUpdateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedUpdateWithoutGroupInput_schema_1.ExpenseUncheckedUpdateWithoutGroupInputObjectSchema)])
}).strict();
