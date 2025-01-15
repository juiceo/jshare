"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUncheckedCreateWithoutPaymentsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const GroupParticipantUncheckedCreateNestedManyWithoutGroupInput_schema_1 = require("./GroupParticipantUncheckedCreateNestedManyWithoutGroupInput.schema");
const MessageUncheckedCreateNestedManyWithoutGroupInput_schema_1 = require("./MessageUncheckedCreateNestedManyWithoutGroupInput.schema");
const ExpenseUncheckedCreateNestedManyWithoutGroupInput_schema_1 = require("./ExpenseUncheckedCreateNestedManyWithoutGroupInput.schema");
exports.GroupUncheckedCreateWithoutPaymentsInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), name: zod_1.z.string(), currency: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema), coverImageId: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), participants: zod_1.z.lazy(() => GroupParticipantUncheckedCreateNestedManyWithoutGroupInput_schema_1.GroupParticipantUncheckedCreateNestedManyWithoutGroupInputObjectSchema).optional(), messages: zod_1.z.lazy(() => MessageUncheckedCreateNestedManyWithoutGroupInput_schema_1.MessageUncheckedCreateNestedManyWithoutGroupInputObjectSchema).optional(), expenses: zod_1.z.lazy(() => ExpenseUncheckedCreateNestedManyWithoutGroupInput_schema_1.ExpenseUncheckedCreateNestedManyWithoutGroupInputObjectSchema).optional()
}).strict();
