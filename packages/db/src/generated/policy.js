"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const policy = {
    policy: { profile: {
            modelLevel: { read: { guard: Profile_read, },
                create: { guard: Profile_create, },
                update: { guard: Profile_update, },
                postUpdate: { guard: Profile_postUpdate, },
                delete: { guard: Profile_delete, } },
            fieldLevel: { read: {},
                update: {},
            },
        },
        group: {
            modelLevel: { read: { guard: Group_read, },
                create: { guard: Group_create, inputChecker: Group_create_input, },
                update: { guard: Group_update, },
                postUpdate: { guard: Group_postUpdate, },
                delete: { guard: Group_delete, } },
            fieldLevel: { read: {},
                update: {},
            },
        },
        groupParticipant: {
            modelLevel: { read: { guard: GroupParticipant_read, },
                create: { guard: GroupParticipant_create, inputChecker: GroupParticipant_create_input, },
                update: { guard: GroupParticipant_update, },
                postUpdate: { guard: GroupParticipant_postUpdate, },
                delete: { guard: GroupParticipant_delete, } },
            fieldLevel: { read: {},
                update: {},
            },
        },
        image: {
            modelLevel: { read: { guard: Image_read, },
                create: { guard: Image_create, inputChecker: Image_create_input, },
                update: { guard: Image_update, },
                postUpdate: { guard: Image_postUpdate, },
                delete: { guard: Image_delete, } },
            fieldLevel: { read: {},
                update: {},
            },
        },
        message: {
            modelLevel: { read: { guard: Message_read, },
                create: { guard: Message_create, inputChecker: Message_create_input, },
                update: { guard: Message_update, },
                postUpdate: { guard: Message_postUpdate, },
                delete: { guard: Message_delete, } },
            fieldLevel: { read: {},
                update: {},
            },
        },
        messageAttachment: {
            modelLevel: { read: { guard: MessageAttachment_read, },
                create: { guard: MessageAttachment_create, inputChecker: MessageAttachment_create_input, },
                update: { guard: MessageAttachment_update, },
                postUpdate: { guard: MessageAttachment_postUpdate, },
                delete: { guard: MessageAttachment_delete, } },
            fieldLevel: { read: {},
                update: {},
            },
        },
        expense: {
            modelLevel: { read: { guard: Expense_read, },
                create: { guard: Expense_create, inputChecker: Expense_create_input, },
                update: { guard: Expense_update, },
                postUpdate: { guard: Expense_postUpdate, },
                delete: { guard: Expense_delete, } },
            fieldLevel: { read: {},
                update: {},
            },
        },
        expenseShare: {
            modelLevel: { read: { guard: ExpenseShare_read, },
                create: { guard: ExpenseShare_create, inputChecker: ExpenseShare_create_input, },
                update: { guard: ExpenseShare_update, },
                postUpdate: { guard: ExpenseShare_postUpdate, },
                delete: { guard: ExpenseShare_delete, } },
            fieldLevel: { read: {},
                update: {},
            },
        },
        payment: {
            modelLevel: { read: { guard: Payment_read, },
                create: { guard: Payment_create, inputChecker: Payment_create_input, },
                update: { guard: Payment_update, },
                postUpdate: { guard: Payment_postUpdate, },
                delete: { guard: Payment_delete, } },
            fieldLevel: { read: {},
                update: {},
            },
        },
        exchangeRates: {
            modelLevel: { read: { guard: ExchangeRates_read, },
                create: { guard: ExchangeRates_create, inputChecker: ExchangeRates_create_input, },
                update: { guard: ExchangeRates_update, },
                postUpdate: { guard: ExchangeRates_postUpdate, },
                delete: { guard: ExchangeRates_delete, } },
            fieldLevel: { read: {},
                update: {},
            },
        },
    },
    validation: { profile: { hasValidation: false },
        group: { hasValidation: false },
        groupParticipant: { hasValidation: false },
        image: { hasValidation: false },
        message: { hasValidation: false },
        messageAttachment: { hasValidation: false },
        expense: { hasValidation: true },
        expenseShare: { hasValidation: true },
        payment: { hasValidation: true },
        exchangeRates: { hasValidation: false },
    },
    authSelector: { "id": true },
};
function Profile_read(context, db) {
    var _a, _b, _c;
    const user = (_a = context.user) !== null && _a !== void 0 ? _a : null;
    return { AND: [{ NOT: { archived: true } }, { OR: [{ showInSearch: true }, (((_b = user === null || user === void 0 ? void 0 : user.id) !== null && _b !== void 0 ? _b : null) == null) ? { OR: [] } : { id: { equals: ((_c = user === null || user === void 0 ? void 0 : user.id) !== null && _c !== void 0 ? _c : null) } }] }] };
}
function $check_Profile_read(input, context) {
    var _a;
    const user = (_a = context.user) !== null && _a !== void 0 ? _a : null;
    if (input === null || input === void 0 ? void 0 : input.archived) {
        return false;
    }
    if (input === null || input === void 0 ? void 0 : input.showInSearch) {
        return true;
    }
    if (((input === null || input === void 0 ? void 0 : input.id) == (user === null || user === void 0 ? void 0 : user.id))) {
        return true;
    }
    return false;
}
function Profile_create(context, db) {
    var _a, _b, _c;
    const user = (_a = context.user) !== null && _a !== void 0 ? _a : null;
    return (((_b = user === null || user === void 0 ? void 0 : user.id) !== null && _b !== void 0 ? _b : null) == null) ? { OR: [] } : { id: { equals: ((_c = user === null || user === void 0 ? void 0 : user.id) !== null && _c !== void 0 ? _c : null) } };
}
function $check_Profile_create(input, context) {
    var _a;
    const user = (_a = context.user) !== null && _a !== void 0 ? _a : null;
    if (((input === null || input === void 0 ? void 0 : input.id) == (user === null || user === void 0 ? void 0 : user.id))) {
        return true;
    }
    return false;
}
function Profile_update(context, db) {
    var _a, _b, _c;
    const user = (_a = context.user) !== null && _a !== void 0 ? _a : null;
    return (((_b = user === null || user === void 0 ? void 0 : user.id) !== null && _b !== void 0 ? _b : null) == null) ? { OR: [] } : { id: { equals: ((_c = user === null || user === void 0 ? void 0 : user.id) !== null && _c !== void 0 ? _c : null) } };
}
function $check_Profile_update(input, context) {
    var _a;
    const user = (_a = context.user) !== null && _a !== void 0 ? _a : null;
    if (((input === null || input === void 0 ? void 0 : input.id) == (user === null || user === void 0 ? void 0 : user.id))) {
        return true;
    }
    return false;
}
function Profile_postUpdate(context, db) {
    return { AND: [] };
}
function $check_Profile_postUpdate(input, context) {
    return true;
}
function Profile_delete(context, db) {
    return { OR: [] };
}
function $check_Profile_delete(input, context) {
    return false;
}
function Group_read(context, db) {
    return { AND: [{ NOT: { archived: true } }, { AND: [] }] };
}
function $check_Group_read(input, context) {
    if (input === null || input === void 0 ? void 0 : input.archived) {
        return false;
    }
    if (true) {
        return true;
    }
    return false;
}
function Group_create(context, db) {
    return { AND: [] };
}
function $check_Group_create(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function Group_create_input(input, context) {
    return true;
}
function Group_update(context, db) {
    return { AND: [] };
}
function $check_Group_update(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function Group_postUpdate(context, db) {
    return { AND: [] };
}
function $check_Group_postUpdate(input, context) {
    return true;
}
function Group_delete(context, db) {
    return { AND: [] };
}
function $check_Group_delete(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function GroupParticipant_read(context, db) {
    return { AND: [{ NOT: { archived: true } }, { AND: [] }] };
}
function $check_GroupParticipant_read(input, context) {
    if (input === null || input === void 0 ? void 0 : input.archived) {
        return false;
    }
    if (true) {
        return true;
    }
    return false;
}
function GroupParticipant_create(context, db) {
    return { AND: [] };
}
function $check_GroupParticipant_create(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function GroupParticipant_create_input(input, context) {
    return true;
}
function GroupParticipant_update(context, db) {
    return { AND: [] };
}
function $check_GroupParticipant_update(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function GroupParticipant_postUpdate(context, db) {
    return { AND: [] };
}
function $check_GroupParticipant_postUpdate(input, context) {
    return true;
}
function GroupParticipant_delete(context, db) {
    return { AND: [] };
}
function $check_GroupParticipant_delete(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function Image_read(context, db) {
    return { AND: [{ NOT: { archived: true } }, { AND: [] }] };
}
function $check_Image_read(input, context) {
    if (input === null || input === void 0 ? void 0 : input.archived) {
        return false;
    }
    if (true) {
        return true;
    }
    return false;
}
function Image_create(context, db) {
    var _a, _b, _c;
    const user = (_a = context.user) !== null && _a !== void 0 ? _a : null;
    return (((_b = user === null || user === void 0 ? void 0 : user.id) !== null && _b !== void 0 ? _b : null) == null) ? { OR: [] } : { uploadedById: { equals: ((_c = user === null || user === void 0 ? void 0 : user.id) !== null && _c !== void 0 ? _c : null) } };
}
function $check_Image_create(input, context) {
    var _a;
    const user = (_a = context.user) !== null && _a !== void 0 ? _a : null;
    if (((input === null || input === void 0 ? void 0 : input.uploadedById) == (user === null || user === void 0 ? void 0 : user.id))) {
        return true;
    }
    return false;
}
function Image_create_input(input, context) {
    var _a;
    const user = (_a = context.user) !== null && _a !== void 0 ? _a : null;
    return ((input === null || input === void 0 ? void 0 : input.uploadedById) == (user === null || user === void 0 ? void 0 : user.id));
}
function Image_update(context, db) {
    return { OR: [] };
}
function $check_Image_update(input, context) {
    return false;
}
function Image_postUpdate(context, db) {
    return { AND: [] };
}
function $check_Image_postUpdate(input, context) {
    return true;
}
function Image_delete(context, db) {
    return { OR: [] };
}
function $check_Image_delete(input, context) {
    return false;
}
function Message_read(context, db) {
    return { AND: [{ NOT: { archived: true } }, { AND: [] }] };
}
function $check_Message_read(input, context) {
    if (input === null || input === void 0 ? void 0 : input.archived) {
        return false;
    }
    if (true) {
        return true;
    }
    return false;
}
function Message_create(context, db) {
    return { AND: [] };
}
function $check_Message_create(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function Message_create_input(input, context) {
    return true;
}
function Message_update(context, db) {
    return { AND: [] };
}
function $check_Message_update(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function Message_postUpdate(context, db) {
    return { AND: [] };
}
function $check_Message_postUpdate(input, context) {
    return true;
}
function Message_delete(context, db) {
    return { AND: [] };
}
function $check_Message_delete(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function MessageAttachment_read(context, db) {
    return { AND: [{ NOT: { archived: true } }, { AND: [] }] };
}
function $check_MessageAttachment_read(input, context) {
    if (input === null || input === void 0 ? void 0 : input.archived) {
        return false;
    }
    if (true) {
        return true;
    }
    return false;
}
function MessageAttachment_create(context, db) {
    return { AND: [] };
}
function $check_MessageAttachment_create(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function MessageAttachment_create_input(input, context) {
    return true;
}
function MessageAttachment_update(context, db) {
    return { AND: [] };
}
function $check_MessageAttachment_update(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function MessageAttachment_postUpdate(context, db) {
    return { AND: [] };
}
function $check_MessageAttachment_postUpdate(input, context) {
    return true;
}
function MessageAttachment_delete(context, db) {
    return { AND: [] };
}
function $check_MessageAttachment_delete(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function Expense_read(context, db) {
    return { AND: [{ NOT: { archived: true } }, { AND: [] }] };
}
function $check_Expense_read(input, context) {
    if (input === null || input === void 0 ? void 0 : input.archived) {
        return false;
    }
    if (true) {
        return true;
    }
    return false;
}
function Expense_create(context, db) {
    return { AND: [] };
}
function $check_Expense_create(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function Expense_create_input(input, context) {
    return true;
}
function Expense_update(context, db) {
    return { AND: [] };
}
function $check_Expense_update(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function Expense_postUpdate(context, db) {
    return { AND: [] };
}
function $check_Expense_postUpdate(input, context) {
    return true;
}
function Expense_delete(context, db) {
    return { AND: [] };
}
function $check_Expense_delete(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function ExpenseShare_read(context, db) {
    return { AND: [{ NOT: { archived: true } }, { AND: [] }] };
}
function $check_ExpenseShare_read(input, context) {
    if (input === null || input === void 0 ? void 0 : input.archived) {
        return false;
    }
    if (true) {
        return true;
    }
    return false;
}
function ExpenseShare_create(context, db) {
    return { AND: [] };
}
function $check_ExpenseShare_create(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function ExpenseShare_create_input(input, context) {
    return true;
}
function ExpenseShare_update(context, db) {
    return { AND: [] };
}
function $check_ExpenseShare_update(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function ExpenseShare_postUpdate(context, db) {
    return { AND: [] };
}
function $check_ExpenseShare_postUpdate(input, context) {
    return true;
}
function ExpenseShare_delete(context, db) {
    return { AND: [] };
}
function $check_ExpenseShare_delete(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function Payment_read(context, db) {
    return { AND: [{ NOT: { archived: true } }, { AND: [] }] };
}
function $check_Payment_read(input, context) {
    if (input === null || input === void 0 ? void 0 : input.archived) {
        return false;
    }
    if (true) {
        return true;
    }
    return false;
}
function Payment_create(context, db) {
    return { AND: [] };
}
function $check_Payment_create(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function Payment_create_input(input, context) {
    return true;
}
function Payment_update(context, db) {
    return { AND: [] };
}
function $check_Payment_update(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function Payment_postUpdate(context, db) {
    return { AND: [] };
}
function $check_Payment_postUpdate(input, context) {
    return true;
}
function Payment_delete(context, db) {
    return { AND: [] };
}
function $check_Payment_delete(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function ExchangeRates_read(context, db) {
    return { AND: [{ NOT: { archived: true } }, { AND: [] }] };
}
function $check_ExchangeRates_read(input, context) {
    if (input === null || input === void 0 ? void 0 : input.archived) {
        return false;
    }
    if (true) {
        return true;
    }
    return false;
}
function ExchangeRates_create(context, db) {
    return { AND: [] };
}
function $check_ExchangeRates_create(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function ExchangeRates_create_input(input, context) {
    return true;
}
function ExchangeRates_update(context, db) {
    return { AND: [] };
}
function $check_ExchangeRates_update(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function ExchangeRates_postUpdate(context, db) {
    return { AND: [] };
}
function $check_ExchangeRates_postUpdate(input, context) {
    return true;
}
function ExchangeRates_delete(context, db) {
    return { AND: [] };
}
function $check_ExchangeRates_delete(input, context) {
    if (true) {
        return true;
    }
    return false;
}
exports.default = policy;
