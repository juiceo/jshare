"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareCreateOrConnectWithoutUserInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseShareWhereUniqueInput_schema_1 = require("./ExpenseShareWhereUniqueInput.schema");
const ExpenseShareCreateWithoutUserInput_schema_1 = require("./ExpenseShareCreateWithoutUserInput.schema");
const ExpenseShareUncheckedCreateWithoutUserInput_schema_1 = require("./ExpenseShareUncheckedCreateWithoutUserInput.schema");
exports.ExpenseShareCreateOrConnectWithoutUserInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseShareWhereUniqueInput_schema_1.ExpenseShareWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareCreateWithoutUserInput_schema_1.ExpenseShareCreateWithoutUserInputObjectSchema), zod_1.z.lazy(() => ExpenseShareUncheckedCreateWithoutUserInput_schema_1.ExpenseShareUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
