"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCreateOrConnectWithoutAttachmentsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageWhereUniqueInput_schema_1 = require("./MessageWhereUniqueInput.schema");
const MessageCreateWithoutAttachmentsInput_schema_1 = require("./MessageCreateWithoutAttachmentsInput.schema");
const MessageUncheckedCreateWithoutAttachmentsInput_schema_1 = require("./MessageUncheckedCreateWithoutAttachmentsInput.schema");
exports.MessageCreateOrConnectWithoutAttachmentsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => MessageCreateWithoutAttachmentsInput_schema_1.MessageCreateWithoutAttachmentsInputObjectSchema), zod_1.z.lazy(() => MessageUncheckedCreateWithoutAttachmentsInput_schema_1.MessageUncheckedCreateWithoutAttachmentsInputObjectSchema)])
}).strict();
