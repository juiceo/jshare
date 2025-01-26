"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumInviteTypeFieldUpdateOperationsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const InviteType_schema_1 = require("../enums/InviteType.schema");
exports.NullableEnumInviteTypeFieldUpdateOperationsInputObjectSchema = zod_1.z.object({
    set: zod_1.z.union([zod_1.z.lazy(() => InviteType_schema_1.InviteTypeSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
