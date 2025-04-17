"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCreateNestedOneWithoutGroupInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ImageCreateWithoutGroupInput_schema_1 = require("./ImageCreateWithoutGroupInput.schema");
const ImageUncheckedCreateWithoutGroupInput_schema_1 = require("./ImageUncheckedCreateWithoutGroupInput.schema");
const ImageCreateOrConnectWithoutGroupInput_schema_1 = require("./ImageCreateOrConnectWithoutGroupInput.schema");
const ImageWhereUniqueInput_schema_1 = require("./ImageWhereUniqueInput.schema");
exports.ImageCreateNestedOneWithoutGroupInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ImageCreateWithoutGroupInput_schema_1.ImageCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => ImageUncheckedCreateWithoutGroupInput_schema_1.ImageUncheckedCreateWithoutGroupInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ImageCreateOrConnectWithoutGroupInput_schema_1.ImageCreateOrConnectWithoutGroupInputObjectSchema).optional().optional(), connect: zod_1.z.lazy(() => ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema).optional().optional()
}).strict();
