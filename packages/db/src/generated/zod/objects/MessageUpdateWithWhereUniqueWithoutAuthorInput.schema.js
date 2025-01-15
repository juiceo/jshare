"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpdateWithWhereUniqueWithoutAuthorInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageWhereUniqueInput_schema_1 = require("./MessageWhereUniqueInput.schema");
const MessageUpdateWithoutAuthorInput_schema_1 = require("./MessageUpdateWithoutAuthorInput.schema");
const MessageUncheckedUpdateWithoutAuthorInput_schema_1 = require("./MessageUncheckedUpdateWithoutAuthorInput.schema");
exports.MessageUpdateWithWhereUniqueWithoutAuthorInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MessageWhereUniqueInput_schema_1.MessageWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => MessageUpdateWithoutAuthorInput_schema_1.MessageUpdateWithoutAuthorInputObjectSchema), zod_1.z.lazy(() => MessageUncheckedUpdateWithoutAuthorInput_schema_1.MessageUncheckedUpdateWithoutAuthorInputObjectSchema)])
}).strict();
