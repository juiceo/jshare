"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateNestedOneWithoutPaymentsReceivedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateWithoutPaymentsReceivedInput_schema_1 = require("./ProfileCreateWithoutPaymentsReceivedInput.schema");
const ProfileUncheckedCreateWithoutPaymentsReceivedInput_schema_1 = require("./ProfileUncheckedCreateWithoutPaymentsReceivedInput.schema");
const ProfileCreateOrConnectWithoutPaymentsReceivedInput_schema_1 = require("./ProfileCreateOrConnectWithoutPaymentsReceivedInput.schema");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
exports.ProfileCreateNestedOneWithoutPaymentsReceivedInputObjectSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutPaymentsReceivedInput_schema_1.ProfileCreateWithoutPaymentsReceivedInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutPaymentsReceivedInput_schema_1.ProfileUncheckedCreateWithoutPaymentsReceivedInputObjectSchema)]).optional(), connectOrCreate: zod_1.z.lazy(() => ProfileCreateOrConnectWithoutPaymentsReceivedInput_schema_1.ProfileCreateOrConnectWithoutPaymentsReceivedInputObjectSchema).optional().optional(), connect: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema).optional().optional()
}).strict();
