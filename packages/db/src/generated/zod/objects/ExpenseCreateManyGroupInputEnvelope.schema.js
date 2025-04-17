"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCreateManyGroupInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseCreateManyGroupInput_schema_1 = require("./ExpenseCreateManyGroupInput.schema");
exports.ExpenseCreateManyGroupInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => ExpenseCreateManyGroupInput_schema_1.ExpenseCreateManyGroupInputObjectSchema),
        zod_1.z.lazy(() => ExpenseCreateManyGroupInput_schema_1.ExpenseCreateManyGroupInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional().optional()
}).strict();
