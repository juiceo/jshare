"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentUpdateWithWhereUniqueWithoutMessageInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentWhereUniqueInput_schema_1 = require("./MessageAttachmentWhereUniqueInput.schema");
const MessageAttachmentUpdateWithoutMessageInput_schema_1 = require("./MessageAttachmentUpdateWithoutMessageInput.schema");
const MessageAttachmentUncheckedUpdateWithoutMessageInput_schema_1 = require("./MessageAttachmentUncheckedUpdateWithoutMessageInput.schema");
exports.MessageAttachmentUpdateWithWhereUniqueWithoutMessageInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentUpdateWithoutMessageInput_schema_1.MessageAttachmentUpdateWithoutMessageInputObjectSchema), zod_1.z.lazy(() => MessageAttachmentUncheckedUpdateWithoutMessageInput_schema_1.MessageAttachmentUncheckedUpdateWithoutMessageInputObjectSchema)])
}).strict();
