"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateToOneWithWhereWithoutExpensesOwnedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
const ProfileUpdateWithoutExpensesOwnedInput_schema_1 = require("./ProfileUpdateWithoutExpensesOwnedInput.schema");
const ProfileUncheckedUpdateWithoutExpensesOwnedInput_schema_1 = require("./ProfileUncheckedUpdateWithoutExpensesOwnedInput.schema");
exports.ProfileUpdateToOneWithWhereWithoutExpensesOwnedInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateWithoutExpensesOwnedInput_schema_1.ProfileUpdateWithoutExpensesOwnedInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutExpensesOwnedInput_schema_1.ProfileUncheckedUpdateWithoutExpensesOwnedInputObjectSchema)])
}).strict();
