"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageScalarRelationFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const MessageWhereInput_schema_1 = require("./MessageWhereInput.schema");
exports.MessageScalarRelationFilterObjectSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => MessageWhereInput_schema_1.MessageWhereInputObjectSchema).optional().optional(), isNot: zod_1.z.lazy(() => MessageWhereInput_schema_1.MessageWhereInputObjectSchema).optional().optional()
}).strict();
