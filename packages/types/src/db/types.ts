import type * as p from '@jshare/db';

import type { ConversionDetails } from './schemas';

export namespace DB {
    export type Profile<I extends p.Prisma.ProfileInclude | undefined = undefined> =
        I extends undefined ? p.Profile : p.Prisma.ProfileGetPayload<{ include: I }>;

    export type Group<I extends p.Prisma.GroupInclude | undefined = undefined> = I extends undefined
        ? p.Group
        : p.Prisma.GroupGetPayload<{ include: I }>;

    export type GroupParticipant<
        I extends p.Prisma.GroupParticipantInclude | undefined = undefined,
    > = I extends undefined
        ? p.GroupParticipant
        : p.Prisma.GroupParticipantGetPayload<{ include: I }>;

    export type Image<I extends p.Prisma.ImageInclude | undefined = undefined> = I extends undefined
        ? p.Image
        : p.Prisma.ImageGetPayload<{ include: I }>;

    export type Message<I extends p.Prisma.MessageInclude | undefined = undefined> =
        I extends undefined ? p.Message : p.Prisma.MessageGetPayload<{ include: I }>;

    export type MessageAttachment<
        I extends p.Prisma.MessageAttachmentInclude | undefined = undefined,
    > = I extends undefined
        ? p.MessageAttachment
        : p.Prisma.MessageAttachmentGetPayload<{ include: I }>;

    export type Expense<I extends p.Prisma.ExpenseInclude | undefined = undefined> =
        I extends undefined
            ? WithConversionDetails<p.Expense>
            : WithConversionDetails<p.Prisma.ExpenseGetPayload<{ include: I }>>;

    export type ExpenseShare<I extends p.Prisma.ExpenseShareInclude | undefined = undefined> =
        I extends undefined
            ? WithConversionDetails<p.ExpenseShare>
            : WithConversionDetails<p.Prisma.ExpenseShareGetPayload<{ include: I }>>;

    export type ExchangeRates = WithRatesObject<p.ExchangeRates>;
    export type MessageAttachmentType = p.MessageAttachmentType;
    export type AuthorType = p.AuthorType;
    export type Role = p.Role;
}

type WithConversionDetails<T> = Omit<T, 'conversion'> & { conversion: ConversionDetails | null };
type WithRatesObject<T> = Omit<T, 'rates'> & { rates: Record<string, number> };
