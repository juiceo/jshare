"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAttachmentScalarFieldEnumSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.MessageAttachmentScalarFieldEnumSchema = zod_1.z.enum(["id", "createdAt", "updatedAt", "messageId", "type", "expenseId"]);
