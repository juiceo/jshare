"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseCountOutputTypeSelectObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ExpenseCountOutputTypeSelectObjectSchema = zod_1.z.object({
    shares: zod_1.z.boolean().optional(), messageAttachments: zod_1.z.boolean().optional()
}).strict();
