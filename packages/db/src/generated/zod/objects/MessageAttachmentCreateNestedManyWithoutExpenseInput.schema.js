"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentCreateNestedManyWithoutExpenseInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentCreateWithoutExpenseInput_schema_1 = require("./MessageAttachmentCreateWithoutExpenseInput.schema");
const MessageAttachmentUncheckedCreateWithoutExpenseInput_schema_1 = require("./MessageAttachmentUncheckedCreateWithoutExpenseInput.schema");
const MessageAttachmentCreateOrConnectWithoutExpenseInput_schema_1 = require("./MessageAttachmentCreateOrConnectWithoutExpenseInput.schema");
const MessageAttachmentCreateManyExpenseInputEnvelope_schema_1 = require("./MessageAttachmentCreateManyExpenseInputEnvelope.schema");
const MessageAttachmentWhereUniqueInput_schema_1 = require("./MessageAttachmentWhereUniqueInput.schema");
exports.MessageAttachmentCreateNestedManyWithoutExpenseInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentCreateWithoutExpenseInput_schema_1.MessageAttachmentCreateWithoutExpenseInputObjectSchema), zod_1.z.lazy(() => MessageAttachmentCreateWithoutExpenseInput_schema_1.MessageAttachmentCreateWithoutExpenseInputObjectSchema).array(), zod_1.z.lazy(() => MessageAttachmentUncheckedCreateWithoutExpenseInput_schema_1.MessageAttachmentUncheckedCreateWithoutExpenseInputObjectSchema), zod_1.z.lazy(() => MessageAttachmentUncheckedCreateWithoutExpenseInput_schema_1.MessageAttachmentUncheckedCreateWithoutExpenseInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentCreateOrConnectWithoutExpenseInput_schema_1.MessageAttachmentCreateOrConnectWithoutExpenseInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentCreateOrConnectWithoutExpenseInput_schema_1.MessageAttachmentCreateOrConnectWithoutExpenseInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => MessageAttachmentCreateManyExpenseInputEnvelope_schema_1.MessageAttachmentCreateManyExpenseInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
