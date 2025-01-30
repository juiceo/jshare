"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableBoolFieldUpdateOperationsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.NullableBoolFieldUpdateOperationsInputObjectSchema = zod_1.z.object({
    set: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable()
}).strict();
