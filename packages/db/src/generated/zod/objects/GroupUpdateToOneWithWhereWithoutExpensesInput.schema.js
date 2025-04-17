"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpdateToOneWithWhereWithoutExpensesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
const GroupUpdateWithoutExpensesInput_schema_1 = require("./GroupUpdateWithoutExpensesInput.schema");
const GroupUncheckedUpdateWithoutExpensesInput_schema_1 = require("./GroupUncheckedUpdateWithoutExpensesInput.schema");
exports.GroupUpdateToOneWithWhereWithoutExpensesInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema).optional().optional(), data: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateWithoutExpensesInput_schema_1.GroupUpdateWithoutExpensesInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedUpdateWithoutExpensesInput_schema_1.GroupUncheckedUpdateWithoutExpensesInputObjectSchema)])
}).strict();
