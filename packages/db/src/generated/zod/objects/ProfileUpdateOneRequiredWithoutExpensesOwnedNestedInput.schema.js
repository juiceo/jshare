"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateOneRequiredWithoutExpensesOwnedNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateWithoutExpensesOwnedInput_schema_1 = require("./ProfileCreateWithoutExpensesOwnedInput.schema");
const ProfileUncheckedCreateWithoutExpensesOwnedInput_schema_1 = require("./ProfileUncheckedCreateWithoutExpensesOwnedInput.schema");
const ProfileCreateOrConnectWithoutExpensesOwnedInput_schema_1 = require("./ProfileCreateOrConnectWithoutExpensesOwnedInput.schema");
const ProfileUpsertWithoutExpensesOwnedInput_schema_1 = require("./ProfileUpsertWithoutExpensesOwnedInput.schema");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
const ProfileUpdateToOneWithWhereWithoutExpensesOwnedInput_schema_1 = require("./ProfileUpdateToOneWithWhereWithoutExpensesOwnedInput.schema");
const ProfileUpdateWithoutExpensesOwnedInput_schema_1 = require("./ProfileUpdateWithoutExpensesOwnedInput.schema");
const ProfileUncheckedUpdateWithoutExpensesOwnedInput_schema_1 = require("./ProfileUncheckedUpdateWithoutExpensesOwnedInput.schema");
exports.ProfileUpdateOneRequiredWithoutExpensesOwnedNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutExpensesOwnedInput_schema_1.ProfileCreateWithoutExpensesOwnedInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutExpensesOwnedInput_schema_1.ProfileUncheckedCreateWithoutExpensesOwnedInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ProfileCreateOrConnectWithoutExpensesOwnedInput_schema_1.ProfileCreateOrConnectWithoutExpensesOwnedInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => ProfileUpsertWithoutExpensesOwnedInput_schema_1.ProfileUpsertWithoutExpensesOwnedInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateToOneWithWhereWithoutExpensesOwnedInput_schema_1.ProfileUpdateToOneWithWhereWithoutExpensesOwnedInputObjectSchema), zod_1.z.lazy(() => ProfileUpdateWithoutExpensesOwnedInput_schema_1.ProfileUpdateWithoutExpensesOwnedInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutExpensesOwnedInput_schema_1.ProfileUncheckedUpdateWithoutExpensesOwnedInputObjectSchema)]).optional()
}).strict();
