"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupScalarFieldEnumSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.GroupScalarFieldEnumSchema = zod_1.z.enum(["id", "archived", "archivedAt", "createdAt", "updatedAt", "name", "currency", "coverImageId", "inviteCode", "lastActivity"]);
