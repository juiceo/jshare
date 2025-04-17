"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupCreateNestedOneWithoutExpensesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupCreateWithoutExpensesInput_schema_1 = require("./GroupCreateWithoutExpensesInput.schema");
const GroupUncheckedCreateWithoutExpensesInput_schema_1 = require("./GroupUncheckedCreateWithoutExpensesInput.schema");
const GroupCreateOrConnectWithoutExpensesInput_schema_1 = require("./GroupCreateOrConnectWithoutExpensesInput.schema");
const GroupWhereUniqueInput_schema_1 = require("./GroupWhereUniqueInput.schema");
exports.GroupCreateNestedOneWithoutExpensesInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutExpensesInput_schema_1.GroupCreateWithoutExpensesInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutExpensesInput_schema_1.GroupUncheckedCreateWithoutExpensesInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => GroupCreateOrConnectWithoutExpensesInput_schema_1.GroupCreateOrConnectWithoutExpensesInputObjectSchema).optional().optional(), connect: zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema).optional().optional()
}).strict();
