"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpsertWithWhereUniqueWithoutCoverImageInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupWhereUniqueInput_schema_1 = require("./GroupWhereUniqueInput.schema");
const GroupUpdateWithoutCoverImageInput_schema_1 = require("./GroupUpdateWithoutCoverImageInput.schema");
const GroupUncheckedUpdateWithoutCoverImageInput_schema_1 = require("./GroupUncheckedUpdateWithoutCoverImageInput.schema");
const GroupCreateWithoutCoverImageInput_schema_1 = require("./GroupCreateWithoutCoverImageInput.schema");
const GroupUncheckedCreateWithoutCoverImageInput_schema_1 = require("./GroupUncheckedCreateWithoutCoverImageInput.schema");
exports.GroupUpsertWithWhereUniqueWithoutCoverImageInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema), update: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateWithoutCoverImageInput_schema_1.GroupUpdateWithoutCoverImageInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedUpdateWithoutCoverImageInput_schema_1.GroupUncheckedUpdateWithoutCoverImageInputObjectSchema)]), create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutCoverImageInput_schema_1.GroupCreateWithoutCoverImageInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutCoverImageInput_schema_1.GroupUncheckedCreateWithoutCoverImageInputObjectSchema)])
}).strict();
