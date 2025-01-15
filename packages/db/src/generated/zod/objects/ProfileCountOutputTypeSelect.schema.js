"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCountOutputTypeSelectObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ProfileCountOutputTypeSelectObjectSchema = zod_1.z.object({
    groups: zod_1.z.boolean().optional(), messages: zod_1.z.boolean().optional(), expensesOwned: zod_1.z.boolean().optional(), expensesPaid: zod_1.z.boolean().optional(), expenseShares: zod_1.z.boolean().optional(), paymentsReceived: zod_1.z.boolean().optional(), paymentsPaid: zod_1.z.boolean().optional()
}).strict();
