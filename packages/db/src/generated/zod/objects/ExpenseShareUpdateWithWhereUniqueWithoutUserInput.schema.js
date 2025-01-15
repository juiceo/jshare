"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareUpdateWithWhereUniqueWithoutUserInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseShareWhereUniqueInput_schema_1 = require("./ExpenseShareWhereUniqueInput.schema");
const ExpenseShareUpdateWithoutUserInput_schema_1 = require("./ExpenseShareUpdateWithoutUserInput.schema");
const ExpenseShareUncheckedUpdateWithoutUserInput_schema_1 = require("./ExpenseShareUncheckedUpdateWithoutUserInput.schema");
exports.ExpenseShareUpdateWithWhereUniqueWithoutUserInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareUpdateWithoutUserInput_schema_1.ExpenseShareUpdateWithoutUserInputObjectSchema), zod_1.z.lazy(() => ExpenseShareUncheckedUpdateWithoutUserInput_schema_1.ExpenseShareUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
