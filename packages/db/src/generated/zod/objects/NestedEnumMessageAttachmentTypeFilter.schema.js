"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumMessageAttachmentTypeFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentType_schema_1 = require("../enums/MessageAttachmentType.schema");
exports.NestedEnumMessageAttachmentTypeFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema).optional().optional(), in: zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema).array().optional().optional(), notIn: zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema).array().optional().optional(), not: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema),
        zod_1.z.lazy(() => exports.NestedEnumMessageAttachmentTypeFilterObjectSchema)]).optional()
}).strict();
