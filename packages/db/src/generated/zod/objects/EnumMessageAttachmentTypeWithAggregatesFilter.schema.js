"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumMessageAttachmentTypeWithAggregatesFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentType_schema_1 = require("../enums/MessageAttachmentType.schema");
const NestedEnumMessageAttachmentTypeWithAggregatesFilter_schema_1 = require("./NestedEnumMessageAttachmentTypeWithAggregatesFilter.schema");
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedEnumMessageAttachmentTypeFilter_schema_1 = require("./NestedEnumMessageAttachmentTypeFilter.schema");
exports.EnumMessageAttachmentTypeWithAggregatesFilterObjectSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema).optional(), in: zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema).array().optional(), notIn: zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema).array().optional(), not: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema),
        zod_1.z.lazy(() => NestedEnumMessageAttachmentTypeWithAggregatesFilter_schema_1.NestedEnumMessageAttachmentTypeWithAggregatesFilterObjectSchema)]).optional(), _count: zod_1.z.lazy(() => NestedIntFilter_schema_1.NestedIntFilterObjectSchema).optional(), _min: zod_1.z.lazy(() => NestedEnumMessageAttachmentTypeFilter_schema_1.NestedEnumMessageAttachmentTypeFilterObjectSchema).optional(), _max: zod_1.z.lazy(() => NestedEnumMessageAttachmentTypeFilter_schema_1.NestedEnumMessageAttachmentTypeFilterObjectSchema).optional()
}).strict();
