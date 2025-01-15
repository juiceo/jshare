"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageListRelationFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageWhereInput_schema_1 = require("./MessageWhereInput.schema");
exports.MessageListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => MessageWhereInput_schema_1.MessageWhereInputObjectSchema).optional(), some: zod_1.z.lazy(() => MessageWhereInput_schema_1.MessageWhereInputObjectSchema).optional(), none: zod_1.z.lazy(() => MessageWhereInput_schema_1.MessageWhereInputObjectSchema).optional()
}).strict();
