"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpdateManyWithWhereWithoutCoverImageInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupScalarWhereInput_schema_1 = require("./GroupScalarWhereInput.schema");
const GroupUpdateManyMutationInput_schema_1 = require("./GroupUpdateManyMutationInput.schema");
const GroupUncheckedUpdateManyWithoutCoverImageInput_schema_1 = require("./GroupUncheckedUpdateManyWithoutCoverImageInput.schema");
exports.GroupUpdateManyWithWhereWithoutCoverImageInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupScalarWhereInput_schema_1.GroupScalarWhereInputObjectSchema), data: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateManyMutationInput_schema_1.GroupUpdateManyMutationInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedUpdateManyWithoutCoverImageInput_schema_1.GroupUncheckedUpdateManyWithoutCoverImageInputObjectSchema)])
}).strict();
