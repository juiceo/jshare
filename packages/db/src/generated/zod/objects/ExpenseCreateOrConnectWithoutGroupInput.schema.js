"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCreateOrConnectWithoutGroupInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
const ExpenseCreateWithoutGroupInput_schema_1 = require("./ExpenseCreateWithoutGroupInput.schema");
const ExpenseUncheckedCreateWithoutGroupInput_schema_1 = require("./ExpenseUncheckedCreateWithoutGroupInput.schema");
exports.ExpenseCreateOrConnectWithoutGroupInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutGroupInput_schema_1.ExpenseCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutGroupInput_schema_1.ExpenseUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
