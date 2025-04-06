"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableDateTimeFieldUpdateOperationsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.NullableDateTimeFieldUpdateOperationsInputObjectSchema = zod_1.z.object({
    set: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable()
}).strict();
