import type * as models from './generated/models';

export namespace DB {
    export type Profile<I extends models.Prisma.ProfileInclude | undefined = undefined> =
        I extends undefined ? models.Profile : models.Prisma.ProfileGetPayload<{ include: I }>;

    export type Group<I extends models.Prisma.GroupInclude | undefined = undefined> =
        I extends undefined ? models.Group : models.Prisma.GroupGetPayload<{ include: I }>;

    export type GroupParticipant<
        I extends models.Prisma.GroupParticipantInclude | undefined = undefined,
    > = I extends undefined
        ? models.GroupParticipant
        : models.Prisma.GroupParticipantGetPayload<{ include: I }>;

    export type Image<I extends models.Prisma.ImageInclude | undefined = undefined> =
        I extends undefined ? models.Image : models.Prisma.ImageGetPayload<{ include: I }>;

    export type Message<I extends models.Prisma.MessageInclude | undefined = undefined> =
        I extends undefined ? models.Message : models.Prisma.MessageGetPayload<{ include: I }>;

    export type MessageAttachment<
        I extends models.Prisma.MessageAttachmentInclude | undefined = undefined,
    > = I extends undefined
        ? models.MessageAttachment
        : models.Prisma.MessageAttachmentGetPayload<{ include: I }>;

    export type Expense<I extends models.Prisma.ExpenseInclude | undefined = undefined> =
        I extends undefined ? models.Expense : models.Prisma.ExpenseGetPayload<{ include: I }>;

    export type ExpenseShare<I extends models.Prisma.ExpenseShareInclude | undefined = undefined> =
        I extends undefined
            ? models.ExpenseShare
            : models.Prisma.ExpenseShareGetPayload<{ include: I }>;

    export type Payment<I extends models.Prisma.PaymentInclude | undefined = undefined> =
        I extends undefined ? models.Payment : models.Prisma.PaymentGetPayload<{ include: I }>;

    export type CurrencyConversion = models.CurrencyConversion;
    export type MessageAttachmentType = models.MessageAttachmentType;
    export type CurrencyCode = models.CurrencyCode;
    export type Role = models.Role;
    export type ExchangeRatesObject = Record<CurrencyCode, number>;
    export type ExchangeRates = Omit<models.ExchangeRates, 'rates'> & {
        rates: ExchangeRatesObject;
    };
}
