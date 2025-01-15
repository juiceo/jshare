"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupCreateManyCoverImageInputEnvelopeObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupCreateManyCoverImageInput_schema_1 = require("./GroupCreateManyCoverImageInput.schema");
exports.GroupCreateManyCoverImageInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => GroupCreateManyCoverImageInput_schema_1.GroupCreateManyCoverImageInputObjectSchema),
        zod_1.z.lazy(() => GroupCreateManyCoverImageInput_schema_1.GroupCreateManyCoverImageInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
