"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCreateOrConnectWithoutGroupInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ImageWhereUniqueInput_schema_1 = require("./ImageWhereUniqueInput.schema");
const ImageCreateWithoutGroupInput_schema_1 = require("./ImageCreateWithoutGroupInput.schema");
const ImageUncheckedCreateWithoutGroupInput_schema_1 = require("./ImageUncheckedCreateWithoutGroupInput.schema");
exports.ImageCreateOrConnectWithoutGroupInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ImageCreateWithoutGroupInput_schema_1.ImageCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => ImageUncheckedCreateWithoutGroupInput_schema_1.ImageUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
