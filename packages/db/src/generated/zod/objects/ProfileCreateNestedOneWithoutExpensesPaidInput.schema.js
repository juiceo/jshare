"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateNestedOneWithoutExpensesPaidInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateWithoutExpensesPaidInput_schema_1 = require("./ProfileCreateWithoutExpensesPaidInput.schema");
const ProfileUncheckedCreateWithoutExpensesPaidInput_schema_1 = require("./ProfileUncheckedCreateWithoutExpensesPaidInput.schema");
const ProfileCreateOrConnectWithoutExpensesPaidInput_schema_1 = require("./ProfileCreateOrConnectWithoutExpensesPaidInput.schema");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
exports.ProfileCreateNestedOneWithoutExpensesPaidInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutExpensesPaidInput_schema_1.ProfileCreateWithoutExpensesPaidInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutExpensesPaidInput_schema_1.ProfileUncheckedCreateWithoutExpensesPaidInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ProfileCreateOrConnectWithoutExpensesPaidInput_schema_1.ProfileCreateOrConnectWithoutExpensesPaidInputObjectSchema).optional(), connect: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).optional()
}).strict();
