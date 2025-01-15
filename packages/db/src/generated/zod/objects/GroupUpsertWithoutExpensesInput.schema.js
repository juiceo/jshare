"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpsertWithoutExpensesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupUpdateWithoutExpensesInput_schema_1 = require("./GroupUpdateWithoutExpensesInput.schema");
const GroupUncheckedUpdateWithoutExpensesInput_schema_1 = require("./GroupUncheckedUpdateWithoutExpensesInput.schema");
const GroupCreateWithoutExpensesInput_schema_1 = require("./GroupCreateWithoutExpensesInput.schema");
const GroupUncheckedCreateWithoutExpensesInput_schema_1 = require("./GroupUncheckedCreateWithoutExpensesInput.schema");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
exports.GroupUpsertWithoutExpensesInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateWithoutExpensesInput_schema_1.GroupUpdateWithoutExpensesInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedUpdateWithoutExpensesInput_schema_1.GroupUncheckedUpdateWithoutExpensesInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutExpensesInput_schema_1.GroupCreateWithoutExpensesInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutExpensesInput_schema_1.GroupUncheckedCreateWithoutExpensesInputObjectSchema)]), where: zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema).optional()
}).strict();
