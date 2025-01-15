"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCreateOrConnectWithoutOwnerInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
const ExpenseCreateWithoutOwnerInput_schema_1 = require("./ExpenseCreateWithoutOwnerInput.schema");
const ExpenseUncheckedCreateWithoutOwnerInput_schema_1 = require("./ExpenseUncheckedCreateWithoutOwnerInput.schema");
exports.ExpenseCreateOrConnectWithoutOwnerInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutOwnerInput_schema_1.ExpenseCreateWithoutOwnerInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutOwnerInput_schema_1.ExpenseUncheckedCreateWithoutOwnerInputObjectSchema)])
}).strict();
