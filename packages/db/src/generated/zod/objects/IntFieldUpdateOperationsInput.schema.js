"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntFieldUpdateOperationsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.IntFieldUpdateOperationsInputObjectSchema = zod_1.z.object({
    set: zod_1.z.number().optional().optional(), increment: zod_1.z.number().optional().optional(), decrement: zod_1.z.number().optional().optional(), multiply: zod_1.z.number().optional().optional(), divide: zod_1.z.number().optional().optional()
}).strict();
