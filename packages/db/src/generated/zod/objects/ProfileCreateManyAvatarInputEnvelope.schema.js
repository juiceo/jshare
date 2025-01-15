"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateManyAvatarInputEnvelopeObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const ProfileCreateManyAvatarInput_schema_1 = require("./ProfileCreateManyAvatarInput.schema");
exports.ProfileCreateManyAvatarInputEnvelopeObjectSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => ProfileCreateManyAvatarInput_schema_1.ProfileCreateManyAvatarInputObjectSchema),
        zod_1.z.lazy(() => ProfileCreateManyAvatarInput_schema_1.ProfileCreateManyAvatarInputObjectSchema).array()]), skipDuplicates: zod_1.z.boolean().optional()
}).strict();
