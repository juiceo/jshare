"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentUpdateManyWithoutExpenseNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentCreateWithoutExpenseInput_schema_1 = require("./MessageAttachmentCreateWithoutExpenseInput.schema");
const MessageAttachmentUncheckedCreateWithoutExpenseInput_schema_1 = require("./MessageAttachmentUncheckedCreateWithoutExpenseInput.schema");
const MessageAttachmentCreateOrConnectWithoutExpenseInput_schema_1 = require("./MessageAttachmentCreateOrConnectWithoutExpenseInput.schema");
const MessageAttachmentUpsertWithWhereUniqueWithoutExpenseInput_schema_1 = require("./MessageAttachmentUpsertWithWhereUniqueWithoutExpenseInput.schema");
const MessageAttachmentCreateManyExpenseInputEnvelope_schema_1 = require("./MessageAttachmentCreateManyExpenseInputEnvelope.schema");
const MessageAttachmentWhereUniqueInput_schema_1 = require("./MessageAttachmentWhereUniqueInput.schema");
const MessageAttachmentUpdateWithWhereUniqueWithoutExpenseInput_schema_1 = require("./MessageAttachmentUpdateWithWhereUniqueWithoutExpenseInput.schema");
const MessageAttachmentUpdateManyWithWhereWithoutExpenseInput_schema_1 = require("./MessageAttachmentUpdateManyWithWhereWithoutExpenseInput.schema");
const MessageAttachmentScalarWhereInput_schema_1 = require("./MessageAttachmentScalarWhereInput.schema");
exports.MessageAttachmentUpdateManyWithoutExpenseNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentCreateWithoutExpenseInput_schema_1.MessageAttachmentCreateWithoutExpenseInputObjectSchema), zod_1.z.lazy(() => MessageAttachmentCreateWithoutExpenseInput_schema_1.MessageAttachmentCreateWithoutExpenseInputObjectSchema).array(), zod_1.z.lazy(() => MessageAttachmentUncheckedCreateWithoutExpenseInput_schema_1.MessageAttachmentUncheckedCreateWithoutExpenseInputObjectSchema), zod_1.z.lazy(() => MessageAttachmentUncheckedCreateWithoutExpenseInput_schema_1.MessageAttachmentUncheckedCreateWithoutExpenseInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentCreateOrConnectWithoutExpenseInput_schema_1.MessageAttachmentCreateOrConnectWithoutExpenseInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentCreateOrConnectWithoutExpenseInput_schema_1.MessageAttachmentCreateOrConnectWithoutExpenseInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentUpsertWithWhereUniqueWithoutExpenseInput_schema_1.MessageAttachmentUpsertWithWhereUniqueWithoutExpenseInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentUpsertWithWhereUniqueWithoutExpenseInput_schema_1.MessageAttachmentUpsertWithWhereUniqueWithoutExpenseInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => MessageAttachmentCreateManyExpenseInputEnvelope_schema_1.MessageAttachmentCreateManyExpenseInputEnvelopeObjectSchema).optional().optional(), set: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentWhereUniqueInput_schema_1.MessageAttachmentWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentUpdateWithWhereUniqueWithoutExpenseInput_schema_1.MessageAttachmentUpdateWithWhereUniqueWithoutExpenseInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentUpdateWithWhereUniqueWithoutExpenseInput_schema_1.MessageAttachmentUpdateWithWhereUniqueWithoutExpenseInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentUpdateManyWithWhereWithoutExpenseInput_schema_1.MessageAttachmentUpdateManyWithWhereWithoutExpenseInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentUpdateManyWithWhereWithoutExpenseInput_schema_1.MessageAttachmentUpdateManyWithWhereWithoutExpenseInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentScalarWhereInput_schema_1.MessageAttachmentScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => MessageAttachmentScalarWhereInput_schema_1.MessageAttachmentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
