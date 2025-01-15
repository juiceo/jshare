"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupCreateNestedOneWithoutParticipantsInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const GroupCreateWithoutParticipantsInput_schema_1 = require("./GroupCreateWithoutParticipantsInput.schema");
const GroupUncheckedCreateWithoutParticipantsInput_schema_1 = require("./GroupUncheckedCreateWithoutParticipantsInput.schema");
const GroupCreateOrConnectWithoutParticipantsInput_schema_1 = require("./GroupCreateOrConnectWithoutParticipantsInput.schema");
const GroupWhereUniqueInput_schema_1 = require("./GroupWhereUniqueInput.schema");
exports.GroupCreateNestedOneWithoutParticipantsInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => GroupCreateWithoutParticipantsInput_schema_1.GroupCreateWithoutParticipantsInputObjectSchema), zod_1.z.lazy(() => GroupUncheckedCreateWithoutParticipantsInput_schema_1.GroupUncheckedCreateWithoutParticipantsInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => GroupCreateOrConnectWithoutParticipantsInput_schema_1.GroupCreateOrConnectWithoutParticipantsInputObjectSchema).optional(), connect: zod_1.z.lazy(() => GroupWhereUniqueInput_schema_1.GroupWhereUniqueInputObjectSchema).optional()
}).strict();
