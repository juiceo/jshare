"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUpdateManyWithWhereWithoutGroupInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseScalarWhereInput_schema_1 = require("./ExpenseScalarWhereInput.schema");
const ExpenseUpdateManyMutationInput_schema_1 = require("./ExpenseUpdateManyMutationInput.schema");
const ExpenseUncheckedUpdateManyWithoutGroupInput_schema_1 = require("./ExpenseUncheckedUpdateManyWithoutGroupInput.schema");
exports.ExpenseUpdateManyWithWhereWithoutGroupInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseScalarWhereInput_schema_1.ExpenseScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpdateManyMutationInput_schema_1.ExpenseUpdateManyMutationInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedUpdateManyWithoutGroupInput_schema_1.ExpenseUncheckedUpdateManyWithoutGroupInputObjectSchema)])
}).strict();
