"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUpdateInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const GroupUpdateManyWithoutCoverImageNestedInput_schema_1 = require("./GroupUpdateManyWithoutCoverImageNestedInput.schema");
const ProfileUpdateManyWithoutAvatarNestedInput_schema_1 = require("./ProfileUpdateManyWithoutAvatarNestedInput.schema");
exports.ImageUpdateInputObjectSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), path: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), bucket: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), uploadedById: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), blurhash: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
        zod_1.z.null()]).optional().nullable(), Group: zod_1.z.lazy(() => GroupUpdateManyWithoutCoverImageNestedInput_schema_1.GroupUpdateManyWithoutCoverImageNestedInputObjectSchema).optional(), Profile: zod_1.z.lazy(() => ProfileUpdateManyWithoutAvatarNestedInput_schema_1.ProfileUpdateManyWithoutAvatarNestedInputObjectSchema).optional()
}).strict();
