"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCountOutputTypeSelectObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ImageCountOutputTypeSelectObjectSchema = zod_1.z.object({
    Group: zod_1.z.boolean().optional(), Profile: zod_1.z.boolean().optional()
}).strict();
