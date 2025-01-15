"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpsertWithoutMessagesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupUpdateWithoutMessagesInput_schema_1 = require("./GroupUpdateWithoutMessagesInput.schema");
const GroupUncheckedUpdateWithoutMessagesInput_schema_1 = require("./GroupUncheckedUpdateWithoutMessagesInput.schema");
const GroupCreateWithoutMessagesInput_schema_1 = require("./GroupCreateWithoutMessagesInput.schema");
const GroupUncheckedCreateWithoutMessagesInput_schema_1 = require("./GroupUncheckedCreateWithoutMessagesInput.schema");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
exports.GroupUpsertWithoutMessagesInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateWithoutMessagesInput_schema_1.GroupUpdateWithoutMessagesInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedUpdateWithoutMessagesInput_schema_1.GroupUncheckedUpdateWithoutMessagesInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutMessagesInput_schema_1.GroupCreateWithoutMessagesInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutMessagesInput_schema_1.GroupUncheckedCreateWithoutMessagesInputObjectSchema)]), where: zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema).optional()
}).strict();
