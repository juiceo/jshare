"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpsertWithoutExpensesPaidInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileUpdateWithoutExpensesPaidInput_schema_1 = require("./ProfileUpdateWithoutExpensesPaidInput.schema");
const ProfileUncheckedUpdateWithoutExpensesPaidInput_schema_1 = require("./ProfileUncheckedUpdateWithoutExpensesPaidInput.schema");
const ProfileCreateWithoutExpensesPaidInput_schema_1 = require("./ProfileCreateWithoutExpensesPaidInput.schema");
const ProfileUncheckedCreateWithoutExpensesPaidInput_schema_1 = require("./ProfileUncheckedCreateWithoutExpensesPaidInput.schema");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
exports.ProfileUpsertWithoutExpensesPaidInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateWithoutExpensesPaidInput_schema_1.ProfileUpdateWithoutExpensesPaidInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutExpensesPaidInput_schema_1.ProfileUncheckedUpdateWithoutExpensesPaidInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutExpensesPaidInput_schema_1.ProfileCreateWithoutExpensesPaidInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutExpensesPaidInput_schema_1.ProfileUncheckedCreateWithoutExpensesPaidInputObjectSchema)]), where: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional()
}).strict();
