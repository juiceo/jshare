"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCountOutputTypeArgsObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ImageCountOutputTypeSelect_schema_1 = require("./ImageCountOutputTypeSelect.schema");
exports.ImageCountOutputTypeArgsObjectSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => ImageCountOutputTypeSelect_schema_1.ImageCountOutputTypeSelectObjectSchema).optional()
}).strict();
