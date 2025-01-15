"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateOrConnectWithoutPaymentsReceivedInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileWhereUniqueInput_schema_1 = require("./ProfileWhereUniqueInput.schema");
const ProfileCreateWithoutPaymentsReceivedInput_schema_1 = require("./ProfileCreateWithoutPaymentsReceivedInput.schema");
const ProfileUncheckedCreateWithoutPaymentsReceivedInput_schema_1 = require("./ProfileUncheckedCreateWithoutPaymentsReceivedInput.schema");
exports.ProfileCreateOrConnectWithoutPaymentsReceivedInputObjectSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => ProfileWhereUniqueInput_schema_1.ProfileWhereUniqueInputObjectSchema), create: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateWithoutPaymentsReceivedInput_schema_1.ProfileCreateWithoutPaymentsReceivedInputObjectSchema), zod_1.z.lazy(() => ProfileUncheckedCreateWithoutPaymentsReceivedInput_schema_1.ProfileUncheckedCreateWithoutPaymentsReceivedInputObjectSchema)])
}).strict();
