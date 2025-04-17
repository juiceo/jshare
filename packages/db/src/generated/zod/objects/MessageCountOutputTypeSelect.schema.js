"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCountOutputTypeSelectObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.MessageCountOutputTypeSelectObjectSchema = zod_1.z.object({
    attachments: zod_1.z.boolean().optional().optional()
}).strict();
