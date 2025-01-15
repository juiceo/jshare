"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpdateOneRequiredWithoutMessagesNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupCreateWithoutMessagesInput_schema_1 = require("./GroupCreateWithoutMessagesInput.schema");
const GroupUncheckedCreateWithoutMessagesInput_schema_1 = require("./GroupUncheckedCreateWithoutMessagesInput.schema");
const GroupCreateOrConnectWithoutMessagesInput_schema_1 = require("./GroupCreateOrConnectWithoutMessagesInput.schema");
const GroupUpsertWithoutMessagesInput_schema_1 = require("./GroupUpsertWithoutMessagesInput.schema");
const GroupWhereUniqueInput_schema_1 = require("./GroupWhereUniqueInput.schema");
const GroupUpdateToOneWithWhereWithoutMessagesInput_schema_1 = require("./GroupUpdateToOneWithWhereWithoutMessagesInput.schema");
const GroupUpdateWithoutMessagesInput_schema_1 = require("./GroupUpdateWithoutMessagesInput.schema");
const GroupUncheckedUpdateWithoutMessagesInput_schema_1 = require("./GroupUncheckedUpdateWithoutMessagesInput.schema");
exports.GroupUpdateOneRequiredWithoutMessagesNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutMessagesInput_schema_1.GroupCreateWithoutMessagesInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutMessagesInput_schema_1.GroupUncheckedCreateWithoutMessagesInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => GroupCreateOrConnectWithoutMessagesInput_schema_1.GroupCreateOrConnectWithoutMessagesInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => GroupUpsertWithoutMessagesInput_schema_1.GroupUpsertWithoutMessagesInputObjectSchema).optional(), connect: zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateToOneWithWhereWithoutMessagesInput_schema_1.GroupUpdateToOneWithWhereWithoutMessagesInputObjectSchema), zod_1.z.lazy(() => GroupUpdateWithoutMessagesInput_schema_1.GroupUpdateWithoutMessagesInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedUpdateWithoutMessagesInput_schema_1.GroupUncheckedUpdateWithoutMessagesInputObjectSchema)]).optional()
}).strict();
