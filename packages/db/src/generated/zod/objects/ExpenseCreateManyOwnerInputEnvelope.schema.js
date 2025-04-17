"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCreateManyOwnerInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseCreateManyOwnerInput_schema_1 = require("./ExpenseCreateManyOwnerInput.schema");
exports.ExpenseCreateManyOwnerInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateManyOwnerInput_schema_1.ExpenseCreateManyOwnerInputObjectSchema),
        zod_1.z.lazy(() => ExpenseCreateManyOwnerInput_schema_1.ExpenseCreateManyOwnerInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional().optional()
}).strict();
