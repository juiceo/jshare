"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolFieldUpdateOperationsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.BoolFieldUpdateOperationsInputObjectSchema = zod_1.z.object({
    set: zod_1.z.boolean().optional().optional()
}).strict();
