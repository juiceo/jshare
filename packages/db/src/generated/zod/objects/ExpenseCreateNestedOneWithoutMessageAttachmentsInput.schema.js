"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCreateNestedOneWithoutMessageAttachmentsInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseCreateWithoutMessageAttachmentsInput_schema_1 = require("./ExpenseCreateWithoutMessageAttachmentsInput.schema");
const ExpenseUncheckedCreateWithoutMessageAttachmentsInput_schema_1 = require("./ExpenseUncheckedCreateWithoutMessageAttachmentsInput.schema");
const ExpenseCreateOrConnectWithoutMessageAttachmentsInput_schema_1 = require("./ExpenseCreateOrConnectWithoutMessageAttachmentsInput.schema");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
exports.ExpenseCreateNestedOneWithoutMessageAttachmentsInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutMessageAttachmentsInput_schema_1.ExpenseCreateWithoutMessageAttachmentsInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutMessageAttachmentsInput_schema_1.ExpenseUncheckedCreateWithoutMessageAttachmentsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ExpenseCreateOrConnectWithoutMessageAttachmentsInput_schema_1.ExpenseCreateOrConnectWithoutMessageAttachmentsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema).optional()
}).strict();
