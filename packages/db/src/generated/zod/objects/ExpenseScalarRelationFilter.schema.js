"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseScalarRelationFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ExpenseWhereInput_schema_1 = require("./ExpenseWhereInput.schema");
exports.ExpenseScalarRelationFilterObjectSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema).optional(), isNot: zod_1.z.lazy(() => ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema).optional()
}).strict();
