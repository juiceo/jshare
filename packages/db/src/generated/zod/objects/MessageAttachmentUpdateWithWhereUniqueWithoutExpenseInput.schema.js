"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentUpdateWithWhereUniqueWithoutExpenseInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentWhereUniqueInput_schema_1 = require("./MessageAttachmentWhereUniqueInput.schema");
const MessageAttachmentUpdateWithoutExpenseInput_schema_1 = require("./MessageAttachmentUpdateWithoutExpenseInput.schema");
const MessageAttachmentUncheckedUpdateWithoutExpenseInput_schema_1 = require("./MessageAttachmentUncheckedUpdateWithoutExpenseInput.schema");
exports.MessageAttachmentUpdateWithWhereUniqueWithoutExpenseInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentUpdateWithoutExpenseInput_schema_1.MessageAttachmentUpdateWithoutExpenseInputObjectSchema), zod_1.z.lazy(() => MessageAttachmentUncheckedUpdateWithoutExpenseInput_schema_1.MessageAttachmentUncheckedUpdateWithoutExpenseInputObjectSchema)])
}).strict();
