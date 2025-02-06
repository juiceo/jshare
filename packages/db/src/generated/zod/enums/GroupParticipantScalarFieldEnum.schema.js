"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantScalarFieldEnumSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.GroupParticipantScalarFieldEnumSchema = zod_1.z.enum(["id", "archived", "createdAt", "updatedAt", "userId", "groupId", "role", "invitedById", "inviteType"]);
