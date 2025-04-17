"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileScalarRelationFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileWhereInput_schema_1 = require("./ProfileWhereInput.schema");
exports.ProfileScalarRelationFilterObjectSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional().optional(), isNot: zod_1.z.lazy(() => ProfileWhereInput_schema_1.ProfileWhereInputObjectSchema).optional().optional()
}).strict();
