"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRatesCreateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const JsonNullValueInput_schema_1 = require("../enums/JsonNullValueInput.schema");
const literalSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean()]);
const jsonSchema = zod_1.z.lazy(() => zod_1.z.union([literalSchema, zod_1.z.array(jsonSchema.nullable()), zod_1.z.record(jsonSchema.nullable())]));
exports.ExchangeRatesCreateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional().optional(), archived: zod_1.z.boolean().optional().optional(), archivedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.null()]).optional().nullable(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]).optional(), baseCurrency: zod_1.z.string(), rates: zod_1.z.union([zod_1.z.lazy(() => JsonNullValueInput_schema_1.JsonNullValueInputSchema),
        jsonSchema])
}).strict();
