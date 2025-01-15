"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUncheckedCreateNestedManyWithoutCoverImageInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupCreateWithoutCoverImageInput_schema_1 = require("./GroupCreateWithoutCoverImageInput.schema");
const GroupUncheckedCreateWithoutCoverImageInput_schema_1 = require("./GroupUncheckedCreateWithoutCoverImageInput.schema");
const GroupCreateOrConnectWithoutCoverImageInput_schema_1 = require("./GroupCreateOrConnectWithoutCoverImageInput.schema");
const GroupCreateManyCoverImageInputEnvelope_schema_1 = require("./GroupCreateManyCoverImageInputEnvelope.schema");
const GroupWhereUniqueInput_schema_1 = require("./GroupWhereUniqueInput.schema");
exports.GroupUncheckedCreateNestedManyWithoutCoverImageInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutCoverImageInput_schema_1.GroupCreateWithoutCoverImageInputObjectSchema), zod_1.z.lazy(() => GroupCreateWithoutCoverImageInput_schema_1.GroupCreateWithoutCoverImageInputObjectSchema).array(), zod_1.z.lazy(() => GroupUncheckedCreateWithoutCoverImageInput_schema_1.GroupUncheckedCreateWithoutCoverImageInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutCoverImageInput_schema_1.GroupUncheckedCreateWithoutCoverImageInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => GroupCreateOrConnectWithoutCoverImageInput_schema_1.GroupCreateOrConnectWithoutCoverImageInputObjectSchema),
        zod_1.z.lazy(() => GroupCreateOrConnectWithoutCoverImageInput_schema_1.GroupCreateOrConnectWithoutCoverImageInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => GroupCreateManyCoverImageInputEnvelope_schema_1.GroupCreateManyCoverImageInputEnvelopeObjectSchema).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
