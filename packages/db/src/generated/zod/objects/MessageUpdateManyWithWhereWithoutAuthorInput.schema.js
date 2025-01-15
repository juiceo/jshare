"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpdateManyWithWhereWithoutAuthorInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageScalarWhereInput_schema_1 = require("./MessageScalarWhereInput.schema");
const MessageUpdateManyMutationInput_schema_1 = require("./MessageUpdateManyMutationInput.schema");
const MessageUncheckedUpdateManyWithoutAuthorInput_schema_1 = require("./MessageUncheckedUpdateManyWithoutAuthorInput.schema");
exports.MessageUpdateManyWithWhereWithoutAuthorInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => MessageScalarWhereInput_schema_1.MessageScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => MessageUpdateManyMutationInput_schema_1.MessageUpdateManyMutationInputObjectSchema), zod_1.z.lazy(() => MessageUncheckedUpdateManyWithoutAuthorInput_schema_1.MessageUncheckedUpdateManyWithoutAuthorInputObjectSchema)])
}).strict();
