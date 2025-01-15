"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageNullableScalarRelationFilterObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ImageWhereInput_schema_1 = require("./ImageWhereInput.schema");
exports.ImageNullableScalarRelationFilterObjectSchema = zod_1.z.object({
    is: zod_1.z.union([zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), isNot: zod_1.z.union([zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema),
        zod_1.z.null()]).optional().nullable()
}).strict();
