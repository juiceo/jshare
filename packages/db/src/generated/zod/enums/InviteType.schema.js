"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteTypeSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.InviteTypeSchema = zod_1.z.enum(["Code", "Invite"]);
