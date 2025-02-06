"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageScalarFieldEnumSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ImageScalarFieldEnumSchema = zod_1.z.enum(["id", "archived", "createdAt", "updatedAt", "path", "bucket", "uploadedById", "blurhash"]);
