"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageScalarFieldEnumSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.MessageScalarFieldEnumSchema = zod_1.z.enum(["id", "archived", "archivedAt", "createdAt", "updatedAt", "key", "text", "authorType", "authorId", "groupId"]);
