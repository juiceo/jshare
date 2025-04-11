"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpdateToOneWithWhereWithoutCoverImageInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
const GroupUpdateWithoutCoverImageInput_schema_1 = require("./GroupUpdateWithoutCoverImageInput.schema");
const GroupUncheckedUpdateWithoutCoverImageInput_schema_1 = require("./GroupUncheckedUpdateWithoutCoverImageInput.schema");
exports.GroupUpdateToOneWithWhereWithoutCoverImageInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema).optional(), data: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateWithoutCoverImageInput_schema_1.GroupUpdateWithoutCoverImageInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedUpdateWithoutCoverImageInput_schema_1.GroupUncheckedUpdateWithoutCoverImageInputObjectSchema)])
}).strict();
