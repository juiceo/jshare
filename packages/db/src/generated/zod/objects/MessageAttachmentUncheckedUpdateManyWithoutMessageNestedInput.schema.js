"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentUncheckedUpdateManyWithoutMessageNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentCreateWithoutMessageInput_schema_1 = require("./MessageAttachmentCreateWithoutMessageInput.schema");
const MessageAttachmentUncheckedCreateWithoutMessageInput_schema_1 = require("./MessageAttachmentUncheckedCreateWithoutMessageInput.schema");
const MessageAttachmentCreateOrConnectWithoutMessageInput_schema_1 = require("./MessageAttachmentCreateOrConnectWithoutMessageInput.schema");
const MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput_schema_1 = require("./MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput.schema");
const MessageAttachmentCreateManyMessageInputEnvelope_schema_1 = require("./MessageAttachmentCreateManyMessageInputEnvelope.schema");
const MessageAttachmentWhereUniqueInput_schema_1 = require("./MessageAttachmentWhereUniqueInput.schema");
const MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput_schema_1 = require("./MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput.schema");
const MessageAttachmentUpdateManyWithWhereWithoutMessageInput_schema_1 = require("./MessageAttachmentUpdateManyWithWhereWithoutMessageInput.schema");
const MessageAttachmentScalarWhereInput_schema_1 = require("./MessageAttachmentScalarWhereInput.schema");
exports.MessageAttachmentUncheckedUpdateManyWithoutMessageNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentCreateWithoutMessageInput_schema_1.MessageAttachmentCreateWithoutMessageInputObjectSchema), zod_1.z.lazy(() => MessageAttachmentCreateWithoutMessageInput_schema_1.MessageAttachmentCreateWithoutMessageInputObjectSchema).array(), zod_1.z.lazy(() => MessageAttachmentUncheckedCreateWithoutMessageInput_schema_1.MessageAttachmentUncheckedCreateWithoutMessageInputObjectSchema), zod_1.z.lazy(() => MessageAttachmentUncheckedCreateWithoutMessageInput_schema_1.MessageAttachmentUncheckedCreateWithoutMessageInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentCreateOrConnectWithoutMessageInput_schema_1.MessageAttachmentCreateOrConnectWithoutMessageInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentCreateOrConnectWithoutMessageInput_schema_1.MessageAttachmentCreateOrConnectWithoutMessageInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput_schema_1.MessageAttachmentUpsertWithWhereUniqueWithoutMessageInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput_schema_1.MessageAttachmentUpsertWithWhereUniqueWithoutMessageInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => MessageAttachmentCreateManyMessageInputEnvelope_schema_1.MessageAttachmentCreateManyMessageInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput_schema_1.MessageAttachmentUpdateWithWhereUniqueWithoutMessageInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput_schema_1.MessageAttachmentUpdateWithWhereUniqueWithoutMessageInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentUpdateManyWithWhereWithoutMessageInput_schema_1.MessageAttachmentUpdateManyWithWhereWithoutMessageInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentUpdateManyWithWhereWithoutMessageInput_schema_1.MessageAttachmentUpdateManyWithWhereWithoutMessageInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentScalarWhereInput_schema_1.MessageAttachmentScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentScalarWhereInput_schema_1.MessageAttachmentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
