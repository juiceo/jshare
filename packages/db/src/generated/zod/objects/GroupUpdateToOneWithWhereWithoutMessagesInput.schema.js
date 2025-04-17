"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpdateToOneWithWhereWithoutMessagesInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
const GroupUpdateWithoutMessagesInput_schema_1 = require("./GroupUpdateWithoutMessagesInput.schema");
const GroupUncheckedUpdateWithoutMessagesInput_schema_1 = require("./GroupUncheckedUpdateWithoutMessagesInput.schema");
exports.GroupUpdateToOneWithWhereWithoutMessagesInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema).optional().optional(), data: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateWithoutMessagesInput_schema_1.GroupUpdateWithoutMessagesInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedUpdateWithoutMessagesInput_schema_1.GroupUncheckedUpdateWithoutMessagesInputObjectSchema)])
}).strict();
