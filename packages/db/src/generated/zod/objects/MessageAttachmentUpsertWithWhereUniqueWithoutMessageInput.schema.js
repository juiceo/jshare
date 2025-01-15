"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentUpsertWithWhereUniqueWithoutMessageInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentWhereUniqueInput_schema_1 = require("./MessageAttachmentWhereUniqueInput.schema");
const MessageAttachmentUpdateWithoutMessageInput_schema_1 = require("./MessageAttachmentUpdateWithoutMessageInput.schema");
const MessageAttachmentUncheckedUpdateWithoutMessageInput_schema_1 = require("./MessageAttachmentUncheckedUpdateWithoutMessageInput.schema");
const MessageAttachmentCreateWithoutMessageInput_schema_1 = require("./MessageAttachmentCreateWithoutMessageInput.schema");
const MessageAttachmentUncheckedCreateWithoutMessageInput_schema_1 = require("./MessageAttachmentUncheckedCreateWithoutMessageInput.schema");
exports.MessageAttachmentUpsertWithWhereUniqueWithoutMessageInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentUpdateWithoutMessageInput_schema_1.MessageAttachmentUpdateWithoutMessageInputObjectSchema), zod_1.z.lazy(() => MessageAttachmentUncheckedUpdateWithoutMessageInput_schema_1.MessageAttachmentUncheckedUpdateWithoutMessageInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentCreateWithoutMessageInput_schema_1.MessageAttachmentCreateWithoutMessageInputObjectSchema), zod_1.z.lazy(() => MessageAttachmentUncheckedCreateWithoutMessageInput_schema_1.MessageAttachmentUncheckedCreateWithoutMessageInputObjectSchema)])
}).strict();
