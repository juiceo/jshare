"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUncheckedCreateNestedManyWithoutAuthorInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageCreateWithoutAuthorInput_schema_1 = require("./MessageCreateWithoutAuthorInput.schema");
const MessageUncheckedCreateWithoutAuthorInput_schema_1 = require("./MessageUncheckedCreateWithoutAuthorInput.schema");
const MessageCreateOrConnectWithoutAuthorInput_schema_1 = require("./MessageCreateOrConnectWithoutAuthorInput.schema");
const MessageCreateManyAuthorInputEnvelope_schema_1 = require("./MessageCreateManyAuthorInputEnvelope.schema");
const MessageWhereUniqueInput_schema_1 = require("./MessageWhereUniqueInput.schema");
exports.MessageUncheckedCreateNestedManyWithoutAuthorInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => MessageCreateWithoutAuthorInput_schema_1.MessageCreateWithoutAuthorInputObjectSchema), zod_1.z.lazy(() => MessageCreateWithoutAuthorInput_schema_1.MessageCreateWithoutAuthorInputObjectSchema).array(), zod_1.z.lazy(() => MessageUncheckedCreateWithoutAuthorInput_schema_1.MessageUncheckedCreateWithoutAuthorInputObjectSchema), zod_1.z.lazy(() => MessageUncheckedCreateWithoutAuthorInput_schema_1.MessageUncheckedCreateWithoutAuthorInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => MessageCreateOrConnectWithoutAuthorInput_schema_1.MessageCreateOrConnectWithoutAuthorInputObjectSchema),
        zod_1.z.lazy(() => MessageCreateOrConnectWithoutAuthorInput_schema_1.MessageCreateOrConnectWithoutAuthorInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => MessageCreateManyAuthorInputEnvelope_schema_1.MessageCreateManyAuthorInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
