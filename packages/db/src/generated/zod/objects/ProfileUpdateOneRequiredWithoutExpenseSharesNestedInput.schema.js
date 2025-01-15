"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateOneRequiredWithoutExpenseSharesNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateWithoutExpenseSharesInput_schema_1 = require("./ProfileCreateWithoutExpenseSharesInput.schema");
const ProfileUncheckedCreateWithoutExpenseSharesInput_schema_1 = require("./ProfileUncheckedCreateWithoutExpenseSharesInput.schema");
const ProfileCreateOrConnectWithoutExpenseSharesInput_schema_1 = require("./ProfileCreateOrConnectWithoutExpenseSharesInput.schema");
const ProfileUpsertWithoutExpenseSharesInput_schema_1 = require("./ProfileUpsertWithoutExpenseSharesInput.schema");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
const ProfileUpdateToOneWithWhereWithoutExpenseSharesInput_schema_1 = require("./ProfileUpdateToOneWithWhereWithoutExpenseSharesInput.schema");
const ProfileUpdateWithoutExpenseSharesInput_schema_1 = require("./ProfileUpdateWithoutExpenseSharesInput.schema");
const ProfileUncheckedUpdateWithoutExpenseSharesInput_schema_1 = require("./ProfileUncheckedUpdateWithoutExpenseSharesInput.schema");
exports.ProfileUpdateOneRequiredWithoutExpenseSharesNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutExpenseSharesInput_schema_1.ProfileCreateWithoutExpenseSharesInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutExpenseSharesInput_schema_1.ProfileUncheckedCreateWithoutExpenseSharesInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ProfileCreateOrConnectWithoutExpenseSharesInput_schema_1.ProfileCreateOrConnectWithoutExpenseSharesInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => ProfileUpsertWithoutExpenseSharesInput_schema_1.ProfileUpsertWithoutExpenseSharesInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateToOneWithWhereWithoutExpenseSharesInput_schema_1.ProfileUpdateToOneWithWhereWithoutExpenseSharesInputObjectSchema), zod_1.z.lazy(() => ProfileUpdateWithoutExpenseSharesInput_schema_1.ProfileUpdateWithoutExpenseSharesInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutExpenseSharesInput_schema_1.ProfileUncheckedUpdateWithoutExpenseSharesInputObjectSchema)]).optional()
}).strict();
