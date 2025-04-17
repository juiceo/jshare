"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCreateNestedOneWithoutSharesInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseCreateWithoutSharesInput_schema_1 = require("./ExpenseCreateWithoutSharesInput.schema");
const ExpenseUncheckedCreateWithoutSharesInput_schema_1 = require("./ExpenseUncheckedCreateWithoutSharesInput.schema");
const ExpenseCreateOrConnectWithoutSharesInput_schema_1 = require("./ExpenseCreateOrConnectWithoutSharesInput.schema");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
exports.ExpenseCreateNestedOneWithoutSharesInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutSharesInput_schema_1.ExpenseCreateWithoutSharesInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutSharesInput_schema_1.ExpenseUncheckedCreateWithoutSharesInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ExpenseCreateOrConnectWithoutSharesInput_schema_1.ExpenseCreateOrConnectWithoutSharesInputObjectSchema).optional().optional(), connect: zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema).optional().optional()
}).strict();
