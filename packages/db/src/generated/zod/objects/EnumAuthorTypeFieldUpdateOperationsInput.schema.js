"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAuthorTypeFieldUpdateOperationsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const AuthorType_schema_1 = require("../enums/AuthorType.schema");
exports.EnumAuthorTypeFieldUpdateOperationsInputObjectSchema = zod_1.z.object({
    set: zod_1.z.lazy(() => AuthorType_schema_1.AuthorTypeSchema).optional().optional()
}).strict();
