"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumMessageAttachmentTypeFieldUpdateOperationsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageAttachmentType_schema_1 = require("../enums/MessageAttachmentType.schema");
exports.EnumMessageAttachmentTypeFieldUpdateOperationsInputObjectSchema = zod_1.z.object({
    set: zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema).optional()
}).strict();
