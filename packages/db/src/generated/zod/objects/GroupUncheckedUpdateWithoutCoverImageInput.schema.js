"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUncheckedUpdateWithoutCoverImageInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const BoolFieldUpdateOperationsInput_schema_1 = require("./BoolFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const EnumCurrencyCodeFieldUpdateOperationsInput_schema_1 = require("./EnumCurrencyCodeFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const GroupParticipantUncheckedUpdateManyWithoutGroupNestedInput_schema_1 = require("./GroupParticipantUncheckedUpdateManyWithoutGroupNestedInput.schema");
const MessageUncheckedUpdateManyWithoutGroupNestedInput_schema_1 = require("./MessageUncheckedUpdateManyWithoutGroupNestedInput.schema");
const ExpenseUncheckedUpdateManyWithoutGroupNestedInput_schema_1 = require("./ExpenseUncheckedUpdateManyWithoutGroupNestedInput.schema");
const PaymentUncheckedUpdateManyWithoutGroupNestedInput_schema_1 = require("./PaymentUncheckedUpdateManyWithoutGroupNestedInput.schema");
exports.GroupUncheckedUpdateWithoutCoverImageInputObjectSchema = zod_1.z.object({
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
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), participants: zod_1.z.lazy(() => GroupParticipantUncheckedUpdateManyWithoutGroupNestedInput_schema_1.GroupParticipantUncheckedUpdateManyWithoutGroupNestedInputObjectSchema).optional().optional(), messages: zod_1.z.lazy(() => MessageUncheckedUpdateManyWithoutGroupNestedInput_schema_1.MessageUncheckedUpdateManyWithoutGroupNestedInputObjectSchema).optional().optional(), expenses: zod_1.z.lazy(() => ExpenseUncheckedUpdateManyWithoutGroupNestedInput_schema_1.ExpenseUncheckedUpdateManyWithoutGroupNestedInputObjectSchema).optional().optional(), payments: zod_1.z.lazy(() => PaymentUncheckedUpdateManyWithoutGroupNestedInput_schema_1.PaymentUncheckedUpdateManyWithoutGroupNestedInputObjectSchema).optional().optional()
}).strict();
