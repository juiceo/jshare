"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumMessageAttachmentTypeFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentType_schema_1 = require("../enums/MessageAttachmentType.schema");
const NestedEnumMessageAttachmentTypeFilter_schema_1 = require("./NestedEnumMessageAttachmentTypeFilter.schema");
exports.EnumMessageAttachmentTypeFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema).optional(), in: zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema).array().optional(), notIn: zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema).array().optional(), not: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema),
        zod_1.z.lazy(() => NestedEnumMessageAttachmentTypeFilter_schema_1.NestedEnumMessageAttachmentTypeFilterObjectSchema)]).optional()
}).strict();
