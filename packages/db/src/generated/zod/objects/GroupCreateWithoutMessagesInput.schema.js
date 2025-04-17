"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupCreateWithoutMessagesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const GroupParticipantCreateNestedManyWithoutGroupInput_schema_1 = require("./GroupParticipantCreateNestedManyWithoutGroupInput.schema");
const ImageCreateNestedOneWithoutGroupInput_schema_1 = require("./ImageCreateNestedOneWithoutGroupInput.schema");
const ExpenseCreateNestedManyWithoutGroupInput_schema_1 = require("./ExpenseCreateNestedManyWithoutGroupInput.schema");
const PaymentCreateNestedManyWithoutGroupInput_schema_1 = require("./PaymentCreateNestedManyWithoutGroupInput.schema");
exports.GroupCreateWithoutMessagesInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional().optional(), archived: zod_1.z.boolean().optional().optional(), archivedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), name: zod_1.z.string(), currency: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema), inviteCode: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), lastActivity: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), participants: zod_1.z.lazy(() => GroupParticipantCreateNestedManyWithoutGroupInput_schema_1.GroupParticipantCreateNestedManyWithoutGroupInputObjectSchema).optional().optional(), coverImage: zod_1.z.lazy(() => ImageCreateNestedOneWithoutGroupInput_schema_1.ImageCreateNestedOneWithoutGroupInputObjectSchema).optional().optional(), expenses: zod_1.z.lazy(() => ExpenseCreateNestedManyWithoutGroupInput_schema_1.ExpenseCreateNestedManyWithoutGroupInputObjectSchema).optional().optional(), payments: zod_1.z.lazy(() => PaymentCreateNestedManyWithoutGroupInput_schema_1.PaymentCreateNestedManyWithoutGroupInputObjectSchema).optional().optional()
}).strict();
