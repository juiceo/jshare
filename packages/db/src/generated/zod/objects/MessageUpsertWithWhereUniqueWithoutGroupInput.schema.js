"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpsertWithWhereUniqueWithoutGroupInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageWhereUniqueInput_schema_1 = require("./MessageWhereUniqueInput.schema");
const MessageUpdateWithoutGroupInput_schema_1 = require("./MessageUpdateWithoutGroupInput.schema");
const MessageUncheckedUpdateWithoutGroupInput_schema_1 = require("./MessageUncheckedUpdateWithoutGroupInput.schema");
const MessageCreateWithoutGroupInput_schema_1 = require("./MessageCreateWithoutGroupInput.schema");
const MessageUncheckedCreateWithoutGroupInput_schema_1 = require("./MessageUncheckedCreateWithoutGroupInput.schema");
exports.MessageUpsertWithWhereUniqueWithoutGroupInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => MessageUpdateWithoutGroupInput_schema_1.MessageUpdateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => MessageUncheckedUpdateWithoutGroupInput_schema_1.MessageUncheckedUpdateWithoutGroupInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => MessageCreateWithoutGroupInput_schema_1.MessageCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => MessageUncheckedCreateWithoutGroupInput_schema_1.MessageUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
