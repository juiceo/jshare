"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCreateNestedOneWithoutAttachmentsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageCreateWithoutAttachmentsInput_schema_1 = require("./MessageCreateWithoutAttachmentsInput.schema");
const MessageUncheckedCreateWithoutAttachmentsInput_schema_1 = require("./MessageUncheckedCreateWithoutAttachmentsInput.schema");
const MessageCreateOrConnectWithoutAttachmentsInput_schema_1 = require("./MessageCreateOrConnectWithoutAttachmentsInput.schema");
const MessageWhereUniqueInput_schema_1 = require("./MessageWhereUniqueInput.schema");
exports.MessageCreateNestedOneWithoutAttachmentsInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => MessageCreateWithoutAttachmentsInput_schema_1.MessageCreateWithoutAttachmentsInputObjectSchema), zod_1.z.lazy(() => MessageUncheckedCreateWithoutAttachmentsInput_schema_1.MessageUncheckedCreateWithoutAttachmentsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => MessageCreateOrConnectWithoutAttachmentsInput_schema_1.MessageCreateOrConnectWithoutAttachmentsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema).optional()
}).strict();
