"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentUncheckedCreateNestedManyWithoutMessageInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentCreateWithoutMessageInput_schema_1 = require("./MessageAttachmentCreateWithoutMessageInput.schema");
const MessageAttachmentUncheckedCreateWithoutMessageInput_schema_1 = require("./MessageAttachmentUncheckedCreateWithoutMessageInput.schema");
const MessageAttachmentCreateOrConnectWithoutMessageInput_schema_1 = require("./MessageAttachmentCreateOrConnectWithoutMessageInput.schema");
const MessageAttachmentCreateManyMessageInputEnvelope_schema_1 = require("./MessageAttachmentCreateManyMessageInputEnvelope.schema");
const MessageAttachmentWhereUniqueInput_schema_1 = require("./MessageAttachmentWhereUniqueInput.schema");
exports.MessageAttachmentUncheckedCreateNestedManyWithoutMessageInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentCreateWithoutMessageInput_schema_1.MessageAttachmentCreateWithoutMessageInputObjectSchema), zod_1.z.lazy(() => MessageAttachmentCreateWithoutMessageInput_schema_1.MessageAttachmentCreateWithoutMessageInputObjectSchema).array(), zod_1.z.lazy(() => MessageAttachmentUncheckedCreateWithoutMessageInput_schema_1.MessageAttachmentUncheckedCreateWithoutMessageInputObjectSchema), zod_1.z.lazy(() => MessageAttachmentUncheckedCreateWithoutMessageInput_schema_1.MessageAttachmentUncheckedCreateWithoutMessageInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentCreateOrConnectWithoutMessageInput_schema_1.MessageAttachmentCreateOrConnectWithoutMessageInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentCreateOrConnectWithoutMessageInput_schema_1.MessageAttachmentCreateOrConnectWithoutMessageInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => MessageAttachmentCreateManyMessageInputEnvelope_schema_1.MessageAttachmentCreateManyMessageInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
