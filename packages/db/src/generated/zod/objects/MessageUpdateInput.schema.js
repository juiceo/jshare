"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpdateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const AuthorType_schema_1 = require("../enums/AuthorType.schema");
const EnumAuthorTypeFieldUpdateOperationsInput_schema_1 = require("./EnumAuthorTypeFieldUpdateOperationsInput.schema");
const ProfileUpdateOneWithoutMessagesNestedInput_schema_1 = require("./ProfileUpdateOneWithoutMessagesNestedInput.schema");
const GroupUpdateOneRequiredWithoutMessagesNestedInput_schema_1 = require("./GroupUpdateOneRequiredWithoutMessagesNestedInput.schema");
const MessageAttachmentUpdateManyWithoutMessageNestedInput_schema_1 = require("./MessageAttachmentUpdateManyWithoutMessageNestedInput.schema");
exports.MessageUpdateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), key: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), text: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), authorType: zod_1.z.union([zod_1.z.lazy(() => AuthorType_schema_1.AuthorTypeSchema),
        zod_1.z.lazy(() => EnumAuthorTypeFieldUpdateOperationsInput_schema_1.EnumAuthorTypeFieldUpdateOperationsInputObjectSchema)]).optional(), author: zod_1.z.lazy(() => ProfileUpdateOneWithoutMessagesNestedInput_schema_1.ProfileUpdateOneWithoutMessagesNestedInputObjectSchema).optional(), group: zod_1.z.lazy(() => GroupUpdateOneRequiredWithoutMessagesNestedInput_schema_1.GroupUpdateOneRequiredWithoutMessagesNestedInputObjectSchema).optional(), attachments: zod_1.z.lazy(() => MessageAttachmentUpdateManyWithoutMessageNestedInput_schema_1.MessageAttachmentUpdateManyWithoutMessageNestedInputObjectSchema).optional()
}).strict();
