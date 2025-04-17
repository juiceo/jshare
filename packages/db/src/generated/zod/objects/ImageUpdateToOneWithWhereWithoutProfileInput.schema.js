"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUpdateToOneWithWhereWithoutProfileInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ImageWhereInput_schema_1 = require("./ImageWhereInput.schema");
const ImageUpdateWithoutProfileInput_schema_1 = require("./ImageUpdateWithoutProfileInput.schema");
const ImageUncheckedUpdateWithoutProfileInput_schema_1 = require("./ImageUncheckedUpdateWithoutProfileInput.schema");
exports.ImageUpdateToOneWithWhereWithoutProfileInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema).optional().optional(), data: zod_1.z.union([zod_1.z.lazy(() => ImageUpdateWithoutProfileInput_schema_1.ImageUpdateWithoutProfileInputObjectSchema), zod_1.z.lazy(() => ImageUncheckedUpdateWithoutProfileInput_schema_1.ImageUncheckedUpdateWithoutProfileInputObjectSchema)])
}).strict();
