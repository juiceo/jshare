"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUpdateOneRequiredWithoutSharesNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseCreateWithoutSharesInput_schema_1 = require("./ExpenseCreateWithoutSharesInput.schema");
const ExpenseUncheckedCreateWithoutSharesInput_schema_1 = require("./ExpenseUncheckedCreateWithoutSharesInput.schema");
const ExpenseCreateOrConnectWithoutSharesInput_schema_1 = require("./ExpenseCreateOrConnectWithoutSharesInput.schema");
const ExpenseUpsertWithoutSharesInput_schema_1 = require("./ExpenseUpsertWithoutSharesInput.schema");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
const ExpenseUpdateToOneWithWhereWithoutSharesInput_schema_1 = require("./ExpenseUpdateToOneWithWhereWithoutSharesInput.schema");
const ExpenseUpdateWithoutSharesInput_schema_1 = require("./ExpenseUpdateWithoutSharesInput.schema");
const ExpenseUncheckedUpdateWithoutSharesInput_schema_1 = require("./ExpenseUncheckedUpdateWithoutSharesInput.schema");
exports.ExpenseUpdateOneRequiredWithoutSharesNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutSharesInput_schema_1.ExpenseCreateWithoutSharesInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutSharesInput_schema_1.ExpenseUncheckedCreateWithoutSharesInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ExpenseCreateOrConnectWithoutSharesInput_schema_1.ExpenseCreateOrConnectWithoutSharesInputObjectSchema).optional().optional(), upsert: zod_1.z.lazy(() => ExpenseUpsertWithoutSharesInput_schema_1.ExpenseUpsertWithoutSharesInputObjectSchema).optional().optional(), connect: zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema).optional().optional(), update: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpdateToOneWithWhereWithoutSharesInput_schema_1.ExpenseUpdateToOneWithWhereWithoutSharesInputObjectSchema), zod_1.z.lazy(() => ExpenseUpdateWithoutSharesInput_schema_1.ExpenseUpdateWithoutSharesInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedUpdateWithoutSharesInput_schema_1.ExpenseUncheckedUpdateWithoutSharesInputObjectSchema)]).optional()
}).strict();
