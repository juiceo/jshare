"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentCreateOrConnectWithoutExpenseInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentWhereUniqueInput_schema_1 = require("./MessageAttachmentWhereUniqueInput.schema");
const MessageAttachmentCreateWithoutExpenseInput_schema_1 = require("./MessageAttachmentCreateWithoutExpenseInput.schema");
const MessageAttachmentUncheckedCreateWithoutExpenseInput_schema_1 = require("./MessageAttachmentUncheckedCreateWithoutExpenseInput.schema");
exports.MessageAttachmentCreateOrConnectWithoutExpenseInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentCreateWithoutExpenseInput_schema_1.MessageAttachmentCreateWithoutExpenseInputObjectSchema), zod_1.z.lazy(() => MessageAttachmentUncheckedCreateWithoutExpenseInput_schema_1.MessageAttachmentUncheckedCreateWithoutExpenseInputObjectSchema)])
}).strict();
