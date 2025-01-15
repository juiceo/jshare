"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateNestedOneWithoutExpensesOwnedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateWithoutExpensesOwnedInput_schema_1 = require("./ProfileCreateWithoutExpensesOwnedInput.schema");
const ProfileUncheckedCreateWithoutExpensesOwnedInput_schema_1 = require("./ProfileUncheckedCreateWithoutExpensesOwnedInput.schema");
const ProfileCreateOrConnectWithoutExpensesOwnedInput_schema_1 = require("./ProfileCreateOrConnectWithoutExpensesOwnedInput.schema");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
exports.ProfileCreateNestedOneWithoutExpensesOwnedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutExpensesOwnedInput_schema_1.ProfileCreateWithoutExpensesOwnedInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutExpensesOwnedInput_schema_1.ProfileUncheckedCreateWithoutExpensesOwnedInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ProfileCreateOrConnectWithoutExpensesOwnedInput_schema_1.ProfileCreateOrConnectWithoutExpensesOwnedInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).optional()
}).strict();
