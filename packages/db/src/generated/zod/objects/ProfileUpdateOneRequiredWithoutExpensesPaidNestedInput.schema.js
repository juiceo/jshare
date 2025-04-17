"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateOneRequiredWithoutExpensesPaidNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateWithoutExpensesPaidInput_schema_1 = require("./ProfileCreateWithoutExpensesPaidInput.schema");
const ProfileUncheckedCreateWithoutExpensesPaidInput_schema_1 = require("./ProfileUncheckedCreateWithoutExpensesPaidInput.schema");
const ProfileCreateOrConnectWithoutExpensesPaidInput_schema_1 = require("./ProfileCreateOrConnectWithoutExpensesPaidInput.schema");
const ProfileUpsertWithoutExpensesPaidInput_schema_1 = require("./ProfileUpsertWithoutExpensesPaidInput.schema");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
const ProfileUpdateToOneWithWhereWithoutExpensesPaidInput_schema_1 = require("./ProfileUpdateToOneWithWhereWithoutExpensesPaidInput.schema");
const ProfileUpdateWithoutExpensesPaidInput_schema_1 = require("./ProfileUpdateWithoutExpensesPaidInput.schema");
const ProfileUncheckedUpdateWithoutExpensesPaidInput_schema_1 = require("./ProfileUncheckedUpdateWithoutExpensesPaidInput.schema");
exports.ProfileUpdateOneRequiredWithoutExpensesPaidNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutExpensesPaidInput_schema_1.ProfileCreateWithoutExpensesPaidInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutExpensesPaidInput_schema_1.ProfileUncheckedCreateWithoutExpensesPaidInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ProfileCreateOrConnectWithoutExpensesPaidInput_schema_1.ProfileCreateOrConnectWithoutExpensesPaidInputObjectSchema).optional().optional(), upsert: zod_1.z.lazy(() => ProfileUpsertWithoutExpensesPaidInput_schema_1.ProfileUpsertWithoutExpensesPaidInputObjectSchema).optional().optional(), connect: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).optional().optional(), update: zod_1.z.union([zod_1.z.lazy(() => ProfileUpdateToOneWithWhereWithoutExpensesPaidInput_schema_1.ProfileUpdateToOneWithWhereWithoutExpensesPaidInputObjectSchema), zod_1.z.lazy(() => ProfileUpdateWithoutExpensesPaidInput_schema_1.ProfileUpdateWithoutExpensesPaidInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedUpdateWithoutExpensesPaidInput_schema_1.ProfileUncheckedUpdateWithoutExpensesPaidInputObjectSchema)]).optional()
}).strict();
