"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.RoleSchema = zod_1.z.enum(["Owner", "Admin", "Member"]);
