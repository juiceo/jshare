"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCreateManyGroupInputEnvelopeObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageCreateManyGroupInput_schema_1 = require("./MessageCreateManyGroupInput.schema");
exports.MessageCreateManyGroupInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => MessageCreateManyGroupInput_schema_1.MessageCreateManyGroupInputObjectSchema),
        zod_1.z.lazy(() => MessageCreateManyGroupInput_schema_1.MessageCreateManyGroupInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
