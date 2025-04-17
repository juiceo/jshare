"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpdateManyWithoutAuthorNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageCreateWithoutAuthorInput_schema_1 = require("./MessageCreateWithoutAuthorInput.schema");
const MessageUncheckedCreateWithoutAuthorInput_schema_1 = require("./MessageUncheckedCreateWithoutAuthorInput.schema");
const MessageCreateOrConnectWithoutAuthorInput_schema_1 = require("./MessageCreateOrConnectWithoutAuthorInput.schema");
const MessageUpsertWithWhereUniqueWithoutAuthorInput_schema_1 = require("./MessageUpsertWithWhereUniqueWithoutAuthorInput.schema");
const MessageCreateManyAuthorInputEnvelope_schema_1 = require("./MessageCreateManyAuthorInputEnvelope.schema");
const MessageWhereUniqueInput_schema_1 = require("./MessageWhereUniqueInput.schema");
const MessageUpdateWithWhereUniqueWithoutAuthorInput_schema_1 = require("./MessageUpdateWithWhereUniqueWithoutAuthorInput.schema");
const MessageUpdateManyWithWhereWithoutAuthorInput_schema_1 = require("./MessageUpdateManyWithWhereWithoutAuthorInput.schema");
const MessageScalarWhereInput_schema_1 = require("./MessageScalarWhereInput.schema");
exports.MessageUpdateManyWithoutAuthorNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => MessageCreateWithoutAuthorInput_schema_1.MessageCreateWithoutAuthorInputObjectSchema), zod_1.z.lazy(() => MessageCreateWithoutAuthorInput_schema_1.MessageCreateWithoutAuthorInputObjectSchema).array(), zod_1.z.lazy(() => MessageUncheckedCreateWithoutAuthorInput_schema_1.MessageUncheckedCreateWithoutAuthorInputObjectSchema), zod_1.z.lazy(() => MessageUncheckedCreateWithoutAuthorInput_schema_1.MessageUncheckedCreateWithoutAuthorInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => MessageCreateOrConnectWithoutAuthorInput_schema_1.MessageCreateOrConnectWithoutAuthorInputObjectSchema),
        zod_1.z.lazy(() => MessageCreateOrConnectWithoutAuthorInput_schema_1.MessageCreateOrConnectWithoutAuthorInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => MessageUpsertWithWhereUniqueWithoutAuthorInput_schema_1.MessageUpsertWithWhereUniqueWithoutAuthorInputObjectSchema),
        zod_1.z.lazy(() => MessageUpsertWithWhereUniqueWithoutAuthorInput_schema_1.MessageUpsertWithWhereUniqueWithoutAuthorInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => MessageCreateManyAuthorInputEnvelope_schema_1.MessageCreateManyAuthorInputEnvelopeObjectSchema).optional().optional(), set: zod_1.z.union([zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => MessageUpdateWithWhereUniqueWithoutAuthorInput_schema_1.MessageUpdateWithWhereUniqueWithoutAuthorInputObjectSchema),
        zod_1.z.lazy(() => MessageUpdateWithWhereUniqueWithoutAuthorInput_schema_1.MessageUpdateWithWhereUniqueWithoutAuthorInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => MessageUpdateManyWithWhereWithoutAuthorInput_schema_1.MessageUpdateManyWithWhereWithoutAuthorInputObjectSchema),
        zod_1.z.lazy(() => MessageUpdateManyWithWhereWithoutAuthorInput_schema_1.MessageUpdateManyWithWhereWithoutAuthorInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => MessageScalarWhereInput_schema_1.MessageScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => MessageScalarWhereInput_schema_1.MessageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
