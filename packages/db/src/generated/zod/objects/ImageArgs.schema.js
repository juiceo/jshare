"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageArgsObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ImageSelect_schema_1 = require("./ImageSelect.schema");
const ImageInclude_schema_1 = require("./ImageInclude.schema");
exports.ImageArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => ImageSelect_schema_1.ImageSelectObjectSchema).optional(), include: zod_1.z.lazy(() => ImageInclude_schema_1.ImageIncludeObjectSchema).optional()
}).strict();
