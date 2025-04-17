"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpsertWithoutExpensesOwnedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileUpdateWithoutExpensesOwnedInput_schema_1 = require("./ProfileUpdateWithoutExpensesOwnedInput.schema");
const ProfileUncheckedUpdateWithoutExpensesOwnedInput_schema_1 = require("./ProfileUncheckedUpdateWithoutExpensesOwnedInput.schema");
const ProfileCreateWithoutExpensesOwnedInput_schema_1 = require("./ProfileCreateWithoutExpensesOwnedInput.schema");
const ProfileUncheckedCreateWithoutExpensesOwnedInput_schema_1 = require("./ProfileUncheckedCreateWithoutExpensesOwnedInput.schema");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
exports.ProfileUpsertWithoutExpensesOwnedInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateWithoutExpensesOwnedInput_schema_1.ProfileUpdateWithoutExpensesOwnedInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutExpensesOwnedInput_schema_1.ProfileUncheckedUpdateWithoutExpensesOwnedInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutExpensesOwnedInput_schema_1.ProfileCreateWithoutExpensesOwnedInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutExpensesOwnedInput_schema_1.ProfileUncheckedCreateWithoutExpensesOwnedInputObjectSchema)]), where: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional().optional()
}).strict();
