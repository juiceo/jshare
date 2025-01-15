"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorTypeSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.AuthorTypeSchema = zod_1.z.enum(["User", "System"]);
