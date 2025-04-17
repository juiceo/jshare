"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupCreateNestedOneWithoutPaymentsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupCreateWithoutPaymentsInput_schema_1 = require("./GroupCreateWithoutPaymentsInput.schema");
const GroupUncheckedCreateWithoutPaymentsInput_schema_1 = require("./GroupUncheckedCreateWithoutPaymentsInput.schema");
const GroupCreateOrConnectWithoutPaymentsInput_schema_1 = require("./GroupCreateOrConnectWithoutPaymentsInput.schema");
const GroupWhereUniqueInput_schema_1 = require("./GroupWhereUniqueInput.schema");
exports.GroupCreateNestedOneWithoutPaymentsInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutPaymentsInput_schema_1.GroupCreateWithoutPaymentsInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutPaymentsInput_schema_1.GroupUncheckedCreateWithoutPaymentsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => GroupCreateOrConnectWithoutPaymentsInput_schema_1.GroupCreateOrConnectWithoutPaymentsInputObjectSchema).optional().optional(), connect: zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema).optional().optional()
}).strict();
