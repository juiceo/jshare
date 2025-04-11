"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpdateWithoutExpensesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const BoolFieldUpdateOperationsInput_schema_1 = require("./BoolFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const EnumCurrencyCodeFieldUpdateOperationsInput_schema_1 = require("./EnumCurrencyCodeFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const GroupParticipantUpdateManyWithoutGroupNestedInput_schema_1 = require("./GroupParticipantUpdateManyWithoutGroupNestedInput.schema");
const ImageUpdateOneWithoutGroupNestedInput_schema_1 = require("./ImageUpdateOneWithoutGroupNestedInput.schema");
const MessageUpdateManyWithoutGroupNestedInput_schema_1 = require("./MessageUpdateManyWithoutGroupNestedInput.schema");
const PaymentUpdateManyWithoutGroupNestedInput_schema_1 = require("./PaymentUpdateManyWithoutGroupNestedInput.schema");
exports.GroupUpdateWithoutExpensesInputObjectSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), archived: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => BoolFieldUpdateOperationsInput_schema_1.BoolFieldUpdateOperationsInputObjectSchema)]).optional(), archivedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), name: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), currency: zod_1.z.union([zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema),
        zod_1.z.lazy(() => EnumCurrencyCodeFieldUpdateOperationsInput_schema_1.EnumCurrencyCodeFieldUpdateOperationsInputObjectSchema)]).optional(), inviteCode: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), lastActivity: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), participants: zod_1.z.lazy(() => GroupParticipantUpdateManyWithoutGroupNestedInput_schema_1.GroupParticipantUpdateManyWithoutGroupNestedInputObjectSchema).optional(), coverImage: zod_1.z.lazy(() => ImageUpdateOneWithoutGroupNestedInput_schema_1.ImageUpdateOneWithoutGroupNestedInputObjectSchema).optional(), messages: zod_1.z.lazy(() => MessageUpdateManyWithoutGroupNestedInput_schema_1.MessageUpdateManyWithoutGroupNestedInputObjectSchema).optional(), payments: zod_1.z.lazy(() => PaymentUpdateManyWithoutGroupNestedInput_schema_1.PaymentUpdateManyWithoutGroupNestedInputObjectSchema).optional()
}).strict();
