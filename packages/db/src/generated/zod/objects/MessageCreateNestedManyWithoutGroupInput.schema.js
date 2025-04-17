"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCreateNestedManyWithoutGroupInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageCreateWithoutGroupInput_schema_1 = require("./MessageCreateWithoutGroupInput.schema");
const MessageUncheckedCreateWithoutGroupInput_schema_1 = require("./MessageUncheckedCreateWithoutGroupInput.schema");
const MessageCreateOrConnectWithoutGroupInput_schema_1 = require("./MessageCreateOrConnectWithoutGroupInput.schema");
const MessageCreateManyGroupInputEnvelope_schema_1 = require("./MessageCreateManyGroupInputEnvelope.schema");
const MessageWhereUniqueInput_schema_1 = require("./MessageWhereUniqueInput.schema");
exports.MessageCreateNestedManyWithoutGroupInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => MessageCreateWithoutGroupInput_schema_1.MessageCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => MessageCreateWithoutGroupInput_schema_1.MessageCreateWithoutGroupInputObjectSchema).array(), zod_1.z.lazy(() => MessageUncheckedCreateWithoutGroupInput_schema_1.MessageUncheckedCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => MessageUncheckedCreateWithoutGroupInput_schema_1.MessageUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => MessageCreateOrConnectWithoutGroupInput_schema_1.MessageCreateOrConnectWithoutGroupInputObjectSchema),
        zod_1.z.lazy(() => MessageCreateOrConnectWithoutGroupInput_schema_1.MessageCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => MessageCreateManyGroupInputEnvelope_schema_1.MessageCreateManyGroupInputEnvelopeObjectSchema).optional().optional(), connect: zod_1.z.union([zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
