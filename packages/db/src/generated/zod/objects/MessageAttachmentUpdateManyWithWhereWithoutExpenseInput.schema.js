"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentUpdateManyWithWhereWithoutExpenseInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentScalarWhereInput_schema_1 = require("./MessageAttachmentScalarWhereInput.schema");
const MessageAttachmentUpdateManyMutationInput_schema_1 = require("./MessageAttachmentUpdateManyMutationInput.schema");
const MessageAttachmentUncheckedUpdateManyWithoutExpenseInput_schema_1 = require("./MessageAttachmentUncheckedUpdateManyWithoutExpenseInput.schema");
exports.MessageAttachmentUpdateManyWithWhereWithoutExpenseInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MessageAttachmentScalarWhereInput_schema_1.MessageAttachmentScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentUpdateManyMutationInput_schema_1.MessageAttachmentUpdateManyMutationInputObjectSchema), zod_1.z.lazy(() => MessageAttachmentUncheckedUpdateManyWithoutExpenseInput_schema_1.MessageAttachmentUncheckedUpdateManyWithoutExpenseInputObjectSchema)])
}).strict();
