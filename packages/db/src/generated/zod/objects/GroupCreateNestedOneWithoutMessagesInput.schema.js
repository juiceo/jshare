"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupCreateNestedOneWithoutMessagesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupCreateWithoutMessagesInput_schema_1 = require("./GroupCreateWithoutMessagesInput.schema");
const GroupUncheckedCreateWithoutMessagesInput_schema_1 = require("./GroupUncheckedCreateWithoutMessagesInput.schema");
const GroupCreateOrConnectWithoutMessagesInput_schema_1 = require("./GroupCreateOrConnectWithoutMessagesInput.schema");
const GroupWhereUniqueInput_schema_1 = require("./GroupWhereUniqueInput.schema");
exports.GroupCreateNestedOneWithoutMessagesInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutMessagesInput_schema_1.GroupCreateWithoutMessagesInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutMessagesInput_schema_1.GroupUncheckedCreateWithoutMessagesInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => GroupCreateOrConnectWithoutMessagesInput_schema_1.GroupCreateOrConnectWithoutMessagesInputObjectSchema).optional(), connect: zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema).optional()
}).strict();
