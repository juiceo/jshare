"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupCreateOrConnectWithoutMessagesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupWhereUniqueInput_schema_1 = require("./GroupWhereUniqueInput.schema");
const GroupCreateWithoutMessagesInput_schema_1 = require("./GroupCreateWithoutMessagesInput.schema");
const GroupUncheckedCreateWithoutMessagesInput_schema_1 = require("./GroupUncheckedCreateWithoutMessagesInput.schema");
exports.GroupCreateOrConnectWithoutMessagesInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutMessagesInput_schema_1.GroupCreateWithoutMessagesInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutMessagesInput_schema_1.GroupUncheckedCreateWithoutMessagesInputObjectSchema)])
}).strict();
