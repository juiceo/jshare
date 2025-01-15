"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageWhereInput_schema_1 = require("./MessageWhereInput.schema");
const MessageUpdateWithoutAttachmentsInput_schema_1 = require("./MessageUpdateWithoutAttachmentsInput.schema");
const MessageUncheckedUpdateWithoutAttachmentsInput_schema_1 = require("./MessageUncheckedUpdateWithoutAttachmentsInput.schema");
exports.MessageUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MessageWhereInput_schema_1.MessageWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => MessageUpdateWithoutAttachmentsInput_schema_1.MessageUpdateWithoutAttachmentsInputObjectSchema), zod_1.z.lazy(() => MessageUncheckedUpdateWithoutAttachmentsInput_schema_1.MessageUncheckedUpdateWithoutAttachmentsInputObjectSchema)])
}).strict();
