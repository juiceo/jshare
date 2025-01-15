"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUncheckedCreateWithoutAttachmentsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const AuthorType_schema_1 = require("../enums/AuthorType.schema");
exports.MessageUncheckedCreateWithoutAttachmentsInputObjectSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), createdAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), updatedAt: zod_1.z.union([zod_1.z.date().optional(), zod_1.z.string().datetime().optional()]), key: zod_1.z.string(), text: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), authorType: zod_1.z.lazy(() => AuthorType_schema_1.AuthorTypeSchema), authorId: zod_1.z.union([zod_1.z.string(),
        zod_1.z.null()]).optional().nullable(), groupId: zod_1.z.string()
}).strict();
