"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentUncheckedUpdateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const MessageAttachmentType_schema_1 = require("../enums/MessageAttachmentType.schema");
const EnumMessageAttachmentTypeFieldUpdateOperationsInput_schema_1 = require("./EnumMessageAttachmentTypeFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
exports.MessageAttachmentUncheckedUpdateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), messageId: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), type: zod_1.z.union([zod_1.z.lazy(() => MessageAttachmentType_schema_1.MessageAttachmentTypeSchema),
        zod_1.z.lazy(() => EnumMessageAttachmentTypeFieldUpdateOperationsInput_schema_1.EnumMessageAttachmentTypeFieldUpdateOperationsInputObjectSchema)]).optional(), expenseId: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
