"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseScalarFieldEnumSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ExpenseScalarFieldEnumSchema = zod_1.z.enum(["id", "archived", "createdAt", "updatedAt", "ownerId", "payerId", "groupId", "amount", "currency", "description", "conversion"]);
