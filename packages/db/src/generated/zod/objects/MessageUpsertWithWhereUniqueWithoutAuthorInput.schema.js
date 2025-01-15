"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpsertWithWhereUniqueWithoutAuthorInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageWhereUniqueInput_schema_1 = require("./MessageWhereUniqueInput.schema");
const MessageUpdateWithoutAuthorInput_schema_1 = require("./MessageUpdateWithoutAuthorInput.schema");
const MessageUncheckedUpdateWithoutAuthorInput_schema_1 = require("./MessageUncheckedUpdateWithoutAuthorInput.schema");
const MessageCreateWithoutAuthorInput_schema_1 = require("./MessageCreateWithoutAuthorInput.schema");
const MessageUncheckedCreateWithoutAuthorInput_schema_1 = require("./MessageUncheckedCreateWithoutAuthorInput.schema");
exports.MessageUpsertWithWhereUniqueWithoutAuthorInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => MessageUpdateWithoutAuthorInput_schema_1.MessageUpdateWithoutAuthorInputObjectSchema), zod_1.z.lazy(() => MessageUncheckedUpdateWithoutAuthorInput_schema_1.MessageUncheckedUpdateWithoutAuthorInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => MessageCreateWithoutAuthorInput_schema_1.MessageCreateWithoutAuthorInputObjectSchema), zod_1.z.lazy(() => MessageUncheckedCreateWithoutAuthorInput_schema_1.MessageUncheckedCreateWithoutAuthorInputObjectSchema)])
}).strict();
