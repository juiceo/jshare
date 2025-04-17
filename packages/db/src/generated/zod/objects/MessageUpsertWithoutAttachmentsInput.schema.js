"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpsertWithoutAttachmentsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageUpdateWithoutAttachmentsInput_schema_1 = require("./MessageUpdateWithoutAttachmentsInput.schema");
const MessageUncheckedUpdateWithoutAttachmentsInput_schema_1 = require("./MessageUncheckedUpdateWithoutAttachmentsInput.schema");
const MessageCreateWithoutAttachmentsInput_schema_1 = require("./MessageCreateWithoutAttachmentsInput.schema");
const MessageUncheckedCreateWithoutAttachmentsInput_schema_1 = require("./MessageUncheckedCreateWithoutAttachmentsInput.schema");
const MessageWhereInput_schema_1 = require("./MessageWhereInput.schema");
exports.MessageUpsertWithoutAttachmentsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => MessageUpdateWithoutAttachmentsInput_schema_1.MessageUpdateWithoutAttachmentsInputObjectSchema), zod_1.z.lazy(() => MessageUncheckedUpdateWithoutAttachmentsInput_schema_1.MessageUncheckedUpdateWithoutAttachmentsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => MessageCreateWithoutAttachmentsInput_schema_1.MessageCreateWithoutAttachmentsInputObjectSchema), zod_1.z.lazy(() => MessageUncheckedCreateWithoutAttachmentsInput_schema_1.MessageUncheckedCreateWithoutAttachmentsInputObjectSchema)]), where: zod_1.z.lazy(() => MessageWhereInput_schema_1.MessageWhereInputObjectSchema).optional().optional()
}).strict();
