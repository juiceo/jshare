"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpdateOneRequiredWithoutPaymentsNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupCreateWithoutPaymentsInput_schema_1 = require("./GroupCreateWithoutPaymentsInput.schema");
const GroupUncheckedCreateWithoutPaymentsInput_schema_1 = require("./GroupUncheckedCreateWithoutPaymentsInput.schema");
const GroupCreateOrConnectWithoutPaymentsInput_schema_1 = require("./GroupCreateOrConnectWithoutPaymentsInput.schema");
const GroupUpsertWithoutPaymentsInput_schema_1 = require("./GroupUpsertWithoutPaymentsInput.schema");
const GroupWhereUniqueInput_schema_1 = require("./GroupWhereUniqueInput.schema");
const GroupUpdateToOneWithWhereWithoutPaymentsInput_schema_1 = require("./GroupUpdateToOneWithWhereWithoutPaymentsInput.schema");
const GroupUpdateWithoutPaymentsInput_schema_1 = require("./GroupUpdateWithoutPaymentsInput.schema");
const GroupUncheckedUpdateWithoutPaymentsInput_schema_1 = require("./GroupUncheckedUpdateWithoutPaymentsInput.schema");
exports.GroupUpdateOneRequiredWithoutPaymentsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutPaymentsInput_schema_1.GroupCreateWithoutPaymentsInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutPaymentsInput_schema_1.GroupUncheckedCreateWithoutPaymentsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => GroupCreateOrConnectWithoutPaymentsInput_schema_1.GroupCreateOrConnectWithoutPaymentsInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => GroupUpsertWithoutPaymentsInput_schema_1.GroupUpsertWithoutPaymentsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateToOneWithWhereWithoutPaymentsInput_schema_1.GroupUpdateToOneWithWhereWithoutPaymentsInputObjectSchema), zod_1.z.lazy(() => GroupUpdateWithoutPaymentsInput_schema_1.GroupUpdateWithoutPaymentsInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedUpdateWithoutPaymentsInput_schema_1.GroupUncheckedUpdateWithoutPaymentsInputObjectSchema)]).optional()
}).strict();
