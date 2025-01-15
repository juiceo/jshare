"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableStringFieldUpdateOperationsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.NullableStringFieldUpdateOperationsInputObjectSchema = zod_1.z.object({
    set: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable()
}).strict();
