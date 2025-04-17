"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUpdateToOneWithWhereWithoutGroupInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ImageWhereInput_schema_1 = require("./ImageWhereInput.schema");
const ImageUpdateWithoutGroupInput_schema_1 = require("./ImageUpdateWithoutGroupInput.schema");
const ImageUncheckedUpdateWithoutGroupInput_schema_1 = require("./ImageUncheckedUpdateWithoutGroupInput.schema");
exports.ImageUpdateToOneWithWhereWithoutGroupInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema).optional().optional(), data: zod_1.z.union([zod_1.z.lazy(() => ImageUpdateWithoutGroupInput_schema_1.ImageUpdateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => ImageUncheckedUpdateWithoutGroupInput_schema_1.ImageUncheckedUpdateWithoutGroupInputObjectSchema)])
}).strict();
