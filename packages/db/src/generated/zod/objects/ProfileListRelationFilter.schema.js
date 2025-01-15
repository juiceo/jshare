"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileListRelationFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
exports.ProfileListRelationFilterObjectSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional(), some: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional(), none: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional()
}).strict();
