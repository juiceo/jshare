"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUncheckedUpdateManyWithoutCoverImageNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupCreateWithoutCoverImageInput_schema_1 = require("./GroupCreateWithoutCoverImageInput.schema");
const GroupUncheckedCreateWithoutCoverImageInput_schema_1 = require("./GroupUncheckedCreateWithoutCoverImageInput.schema");
const GroupCreateOrConnectWithoutCoverImageInput_schema_1 = require("./GroupCreateOrConnectWithoutCoverImageInput.schema");
const GroupUpsertWithWhereUniqueWithoutCoverImageInput_schema_1 = require("./GroupUpsertWithWhereUniqueWithoutCoverImageInput.schema");
const GroupCreateManyCoverImageInputEnvelope_schema_1 = require("./GroupCreateManyCoverImageInputEnvelope.schema");
const GroupWhereUniqueInput_schema_1 = require("./GroupWhereUniqueInput.schema");
const GroupUpdateWithWhereUniqueWithoutCoverImageInput_schema_1 = require("./GroupUpdateWithWhereUniqueWithoutCoverImageInput.schema");
const GroupUpdateManyWithWhereWithoutCoverImageInput_schema_1 = require("./GroupUpdateManyWithWhereWithoutCoverImageInput.schema");
const GroupScalarWhereInput_schema_1 = require("./GroupScalarWhereInput.schema");
exports.GroupUncheckedUpdateManyWithoutCoverImageNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutCoverImageInput_schema_1.GroupCreateWithoutCoverImageInputObjectSchema), zod_1.z.lazy(() => GroupCreateWithoutCoverImageInput_schema_1.GroupCreateWithoutCoverImageInputObjectSchema).array(), zod_1.z.lazy(() => GroupUncheckedCreateWithoutCoverImageInput_schema_1.GroupUncheckedCreateWithoutCoverImageInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutCoverImageInput_schema_1.GroupUncheckedCreateWithoutCoverImageInputObjectSchema).array()]).optional(), connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => GroupCreateOrConnectWithoutCoverImageInput_schema_1.GroupCreateOrConnectWithoutCoverImageInputObjectSchema),
        zod_1.z.lazy(() => GroupCreateOrConnectWithoutCoverImageInput_schema_1.GroupCreateOrConnectWithoutCoverImageInputObjectSchema).array()]).optional(), upsert: zod_1.z.union([zod_1.z.lazy(() => GroupUpsertWithWhereUniqueWithoutCoverImageInput_schema_1.GroupUpsertWithWhereUniqueWithoutCoverImageInputObjectSchema),
        zod_1.z.lazy(() => GroupUpsertWithWhereUniqueWithoutCoverImageInput_schema_1.GroupUpsertWithWhereUniqueWithoutCoverImageInputObjectSchema).array()]).optional(), createMany: zod_1.z.lazy(() => GroupCreateManyCoverImageInputEnvelope_schema_1.GroupCreateManyCoverImageInputEnvelopeObjectSchema).optional(), set: zod_1.z.union([zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema).array()]).optional(), disconnect: zod_1.z.union([zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema).array()]).optional(), delete: zod_1.z.union([zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema).array()]).optional(), connect: zod_1.z.union([zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema).array()]).optional(), update: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateWithWhereUniqueWithoutCoverImageInput_schema_1.GroupUpdateWithWhereUniqueWithoutCoverImageInputObjectSchema),
        zod_1.z.lazy(() => GroupUpdateWithWhereUniqueWithoutCoverImageInput_schema_1.GroupUpdateWithWhereUniqueWithoutCoverImageInputObjectSchema).array()]).optional(), updateMany: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateManyWithWhereWithoutCoverImageInput_schema_1.GroupUpdateManyWithWhereWithoutCoverImageInputObjectSchema),
        zod_1.z.lazy(() => GroupUpdateManyWithWhereWithoutCoverImageInput_schema_1.GroupUpdateManyWithWhereWithoutCoverImageInputObjectSchema).array()]).optional(), deleteMany: zod_1.z.union([zod_1.z.lazy(() => GroupScalarWhereInput_schema_1.GroupScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => GroupScalarWhereInput_schema_1.GroupScalarWhereInputObjectSchema).array()]).optional()
}).strict();
