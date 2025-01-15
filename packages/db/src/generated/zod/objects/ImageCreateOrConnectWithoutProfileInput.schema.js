"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCreateOrConnectWithoutProfileInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ImageWhereUniqueInput_schema_1 = require("./ImageWhereUniqueInput.schema");
const ImageCreateWithoutProfileInput_schema_1 = require("./ImageCreateWithoutProfileInput.schema");
const ImageUncheckedCreateWithoutProfileInput_schema_1 = require("./ImageUncheckedCreateWithoutProfileInput.schema");
exports.ImageCreateOrConnectWithoutProfileInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ImageCreateWithoutProfileInput_schema_1.ImageCreateWithoutProfileInputObjectSchema), zod_1.z.lazy(() => ImageUncheckedCreateWithoutProfileInput_schema_1.ImageUncheckedCreateWithoutProfileInputObjectSchema)])
}).strict();
