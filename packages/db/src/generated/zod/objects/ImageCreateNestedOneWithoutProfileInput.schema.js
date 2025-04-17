"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCreateNestedOneWithoutProfileInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ImageCreateWithoutProfileInput_schema_1 = require("./ImageCreateWithoutProfileInput.schema");
const ImageUncheckedCreateWithoutProfileInput_schema_1 = require("./ImageUncheckedCreateWithoutProfileInput.schema");
const ImageCreateOrConnectWithoutProfileInput_schema_1 = require("./ImageCreateOrConnectWithoutProfileInput.schema");
const ImageWhereUniqueInput_schema_1 = require("./ImageWhereUniqueInput.schema");
exports.ImageCreateNestedOneWithoutProfileInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ImageCreateWithoutProfileInput_schema_1.ImageCreateWithoutProfileInputObjectSchema), zod_1.z.lazy(() => ImageUncheckedCreateWithoutProfileInput_schema_1.ImageUncheckedCreateWithoutProfileInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ImageCreateOrConnectWithoutProfileInput_schema_1.ImageCreateOrConnectWithoutProfileInputObjectSchema).optional().optional(), connect: zod_1.z.lazy(() => ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema).optional().optional()
}).strict();
