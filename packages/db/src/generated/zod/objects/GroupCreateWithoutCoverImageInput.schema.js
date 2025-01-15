"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupCreateWithoutCoverImageInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const GroupParticipantCreateNestedManyWithoutGroupInput_schema_1 = require("./GroupParticipantCreateNestedManyWithoutGroupInput.schema");
const MessageCreateNestedManyWithoutGroupInput_schema_1 = require("./MessageCreateNestedManyWithoutGroupInput.schema");
const ExpenseCreateNestedManyWithoutGroupInput_schema_1 = require("./ExpenseCreateNestedManyWithoutGroupInput.schema");
const PaymentCreateNestedManyWithoutGroupInput_schema_1 = require("./PaymentCreateNestedManyWithoutGroupInput.schema");
exports.GroupCreateWithoutCoverImageInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), name: zod_1.z.string(), currency: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema), participants: zod_1.z.lazy(() => GroupParticipantCreateNestedManyWithoutGroupInput_schema_1.GroupParticipantCreateNestedManyWithoutGroupInputObjectSchema).optional(), messages: zod_1.z.lazy(() => MessageCreateNestedManyWithoutGroupInput_schema_1.MessageCreateNestedManyWithoutGroupInputObjectSchema).optional(), expenses: zod_1.z.lazy(() => ExpenseCreateNestedManyWithoutGroupInput_schema_1.ExpenseCreateNestedManyWithoutGroupInputObjectSchema).optional(), payments: zod_1.z.lazy(() => PaymentCreateNestedManyWithoutGroupInput_schema_1.PaymentCreateNestedManyWithoutGroupInputObjectSchema).optional()
}).strict();
