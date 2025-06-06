"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUncheckedCreateWithoutParticipantsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const MessageUncheckedCreateNestedManyWithoutGroupInput_schema_1 = require("./MessageUncheckedCreateNestedManyWithoutGroupInput.schema");
const ExpenseUncheckedCreateNestedManyWithoutGroupInput_schema_1 = require("./ExpenseUncheckedCreateNestedManyWithoutGroupInput.schema");
const PaymentUncheckedCreateNestedManyWithoutGroupInput_schema_1 = require("./PaymentUncheckedCreateNestedManyWithoutGroupInput.schema");
exports.GroupUncheckedCreateWithoutParticipantsInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional().optional(), archived: zod_1.z.boolean().optional().optional(), archivedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), name: zod_1.z.string(), currency: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema), coverImageId: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), inviteCode: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), lastActivity: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), messages: zod_1.z.lazy(() => MessageUncheckedCreateNestedManyWithoutGroupInput_schema_1.MessageUncheckedCreateNestedManyWithoutGroupInputObjectSchema).optional().optional(), expenses: zod_1.z.lazy(() => ExpenseUncheckedCreateNestedManyWithoutGroupInput_schema_1.ExpenseUncheckedCreateNestedManyWithoutGroupInputObjectSchema).optional().optional(), payments: zod_1.z.lazy(() => PaymentUncheckedCreateNestedManyWithoutGroupInput_schema_1.PaymentUncheckedCreateNestedManyWithoutGroupInputObjectSchema).optional().optional()
}).strict();
