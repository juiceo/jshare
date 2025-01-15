"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupParticipantUncheckedUpdateWithoutUserInputObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const Role_schema_1 = require("../enums/Role.schema");
const EnumRoleFieldUpdateOperationsInput_schema_1 = require("./EnumRoleFieldUpdateOperationsInput.schema");
exports.GroupParticipantUncheckedUpdateWithoutUserInputObjectSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: zod_1.z.union([zod_1.z.union([zod_1.z.date(), zod_1.z.string().datetime().optional()]),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), groupId: zod_1.z.union([zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(), role: zod_1.z.union([zod_1.z.lazy(() => Role_schema_1.RoleSchema),
        zod_1.z.lazy(() => EnumRoleFieldUpdateOperationsInput_schema_1.EnumRoleFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
