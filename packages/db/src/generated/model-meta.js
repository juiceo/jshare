"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const metadata = {
    models: {
        profile: {
            name: 'Profile', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }],
                }, archived: {
                    name: "archived",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, archivedAt: {
                    name: "archivedAt",
                    type: "DateTime",
                    isOptional: true,
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }, { "name": "@updatedAt", "args": [] }],
                }, email: {
                    name: "email",
                    type: "String",
                }, firstName: {
                    name: "firstName",
                    type: "String",
                }, lastName: {
                    name: "lastName",
                    type: "String",
                }, lastActivity: {
                    name: "lastActivity",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, currency: {
                    name: "currency",
                    type: "CurrencyCode",
                }, groups: {
                    name: "groups",
                    type: "GroupParticipant",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'user',
                }, avatarId: {
                    name: "avatarId",
                    type: "String",
                    isOptional: true,
                    attributes: [{ "name": "@unique", "args": [] }],
                    isForeignKey: true,
                    relationField: 'avatar',
                }, avatar: {
                    name: "avatar",
                    type: "Image",
                    isDataModel: true,
                    isOptional: true,
                    attributes: [{ "name": "@relation", "args": [] }],
                    backLink: 'Profile',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "avatarId" },
                }, temporary: {
                    name: "temporary",
                    type: "Boolean",
                    isOptional: true,
                }, termsAcceptedAt: {
                    name: "termsAcceptedAt",
                    type: "DateTime",
                    isOptional: true,
                }, messages: {
                    name: "messages",
                    type: "Message",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'author',
                }, expensesOwned: {
                    name: "expensesOwned",
                    type: "Expense",
                    isDataModel: true,
                    isArray: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "expense_owner" }] }],
                    backLink: 'owner',
                }, expensesPaid: {
                    name: "expensesPaid",
                    type: "Expense",
                    isDataModel: true,
                    isArray: true,
                    attributes: [{ "name": "@relation", "args": [{ "value": "expense_payer" }] }],
                    backLink: 'payer',
                }, expenseShares: {
                    name: "expenseShares",
                    type: "ExpenseShare",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'user',
                }, paymentsReceived: {
                    name: "paymentsReceived",
                    type: "Payment",
                    isDataModel: true,
                    isArray: true,
                    attributes: [{ "name": "@relation", "args": [{ "name": "name", "value": "payment_recipient" }] }],
                    backLink: 'recipient',
                }, paymentsPaid: {
                    name: "paymentsPaid",
                    type: "Payment",
                    isDataModel: true,
                    isArray: true,
                    attributes: [{ "name": "@relation", "args": [{ "name": "name", "value": "payment_payer" }] }],
                    backLink: 'payer',
                }, showInSearch: {
                    name: "showInSearch",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": true }] }],
                },
            }, uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, avatarId: {
                    name: "avatarId",
                    fields: ["avatarId"]
                },
            },
            attributes: [{ "name": "@@deny", "args": [{ "value": "read" }] }, { "name": "@@allow", "args": [{ "value": "read" }] }, { "name": "@@allow", "args": [{ "value": "read" }] }, { "name": "@@allow", "args": [{ "value": "update" }] }, { "name": "@@allow", "args": [{ "value": "create" }] }, { "name": "@@map", "args": [{ "value": "profiles" }] }, { "name": "@@schema", "args": [{ "value": "public" }] }, { "name": "@@auth", "args": [] }],
        },
        group: {
            name: 'Group', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }],
                }, archived: {
                    name: "archived",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, archivedAt: {
                    name: "archivedAt",
                    type: "DateTime",
                    isOptional: true,
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }, { "name": "@updatedAt", "args": [] }],
                }, name: {
                    name: "name",
                    type: "String",
                }, currency: {
                    name: "currency",
                    type: "CurrencyCode",
                }, participants: {
                    name: "participants",
                    type: "GroupParticipant",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'group',
                }, coverImageId: {
                    name: "coverImageId",
                    type: "String",
                    isOptional: true,
                    attributes: [{ "name": "@unique", "args": [] }],
                    isForeignKey: true,
                    relationField: 'coverImage',
                }, coverImage: {
                    name: "coverImage",
                    type: "Image",
                    isDataModel: true,
                    isOptional: true,
                    attributes: [{ "name": "@relation", "args": [] }],
                    backLink: 'Group',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "coverImageId" },
                }, inviteCode: {
                    name: "inviteCode",
                    type: "String",
                    isOptional: true,
                    attributes: [{ "name": "@unique", "args": [] }],
                }, messages: {
                    name: "messages",
                    type: "Message",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'group',
                }, expenses: {
                    name: "expenses",
                    type: "Expense",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'group',
                }, payments: {
                    name: "payments",
                    type: "Payment",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'group',
                }, lastActivity: {
                    name: "lastActivity",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                },
            }, uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, coverImageId: {
                    name: "coverImageId",
                    fields: ["coverImageId"]
                }, inviteCode: {
                    name: "inviteCode",
                    fields: ["inviteCode"]
                },
            },
            attributes: [{ "name": "@@schema", "args": [{ "value": "public" }] }, { "name": "@@deny", "args": [{ "value": "read" }] }, { "name": "@@allow", "args": [{ "value": "all" }, { "value": true }] }, { "name": "@@map", "args": [{ "value": "groups" }] }],
        },
        groupParticipant: {
            name: 'GroupParticipant', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }],
                }, archived: {
                    name: "archived",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, archivedAt: {
                    name: "archivedAt",
                    type: "DateTime",
                    isOptional: true,
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }, { "name": "@updatedAt", "args": [] }],
                }, userId: {
                    name: "userId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, user: {
                    name: "user",
                    type: "Profile",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [] }],
                    backLink: 'groups',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                }, groupId: {
                    name: "groupId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'group',
                }, group: {
                    name: "group",
                    type: "Group",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [] }],
                    backLink: 'participants',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "groupId" },
                }, role: {
                    name: "role",
                    type: "Role",
                }, invitedById: {
                    name: "invitedById",
                    type: "String",
                    isOptional: true,
                }, inviteType: {
                    name: "inviteType",
                    type: "InviteType",
                    isOptional: true,
                },
            }, uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
            attributes: [{ "name": "@@schema", "args": [{ "value": "public" }] }, { "name": "@@deny", "args": [{ "value": "read" }] }, { "name": "@@index", "args": [] }, { "name": "@@index", "args": [] }, { "name": "@@allow", "args": [{ "value": "all" }, { "value": true }] }, { "name": "@@map", "args": [{ "value": "group_participants" }] }],
        },
        image: {
            name: 'Image', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }],
                }, archived: {
                    name: "archived",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, archivedAt: {
                    name: "archivedAt",
                    type: "DateTime",
                    isOptional: true,
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }, { "name": "@updatedAt", "args": [] }],
                }, path: {
                    name: "path",
                    type: "String",
                }, bucket: {
                    name: "bucket",
                    type: "String",
                }, uploadedById: {
                    name: "uploadedById",
                    type: "String",
                }, blurhash: {
                    name: "blurhash",
                    type: "String",
                    isOptional: true,
                }, Group: {
                    name: "Group",
                    type: "Group",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'coverImage',
                }, Profile: {
                    name: "Profile",
                    type: "Profile",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'avatar',
                },
            }, uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
            attributes: [{ "name": "@@schema", "args": [{ "value": "public" }] }, { "name": "@@deny", "args": [{ "value": "read" }] }, { "name": "@@allow", "args": [{ "value": "read" }, { "value": true }] }, { "name": "@@allow", "args": [{ "value": "create" }] }, { "name": "@@map", "args": [{ "value": "images" }] }],
        },
        message: {
            name: 'Message', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }],
                }, archived: {
                    name: "archived",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, archivedAt: {
                    name: "archivedAt",
                    type: "DateTime",
                    isOptional: true,
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }, { "name": "@updatedAt", "args": [] }],
                }, key: {
                    name: "key",
                    type: "String",
                }, text: {
                    name: "text",
                    type: "String",
                    isOptional: true,
                }, authorType: {
                    name: "authorType",
                    type: "AuthorType",
                }, authorId: {
                    name: "authorId",
                    type: "String",
                    isOptional: true,
                    isForeignKey: true,
                    relationField: 'author',
                }, author: {
                    name: "author",
                    type: "Profile",
                    isDataModel: true,
                    isOptional: true,
                    attributes: [{ "name": "@relation", "args": [] }],
                    backLink: 'messages',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "authorId" },
                }, groupId: {
                    name: "groupId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'group',
                }, group: {
                    name: "group",
                    type: "Group",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [] }],
                    backLink: 'messages',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "groupId" },
                }, attachments: {
                    name: "attachments",
                    type: "MessageAttachment",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'message',
                },
            }, uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
            attributes: [{ "name": "@@schema", "args": [{ "value": "public" }] }, { "name": "@@deny", "args": [{ "value": "read" }] }, { "name": "@@allow", "args": [{ "value": "all" }, { "value": true }] }, { "name": "@@map", "args": [{ "value": "messages" }] }],
        },
        messageAttachment: {
            name: 'MessageAttachment', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }],
                }, archived: {
                    name: "archived",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, archivedAt: {
                    name: "archivedAt",
                    type: "DateTime",
                    isOptional: true,
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }, { "name": "@updatedAt", "args": [] }],
                }, messageId: {
                    name: "messageId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'message',
                }, message: {
                    name: "message",
                    type: "Message",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [] }],
                    backLink: 'attachments',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "messageId" },
                }, type: {
                    name: "type",
                    type: "MessageAttachmentType",
                }, expenseId: {
                    name: "expenseId",
                    type: "String",
                    isOptional: true,
                    isForeignKey: true,
                    relationField: 'expense',
                }, expense: {
                    name: "expense",
                    type: "Expense",
                    isDataModel: true,
                    isOptional: true,
                    attributes: [{ "name": "@relation", "args": [] }],
                    backLink: 'messageAttachments',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "expenseId" },
                },
            }, uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
            attributes: [{ "name": "@@schema", "args": [{ "value": "public" }] }, { "name": "@@deny", "args": [{ "value": "read" }] }, { "name": "@@allow", "args": [{ "value": "all" }, { "value": true }] }, { "name": "@@map", "args": [{ "value": "message_attachments" }] }],
        },
        expense: {
            name: 'Expense', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }],
                }, archived: {
                    name: "archived",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, archivedAt: {
                    name: "archivedAt",
                    type: "DateTime",
                    isOptional: true,
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }, { "name": "@updatedAt", "args": [] }],
                }, ownerId: {
                    name: "ownerId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'owner',
                }, owner: {
                    name: "owner",
                    type: "Profile",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "name": "name", "value": "expense_owner" }] }],
                    backLink: 'expensesOwned',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "ownerId" },
                }, payerId: {
                    name: "payerId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'payer',
                }, payer: {
                    name: "payer",
                    type: "Profile",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "name": "name", "value": "expense_payer" }] }],
                    backLink: 'expensesPaid',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "payerId" },
                }, groupId: {
                    name: "groupId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'group',
                }, group: {
                    name: "group",
                    type: "Group",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [] }],
                    backLink: 'expenses',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "groupId" },
                }, amount: {
                    name: "amount",
                    type: "Int",
                }, currency: {
                    name: "currency",
                    type: "CurrencyCode",
                }, description: {
                    name: "description",
                    type: "String",
                    isOptional: true,
                }, conversion: {
                    name: "conversion",
                    type: "CurrencyConversion",
                    isTypeDef: true,
                    isOptional: true,
                    attributes: [{ "name": "@json", "args": [] }],
                }, shares: {
                    name: "shares",
                    type: "ExpenseShare",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'expense',
                }, messageAttachments: {
                    name: "messageAttachments",
                    type: "MessageAttachment",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'expense',
                },
            }, uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
            attributes: [{ "name": "@@schema", "args": [{ "value": "public" }] }, { "name": "@@deny", "args": [{ "value": "read" }] }, { "name": "@@allow", "args": [{ "value": "all" }, { "value": true }] }, { "name": "@@map", "args": [{ "value": "expenses" }] }],
        },
        expenseShare: {
            name: 'ExpenseShare', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }],
                }, archived: {
                    name: "archived",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, archivedAt: {
                    name: "archivedAt",
                    type: "DateTime",
                    isOptional: true,
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }, { "name": "@updatedAt", "args": [] }],
                }, userId: {
                    name: "userId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, user: {
                    name: "user",
                    type: "Profile",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [] }],
                    backLink: 'expenseShares',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                }, expenseId: {
                    name: "expenseId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'expense',
                }, expense: {
                    name: "expense",
                    type: "Expense",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [] }],
                    backLink: 'shares',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "expenseId" },
                }, amount: {
                    name: "amount",
                    type: "Int",
                }, currency: {
                    name: "currency",
                    type: "CurrencyCode",
                }, locked: {
                    name: "locked",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, conversion: {
                    name: "conversion",
                    type: "CurrencyConversion",
                    isTypeDef: true,
                    isOptional: true,
                    attributes: [{ "name": "@json", "args": [] }],
                },
            }, uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
            attributes: [{ "name": "@@schema", "args": [{ "value": "public" }] }, { "name": "@@deny", "args": [{ "value": "read" }] }, { "name": "@@allow", "args": [{ "value": "all" }, { "value": true }] }, { "name": "@@map", "args": [{ "value": "expense_shares" }] }],
        },
        payment: {
            name: 'Payment', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }],
                }, archived: {
                    name: "archived",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, archivedAt: {
                    name: "archivedAt",
                    type: "DateTime",
                    isOptional: true,
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }, { "name": "@updatedAt", "args": [] }],
                }, groupId: {
                    name: "groupId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'group',
                }, group: {
                    name: "group",
                    type: "Group",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [] }],
                    backLink: 'payments',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "groupId" },
                }, amount: {
                    name: "amount",
                    type: "Int",
                }, currency: {
                    name: "currency",
                    type: "CurrencyCode",
                }, conversion: {
                    name: "conversion",
                    type: "CurrencyConversion",
                    isTypeDef: true,
                    isOptional: true,
                    attributes: [{ "name": "@json", "args": [] }],
                }, recipientId: {
                    name: "recipientId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'recipient',
                }, recipient: {
                    name: "recipient",
                    type: "Profile",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "name": "name", "value": "payment_recipient" }] }],
                    backLink: 'paymentsReceived',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "recipientId" },
                }, payerId: {
                    name: "payerId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'payer',
                }, payer: {
                    name: "payer",
                    type: "Profile",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [{ "name": "name", "value": "payment_payer" }] }],
                    backLink: 'paymentsPaid',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "payerId" },
                },
            }, uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
            attributes: [{ "name": "@@schema", "args": [{ "value": "public" }] }, { "name": "@@deny", "args": [{ "value": "read" }] }, { "name": "@@allow", "args": [{ "value": "all" }, { "value": true }] }, { "name": "@@map", "args": [{ "value": "payments" }] }],
        },
        exchangeRates: {
            name: 'ExchangeRates', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }],
                }, archived: {
                    name: "archived",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, archivedAt: {
                    name: "archivedAt",
                    type: "DateTime",
                    isOptional: true,
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }, { "name": "@updatedAt", "args": [] }],
                }, baseCurrency: {
                    name: "baseCurrency",
                    type: "String",
                    attributes: [{ "name": "@db.VarChar", "args": [{ "value": 3 }] }],
                }, rates: {
                    name: "rates",
                    type: "Json",
                },
            }, uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
            attributes: [{ "name": "@@schema", "args": [{ "value": "public" }] }, { "name": "@@deny", "args": [{ "value": "read" }] }, { "name": "@@allow", "args": [{ "value": "all" }, { "value": true }] }, { "name": "@@map", "args": [{ "value": "exchange_rates" }] }],
        },
    },
    typeDefs: {
        currencyConversion: {
            name: 'CurrencyConversion', fields: {
                sourceCurrency: {
                    name: "sourceCurrency",
                    type: "CurrencyCode",
                }, sourceAmount: {
                    name: "sourceAmount",
                    type: "Int",
                }, currency: {
                    name: "currency",
                    type: "CurrencyCode",
                }, amount: {
                    name: "amount",
                    type: "Int",
                }, exchangeRate: {
                    name: "exchangeRate",
                    type: "Float",
                }, exchangeRatesId: {
                    name: "exchangeRatesId",
                    type: "String",
                },
            },
        },
    },
    deleteCascade: {
        group: ['GroupParticipant', 'Message', 'Expense', 'Payment'],
        message: ['MessageAttachment'],
        expense: ['ExpenseShare'],
    },
    authModel: 'Profile'
};
exports.default = metadata;
