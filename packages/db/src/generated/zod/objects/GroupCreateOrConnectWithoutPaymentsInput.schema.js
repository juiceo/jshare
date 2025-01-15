"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupCreateOrConnectWithoutPaymentsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupWhereUniqueInput_schema_1 = require("./GroupWhereUniqueInput.schema");
const GroupCreateWithoutPaymentsInput_schema_1 = require("./GroupCreateWithoutPaymentsInput.schema");
const GroupUncheckedCreateWithoutPaymentsInput_schema_1 = require("./GroupUncheckedCreateWithoutPaymentsInput.schema");
exports.GroupCreateOrConnectWithoutPaymentsInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutPaymentsInput_schema_1.GroupCreateWithoutPaymentsInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutPaymentsInput_schema_1.GroupUncheckedCreateWithoutPaymentsInputObjectSchema)])
}).strict();
