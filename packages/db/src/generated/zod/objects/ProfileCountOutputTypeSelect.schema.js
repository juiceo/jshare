"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCountOutputTypeSelectObjectSchema = void 0;
// @ts-nocheck
const zod_1 = require("zod");
exports.ProfileCountOutputTypeSelectObjectSchema = zod_1.z.object({
    groups: zod_1.z.boolean().optional().optional(), messages: zod_1.z.boolean().optional().optional(), expensesOwned: zod_1.z.boolean().optional().optional(), expensesPaid: zod_1.z.boolean().optional().optional(), expenseShares: zod_1.z.boolean().optional().optional(), paymentsReceived: zod_1.z.boolean().optional().optional(), paymentsPaid: zod_1.z.boolean().optional().optional()
}).strict();
