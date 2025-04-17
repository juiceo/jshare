"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUpdateOneWithoutGroupNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ImageCreateWithoutGroupInput_schema_1 = require("./ImageCreateWithoutGroupInput.schema");
const ImageUncheckedCreateWithoutGroupInput_schema_1 = require("./ImageUncheckedCreateWithoutGroupInput.schema");
const ImageCreateOrConnectWithoutGroupInput_schema_1 = require("./ImageCreateOrConnectWithoutGroupInput.schema");
const ImageUpsertWithoutGroupInput_schema_1 = require("./ImageUpsertWithoutGroupInput.schema");
const ImageWhereInput_schema_1 = require("./ImageWhereInput.schema");
const ImageWhereUniqueInput_schema_1 = require("./ImageWhereUniqueInput.schema");
const ImageUpdateToOneWithWhereWithoutGroupInput_schema_1 = require("./ImageUpdateToOneWithWhereWithoutGroupInput.schema");
const ImageUpdateWithoutGroupInput_schema_1 = require("./ImageUpdateWithoutGroupInput.schema");
const ImageUncheckedUpdateWithoutGroupInput_schema_1 = require("./ImageUncheckedUpdateWithoutGroupInput.schema");
exports.ImageUpdateOneWithoutGroupNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ImageCreateWithoutGroupInput_schema_1.ImageCreateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => ImageUncheckedCreateWithoutGroupInput_schema_1.ImageUncheckedCreateWithoutGroupInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ImageCreateOrConnectWithoutGroupInput_schema_1.ImageCreateOrConnectWithoutGroupInputObjectSchema).optional().optional(), upsert: zod_1.z.lazy(() => ImageUpsertWithoutGroupInput_schema_1.ImageUpsertWithoutGroupInputObjectSchema).optional().optional(), disconnect: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema)]).optional(), delete: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema)]).optional(), connect: zod_1.z.lazy(() => ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema).optional().optional(), update: zod_1.z.union([zod_1.z.lazy(() => ImageUpdateToOneWithWhereWithoutGroupInput_schema_1.ImageUpdateToOneWithWhereWithoutGroupInputObjectSchema), zod_1.z.lazy(() => ImageUpdateWithoutGroupInput_schema_1.ImageUpdateWithoutGroupInputObjectSchema), zod_1.z.lazy(() => ImageUncheckedUpdateWithoutGroupInput_schema_1.ImageUncheckedUpdateWithoutGroupInputObjectSchema)]).optional()
}).strict();
