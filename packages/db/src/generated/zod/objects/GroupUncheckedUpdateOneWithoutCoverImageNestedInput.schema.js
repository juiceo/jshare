"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUncheckedUpdateOneWithoutCoverImageNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupCreateWithoutCoverImageInput_schema_1 = require("./GroupCreateWithoutCoverImageInput.schema");
const GroupUncheckedCreateWithoutCoverImageInput_schema_1 = require("./GroupUncheckedCreateWithoutCoverImageInput.schema");
const GroupCreateOrConnectWithoutCoverImageInput_schema_1 = require("./GroupCreateOrConnectWithoutCoverImageInput.schema");
const GroupUpsertWithoutCoverImageInput_schema_1 = require("./GroupUpsertWithoutCoverImageInput.schema");
const GroupWhereInput_schema_1 = require("./GroupWhereInput.schema");
const GroupWhereUniqueInput_schema_1 = require("./GroupWhereUniqueInput.schema");
const GroupUpdateToOneWithWhereWithoutCoverImageInput_schema_1 = require("./GroupUpdateToOneWithWhereWithoutCoverImageInput.schema");
const GroupUpdateWithoutCoverImageInput_schema_1 = require("./GroupUpdateWithoutCoverImageInput.schema");
const GroupUncheckedUpdateWithoutCoverImageInput_schema_1 = require("./GroupUncheckedUpdateWithoutCoverImageInput.schema");
exports.GroupUncheckedUpdateOneWithoutCoverImageNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutCoverImageInput_schema_1.GroupCreateWithoutCoverImageInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutCoverImageInput_schema_1.GroupUncheckedCreateWithoutCoverImageInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => GroupCreateOrConnectWithoutCoverImageInput_schema_1.GroupCreateOrConnectWithoutCoverImageInputObjectSchema).optional(), upsert: zod_1.z.lazy(() => GroupUpsertWithoutCoverImageInput_schema_1.GroupUpsertWithoutCoverImageInputObjectSchema).optional(), disconnect: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema)]).optional(), delete: zod_1.z.union([zod_1.z.boolean(),
        zod_1.z.lazy(() => GroupWhereInput_schema_1.GroupWhereInputObjectSchema)]).optional(), connect: zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema).optional(), update: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateToOneWithWhereWithoutCoverImageInput_schema_1.GroupUpdateToOneWithWhereWithoutCoverImageInputObjectSchema), zod_1.z.lazy(() => GroupUpdateWithoutCoverImageInput_schema_1.GroupUpdateWithoutCoverImageInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedUpdateWithoutCoverImageInput_schema_1.GroupUncheckedUpdateWithoutCoverImageInputObjectSchema)]).optional()
}).strict();
