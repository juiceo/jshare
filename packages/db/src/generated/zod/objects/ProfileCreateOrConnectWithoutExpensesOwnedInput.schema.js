"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateOrConnectWithoutExpensesOwnedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
const ProfileCreateWithoutExpensesOwnedInput_schema_1 = require("./ProfileCreateWithoutExpensesOwnedInput.schema");
const ProfileUncheckedCreateWithoutExpensesOwnedInput_schema_1 = require("./ProfileUncheckedCreateWithoutExpensesOwnedInput.schema");
exports.ProfileCreateOrConnectWithoutExpensesOwnedInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutExpensesOwnedInput_schema_1.ProfileCreateWithoutExpensesOwnedInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutExpensesOwnedInput_schema_1.ProfileUncheckedCreateWithoutExpensesOwnedInputObjectSchema)])
}).strict();
