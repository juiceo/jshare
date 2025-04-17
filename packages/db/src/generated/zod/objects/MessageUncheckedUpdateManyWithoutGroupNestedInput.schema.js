"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUncheckedUpdateManyWithoutGroupNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageCreateWithoutGroupInput_schema_1 = require("./MessageCreateWithoutGroupInput.schema");
const MessageUncheckedCreateWithoutGroupInput_schema_1 = require("./MessageUncheckedCreateWithoutGroupInput.schema");
const MessageCreateOrConnectWithoutGroupInput_schema_1 = require("./MessageCreateOrConnectWithoutGroupInput.schema");
const MessageUpsertWithWhereUniqueWithoutGroupInput_schema_1 = require("./MessageUpsertWithWhereUniqueWithoutGroupInput.schema");
const MessageCreateManyGroupInputEnvelope_schema_1 = require("./MessageCreateManyGroupInputEnvelope.schema");
const MessageWhereUniqueInput_schema_1 = require("./MessageWhereUniqueInput.schema");
const MessageUpdateWithWhereUniqueWithoutGroupInput_schema_1 = require("./MessageUpdateWithWhereUniqueWithoutGroupInput.schema");
const MessageUpdateManyWithWhereWithoutGroupInput_schema_1 = require("./MessageUpdateManyWithWhereWithoutGroupInput.schema");
const MessageScalarWhereInput_schema_1 = require("./MessageScalarWhereInput.schema");
exports.MessageUncheckedUpdateManyWithoutGroupNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => MessageCreateWithoutGroupInput_schema_1.MessageCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => MessageCreateWithoutGroupInput_schema_1.MessageCreateWithoutGroupInputObjectSchema).array(), zod_1.z.lazy(() => MessageUncheckedCreateWithoutGroupInput_schema_1.MessageUncheckedCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => MessageUncheckedCreateWithoutGroupInput_schema_1.MessageUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => MessageCreateOrConnectWithoutGroupInput_schema_1.MessageCreateOrConnectWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => MessageCreateOrConnectWithoutGroupInput_schema_1.MessageCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => MessageUpsertWithWhereUniqueWithoutGroupInput_schema_1.MessageUpsertWithWhereUniqueWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => MessageUpsertWithWhereUniqueWithoutGroupInput_schema_1.MessageUpsertWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => MessageCreateManyGroupInputEnvelope_schema_1.MessageCreateManyGroupInputEnvelopeObjectSchema).optional().optional(), set: zod_1.z.union([zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => MessageUpdateWithWhereUniqueWithoutGroupInput_schema_1.MessageUpdateWithWhereUniqueWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => MessageUpdateWithWhereUniqueWithoutGroupInput_schema_1.MessageUpdateWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => MessageUpdateManyWithWhereWithoutGroupInput_schema_1.MessageUpdateManyWithWhereWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => MessageUpdateManyWithWhereWithoutGroupInput_schema_1.MessageUpdateManyWithWhereWithoutGroupInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => MessageScalarWhereInput_schema_1.MessageScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => MessageScalarWhereInput_schema_1.MessageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
