"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentUpsertWithWhereUniqueWithoutExpenseInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentWhereUniqueInput_schema_1 = require("./MessageAttachmentWhereUniqueInput.schema");
const MessageAttachmentUpdateWithoutExpenseInput_schema_1 = require("./MessageAttachmentUpdateWithoutExpenseInput.schema");
const MessageAttachmentUncheckedUpdateWithoutExpenseInput_schema_1 = require("./MessageAttachmentUncheckedUpdateWithoutExpenseInput.schema");
const MessageAttachmentCreateWithoutExpenseInput_schema_1 = require("./MessageAttachmentCreateWithoutExpenseInput.schema");
const MessageAttachmentUncheckedCreateWithoutExpenseInput_schema_1 = require("./MessageAttachmentUncheckedCreateWithoutExpenseInput.schema");
exports.MessageAttachmentUpsertWithWhereUniqueWithoutExpenseInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentUpdateWithoutExpenseInput_schema_1.MessageAttachmentUpdateWithoutExpenseInputObjectSchema), zod_1.z.lazy(() => MessageAttachmentUncheckedUpdateWithoutExpenseInput_schema_1.MessageAttachmentUncheckedUpdateWithoutExpenseInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentCreateWithoutExpenseInput_schema_1.MessageAttachmentCreateWithoutExpenseInputObjectSchema), zod_1.z.lazy(() => MessageAttachmentUncheckedCreateWithoutExpenseInput_schema_1.MessageAttachmentUncheckedCreateWithoutExpenseInputObjectSchema)])
}).strict();
