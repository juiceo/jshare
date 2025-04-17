"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpdateOneRequiredWithoutParticipantsNestedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupCreateWithoutParticipantsInput_schema_1 = require("./GroupCreateWithoutParticipantsInput.schema");
const GroupUncheckedCreateWithoutParticipantsInput_schema_1 = require("./GroupUncheckedCreateWithoutParticipantsInput.schema");
const GroupCreateOrConnectWithoutParticipantsInput_schema_1 = require("./GroupCreateOrConnectWithoutParticipantsInput.schema");
const GroupUpsertWithoutParticipantsInput_schema_1 = require("./GroupUpsertWithoutParticipantsInput.schema");
const GroupWhereUniqueInput_schema_1 = require("./GroupWhereUniqueInput.schema");
const GroupUpdateToOneWithWhereWithoutParticipantsInput_schema_1 = require("./GroupUpdateToOneWithWhereWithoutParticipantsInput.schema");
const GroupUpdateWithoutParticipantsInput_schema_1 = require("./GroupUpdateWithoutParticipantsInput.schema");
const GroupUncheckedUpdateWithoutParticipantsInput_schema_1 = require("./GroupUncheckedUpdateWithoutParticipantsInput.schema");
exports.GroupUpdateOneRequiredWithoutParticipantsNestedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutParticipantsInput_schema_1.GroupCreateWithoutParticipantsInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutParticipantsInput_schema_1.GroupUncheckedCreateWithoutParticipantsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => GroupCreateOrConnectWithoutParticipantsInput_schema_1.GroupCreateOrConnectWithoutParticipantsInputObjectSchema).optional().optional(), upsert: zod_1.z.lazy(() => GroupUpsertWithoutParticipantsInput_schema_1.GroupUpsertWithoutParticipantsInputObjectSchema).optional().optional(), connect: zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema).optional().optional(), update: zod_1.z.union([zod_1.z.lazy(() => GroupUpdateToOneWithWhereWithoutParticipantsInput_schema_1.GroupUpdateToOneWithWhereWithoutParticipantsInputObjectSchema), zod_1.z.lazy(() => GroupUpdateWithoutParticipantsInput_schema_1.GroupUpdateWithoutParticipantsInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedUpdateWithoutParticipantsInput_schema_1.GroupUncheckedUpdateWithoutParticipantsInputObjectSchema)]).optional()
}).strict();
