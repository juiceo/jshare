"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateToOneWithWhereWithoutExpensesPaidInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
const ProfileUpdateWithoutExpensesPaidInput_schema_1 = require("./ProfileUpdateWithoutExpensesPaidInput.schema");
const ProfileUncheckedUpdateWithoutExpensesPaidInput_schema_1 = require("./ProfileUncheckedUpdateWithoutExpensesPaidInput.schema");
exports.ProfileUpdateToOneWithWhereWithoutExpensesPaidInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateWithoutExpensesPaidInput_schema_1.ProfileUpdateWithoutExpensesPaidInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutExpensesPaidInput_schema_1.ProfileUncheckedUpdateWithoutExpensesPaidInputObjectSchema)])
}).strict();
