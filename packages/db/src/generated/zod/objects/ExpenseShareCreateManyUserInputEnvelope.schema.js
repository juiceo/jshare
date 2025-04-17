"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareCreateManyUserInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const ExpenseShareCreateManyUserInput_schema_1 = require("./ExpenseShareCreateManyUserInput.schema");
exports.ExpenseShareCreateManyUserInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => ExpenseShareCreateManyUserInput_schema_1.ExpenseShareCreateManyUserInputObjectSchema),
        zod_1.z.lazy(() => ExpenseShareCreateManyUserInput_schema_1.ExpenseShareCreateManyUserInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional().optional()
}).strict();
