"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpdateOneRequiredWithoutAttachmentsNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageCreateWithoutAttachmentsInput_schema_1 = require("./MessageCreateWithoutAttachmentsInput.schema");
const MessageUncheckedCreateWithoutAttachmentsInput_schema_1 = require("./MessageUncheckedCreateWithoutAttachmentsInput.schema");
const MessageCreateOrConnectWithoutAttachmentsInput_schema_1 = require("./MessageCreateOrConnectWithoutAttachmentsInput.schema");
const MessageUpsertWithoutAttachmentsInput_schema_1 = require("./MessageUpsertWithoutAttachmentsInput.schema");
const MessageWhereUniqueInput_schema_1 = require("./MessageWhereUniqueInput.schema");
const MessageUpdateToOneWithWhereWithoutAttachmentsInput_schema_1 = require("./MessageUpdateToOneWithWhereWithoutAttachmentsInput.schema");
const MessageUpdateWithoutAttachmentsInput_schema_1 = require("./MessageUpdateWithoutAttachmentsInput.schema");
const MessageUncheckedUpdateWithoutAttachmentsInput_schema_1 = require("./MessageUncheckedUpdateWithoutAttachmentsInput.schema");
exports.MessageUpdateOneRequiredWithoutAttachmentsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => MessageCreateWithoutAttachmentsInput_schema_1.MessageCreateWithoutAttachmentsInputObjectSchema), zod_1.z.lazy(() => MessageUncheckedCreateWithoutAttachmentsInput_schema_1.MessageUncheckedCreateWithoutAttachmentsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => MessageCreateOrConnectWithoutAttachmentsInput_schema_1.MessageCreateOrConnectWithoutAttachmentsInputObjectSchema).optional().optional(), upsert: zod_1.z.lazy(() => MessageUpsertWithoutAttachmentsInput_schema_1.MessageUpsertWithoutAttachmentsInputObjectSchema).optional().optional(), connect: zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema).optional().optional(), update: zod_1.z.union([zod_1.z.lazy(() => MessageUpdateToOneWithWhereWithoutAttachmentsInput_schema_1.MessageUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema), zod_1.z.lazy(() => MessageUpdateWithoutAttachmentsInput_schema_1.MessageUpdateWithoutAttachmentsInputObjectSchema), zod_1.z.lazy(() => MessageUncheckedUpdateWithoutAttachmentsInput_schema_1.MessageUncheckedUpdateWithoutAttachmentsInputObjectSchema)]).optional()
}).strict();
