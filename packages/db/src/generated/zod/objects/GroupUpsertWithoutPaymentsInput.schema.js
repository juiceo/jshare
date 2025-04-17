"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpsertWithoutPaymentsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupUpdateWithoutPaymentsInput_schema_1 = require("./GroupUpdateWithoutPaymentsInput.schema");
const GroupUncheckedUpdateWithoutPaymentsInput_schema_1 = require("./GroupUncheckedUpdateWithoutPaymentsInput.schema");
const GroupCreateWithoutPaymentsInput_schema_1 = require("./GroupCreateWithoutPaymentsInput.schema");
const GroupUncheckedCreateWithoutPaymentsInput_schema_1 = require("./GroupUncheckedCreateWithoutPaymentsInput.schema");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
exports.GroupUpsertWithoutPaymentsInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateWithoutPaymentsInput_schema_1.GroupUpdateWithoutPaymentsInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedUpdateWithoutPaymentsInput_schema_1.GroupUncheckedUpdateWithoutPaymentsInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutPaymentsInput_schema_1.GroupCreateWithoutPaymentsInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutPaymentsInput_schema_1.GroupUncheckedCreateWithoutPaymentsInputObjectSchema)]), where: zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema).optional().optional()
}).strict();
