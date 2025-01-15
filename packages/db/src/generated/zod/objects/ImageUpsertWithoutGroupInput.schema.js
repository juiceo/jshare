"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUpsertWithoutGroupInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ImageUpdateWithoutGroupInput_schema_1 = require("./ImageUpdateWithoutGroupInput.schema");
const ImageUncheckedUpdateWithoutGroupInput_schema_1 = require("./ImageUncheckedUpdateWithoutGroupInput.schema");
const ImageCreateWithoutGroupInput_schema_1 = require("./ImageCreateWithoutGroupInput.schema");
const ImageUncheckedCreateWithoutGroupInput_schema_1 = require("./ImageUncheckedCreateWithoutGroupInput.schema");
const ImageWhereInput_schema_1 = require("./ImageWhereInput.schema");
exports.ImageUpsertWithoutGroupInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ImageUpdateWithoutGroupInput_schema_1.ImageUpdateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => ImageUncheckedUpdateWithoutGroupInput_schema_1.ImageUncheckedUpdateWithoutGroupInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ImageCreateWithoutGroupInput_schema_1.ImageCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => ImageUncheckedCreateWithoutGroupInput_schema_1.ImageUncheckedCreateWithoutGroupInputObjectSchema)]), where: zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema).optional()
}).strict();
