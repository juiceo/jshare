"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateOrConnectWithoutExpensesPaidInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
const ProfileCreateWithoutExpensesPaidInput_schema_1 = require("./ProfileCreateWithoutExpensesPaidInput.schema");
const ProfileUncheckedCreateWithoutExpensesPaidInput_schema_1 = require("./ProfileUncheckedCreateWithoutExpensesPaidInput.schema");
exports.ProfileCreateOrConnectWithoutExpensesPaidInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutExpensesPaidInput_schema_1.ProfileCreateWithoutExpensesPaidInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutExpensesPaidInput_schema_1.ProfileUncheckedCreateWithoutExpensesPaidInputObjectSchema)])
}).strict();
