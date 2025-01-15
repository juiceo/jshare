"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseNullableScalarRelationFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ExpenseWhereInput_schema_1 = require("./ExpenseWhereInput.schema");
exports.ExpenseNullableScalarRelationFilterObjectSchema = zod_1.z.object({
    is: zod_1.z.union([zod_1.z.lazy(() => ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), isNot: zod_1.z.union([zod_1.z.lazy(() => ExpenseWhereInput_schema_1.ExpenseWhereInputObjectSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
