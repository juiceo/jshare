"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateOrConnectWithoutExpenseSharesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
const ProfileCreateWithoutExpenseSharesInput_schema_1 = require("./ProfileCreateWithoutExpenseSharesInput.schema");
const ProfileUncheckedCreateWithoutExpenseSharesInput_schema_1 = require("./ProfileUncheckedCreateWithoutExpenseSharesInput.schema");
exports.ProfileCreateOrConnectWithoutExpenseSharesInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutExpenseSharesInput_schema_1.ProfileCreateWithoutExpenseSharesInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutExpenseSharesInput_schema_1.ProfileUncheckedCreateWithoutExpenseSharesInputObjectSchema)])
}).strict();
