"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateToOneWithWhereWithoutExpenseSharesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
const ProfileUpdateWithoutExpenseSharesInput_schema_1 = require("./ProfileUpdateWithoutExpenseSharesInput.schema");
const ProfileUncheckedUpdateWithoutExpenseSharesInput_schema_1 = require("./ProfileUncheckedUpdateWithoutExpenseSharesInput.schema");
exports.ProfileUpdateToOneWithWhereWithoutExpenseSharesInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional().optional(), data: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateWithoutExpenseSharesInput_schema_1.ProfileUpdateWithoutExpenseSharesInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutExpenseSharesInput_schema_1.ProfileUncheckedUpdateWithoutExpenseSharesInputObjectSchema)])
}).strict();
