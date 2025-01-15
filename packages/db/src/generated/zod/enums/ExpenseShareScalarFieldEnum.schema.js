"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseShareScalarFieldEnumSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ExpenseShareScalarFieldEnumSchema = zod_1.z.enum(["id", "createdAt", "updatedAt", "userId", "expenseId", "amount", "currency", "locked", "conversion"]);
