"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCreateOrConnectWithoutMessageAttachmentsInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
const ExpenseCreateWithoutMessageAttachmentsInput_schema_1 = require("./ExpenseCreateWithoutMessageAttachmentsInput.schema");
const ExpenseUncheckedCreateWithoutMessageAttachmentsInput_schema_1 = require("./ExpenseUncheckedCreateWithoutMessageAttachmentsInput.schema");
exports.ExpenseCreateOrConnectWithoutMessageAttachmentsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutMessageAttachmentsInput_schema_1.ExpenseCreateWithoutMessageAttachmentsInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutMessageAttachmentsInput_schema_1.ExpenseUncheckedCreateWithoutMessageAttachmentsInputObjectSchema)])
}).strict();
