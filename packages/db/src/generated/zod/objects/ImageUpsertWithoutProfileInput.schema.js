"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUpsertWithoutProfileInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ImageUpdateWithoutProfileInput_schema_1 = require("./ImageUpdateWithoutProfileInput.schema");
const ImageUncheckedUpdateWithoutProfileInput_schema_1 = require("./ImageUncheckedUpdateWithoutProfileInput.schema");
const ImageCreateWithoutProfileInput_schema_1 = require("./ImageCreateWithoutProfileInput.schema");
const ImageUncheckedCreateWithoutProfileInput_schema_1 = require("./ImageUncheckedCreateWithoutProfileInput.schema");
const ImageWhereInput_schema_1 = require("./ImageWhereInput.schema");
exports.ImageUpsertWithoutProfileInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => ImageUpdateWithoutProfileInput_schema_1.ImageUpdateWithoutProfileInputObjectSchema), zod_1.z.lazy(() => ImageUncheckedUpdateWithoutProfileInput_schema_1.ImageUncheckedUpdateWithoutProfileInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => ImageCreateWithoutProfileInput_schema_1.ImageCreateWithoutProfileInputObjectSchema), zod_1.z.lazy(() => ImageUncheckedCreateWithoutProfileInput_schema_1.ImageUncheckedCreateWithoutProfileInputObjectSchema)]), where: zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema).optional()
}).strict();
