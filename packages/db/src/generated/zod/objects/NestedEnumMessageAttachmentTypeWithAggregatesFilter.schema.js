"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumMessageAttachmentTypeWithAggregatesFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentType_schema_1 = require("../enums/MessageAttachmentType.schema");
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedEnumMessageAttachmentTypeFilter_schema_1 = require("./NestedEnumMessageAttachmentTypeFilter.schema");
exports.NestedEnumMessageAttachmentTypeWithAggregatesFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema).optional().optional(), in: zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema).array().optional().optional(), notIn: zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema).array().optional().optional(), not: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema),
        zod_1.z.lazy(() => exports.NestedEnumMessageAttachmentTypeWithAggregatesFilterObjectSchema)]).optional(), _count: zod_1.z.lazy(() => NestedIntFilter_schema_1.NestedIntFilterObjectSchema).optional().optional(), _min: zod_1.z.lazy(() => NestedEnumMessageAttachmentTypeFilter_schema_1.NestedEnumMessageAttachmentTypeFilterObjectSchema).optional().optional(), _max: zod_1.z.lazy(() => NestedEnumMessageAttachmentTypeFilter_schema_1.NestedEnumMessageAttachmentTypeFilterObjectSchema).optional().optional()
}).strict();
