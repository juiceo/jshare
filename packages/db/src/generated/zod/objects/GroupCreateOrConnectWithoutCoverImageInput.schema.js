"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupCreateOrConnectWithoutCoverImageInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupWhereUniqueInput_schema_1 = require("./GroupWhereUniqueInput.schema");
const GroupCreateWithoutCoverImageInput_schema_1 = require("./GroupCreateWithoutCoverImageInput.schema");
const GroupUncheckedCreateWithoutCoverImageInput_schema_1 = require("./GroupUncheckedCreateWithoutCoverImageInput.schema");
exports.GroupCreateOrConnectWithoutCoverImageInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutCoverImageInput_schema_1.GroupCreateWithoutCoverImageInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutCoverImageInput_schema_1.GroupUncheckedCreateWithoutCoverImageInputObjectSchema)])
}).strict();
