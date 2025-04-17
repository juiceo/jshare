"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentCreateWithoutGroupInputObjectSchema = void 0;
// @ts-nocheck
const CurrencyConversion_schema_1 = require("../models/CurrencyConversion.schema");
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
const ProfileCreateNestedOneWithoutPaymentsReceivedInput_schema_1 = require("./ProfileCreateNestedOneWithoutPaymentsReceivedInput.schema");
const ProfileCreateNestedOneWithoutPaymentsPaidInput_schema_1 = require("./ProfileCreateNestedOneWithoutPaymentsPaidInput.schema");
exports.PaymentCreateWithoutGroupInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional().optional(), archived: zod_1.z.boolean().optional().optional(), archivedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), amount: zod_1.z.number(), currency: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema), conversion: zod_1.z.lazy(() => CurrencyConversion_schema_1.CurrencyConversionSchema).optional(), recipient: zod_1.z.lazy(() => ProfileCreateNestedOneWithoutPaymentsReceivedInput_schema_1.ProfileCreateNestedOneWithoutPaymentsReceivedInputObjectSchema), payer: zod_1.z.lazy(() => ProfileCreateNestedOneWithoutPaymentsPaidInput_schema_1.ProfileCreateNestedOneWithoutPaymentsPaidInputObjectSchema)
}).strict();
