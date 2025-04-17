"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCreateManyPayerInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseCreateManyPayerInput_schema_1 = require("./ExpenseCreateManyPayerInput.schema");
exports.ExpenseCreateManyPayerInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateManyPayerInput_schema_1.ExpenseCreateManyPayerInputObjectSchema),
        zod_1.z.lazy(() => ExpenseCreateManyPayerInput_schema_1.ExpenseCreateManyPayerInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional().optional()
}).strict();
