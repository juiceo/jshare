"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUpdateToOneWithWhereWithoutMessageAttachmentsInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseWhereInput_schema_1 = require("./ExpenseWhereInput.schema");
const ExpenseUpdateWithoutMessageAttachmentsInput_schema_1 = require("./ExpenseUpdateWithoutMessageAttachmentsInput.schema");
const ExpenseUncheckedUpdateWithoutMessageAttachmentsInput_schema_1 = require("./ExpenseUncheckedUpdateWithoutMessageAttachmentsInput.schema");
exports.ExpenseUpdateToOneWithWhereWithoutMessageAttachmentsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpdateWithoutMessageAttachmentsInput_schema_1.ExpenseUpdateWithoutMessageAttachmentsInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedUpdateWithoutMessageAttachmentsInput_schema_1.ExpenseUncheckedUpdateWithoutMessageAttachmentsInputObjectSchema)])
}).strict();
