"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpdateWithWhereUniqueWithoutGroupInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageWhereUniqueInput_schema_1 = require("./MessageWhereUniqueInput.schema");
const MessageUpdateWithoutGroupInput_schema_1 = require("./MessageUpdateWithoutGroupInput.schema");
const MessageUncheckedUpdateWithoutGroupInput_schema_1 = require("./MessageUncheckedUpdateWithoutGroupInput.schema");
exports.MessageUpdateWithWhereUniqueWithoutGroupInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => MessageUpdateWithoutGroupInput_schema_1.MessageUpdateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => MessageUncheckedUpdateWithoutGroupInput_schema_1.MessageUncheckedUpdateWithoutGroupInputObjectSchema)])
}).strict();
