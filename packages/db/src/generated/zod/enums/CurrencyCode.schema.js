"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyCodeSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.CurrencyCodeSchema = zod_1.z.enum(["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "EGP", "EUR", "GBP", "HUF", "INR", "KES", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "THB", "TZS", "USD", "ZAR", "KZT", "KGS"]);
