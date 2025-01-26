import * as models from './generated/models';

export * as zDB from './generated/zod';

export type { Prisma } from './generated/models';

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

    /**
     * For now, enums need to be re-defined here. Exporting them directly from the generated Prisma types
     * isn't working in client-side code, because prisma depends on Node.js modules like `path`.
     */

    export const CurrencyCode: { [K in CurrencyCode]: K } = {
        AED: 'AED',
        ARS: 'ARS',
        AUD: 'AUD',
        BRL: 'BRL',
        CAD: 'CAD',
        CHF: 'CHF',
        CLP: 'CLP',
        COP: 'COP',
        CZK: 'CZK',
        DKK: 'DKK',
        EGP: 'EGP',
        EUR: 'EUR',
        GBP: 'GBP',
        HUF: 'HUF',
        INR: 'INR',
        KES: 'KES',
        MAD: 'MAD',
        MXN: 'MXN',
        NOK: 'NOK',
        PEN: 'PEN',
        PLN: 'PLN',
        RON: 'RON',
        SEK: 'SEK',
        THB: 'THB',
        TZS: 'TZS',
        USD: 'USD',
        ZAR: 'ZAR',
    };
    export type CurrencyCode = models.CurrencyCode;

    export const MessageAttachmentType: { [K in MessageAttachmentType]: K } = {
        Expense: 'Expense',
    };
    export type MessageAttachmentType = models.MessageAttachmentType;

    export const Role: { [K in Role]: K } = {
        Admin: 'Admin',
        Member: 'Member',
        Owner: 'Owner',
    };
    export type Role = models.Role;

    export const AuthorType: { [K in AuthorType]: K } = {
        System: 'System',
        User: 'User',
    };
    export type AuthorType = models.AuthorType;

    export const InviteType: { [K in InviteType]: K } = {
        Code: 'Code',
        Invite: 'Invite',
    };
    export type InviteType = models.InviteType;

    export type CurrencyConversion = models.CurrencyConversion;
    export type ExchangeRatesObject = Record<CurrencyCode, number>;
    export type ExchangeRates = Omit<models.ExchangeRates, 'rates'> & {
        rates: ExchangeRatesObject;
    };
}
