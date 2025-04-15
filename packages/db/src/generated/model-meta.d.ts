declare const metadata: {
    models: {
        profile: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                archived: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
                archivedAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                email: {
                    name: string;
                    type: string;
                };
                firstName: {
                    name: string;
                    type: string;
                };
                lastName: {
                    name: string;
                    type: string;
                };
                lastActivity: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                currency: {
                    name: string;
                    type: string;
                };
                groups: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    backLink: string;
                };
                avatarId: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                avatar: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isOptional: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                temporary: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                termsAcceptedAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                messages: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    backLink: string;
                };
                expensesOwned: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                expensesPaid: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                expenseShares: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    backLink: string;
                };
                paymentsReceived: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            name: string;
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                paymentsPaid: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    attributes: {
                        name: string;
                        args: {
                            name: string;
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                };
                showInSearch: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
                avatarId: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: ({
                    value: string;
                } | {
                    value: boolean;
                })[];
            }[];
        };
        group: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                archived: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
                archivedAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                name: {
                    name: string;
                    type: string;
                };
                currency: {
                    name: string;
                    type: string;
                };
                participants: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    backLink: string;
                };
                coverImageId: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    isForeignKey: boolean;
                    relationField: string;
                };
                coverImage: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isOptional: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                inviteCode: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                messages: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    backLink: string;
                };
                expenses: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    backLink: string;
                };
                payments: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    backLink: string;
                };
                lastActivity: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
                coverImageId: {
                    name: string;
                    fields: string[];
                };
                inviteCode: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: ({
                    value: string;
                } | {
                    value: boolean;
                })[];
            }[];
        };
        groupParticipant: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                archived: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
                archivedAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                userId: {
                    name: string;
                    type: string;
                    isForeignKey: boolean;
                    relationField: string;
                };
                user: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                groupId: {
                    name: string;
                    type: string;
                    isForeignKey: boolean;
                    relationField: string;
                };
                group: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                role: {
                    name: string;
                    type: string;
                };
                invitedById: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                inviteType: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: ({
                    value: string;
                } | {
                    value: boolean;
                })[];
            }[];
        };
        image: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                archived: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
                archivedAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                path: {
                    name: string;
                    type: string;
                };
                bucket: {
                    name: string;
                    type: string;
                };
                uploadedById: {
                    name: string;
                    type: string;
                };
                blurhash: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                Group: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isOptional: boolean;
                    backLink: string;
                };
                Profile: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isOptional: boolean;
                    backLink: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: ({
                    value: string;
                } | {
                    value: boolean;
                })[];
            }[];
        };
        message: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                archived: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
                archivedAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                key: {
                    name: string;
                    type: string;
                };
                text: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                authorType: {
                    name: string;
                    type: string;
                };
                authorId: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                    isForeignKey: boolean;
                    relationField: string;
                };
                author: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isOptional: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                groupId: {
                    name: string;
                    type: string;
                    isForeignKey: boolean;
                    relationField: string;
                };
                group: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                attachments: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    backLink: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: ({
                    value: string;
                } | {
                    value: boolean;
                })[];
            }[];
        };
        messageAttachment: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                archived: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
                archivedAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                messageId: {
                    name: string;
                    type: string;
                    isForeignKey: boolean;
                    relationField: string;
                };
                message: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                type: {
                    name: string;
                    type: string;
                };
                expenseId: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                    isForeignKey: boolean;
                    relationField: string;
                };
                expense: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isOptional: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: ({
                    value: string;
                } | {
                    value: boolean;
                })[];
            }[];
        };
        expense: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                archived: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
                archivedAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                ownerId: {
                    name: string;
                    type: string;
                    isForeignKey: boolean;
                    relationField: string;
                };
                owner: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            name: string;
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                payerId: {
                    name: string;
                    type: string;
                    isForeignKey: boolean;
                    relationField: string;
                };
                payer: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            name: string;
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                groupId: {
                    name: string;
                    type: string;
                    isForeignKey: boolean;
                    relationField: string;
                };
                group: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                amount: {
                    name: string;
                    type: string;
                };
                currency: {
                    name: string;
                    type: string;
                };
                description: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                conversion: {
                    name: string;
                    type: string;
                    isTypeDef: boolean;
                    isOptional: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                shares: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    backLink: string;
                };
                messageAttachments: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    backLink: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: ({
                    value: string;
                } | {
                    value: boolean;
                })[];
            }[];
        };
        expenseShare: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                archived: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
                archivedAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                userId: {
                    name: string;
                    type: string;
                    isForeignKey: boolean;
                    relationField: string;
                };
                user: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                expenseId: {
                    name: string;
                    type: string;
                    isForeignKey: boolean;
                    relationField: string;
                };
                expense: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                amount: {
                    name: string;
                    type: string;
                };
                currency: {
                    name: string;
                    type: string;
                };
                locked: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
                conversion: {
                    name: string;
                    type: string;
                    isTypeDef: boolean;
                    isOptional: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: ({
                    value: string;
                } | {
                    value: boolean;
                })[];
            }[];
        };
        payment: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                archived: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
                archivedAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                groupId: {
                    name: string;
                    type: string;
                    isForeignKey: boolean;
                    relationField: string;
                };
                group: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                amount: {
                    name: string;
                    type: string;
                };
                currency: {
                    name: string;
                    type: string;
                };
                conversion: {
                    name: string;
                    type: string;
                    isTypeDef: boolean;
                    isOptional: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                recipientId: {
                    name: string;
                    type: string;
                    isForeignKey: boolean;
                    relationField: string;
                };
                recipient: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            name: string;
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
                payerId: {
                    name: string;
                    type: string;
                    isForeignKey: boolean;
                    relationField: string;
                };
                payer: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: {
                            name: string;
                            value: string;
                        }[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: ({
                    value: string;
                } | {
                    value: boolean;
                })[];
            }[];
        };
        exchangeRates: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                archived: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
                archivedAt: {
                    name: string;
                    type: string;
                    isOptional: boolean;
                };
                createdAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                updatedAt: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                baseCurrency: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: number;
                        }[];
                    }[];
                };
                rates: {
                    name: string;
                    type: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: ({
                    value: string;
                } | {
                    value: boolean;
                })[];
            }[];
        };
    };
    typeDefs: {
        currencyConversion: {
            name: string;
            fields: {
                sourceCurrency: {
                    name: string;
                    type: string;
                };
                sourceAmount: {
                    name: string;
                    type: string;
                };
                currency: {
                    name: string;
                    type: string;
                };
                amount: {
                    name: string;
                    type: string;
                };
                exchangeRate: {
                    name: string;
                    type: string;
                };
                exchangeRatesId: {
                    name: string;
                    type: string;
                };
            };
        };
    };
    deleteCascade: {
        group: string[];
        message: string[];
        expense: string[];
    };
    authModel: string;
};
export default metadata;
