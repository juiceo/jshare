"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpsertWithoutExpenseSharesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileUpdateWithoutExpenseSharesInput_schema_1 = require("./ProfileUpdateWithoutExpenseSharesInput.schema");
const ProfileUncheckedUpdateWithoutExpenseSharesInput_schema_1 = require("./ProfileUncheckedUpdateWithoutExpenseSharesInput.schema");
const ProfileCreateWithoutExpenseSharesInput_schema_1 = require("./ProfileCreateWithoutExpenseSharesInput.schema");
const ProfileUncheckedCreateWithoutExpenseSharesInput_schema_1 = require("./ProfileUncheckedCreateWithoutExpenseSharesInput.schema");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
exports.ProfileUpsertWithoutExpenseSharesInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateWithoutExpenseSharesInput_schema_1.ProfileUpdateWithoutExpenseSharesInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutExpenseSharesInput_schema_1.ProfileUncheckedUpdateWithoutExpenseSharesInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutExpenseSharesInput_schema_1.ProfileCreateWithoutExpenseSharesInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutExpenseSharesInput_schema_1.ProfileUncheckedCreateWithoutExpenseSharesInputObjectSchema)]), where: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional()
}).strict();
