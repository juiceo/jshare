"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpdateToOneWithWhereWithoutPaymentsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
const GroupUpdateWithoutPaymentsInput_schema_1 = require("./GroupUpdateWithoutPaymentsInput.schema");
const GroupUncheckedUpdateWithoutPaymentsInput_schema_1 = require("./GroupUncheckedUpdateWithoutPaymentsInput.schema");
exports.GroupUpdateToOneWithWhereWithoutPaymentsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema).optional().optional(), data: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateWithoutPaymentsInput_schema_1.GroupUpdateWithoutPaymentsInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedUpdateWithoutPaymentsInput_schema_1.GroupUncheckedUpdateWithoutPaymentsInputObjectSchema)])
}).strict();
