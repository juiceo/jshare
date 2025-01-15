"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpdateOneRequiredWithoutExpensesNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupCreateWithoutExpensesInput_schema_1 = require("./GroupCreateWithoutExpensesInput.schema");
const GroupUncheckedCreateWithoutExpensesInput_schema_1 = require("./GroupUncheckedCreateWithoutExpensesInput.schema");
const GroupCreateOrConnectWithoutExpensesInput_schema_1 = require("./GroupCreateOrConnectWithoutExpensesInput.schema");
const GroupUpsertWithoutExpensesInput_schema_1 = require("./GroupUpsertWithoutExpensesInput.schema");
const GroupWhereUniqueInput_schema_1 = require("./GroupWhereUniqueInput.schema");
const GroupUpdateToOneWithWhereWithoutExpensesInput_schema_1 = require("./GroupUpdateToOneWithWhereWithoutExpensesInput.schema");
const GroupUpdateWithoutExpensesInput_schema_1 = require("./GroupUpdateWithoutExpensesInput.schema");
const GroupUncheckedUpdateWithoutExpensesInput_schema_1 = require("./GroupUncheckedUpdateWithoutExpensesInput.schema");
exports.GroupUpdateOneRequiredWithoutExpensesNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutExpensesInput_schema_1.GroupCreateWithoutExpensesInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutExpensesInput_schema_1.GroupUncheckedCreateWithoutExpensesInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => GroupCreateOrConnectWithoutExpensesInput_schema_1.GroupCreateOrConnectWithoutExpensesInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => GroupUpsertWithoutExpensesInput_schema_1.GroupUpsertWithoutExpensesInputObjectSchema).optional(), connect: zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateToOneWithWhereWithoutExpensesInput_schema_1.GroupUpdateToOneWithWhereWithoutExpensesInputObjectSchema), zod_1.z.lazy(() => GroupUpdateWithoutExpensesInput_schema_1.GroupUpdateWithoutExpensesInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedUpdateWithoutExpensesInput_schema_1.GroupUncheckedUpdateWithoutExpensesInputObjectSchema)]).optional()
}).strict();
