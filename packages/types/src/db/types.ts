import type * as models from '@jshare/db/models';

import type { ConversionDetails } from './schemas';

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
        I extends undefined
            ? WithConversionDetails<models.Expense>
            : WithConversionDetails<models.Prisma.ExpenseGetPayload<{ include: I }>>;

    export type ExpenseShare<I extends models.Prisma.ExpenseShareInclude | undefined = undefined> =
        I extends undefined
            ? WithConversionDetails<models.ExpenseShare>
            : WithConversionDetails<models.Prisma.ExpenseShareGetPayload<{ include: I }>>;

    export type Payment<I extends models.Prisma.PaymentInclude | undefined = undefined> =
        I extends undefined
            ? WithConversionDetails<models.Payment>
            : WithConversionDetails<models.Prisma.PaymentGetPayload<{ include: I }>>;

    export type ExchangeRates = WithRatesObject<models.ExchangeRates>;
    export type MessageAttachmentType = models.MessageAttachmentType;
    export type AuthorType = models.AuthorType;
    export type Role = models.Role;
}

type WithConversionDetails<T> = Omit<T, 'conversion'> & { conversion: ConversionDetails | null };
type WithRatesObject<T> = Omit<T, 'rates'> & { rates: Record<string, number> };
