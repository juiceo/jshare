"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUpsertWithoutMessageAttachmentsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ExpenseUpdateWithoutMessageAttachmentsInput_schema_1 = require("./ExpenseUpdateWithoutMessageAttachmentsInput.schema");
const ExpenseUncheckedUpdateWithoutMessageAttachmentsInput_schema_1 = require("./ExpenseUncheckedUpdateWithoutMessageAttachmentsInput.schema");
const ExpenseCreateWithoutMessageAttachmentsInput_schema_1 = require("./ExpenseCreateWithoutMessageAttachmentsInput.schema");
const ExpenseUncheckedCreateWithoutMessageAttachmentsInput_schema_1 = require("./ExpenseUncheckedCreateWithoutMessageAttachmentsInput.schema");
const ExpenseWhereInput_schema_1 = require("./ExpenseWhereInput.schema");
exports.ExpenseUpsertWithoutMessageAttachmentsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpdateWithoutMessageAttachmentsInput_schema_1.ExpenseUpdateWithoutMessageAttachmentsInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedUpdateWithoutMessageAttachmentsInput_schema_1.ExpenseUncheckedUpdateWithoutMessageAttachmentsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutMessageAttachmentsInput_schema_1.ExpenseCreateWithoutMessageAttachmentsInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutMessageAttachmentsInput_schema_1.ExpenseUncheckedCreateWithoutMessageAttachmentsInputObjectSchema)]), where: zod_1.z.lazy(() => ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema).optional().optional()
}).strict();
