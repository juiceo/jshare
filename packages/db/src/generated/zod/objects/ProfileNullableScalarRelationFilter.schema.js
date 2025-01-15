"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileNullableScalarRelationFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
exports.ProfileNullableScalarRelationFilterObjectSchema = zod_1.z.object({
    is: zod_1.z.union([zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), isNot: zod_1.z.union([zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
