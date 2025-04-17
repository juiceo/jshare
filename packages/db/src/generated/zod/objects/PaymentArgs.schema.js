"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentArgsObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const PaymentSelect_schema_1 = require("./PaymentSelect.schema");
const PaymentInclude_schema_1 = require("./PaymentInclude.schema");
exports.PaymentArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => PaymentSelect_schema_1.PaymentSelectObjectSchema).optional().optional(), include: zod_1.z.lazy(() => PaymentInclude_schema_1.PaymentIncludeObjectSchema).optional().optional()
}).strict();
