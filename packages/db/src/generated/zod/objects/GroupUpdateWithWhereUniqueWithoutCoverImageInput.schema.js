"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpdateWithWhereUniqueWithoutCoverImageInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupWhereUniqueInput_schema_1 = require("./GroupWhereUniqueInput.schema");
const GroupUpdateWithoutCoverImageInput_schema_1 = require("./GroupUpdateWithoutCoverImageInput.schema");
const GroupUncheckedUpdateWithoutCoverImageInput_schema_1 = require("./GroupUncheckedUpdateWithoutCoverImageInput.schema");
exports.GroupUpdateWithWhereUniqueWithoutCoverImageInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateWithoutCoverImageInput_schema_1.GroupUpdateWithoutCoverImageInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedUpdateWithoutCoverImageInput_schema_1.GroupUncheckedUpdateWithoutCoverImageInputObjectSchema)])
}).strict();
