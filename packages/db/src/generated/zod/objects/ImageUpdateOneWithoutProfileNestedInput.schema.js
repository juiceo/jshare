"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUpdateOneWithoutProfileNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ImageCreateWithoutProfileInput_schema_1 = require("./ImageCreateWithoutProfileInput.schema");
const ImageUncheckedCreateWithoutProfileInput_schema_1 = require("./ImageUncheckedCreateWithoutProfileInput.schema");
const ImageCreateOrConnectWithoutProfileInput_schema_1 = require("./ImageCreateOrConnectWithoutProfileInput.schema");
const ImageUpsertWithoutProfileInput_schema_1 = require("./ImageUpsertWithoutProfileInput.schema");
const ImageWhereInput_schema_1 = require("./ImageWhereInput.schema");
const ImageWhereUniqueInput_schema_1 = require("./ImageWhereUniqueInput.schema");
const ImageUpdateToOneWithWhereWithoutProfileInput_schema_1 = require("./ImageUpdateToOneWithWhereWithoutProfileInput.schema");
const ImageUpdateWithoutProfileInput_schema_1 = require("./ImageUpdateWithoutProfileInput.schema");
const ImageUncheckedUpdateWithoutProfileInput_schema_1 = require("./ImageUncheckedUpdateWithoutProfileInput.schema");
exports.ImageUpdateOneWithoutProfileNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ImageCreateWithoutProfileInput_schema_1.ImageCreateWithoutProfileInputObjectSchema), zod_1.z.lazy(() => ImageUncheckedCreateWithoutProfileInput_schema_1.ImageUncheckedCreateWithoutProfileInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ImageCreateOrConnectWithoutProfileInput_schema_1.ImageCreateOrConnectWithoutProfileInputObjectSchema).optional().optional(), upsert: zod_1.z.lazy(() => ImageUpsertWithoutProfileInput_schema_1.ImageUpsertWithoutProfileInputObjectSchema).optional().optional(), disconnect: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema)]).optional(), delete: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => ImageWhereInput_schema_1.ImageWhereInputObjectSchema)]).optional(), connect: zod_1.z.lazy(() => ImageWhereUniqueInput_schema_1.ImageWhereUniqueInputObjectSchema).optional().optional(), update: zod_1.z.union([zod_1.z.lazy(() => ImageUpdateToOneWithWhereWithoutProfileInput_schema_1.ImageUpdateToOneWithWhereWithoutProfileInputObjectSchema), zod_1.z.lazy(() => ImageUpdateWithoutProfileInput_schema_1.ImageUpdateWithoutProfileInputObjectSchema), zod_1.z.lazy(() => ImageUncheckedUpdateWithoutProfileInput_schema_1.ImageUncheckedUpdateWithoutProfileInputObjectSchema)]).optional()
}).strict();
