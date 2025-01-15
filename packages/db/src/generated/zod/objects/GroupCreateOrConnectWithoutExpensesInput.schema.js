"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupCreateOrConnectWithoutExpensesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupWhereUniqueInput_schema_1 = require("./GroupWhereUniqueInput.schema");
const GroupCreateWithoutExpensesInput_schema_1 = require("./GroupCreateWithoutExpensesInput.schema");
const GroupUncheckedCreateWithoutExpensesInput_schema_1 = require("./GroupUncheckedCreateWithoutExpensesInput.schema");
exports.GroupCreateOrConnectWithoutExpensesInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutExpensesInput_schema_1.GroupCreateWithoutExpensesInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutExpensesInput_schema_1.GroupUncheckedCreateWithoutExpensesInputObjectSchema)])
}).strict();
