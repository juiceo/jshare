"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateNestedOneWithoutExpenseSharesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateWithoutExpenseSharesInput_schema_1 = require("./ProfileCreateWithoutExpenseSharesInput.schema");
const ProfileUncheckedCreateWithoutExpenseSharesInput_schema_1 = require("./ProfileUncheckedCreateWithoutExpenseSharesInput.schema");
const ProfileCreateOrConnectWithoutExpenseSharesInput_schema_1 = require("./ProfileCreateOrConnectWithoutExpenseSharesInput.schema");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
exports.ProfileCreateNestedOneWithoutExpenseSharesInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutExpenseSharesInput_schema_1.ProfileCreateWithoutExpenseSharesInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutExpenseSharesInput_schema_1.ProfileUncheckedCreateWithoutExpenseSharesInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ProfileCreateOrConnectWithoutExpenseSharesInput_schema_1.ProfileCreateOrConnectWithoutExpenseSharesInputObjectSchema).optional().optional(), connect: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).optional().optional()
}).strict();
