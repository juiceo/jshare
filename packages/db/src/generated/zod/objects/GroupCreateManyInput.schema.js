"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupCreateManyInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
exports.GroupCreateManyInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), archived: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), name: zod_1.z.string(), currency: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema), coverImageId: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), inviteCode: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), lastActivity: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()])
}).strict();
