"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCreateManyAuthorInputEnvelopeObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageCreateManyAuthorInput_schema_1 = require("./MessageCreateManyAuthorInput.schema");
exports.MessageCreateManyAuthorInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => MessageCreateManyAuthorInput_schema_1.MessageCreateManyAuthorInputObjectSchema),
        zod_1.z.lazy(() => MessageCreateManyAuthorInput_schema_1.MessageCreateManyAuthorInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
