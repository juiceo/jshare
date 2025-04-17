"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupCountOutputTypeSelectObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.GroupCountOutputTypeSelectObjectSchema = zod_1.z.object({
    participants: zod_1.z.boolean().optional().optional(), messages: zod_1.z.boolean().optional().optional(), expenses: zod_1.z.boolean().optional().optional(), payments: zod_1.z.boolean().optional().optional()
}).strict();
