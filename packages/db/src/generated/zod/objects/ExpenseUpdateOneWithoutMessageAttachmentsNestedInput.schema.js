"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseUpdateOneWithoutMessageAttachmentsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseCreateWithoutMessageAttachmentsInput_schema_1 = require("./ExpenseCreateWithoutMessageAttachmentsInput.schema");
const ExpenseUncheckedCreateWithoutMessageAttachmentsInput_schema_1 = require("./ExpenseUncheckedCreateWithoutMessageAttachmentsInput.schema");
const ExpenseCreateOrConnectWithoutMessageAttachmentsInput_schema_1 = require("./ExpenseCreateOrConnectWithoutMessageAttachmentsInput.schema");
const ExpenseUpsertWithoutMessageAttachmentsInput_schema_1 = require("./ExpenseUpsertWithoutMessageAttachmentsInput.schema");
const ExpenseWhereInput_schema_1 = require("./ExpenseWhereInput.schema");
const ExpenseWhereUniqueInput_schema_1 = require("./ExpenseWhereUniqueInput.schema");
const ExpenseUpdateToOneWithWhereWithoutMessageAttachmentsInput_schema_1 = require("./ExpenseUpdateToOneWithWhereWithoutMessageAttachmentsInput.schema");
const ExpenseUpdateWithoutMessageAttachmentsInput_schema_1 = require("./ExpenseUpdateWithoutMessageAttachmentsInput.schema");
const ExpenseUncheckedUpdateWithoutMessageAttachmentsInput_schema_1 = require("./ExpenseUncheckedUpdateWithoutMessageAttachmentsInput.schema");
exports.ExpenseUpdateOneWithoutMessageAttachmentsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateWithoutMessageAttachmentsInput_schema_1.ExpenseCreateWithoutMessageAttachmentsInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedCreateWithoutMessageAttachmentsInput_schema_1.ExpenseUncheckedCreateWithoutMessageAttachmentsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ExpenseCreateOrConnectWithoutMessageAttachmentsInput_schema_1.ExpenseCreateOrConnectWithoutMessageAttachmentsInputObjectSchema).optional().optional(), upsert: zod_1.z.lazy(() => ExpenseUpsertWithoutMessageAttachmentsInput_schema_1.ExpenseUpsertWithoutMessageAttachmentsInputObjectSchema).optional().optional(), disconnect: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema)]).optional(), delete: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema)]).optional(), connect: zod_1.z.lazy(() => ExpenseWhereUniqueInput_schema_1.ExpenseWhereUniqueInputObjectSchema).optional().optional(), update: zod_1.z.union([zod_1.z.lazy(() => ExpenseUpdateToOneWithWhereWithoutMessageAttachmentsInput_schema_1.ExpenseUpdateToOneWithWhereWithoutMessageAttachmentsInputObjectSchema), zod_1.z.lazy(() => ExpenseUpdateWithoutMessageAttachmentsInput_schema_1.ExpenseUpdateWithoutMessageAttachmentsInputObjectSchema), zod_1.z.lazy(() => ExpenseUncheckedUpdateWithoutMessageAttachmentsInput_schema_1.ExpenseUncheckedUpdateWithoutMessageAttachmentsInputObjectSchema)]).optional()
}).strict();
