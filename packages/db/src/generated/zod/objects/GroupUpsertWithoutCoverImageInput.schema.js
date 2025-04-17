"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpsertWithoutCoverImageInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupUpdateWithoutCoverImageInput_schema_1 = require("./GroupUpdateWithoutCoverImageInput.schema");
const GroupUncheckedUpdateWithoutCoverImageInput_schema_1 = require("./GroupUncheckedUpdateWithoutCoverImageInput.schema");
const GroupCreateWithoutCoverImageInput_schema_1 = require("./GroupCreateWithoutCoverImageInput.schema");
const GroupUncheckedCreateWithoutCoverImageInput_schema_1 = require("./GroupUncheckedCreateWithoutCoverImageInput.schema");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
exports.GroupUpsertWithoutCoverImageInputObjectSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateWithoutCoverImageInput_schema_1.GroupUpdateWithoutCoverImageInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedUpdateWithoutCoverImageInput_schema_1.GroupUncheckedUpdateWithoutCoverImageInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutCoverImageInput_schema_1.GroupCreateWithoutCoverImageInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutCoverImageInput_schema_1.GroupUncheckedCreateWithoutCoverImageInputObjectSchema)]), where: zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema).optional().optional()
}).strict();
