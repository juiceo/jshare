"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateManyAvatarInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const CurrencyCode_schema_1 = require("../enums/CurrencyCode.schema");
exports.ProfileCreateManyAvatarInputObjectSchema = zod_1.z.object({
    userId: zod_1.z.string(), email: zod_1.z.string(), firstName: zod_1.z.string(), lastName: zod_1.z.string(), lastActivity: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), currency: zod_1.z.lazy(() => CurrencyCode_schema_1.CurrencyCodeSchema), temporary: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()])
}).strict();
