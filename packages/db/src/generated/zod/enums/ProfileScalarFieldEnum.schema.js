"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileScalarFieldEnumSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ProfileScalarFieldEnumSchema = zod_1.z.enum(["id", "archived", "archivedAt", "createdAt", "updatedAt", "email", "firstName", "lastName", "lastActivity", "currency", "avatarId", "temporary", "termsAcceptedAt", "showInSearch"]);
