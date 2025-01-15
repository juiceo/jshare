"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRatesScalarFieldEnumSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ExchangeRatesScalarFieldEnumSchema = zod_1.z.enum(["id", "createdAt", "updatedAt", "baseCurrency", "rates"]);
