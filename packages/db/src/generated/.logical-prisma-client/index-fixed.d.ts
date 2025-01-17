import * as runtime from "./runtime/library.js";

import $Types = runtime.Types
// general types
import $Public = runtime.Types.Public

import $Utils = runtime.Types.Utils

import $Extensions = runtime.Types.Extensions

import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>;
/**
 * Model Profile
 * @
 * @allow ('all', true)
 * @
 * @auth
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>;
/**
 * Model Group
 * @
 * @allow ('all', true)
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>;
/**
 * Model GroupParticipant
 * @
 * @allow ('all', true)
 */
export type GroupParticipant = $Result.DefaultSelection<Prisma.$GroupParticipantPayload>;
/**
 * Model Image
 * @
 * @allow ('all', true)
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>;
/**
 * Model Message
 * @
 * @allow ('all', true)
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>;
/**
 * Model MessageAttachment
 * @
 * @allow ('all', true)
 */
export type MessageAttachment = $Result.DefaultSelection<Prisma.$MessageAttachmentPayload>;
/**
 * Model Expense
 * @
 * @allow ('all', true)
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>;
/**
 * Model ExpenseShare
 * @
 * @allow ('all', true)
 */
export type ExpenseShare = $Result.DefaultSelection<Prisma.$ExpenseSharePayload>;
/**
 * Model Payment
 * @
 * @allow ('all', true)
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>;
/**
 * Model ExchangeRates
 * @
 * @allow ('all', true)
 */
export type ExchangeRates = $Result.DefaultSelection<Prisma.$ExchangeRatesPayload>;
export type CurrencyCode = $Enums.CurrencyCode;
export type Role = $Enums.Role;
export type AuthorType = $Enums.AuthorType;
export type MessageAttachmentType = $Enums.MessageAttachmentType;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>;
    /**
     * ##  Prisma Client ʲˢ
     *
     * Type-safe database client for TypeScript & Node.js
     * @example
     * ```
     * const prisma = new PrismaClient()
     * // Fetch zero or more Profiles
     * const profiles = await prisma.profile.findMany()
     * ```
     *
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
     */
    constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
    /**
     * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Profiles
     * const profiles = await prisma.profile.findMany()
     * ```
     */
    get profile(): Prisma.ProfileDelegate<ExtArgs>;
    /**
     * `prisma.group`: Exposes CRUD operations for the **Group** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Groups
     * const groups = await prisma.group.findMany()
     * ```
     */
    get group(): Prisma.GroupDelegate<ExtArgs>;
    /**
     * `prisma.groupParticipant`: Exposes CRUD operations for the **GroupParticipant** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more GroupParticipants
     * const groupParticipants = await prisma.groupParticipant.findMany()
     * ```
     */
    get groupParticipant(): Prisma.GroupParticipantDelegate<ExtArgs>;
    /**
     * `prisma.image`: Exposes CRUD operations for the **Image** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Images
     * const images = await prisma.image.findMany()
     * ```
     */
    get image(): Prisma.ImageDelegate<ExtArgs>;
    /**
     * `prisma.message`: Exposes CRUD operations for the **Message** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Messages
     * const messages = await prisma.message.findMany()
     * ```
     */
    get message(): Prisma.MessageDelegate<ExtArgs>;
    /**
     * `prisma.messageAttachment`: Exposes CRUD operations for the **MessageAttachment** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more MessageAttachments
     * const messageAttachments = await prisma.messageAttachment.findMany()
     * ```
     */
    get messageAttachment(): Prisma.MessageAttachmentDelegate<ExtArgs>;
    /**
     * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Expenses
     * const expenses = await prisma.expense.findMany()
     * ```
     */
    get expense(): Prisma.ExpenseDelegate<ExtArgs>;
    /**
     * `prisma.expenseShare`: Exposes CRUD operations for the **ExpenseShare** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more ExpenseShares
     * const expenseShares = await prisma.expenseShare.findMany()
     * ```
     */
    get expenseShare(): Prisma.ExpenseShareDelegate<ExtArgs>;
    /**
     * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Payments
     * const payments = await prisma.payment.findMany()
     * ```
     */
    get payment(): Prisma.PaymentDelegate<ExtArgs>;
    /**
     * `prisma.exchangeRates`: Exposes CRUD operations for the **ExchangeRates** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more ExchangeRates
     * const exchangeRates = await prisma.exchangeRates.findMany()
     * ```
     */
    get exchangeRates(): Prisma.ExchangeRatesDelegate<ExtArgs>;
    $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;
    /**
     * Connect with the database
     */
    $connect(): $Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): $Utils.JsPromise<void>;
    /**
     * Add a middleware
     * @deprecated since 4.16.0. For new code, prefer client extensions instead.
     * @see https://pris.ly/d/extensions
     */
    $use(cb: Prisma.Middleware): void;
    /**
     * Executes a prepared raw query and returns the number of affected rows.
     * @example
     * ```
     * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>;
}

export const CurrencyCode: typeof $Enums.CurrencyCode;
export const Role: typeof $Enums.Role;
export const AuthorType: typeof $Enums.AuthorType;
export const MessageAttachmentType: typeof $Enums.MessageAttachmentType;

/**
 * Enums
 */
export namespace $Enums {
    export const CurrencyCode: {
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
        ZAR: 'ZAR'
    };
    export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode];
    export const Role: {
        Owner: 'Owner',
        Admin: 'Admin',
        Member: 'Member'
    };
    export type Role = (typeof Role)[keyof typeof Role];
    export const AuthorType: {
        User: 'User',
        System: 'System'
    };
    export type AuthorType = (typeof AuthorType)[keyof typeof AuthorType];
    export const MessageAttachmentType: {
        Expense: 'Expense'
    };
    export type MessageAttachmentType = (typeof MessageAttachmentType)[keyof typeof MessageAttachmentType];
}

export namespace Prisma {

    export import DMMF = runtime.DMMF


    /**
     * Validator
     */
    export import validator = runtime.Public.validator


    /**
     * Prisma Errors
     */
    export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError

    export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError

    export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError

    export import PrismaClientInitializationError = runtime.PrismaClientInitializationError

    export import PrismaClientValidationError = runtime.PrismaClientValidationError

    export import NotFoundError = runtime.NotFoundError


    /**
     * Re-export of sql-template-tag
     */
    export import sql = runtime.sqltag

    export import empty = runtime.empty

    export import join = runtime.join

    export import raw = runtime.raw

    export import Sql = runtime.Sql




    /**
     * Decimal.js
     */
    export import Decimal = runtime.Decimal


    /**
    * Extensions
    */
    export import Extension = $Extensions.UserArgs

    export import getExtensionContext = runtime.Extensions.getExtensionContext

    export import Args = $Public.Args

    export import Payload = $Public.Payload

    export import Result = $Public.Result

    export import Exact = $Public.Exact


    /**
     * Utility Types
     */


    export import JsonObject = runtime.JsonObject

    export import JsonArray = runtime.JsonArray

    export import JsonValue = runtime.JsonValue

    export import InputJsonObject = runtime.InputJsonObject

    export import InputJsonArray = runtime.InputJsonArray

    export import InputJsonValue = runtime.InputJsonValue

    export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

    /**
     * Types of the values used to represent different kinds of `null` values when working with JSON fields.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    namespace NullTypes {
        /**
         * Type of `Prisma.DbNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class DbNull {
            private DbNull: never;
            private constructor();
        }

        /**
         * Type of `Prisma.JsonNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class JsonNull {
            private JsonNull: never;
            private constructor();
        }

        /**
         * Type of `Prisma.AnyNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class AnyNull {
            private AnyNull: never;
            private constructor();
        }
    }

    export const prismaVersion: PrismaVersion;
    /**
     * Helper for filtering JSON entries that have `null` on the database (empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const DbNull: NullTypes.DbNull;
    /**
     * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const JsonNull: NullTypes.JsonNull;
    /**
     * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const AnyNull: NullTypes.AnyNull;
    export const type: unique symbol;
    export const ModelName: {
        Profile: 'Profile',
        Group: 'Group',
        GroupParticipant: 'GroupParticipant',
        Image: 'Image',
        Message: 'Message',
        MessageAttachment: 'MessageAttachment',
        Expense: 'Expense',
        ExpenseShare: 'ExpenseShare',
        Payment: 'Payment',
        ExchangeRates: 'ExchangeRates'
    };
    export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>;
    /**
     * Enums
     */
    export const TransactionIsolationLevel: {
        ReadUncommitted: 'ReadUncommitted',
        ReadCommitted: 'ReadCommitted',
        RepeatableRead: 'RepeatableRead',
        Serializable: 'Serializable'
    };
    export const ProfileScalarFieldEnum: {
        userId: 'userId',
        email: 'email',
        firstName: 'firstName',
        lastName: 'lastName',
        currency: 'currency',
        avatarId: 'avatarId',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    };
    export const GroupScalarFieldEnum: {
        id: 'id',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        name: 'name',
        currency: 'currency',
        coverImageId: 'coverImageId'
    };
    export const GroupParticipantScalarFieldEnum: {
        id: 'id',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        userId: 'userId',
        groupId: 'groupId',
        role: 'role'
    };
    export const ImageScalarFieldEnum: {
        id: 'id',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        path: 'path',
        bucket: 'bucket',
        uploadedById: 'uploadedById',
        blurhash: 'blurhash'
    };
    export const MessageScalarFieldEnum: {
        id: 'id',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        key: 'key',
        text: 'text',
        authorType: 'authorType',
        authorId: 'authorId',
        groupId: 'groupId'
    };
    export const MessageAttachmentScalarFieldEnum: {
        id: 'id',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        messageId: 'messageId',
        type: 'type',
        expenseId: 'expenseId'
    };
    export const ExpenseScalarFieldEnum: {
        id: 'id',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        ownerId: 'ownerId',
        payerId: 'payerId',
        groupId: 'groupId',
        amount: 'amount',
        currency: 'currency',
        description: 'description',
        conversion: 'conversion'
    };
    export const ExpenseShareScalarFieldEnum: {
        id: 'id',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        userId: 'userId',
        expenseId: 'expenseId',
        amount: 'amount',
        currency: 'currency',
        locked: 'locked',
        conversion: 'conversion'
    };
    export const PaymentScalarFieldEnum: {
        id: 'id',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        groupId: 'groupId',
        amount: 'amount',
        currency: 'currency',
        conversion: 'conversion',
        recipientId: 'recipientId',
        payerId: 'payerId'
    };
    export const ExchangeRatesScalarFieldEnum: {
        id: 'id',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        baseCurrency: 'baseCurrency',
        rates: 'rates'
    };
    export const SortOrder: {
        asc: 'asc',
        desc: 'desc'
    };
    export const NullableJsonNullValueInput: {
        DbNull: typeof DbNull,
        JsonNull: typeof JsonNull
    };
    export const JsonNullValueInput: {
        JsonNull: typeof JsonNull
    };
    export const QueryMode: {
        default: 'default',
        insensitive: 'insensitive'
    };
    export const NullsOrder: {
        first: 'first',
        last: 'last'
    };
    export const JsonNullValueFilter: {
        DbNull: typeof DbNull,
        JsonNull: typeof JsonNull,
        AnyNull: typeof AnyNull
    };
    /**
     * DMMF
     */
    export const dmmf: runtime.BaseDMMF;

    interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
        returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>;
    }

    export interface PrismaClientOptions {
        /**
         * Overwrites the datasource url from your schema.prisma file
         */
        datasources?: Datasources;
        /**
         * Overwrites the datasource url from your schema.prisma file
         */
        datasourceUrl?: string;
        /** @default "colorless" */
        errorFormat?: ErrorFormat;
        /**
         * @example
         * ```
         * // Defaults to stdout
         * log: ['query', 'info', 'warn', 'error']
         *
         * // Emit as events
         * log: [
         *   { emit: 'stdout', level: 'query' },
         *   { emit: 'stdout', level: 'info' },
         *   { emit: 'stdout', level: 'warn' }
         *   { emit: 'stdout', level: 'error' }
         * ]
         * ```
         * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
         */
        log?: (LogLevel | LogDefinition)[];
        /**
         * The default values for transactionOptions
         * maxWait ?= 2000
         * timeout ?= 5000
         */
        transactionOptions?: {
            maxWait?: number
            timeout?: number
            isolationLevel?: Prisma.TransactionIsolationLevel
        };
    }

    export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } };
        /**
         * Fields of the Profile model
         */
        readonly fields: ProfileFieldRefs;
        /**
         * Find zero or one Profile that matches the filter.
         * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
         * @example
         * // Get one Profile
         * const profile = await prisma.profile.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>;
        /**
         * Find one Profile that matches the filter or throw an error with `error.code='P2025'` 
         * if no matches were found.
         * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
         * @example
         * // Get one Profile
         * const profile = await prisma.profile.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>;
        /**
         * Find the first Profile that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
         * @example
         * // Get one Profile
         * const profile = await prisma.profile.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>;
        /**
         * Find the first Profile that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
         * @example
         * // Get one Profile
         * const profile = await prisma.profile.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>;
        /**
         * Find zero or more Profiles that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Profiles
         * const profiles = await prisma.profile.findMany()
         *
         * // Get first 10 Profiles
         * const profiles = await prisma.profile.findMany({ take: 10 })
         *
         * // Only select the `userId`
         * const profileWithUserIdOnly = await prisma.profile.findMany({ select: { userId: true } })
         */
        findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany">>;
        /**
         * Create a Profile.
         * @param {ProfileCreateArgs} args - Arguments to create a Profile.
         * @example
         * // Create one Profile
         * const Profile = await prisma.profile.create({
         *   data: {
         *     // ... data to create a Profile
         *   }
         * })
         */
        create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>;
        /**
         * Create many Profiles.
         * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
         * @example
         * // Create many Profiles
         * const profile = await prisma.profile.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         */
        createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create many Profiles and returns the data saved in the database.
         * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
         * @example
         * // Create many Profiles
         * const profile = await prisma.profile.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Profiles and only return the `userId`
         * const profileWithUserIdOnly = await prisma.profile.createManyAndReturn({ 
         *   select: { userId: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         */
        createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn">>;
        /**
         * Delete a Profile.
         * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
         * @example
         * // Delete one Profile
         * const Profile = await prisma.profile.delete({
         *   where: {
         *     // ... filter to delete one Profile
         *   }
         * })
         */
        delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>;
        /**
         * Update one Profile.
         * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
         * @example
         * // Update one Profile
         * const profile = await prisma.profile.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>;
        /**
         * Delete zero or more Profiles.
         * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
         * @example
         * // Delete a few Profiles
         * const { count } = await prisma.profile.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Update zero or more Profiles.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Profiles
         * const profile = await prisma.profile.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create or update one Profile.
         * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
         * @example
         * // Update or create a Profile
         * const profile = await prisma.profile.upsert({
         *   create: {
         *     // ... data to create a Profile
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Profile we want to update
         *   }
         * })
         */
        upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>;
        /**
         * Count the number of Profiles.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
         * @example
         * // Count the number of Profiles
         * const count = await prisma.profile.count({
         *   where: {
         *     // ... the filter for the Profiles we want to count
         *   }
         * })
         */
        count<T extends ProfileCountArgs>(args?: Subset<T, ProfileCountArgs>): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
            ? T['select'] extends true
            ? number
            : GetScalarType<T['select'], ProfileCountAggregateOutputType>
            : number
        >;
        /**
         * Allows you to perform aggregations operations on a Profile.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         */
        aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>;
        /**
         * Group by Profile.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ProfileGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         */
        groupBy<T extends ProfileGroupByArgs, HasSelectOrTake extends Or<
            Extends<'skip', Keys<T>>,
            Extends<'take', Keys<T>>
        >, OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] }, OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>, ByFields extends MaybeTupleToUnion<T['by']>, ByValid extends Has<ByFields, OrderFields>, HavingFields extends GetHavingFields<T['having']>, HavingValid extends Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? True : False, InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
            ]
        }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]>(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    }

    /**
     * The delegate class that acts as a "Promise-like" for Profile.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        groups<T extends Profile$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupParticipantPayload<ExtArgs>, T, "findMany"> | Null>;
        avatar<T extends Profile$avatarArgs<ExtArgs> = {}>(args?: Subset<T, Profile$avatarArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>;
        messages<T extends Profile$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany"> | Null>;
        expensesOwned<T extends Profile$expensesOwnedArgs<ExtArgs> = {}>(args?: Subset<T, Profile$expensesOwnedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany"> | Null>;
        expensesPaid<T extends Profile$expensesPaidArgs<ExtArgs> = {}>(args?: Subset<T, Profile$expensesPaidArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany"> | Null>;
        expenseShares<T extends Profile$expenseSharesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$expenseSharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "findMany"> | Null>;
        paymentsReceived<T extends Profile$paymentsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, Profile$paymentsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>;
        paymentsPaid<T extends Profile$paymentsPaidArgs<ExtArgs> = {}>(args?: Subset<T, Profile$paymentsPaidArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the Profile model
     */
    interface ProfileFieldRefs {
        readonly userId: FieldRef<"Profile", 'String'>;
        readonly email: FieldRef<"Profile", 'String'>;
        readonly firstName: FieldRef<"Profile", 'String'>;
        readonly lastName: FieldRef<"Profile", 'String'>;
        readonly currency: FieldRef<"Profile", 'CurrencyCode'>;
        readonly avatarId: FieldRef<"Profile", 'String'>;
        readonly createdAt: FieldRef<"Profile", 'DateTime'>;
        readonly updatedAt: FieldRef<"Profile", 'DateTime'>;
    }

    export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } };
        /**
         * Fields of the Group model
         */
        readonly fields: GroupFieldRefs;
        /**
         * Find zero or one Group that matches the filter.
         * @param {GroupFindUniqueArgs} args - Arguments to find a Group
         * @example
         * // Get one Group
         * const group = await prisma.group.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>;
        /**
         * Find one Group that matches the filter or throw an error with `error.code='P2025'` 
         * if no matches were found.
         * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
         * @example
         * // Get one Group
         * const group = await prisma.group.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>;
        /**
         * Find the first Group that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GroupFindFirstArgs} args - Arguments to find a Group
         * @example
         * // Get one Group
         * const group = await prisma.group.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>;
        /**
         * Find the first Group that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
         * @example
         * // Get one Group
         * const group = await prisma.group.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>;
        /**
         * Find zero or more Groups that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Groups
         * const groups = await prisma.group.findMany()
         *
         * // Get first 10 Groups
         * const groups = await prisma.group.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
         */
        findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany">>;
        /**
         * Create a Group.
         * @param {GroupCreateArgs} args - Arguments to create a Group.
         * @example
         * // Create one Group
         * const Group = await prisma.group.create({
         *   data: {
         *     // ... data to create a Group
         *   }
         * })
         */
        create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create">, never, ExtArgs>;
        /**
         * Create many Groups.
         * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
         * @example
         * // Create many Groups
         * const group = await prisma.group.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         */
        createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create many Groups and returns the data saved in the database.
         * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
         * @example
         * // Create many Groups
         * const group = await prisma.group.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Groups and only return the `id`
         * const groupWithIdOnly = await prisma.group.createManyAndReturn({ 
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         */
        createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn">>;
        /**
         * Delete a Group.
         * @param {GroupDeleteArgs} args - Arguments to delete one Group.
         * @example
         * // Delete one Group
         * const Group = await prisma.group.delete({
         *   where: {
         *     // ... filter to delete one Group
         *   }
         * })
         */
        delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete">, never, ExtArgs>;
        /**
         * Update one Group.
         * @param {GroupUpdateArgs} args - Arguments to update one Group.
         * @example
         * // Update one Group
         * const group = await prisma.group.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update">, never, ExtArgs>;
        /**
         * Delete zero or more Groups.
         * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
         * @example
         * // Delete a few Groups
         * const { count } = await prisma.group.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Update zero or more Groups.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Groups
         * const group = await prisma.group.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create or update one Group.
         * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
         * @example
         * // Update or create a Group
         * const group = await prisma.group.upsert({
         *   create: {
         *     // ... data to create a Group
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Group we want to update
         *   }
         * })
         */
        upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert">, never, ExtArgs>;
        /**
         * Count the number of Groups.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GroupCountArgs} args - Arguments to filter Groups to count.
         * @example
         * // Count the number of Groups
         * const count = await prisma.group.count({
         *   where: {
         *     // ... the filter for the Groups we want to count
         *   }
         * })
         */
        count<T extends GroupCountArgs>(args?: Subset<T, GroupCountArgs>): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
            ? T['select'] extends true
            ? number
            : GetScalarType<T['select'], GroupCountAggregateOutputType>
            : number
        >;
        /**
         * Allows you to perform aggregations operations on a Group.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         */
        aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>;
        /**
         * Group by Group.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GroupGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         */
        groupBy<T extends GroupGroupByArgs, HasSelectOrTake extends Or<
            Extends<'skip', Keys<T>>,
            Extends<'take', Keys<T>>
        >, OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] }, OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>, ByFields extends MaybeTupleToUnion<T['by']>, ByValid extends Has<ByFields, OrderFields>, HavingFields extends GetHavingFields<T['having']>, HavingValid extends Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? True : False, InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
            ]
        }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]>(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    }

    /**
     * The delegate class that acts as a "Promise-like" for Group.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        participants<T extends Group$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Group$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupParticipantPayload<ExtArgs>, T, "findMany"> | Null>;
        coverImage<T extends Group$coverImageArgs<ExtArgs> = {}>(args?: Subset<T, Group$coverImageArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>;
        messages<T extends Group$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Group$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany"> | Null>;
        expenses<T extends Group$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Group$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany"> | Null>;
        payments<T extends Group$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Group$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the Group model
     */
    interface GroupFieldRefs {
        readonly id: FieldRef<"Group", 'String'>;
        readonly createdAt: FieldRef<"Group", 'DateTime'>;
        readonly updatedAt: FieldRef<"Group", 'DateTime'>;
        readonly name: FieldRef<"Group", 'String'>;
        readonly currency: FieldRef<"Group", 'CurrencyCode'>;
        readonly coverImageId: FieldRef<"Group", 'String'>;
    }

    export interface GroupParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupParticipant'], meta: { name: 'GroupParticipant' } };
        /**
         * Fields of the GroupParticipant model
         */
        readonly fields: GroupParticipantFieldRefs;
        /**
         * Find zero or one GroupParticipant that matches the filter.
         * @param {GroupParticipantFindUniqueArgs} args - Arguments to find a GroupParticipant
         * @example
         * // Get one GroupParticipant
         * const groupParticipant = await prisma.groupParticipant.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends GroupParticipantFindUniqueArgs>(args: SelectSubset<T, GroupParticipantFindUniqueArgs<ExtArgs>>): Prisma__GroupParticipantClient<$Result.GetResult<Prisma.$GroupParticipantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>;
        /**
         * Find one GroupParticipant that matches the filter or throw an error with `error.code='P2025'` 
         * if no matches were found.
         * @param {GroupParticipantFindUniqueOrThrowArgs} args - Arguments to find a GroupParticipant
         * @example
         * // Get one GroupParticipant
         * const groupParticipant = await prisma.groupParticipant.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends GroupParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupParticipantClient<$Result.GetResult<Prisma.$GroupParticipantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>;
        /**
         * Find the first GroupParticipant that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GroupParticipantFindFirstArgs} args - Arguments to find a GroupParticipant
         * @example
         * // Get one GroupParticipant
         * const groupParticipant = await prisma.groupParticipant.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends GroupParticipantFindFirstArgs>(args?: SelectSubset<T, GroupParticipantFindFirstArgs<ExtArgs>>): Prisma__GroupParticipantClient<$Result.GetResult<Prisma.$GroupParticipantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>;
        /**
         * Find the first GroupParticipant that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GroupParticipantFindFirstOrThrowArgs} args - Arguments to find a GroupParticipant
         * @example
         * // Get one GroupParticipant
         * const groupParticipant = await prisma.groupParticipant.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends GroupParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupParticipantClient<$Result.GetResult<Prisma.$GroupParticipantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>;
        /**
         * Find zero or more GroupParticipants that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GroupParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all GroupParticipants
         * const groupParticipants = await prisma.groupParticipant.findMany()
         *
         * // Get first 10 GroupParticipants
         * const groupParticipants = await prisma.groupParticipant.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const groupParticipantWithIdOnly = await prisma.groupParticipant.findMany({ select: { id: true } })
         */
        findMany<T extends GroupParticipantFindManyArgs>(args?: SelectSubset<T, GroupParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupParticipantPayload<ExtArgs>, T, "findMany">>;
        /**
         * Create a GroupParticipant.
         * @param {GroupParticipantCreateArgs} args - Arguments to create a GroupParticipant.
         * @example
         * // Create one GroupParticipant
         * const GroupParticipant = await prisma.groupParticipant.create({
         *   data: {
         *     // ... data to create a GroupParticipant
         *   }
         * })
         */
        create<T extends GroupParticipantCreateArgs>(args: SelectSubset<T, GroupParticipantCreateArgs<ExtArgs>>): Prisma__GroupParticipantClient<$Result.GetResult<Prisma.$GroupParticipantPayload<ExtArgs>, T, "create">, never, ExtArgs>;
        /**
         * Create many GroupParticipants.
         * @param {GroupParticipantCreateManyArgs} args - Arguments to create many GroupParticipants.
         * @example
         * // Create many GroupParticipants
         * const groupParticipant = await prisma.groupParticipant.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         */
        createMany<T extends GroupParticipantCreateManyArgs>(args?: SelectSubset<T, GroupParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create many GroupParticipants and returns the data saved in the database.
         * @param {GroupParticipantCreateManyAndReturnArgs} args - Arguments to create many GroupParticipants.
         * @example
         * // Create many GroupParticipants
         * const groupParticipant = await prisma.groupParticipant.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many GroupParticipants and only return the `id`
         * const groupParticipantWithIdOnly = await prisma.groupParticipant.createManyAndReturn({ 
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         */
        createManyAndReturn<T extends GroupParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupParticipantPayload<ExtArgs>, T, "createManyAndReturn">>;
        /**
         * Delete a GroupParticipant.
         * @param {GroupParticipantDeleteArgs} args - Arguments to delete one GroupParticipant.
         * @example
         * // Delete one GroupParticipant
         * const GroupParticipant = await prisma.groupParticipant.delete({
         *   where: {
         *     // ... filter to delete one GroupParticipant
         *   }
         * })
         */
        delete<T extends GroupParticipantDeleteArgs>(args: SelectSubset<T, GroupParticipantDeleteArgs<ExtArgs>>): Prisma__GroupParticipantClient<$Result.GetResult<Prisma.$GroupParticipantPayload<ExtArgs>, T, "delete">, never, ExtArgs>;
        /**
         * Update one GroupParticipant.
         * @param {GroupParticipantUpdateArgs} args - Arguments to update one GroupParticipant.
         * @example
         * // Update one GroupParticipant
         * const groupParticipant = await prisma.groupParticipant.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        update<T extends GroupParticipantUpdateArgs>(args: SelectSubset<T, GroupParticipantUpdateArgs<ExtArgs>>): Prisma__GroupParticipantClient<$Result.GetResult<Prisma.$GroupParticipantPayload<ExtArgs>, T, "update">, never, ExtArgs>;
        /**
         * Delete zero or more GroupParticipants.
         * @param {GroupParticipantDeleteManyArgs} args - Arguments to filter GroupParticipants to delete.
         * @example
         * // Delete a few GroupParticipants
         * const { count } = await prisma.groupParticipant.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        deleteMany<T extends GroupParticipantDeleteManyArgs>(args?: SelectSubset<T, GroupParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Update zero or more GroupParticipants.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GroupParticipantUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many GroupParticipants
         * const groupParticipant = await prisma.groupParticipant.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        updateMany<T extends GroupParticipantUpdateManyArgs>(args: SelectSubset<T, GroupParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create or update one GroupParticipant.
         * @param {GroupParticipantUpsertArgs} args - Arguments to update or create a GroupParticipant.
         * @example
         * // Update or create a GroupParticipant
         * const groupParticipant = await prisma.groupParticipant.upsert({
         *   create: {
         *     // ... data to create a GroupParticipant
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the GroupParticipant we want to update
         *   }
         * })
         */
        upsert<T extends GroupParticipantUpsertArgs>(args: SelectSubset<T, GroupParticipantUpsertArgs<ExtArgs>>): Prisma__GroupParticipantClient<$Result.GetResult<Prisma.$GroupParticipantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>;
        /**
         * Count the number of GroupParticipants.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GroupParticipantCountArgs} args - Arguments to filter GroupParticipants to count.
         * @example
         * // Count the number of GroupParticipants
         * const count = await prisma.groupParticipant.count({
         *   where: {
         *     // ... the filter for the GroupParticipants we want to count
         *   }
         * })
         */
        count<T extends GroupParticipantCountArgs>(args?: Subset<T, GroupParticipantCountArgs>): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
            ? T['select'] extends true
            ? number
            : GetScalarType<T['select'], GroupParticipantCountAggregateOutputType>
            : number
        >;
        /**
         * Allows you to perform aggregations operations on a GroupParticipant.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GroupParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         */
        aggregate<T extends GroupParticipantAggregateArgs>(args: Subset<T, GroupParticipantAggregateArgs>): Prisma.PrismaPromise<GetGroupParticipantAggregateType<T>>;
        /**
         * Group by GroupParticipant.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GroupParticipantGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         */
        groupBy<T extends GroupParticipantGroupByArgs, HasSelectOrTake extends Or<
            Extends<'skip', Keys<T>>,
            Extends<'take', Keys<T>>
        >, OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupParticipantGroupByArgs['orderBy'] }
        : { orderBy?: GroupParticipantGroupByArgs['orderBy'] }, OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>, ByFields extends MaybeTupleToUnion<T['by']>, ByValid extends Has<ByFields, OrderFields>, HavingFields extends GetHavingFields<T['having']>, HavingValid extends Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? True : False, InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
            ]
        }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]>(args: SubsetIntersection<T, GroupParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    }

    /**
     * The delegate class that acts as a "Promise-like" for GroupParticipant.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__GroupParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>;
        group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the GroupParticipant model
     */
    interface GroupParticipantFieldRefs {
        readonly id: FieldRef<"GroupParticipant", 'String'>;
        readonly createdAt: FieldRef<"GroupParticipant", 'DateTime'>;
        readonly updatedAt: FieldRef<"GroupParticipant", 'DateTime'>;
        readonly userId: FieldRef<"GroupParticipant", 'String'>;
        readonly groupId: FieldRef<"GroupParticipant", 'String'>;
        readonly role: FieldRef<"GroupParticipant", 'Role'>;
    }

    export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } };
        /**
         * Fields of the Image model
         */
        readonly fields: ImageFieldRefs;
        /**
         * Find zero or one Image that matches the filter.
         * @param {ImageFindUniqueArgs} args - Arguments to find a Image
         * @example
         * // Get one Image
         * const image = await prisma.image.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>;
        /**
         * Find one Image that matches the filter or throw an error with `error.code='P2025'` 
         * if no matches were found.
         * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
         * @example
         * // Get one Image
         * const image = await prisma.image.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>;
        /**
         * Find the first Image that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ImageFindFirstArgs} args - Arguments to find a Image
         * @example
         * // Get one Image
         * const image = await prisma.image.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>;
        /**
         * Find the first Image that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
         * @example
         * // Get one Image
         * const image = await prisma.image.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>;
        /**
         * Find zero or more Images that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Images
         * const images = await prisma.image.findMany()
         *
         * // Get first 10 Images
         * const images = await prisma.image.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
         */
        findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany">>;
        /**
         * Create a Image.
         * @param {ImageCreateArgs} args - Arguments to create a Image.
         * @example
         * // Create one Image
         * const Image = await prisma.image.create({
         *   data: {
         *     // ... data to create a Image
         *   }
         * })
         */
        create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create">, never, ExtArgs>;
        /**
         * Create many Images.
         * @param {ImageCreateManyArgs} args - Arguments to create many Images.
         * @example
         * // Create many Images
         * const image = await prisma.image.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         */
        createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create many Images and returns the data saved in the database.
         * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
         * @example
         * // Create many Images
         * const image = await prisma.image.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Images and only return the `id`
         * const imageWithIdOnly = await prisma.image.createManyAndReturn({ 
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         */
        createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn">>;
        /**
         * Delete a Image.
         * @param {ImageDeleteArgs} args - Arguments to delete one Image.
         * @example
         * // Delete one Image
         * const Image = await prisma.image.delete({
         *   where: {
         *     // ... filter to delete one Image
         *   }
         * })
         */
        delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete">, never, ExtArgs>;
        /**
         * Update one Image.
         * @param {ImageUpdateArgs} args - Arguments to update one Image.
         * @example
         * // Update one Image
         * const image = await prisma.image.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update">, never, ExtArgs>;
        /**
         * Delete zero or more Images.
         * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
         * @example
         * // Delete a few Images
         * const { count } = await prisma.image.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Update zero or more Images.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Images
         * const image = await prisma.image.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create or update one Image.
         * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
         * @example
         * // Update or create a Image
         * const image = await prisma.image.upsert({
         *   create: {
         *     // ... data to create a Image
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Image we want to update
         *   }
         * })
         */
        upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>;
        /**
         * Count the number of Images.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ImageCountArgs} args - Arguments to filter Images to count.
         * @example
         * // Count the number of Images
         * const count = await prisma.image.count({
         *   where: {
         *     // ... the filter for the Images we want to count
         *   }
         * })
         */
        count<T extends ImageCountArgs>(args?: Subset<T, ImageCountArgs>): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
            ? T['select'] extends true
            ? number
            : GetScalarType<T['select'], ImageCountAggregateOutputType>
            : number
        >;
        /**
         * Allows you to perform aggregations operations on a Image.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         */
        aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>;
        /**
         * Group by Image.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ImageGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         */
        groupBy<T extends ImageGroupByArgs, HasSelectOrTake extends Or<
            Extends<'skip', Keys<T>>,
            Extends<'take', Keys<T>>
        >, OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] }, OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>, ByFields extends MaybeTupleToUnion<T['by']>, ByValid extends Has<ByFields, OrderFields>, HavingFields extends GetHavingFields<T['having']>, HavingValid extends Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? True : False, InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
            ]
        }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]>(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    }

    /**
     * The delegate class that acts as a "Promise-like" for Image.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        Group<T extends Image$GroupArgs<ExtArgs> = {}>(args?: Subset<T, Image$GroupArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany"> | Null>;
        Profile<T extends Image$ProfileArgs<ExtArgs> = {}>(args?: Subset<T, Image$ProfileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany"> | Null>;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the Image model
     */
    interface ImageFieldRefs {
        readonly id: FieldRef<"Image", 'String'>;
        readonly createdAt: FieldRef<"Image", 'DateTime'>;
        readonly updatedAt: FieldRef<"Image", 'DateTime'>;
        readonly path: FieldRef<"Image", 'String'>;
        readonly bucket: FieldRef<"Image", 'String'>;
        readonly uploadedById: FieldRef<"Image", 'String'>;
        readonly blurhash: FieldRef<"Image", 'String'>;
    }

    export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } };
        /**
         * Fields of the Message model
         */
        readonly fields: MessageFieldRefs;
        /**
         * Find zero or one Message that matches the filter.
         * @param {MessageFindUniqueArgs} args - Arguments to find a Message
         * @example
         * // Get one Message
         * const message = await prisma.message.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>;
        /**
         * Find one Message that matches the filter or throw an error with `error.code='P2025'` 
         * if no matches were found.
         * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
         * @example
         * // Get one Message
         * const message = await prisma.message.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>;
        /**
         * Find the first Message that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MessageFindFirstArgs} args - Arguments to find a Message
         * @example
         * // Get one Message
         * const message = await prisma.message.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>;
        /**
         * Find the first Message that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
         * @example
         * // Get one Message
         * const message = await prisma.message.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>;
        /**
         * Find zero or more Messages that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Messages
         * const messages = await prisma.message.findMany()
         *
         * // Get first 10 Messages
         * const messages = await prisma.message.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
         */
        findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany">>;
        /**
         * Create a Message.
         * @param {MessageCreateArgs} args - Arguments to create a Message.
         * @example
         * // Create one Message
         * const Message = await prisma.message.create({
         *   data: {
         *     // ... data to create a Message
         *   }
         * })
         */
        create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create">, never, ExtArgs>;
        /**
         * Create many Messages.
         * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
         * @example
         * // Create many Messages
         * const message = await prisma.message.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         */
        createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create many Messages and returns the data saved in the database.
         * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
         * @example
         * // Create many Messages
         * const message = await prisma.message.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Messages and only return the `id`
         * const messageWithIdOnly = await prisma.message.createManyAndReturn({ 
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         */
        createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn">>;
        /**
         * Delete a Message.
         * @param {MessageDeleteArgs} args - Arguments to delete one Message.
         * @example
         * // Delete one Message
         * const Message = await prisma.message.delete({
         *   where: {
         *     // ... filter to delete one Message
         *   }
         * })
         */
        delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>;
        /**
         * Update one Message.
         * @param {MessageUpdateArgs} args - Arguments to update one Message.
         * @example
         * // Update one Message
         * const message = await prisma.message.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update">, never, ExtArgs>;
        /**
         * Delete zero or more Messages.
         * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
         * @example
         * // Delete a few Messages
         * const { count } = await prisma.message.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Update zero or more Messages.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Messages
         * const message = await prisma.message.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create or update one Message.
         * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
         * @example
         * // Update or create a Message
         * const message = await prisma.message.upsert({
         *   create: {
         *     // ... data to create a Message
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Message we want to update
         *   }
         * })
         */
        upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>;
        /**
         * Count the number of Messages.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MessageCountArgs} args - Arguments to filter Messages to count.
         * @example
         * // Count the number of Messages
         * const count = await prisma.message.count({
         *   where: {
         *     // ... the filter for the Messages we want to count
         *   }
         * })
         */
        count<T extends MessageCountArgs>(args?: Subset<T, MessageCountArgs>): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
            ? T['select'] extends true
            ? number
            : GetScalarType<T['select'], MessageCountAggregateOutputType>
            : number
        >;
        /**
         * Allows you to perform aggregations operations on a Message.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         */
        aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>;
        /**
         * Group by Message.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MessageGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         */
        groupBy<T extends MessageGroupByArgs, HasSelectOrTake extends Or<
            Extends<'skip', Keys<T>>,
            Extends<'take', Keys<T>>
        >, OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] }, OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>, ByFields extends MaybeTupleToUnion<T['by']>, ByValid extends Has<ByFields, OrderFields>, HavingFields extends GetHavingFields<T['having']>, HavingValid extends Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? True : False, InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
            ]
        }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]>(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    }

    /**
     * The delegate class that acts as a "Promise-like" for Message.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        author<T extends Message$authorArgs<ExtArgs> = {}>(args?: Subset<T, Message$authorArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>;
        group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>;
        attachments<T extends Message$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Message$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "findMany"> | Null>;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the Message model
     */
    interface MessageFieldRefs {
        readonly id: FieldRef<"Message", 'String'>;
        readonly createdAt: FieldRef<"Message", 'DateTime'>;
        readonly updatedAt: FieldRef<"Message", 'DateTime'>;
        readonly key: FieldRef<"Message", 'String'>;
        readonly text: FieldRef<"Message", 'String'>;
        readonly authorType: FieldRef<"Message", 'AuthorType'>;
        readonly authorId: FieldRef<"Message", 'String'>;
        readonly groupId: FieldRef<"Message", 'String'>;
    }

    export interface MessageAttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageAttachment'], meta: { name: 'MessageAttachment' } };
        /**
         * Fields of the MessageAttachment model
         */
        readonly fields: MessageAttachmentFieldRefs;
        /**
         * Find zero or one MessageAttachment that matches the filter.
         * @param {MessageAttachmentFindUniqueArgs} args - Arguments to find a MessageAttachment
         * @example
         * // Get one MessageAttachment
         * const messageAttachment = await prisma.messageAttachment.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends MessageAttachmentFindUniqueArgs>(args: SelectSubset<T, MessageAttachmentFindUniqueArgs<ExtArgs>>): Prisma__MessageAttachmentClient<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>;
        /**
         * Find one MessageAttachment that matches the filter or throw an error with `error.code='P2025'` 
         * if no matches were found.
         * @param {MessageAttachmentFindUniqueOrThrowArgs} args - Arguments to find a MessageAttachment
         * @example
         * // Get one MessageAttachment
         * const messageAttachment = await prisma.messageAttachment.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends MessageAttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageAttachmentClient<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>;
        /**
         * Find the first MessageAttachment that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MessageAttachmentFindFirstArgs} args - Arguments to find a MessageAttachment
         * @example
         * // Get one MessageAttachment
         * const messageAttachment = await prisma.messageAttachment.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends MessageAttachmentFindFirstArgs>(args?: SelectSubset<T, MessageAttachmentFindFirstArgs<ExtArgs>>): Prisma__MessageAttachmentClient<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>;
        /**
         * Find the first MessageAttachment that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MessageAttachmentFindFirstOrThrowArgs} args - Arguments to find a MessageAttachment
         * @example
         * // Get one MessageAttachment
         * const messageAttachment = await prisma.messageAttachment.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends MessageAttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageAttachmentClient<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>;
        /**
         * Find zero or more MessageAttachments that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MessageAttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all MessageAttachments
         * const messageAttachments = await prisma.messageAttachment.findMany()
         *
         * // Get first 10 MessageAttachments
         * const messageAttachments = await prisma.messageAttachment.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const messageAttachmentWithIdOnly = await prisma.messageAttachment.findMany({ select: { id: true } })
         */
        findMany<T extends MessageAttachmentFindManyArgs>(args?: SelectSubset<T, MessageAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "findMany">>;
        /**
         * Create a MessageAttachment.
         * @param {MessageAttachmentCreateArgs} args - Arguments to create a MessageAttachment.
         * @example
         * // Create one MessageAttachment
         * const MessageAttachment = await prisma.messageAttachment.create({
         *   data: {
         *     // ... data to create a MessageAttachment
         *   }
         * })
         */
        create<T extends MessageAttachmentCreateArgs>(args: SelectSubset<T, MessageAttachmentCreateArgs<ExtArgs>>): Prisma__MessageAttachmentClient<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "create">, never, ExtArgs>;
        /**
         * Create many MessageAttachments.
         * @param {MessageAttachmentCreateManyArgs} args - Arguments to create many MessageAttachments.
         * @example
         * // Create many MessageAttachments
         * const messageAttachment = await prisma.messageAttachment.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         */
        createMany<T extends MessageAttachmentCreateManyArgs>(args?: SelectSubset<T, MessageAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create many MessageAttachments and returns the data saved in the database.
         * @param {MessageAttachmentCreateManyAndReturnArgs} args - Arguments to create many MessageAttachments.
         * @example
         * // Create many MessageAttachments
         * const messageAttachment = await prisma.messageAttachment.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many MessageAttachments and only return the `id`
         * const messageAttachmentWithIdOnly = await prisma.messageAttachment.createManyAndReturn({ 
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         */
        createManyAndReturn<T extends MessageAttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageAttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "createManyAndReturn">>;
        /**
         * Delete a MessageAttachment.
         * @param {MessageAttachmentDeleteArgs} args - Arguments to delete one MessageAttachment.
         * @example
         * // Delete one MessageAttachment
         * const MessageAttachment = await prisma.messageAttachment.delete({
         *   where: {
         *     // ... filter to delete one MessageAttachment
         *   }
         * })
         */
        delete<T extends MessageAttachmentDeleteArgs>(args: SelectSubset<T, MessageAttachmentDeleteArgs<ExtArgs>>): Prisma__MessageAttachmentClient<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>;
        /**
         * Update one MessageAttachment.
         * @param {MessageAttachmentUpdateArgs} args - Arguments to update one MessageAttachment.
         * @example
         * // Update one MessageAttachment
         * const messageAttachment = await prisma.messageAttachment.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        update<T extends MessageAttachmentUpdateArgs>(args: SelectSubset<T, MessageAttachmentUpdateArgs<ExtArgs>>): Prisma__MessageAttachmentClient<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "update">, never, ExtArgs>;
        /**
         * Delete zero or more MessageAttachments.
         * @param {MessageAttachmentDeleteManyArgs} args - Arguments to filter MessageAttachments to delete.
         * @example
         * // Delete a few MessageAttachments
         * const { count } = await prisma.messageAttachment.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        deleteMany<T extends MessageAttachmentDeleteManyArgs>(args?: SelectSubset<T, MessageAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Update zero or more MessageAttachments.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MessageAttachmentUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many MessageAttachments
         * const messageAttachment = await prisma.messageAttachment.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        updateMany<T extends MessageAttachmentUpdateManyArgs>(args: SelectSubset<T, MessageAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create or update one MessageAttachment.
         * @param {MessageAttachmentUpsertArgs} args - Arguments to update or create a MessageAttachment.
         * @example
         * // Update or create a MessageAttachment
         * const messageAttachment = await prisma.messageAttachment.upsert({
         *   create: {
         *     // ... data to create a MessageAttachment
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the MessageAttachment we want to update
         *   }
         * })
         */
        upsert<T extends MessageAttachmentUpsertArgs>(args: SelectSubset<T, MessageAttachmentUpsertArgs<ExtArgs>>): Prisma__MessageAttachmentClient<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>;
        /**
         * Count the number of MessageAttachments.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MessageAttachmentCountArgs} args - Arguments to filter MessageAttachments to count.
         * @example
         * // Count the number of MessageAttachments
         * const count = await prisma.messageAttachment.count({
         *   where: {
         *     // ... the filter for the MessageAttachments we want to count
         *   }
         * })
         */
        count<T extends MessageAttachmentCountArgs>(args?: Subset<T, MessageAttachmentCountArgs>): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
            ? T['select'] extends true
            ? number
            : GetScalarType<T['select'], MessageAttachmentCountAggregateOutputType>
            : number
        >;
        /**
         * Allows you to perform aggregations operations on a MessageAttachment.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MessageAttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         */
        aggregate<T extends MessageAttachmentAggregateArgs>(args: Subset<T, MessageAttachmentAggregateArgs>): Prisma.PrismaPromise<GetMessageAttachmentAggregateType<T>>;
        /**
         * Group by MessageAttachment.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MessageAttachmentGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         */
        groupBy<T extends MessageAttachmentGroupByArgs, HasSelectOrTake extends Or<
            Extends<'skip', Keys<T>>,
            Extends<'take', Keys<T>>
        >, OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageAttachmentGroupByArgs['orderBy'] }
        : { orderBy?: MessageAttachmentGroupByArgs['orderBy'] }, OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>, ByFields extends MaybeTupleToUnion<T['by']>, ByValid extends Has<ByFields, OrderFields>, HavingFields extends GetHavingFields<T['having']>, HavingValid extends Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? True : False, InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
            ]
        }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]>(args: SubsetIntersection<T, MessageAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    }

    /**
     * The delegate class that acts as a "Promise-like" for MessageAttachment.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__MessageAttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>;
        expense<T extends MessageAttachment$expenseArgs<ExtArgs> = {}>(args?: Subset<T, MessageAttachment$expenseArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the MessageAttachment model
     */
    interface MessageAttachmentFieldRefs {
        readonly id: FieldRef<"MessageAttachment", 'String'>;
        readonly createdAt: FieldRef<"MessageAttachment", 'DateTime'>;
        readonly updatedAt: FieldRef<"MessageAttachment", 'DateTime'>;
        readonly messageId: FieldRef<"MessageAttachment", 'String'>;
        readonly type: FieldRef<"MessageAttachment", 'MessageAttachmentType'>;
        readonly expenseId: FieldRef<"MessageAttachment", 'String'>;
    }

    export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } };
        /**
         * Fields of the Expense model
         */
        readonly fields: ExpenseFieldRefs;
        /**
         * Find zero or one Expense that matches the filter.
         * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
         * @example
         * // Get one Expense
         * const expense = await prisma.expense.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>;
        /**
         * Find one Expense that matches the filter or throw an error with `error.code='P2025'` 
         * if no matches were found.
         * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
         * @example
         * // Get one Expense
         * const expense = await prisma.expense.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>;
        /**
         * Find the first Expense that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
         * @example
         * // Get one Expense
         * const expense = await prisma.expense.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>;
        /**
         * Find the first Expense that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
         * @example
         * // Get one Expense
         * const expense = await prisma.expense.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>;
        /**
         * Find zero or more Expenses that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Expenses
         * const expenses = await prisma.expense.findMany()
         *
         * // Get first 10 Expenses
         * const expenses = await prisma.expense.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
         */
        findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany">>;
        /**
         * Create a Expense.
         * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
         * @example
         * // Create one Expense
         * const Expense = await prisma.expense.create({
         *   data: {
         *     // ... data to create a Expense
         *   }
         * })
         */
        create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create">, never, ExtArgs>;
        /**
         * Create many Expenses.
         * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
         * @example
         * // Create many Expenses
         * const expense = await prisma.expense.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         */
        createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create many Expenses and returns the data saved in the database.
         * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
         * @example
         * // Create many Expenses
         * const expense = await prisma.expense.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Expenses and only return the `id`
         * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({ 
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         */
        createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn">>;
        /**
         * Delete a Expense.
         * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
         * @example
         * // Delete one Expense
         * const Expense = await prisma.expense.delete({
         *   where: {
         *     // ... filter to delete one Expense
         *   }
         * })
         */
        delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete">, never, ExtArgs>;
        /**
         * Update one Expense.
         * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
         * @example
         * // Update one Expense
         * const expense = await prisma.expense.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update">, never, ExtArgs>;
        /**
         * Delete zero or more Expenses.
         * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
         * @example
         * // Delete a few Expenses
         * const { count } = await prisma.expense.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Update zero or more Expenses.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Expenses
         * const expense = await prisma.expense.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create or update one Expense.
         * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
         * @example
         * // Update or create a Expense
         * const expense = await prisma.expense.upsert({
         *   create: {
         *     // ... data to create a Expense
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Expense we want to update
         *   }
         * })
         */
        upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert">, never, ExtArgs>;
        /**
         * Count the number of Expenses.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
         * @example
         * // Count the number of Expenses
         * const count = await prisma.expense.count({
         *   where: {
         *     // ... the filter for the Expenses we want to count
         *   }
         * })
         */
        count<T extends ExpenseCountArgs>(args?: Subset<T, ExpenseCountArgs>): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
            ? T['select'] extends true
            ? number
            : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
            : number
        >;
        /**
         * Allows you to perform aggregations operations on a Expense.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         */
        aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>;
        /**
         * Group by Expense.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExpenseGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         */
        groupBy<T extends ExpenseGroupByArgs, HasSelectOrTake extends Or<
            Extends<'skip', Keys<T>>,
            Extends<'take', Keys<T>>
        >, OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] }, OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>, ByFields extends MaybeTupleToUnion<T['by']>, ByValid extends Has<ByFields, OrderFields>, HavingFields extends GetHavingFields<T['having']>, HavingValid extends Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? True : False, InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
            ]
        }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]>(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    }

    /**
     * The delegate class that acts as a "Promise-like" for Expense.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        owner<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>;
        payer<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>;
        group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>;
        shares<T extends Expense$sharesArgs<ExtArgs> = {}>(args?: Subset<T, Expense$sharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "findMany"> | Null>;
        messageAttachments<T extends Expense$messageAttachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Expense$messageAttachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageAttachmentPayload<ExtArgs>, T, "findMany"> | Null>;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the Expense model
     */
    interface ExpenseFieldRefs {
        readonly id: FieldRef<"Expense", 'String'>;
        readonly createdAt: FieldRef<"Expense", 'DateTime'>;
        readonly updatedAt: FieldRef<"Expense", 'DateTime'>;
        readonly ownerId: FieldRef<"Expense", 'String'>;
        readonly payerId: FieldRef<"Expense", 'String'>;
        readonly groupId: FieldRef<"Expense", 'String'>;
        readonly amount: FieldRef<"Expense", 'Int'>;
        readonly currency: FieldRef<"Expense", 'CurrencyCode'>;
        readonly description: FieldRef<"Expense", 'String'>;
        readonly conversion: FieldRef<"Expense", 'Json'>;
    }

    export interface ExpenseShareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpenseShare'], meta: { name: 'ExpenseShare' } };
        /**
         * Fields of the ExpenseShare model
         */
        readonly fields: ExpenseShareFieldRefs;
        /**
         * Find zero or one ExpenseShare that matches the filter.
         * @param {ExpenseShareFindUniqueArgs} args - Arguments to find a ExpenseShare
         * @example
         * // Get one ExpenseShare
         * const expenseShare = await prisma.expenseShare.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends ExpenseShareFindUniqueArgs>(args: SelectSubset<T, ExpenseShareFindUniqueArgs<ExtArgs>>): Prisma__ExpenseShareClient<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>;
        /**
         * Find one ExpenseShare that matches the filter or throw an error with `error.code='P2025'` 
         * if no matches were found.
         * @param {ExpenseShareFindUniqueOrThrowArgs} args - Arguments to find a ExpenseShare
         * @example
         * // Get one ExpenseShare
         * const expenseShare = await prisma.expenseShare.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends ExpenseShareFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseShareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseShareClient<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>;
        /**
         * Find the first ExpenseShare that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExpenseShareFindFirstArgs} args - Arguments to find a ExpenseShare
         * @example
         * // Get one ExpenseShare
         * const expenseShare = await prisma.expenseShare.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends ExpenseShareFindFirstArgs>(args?: SelectSubset<T, ExpenseShareFindFirstArgs<ExtArgs>>): Prisma__ExpenseShareClient<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>;
        /**
         * Find the first ExpenseShare that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExpenseShareFindFirstOrThrowArgs} args - Arguments to find a ExpenseShare
         * @example
         * // Get one ExpenseShare
         * const expenseShare = await prisma.expenseShare.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends ExpenseShareFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseShareFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseShareClient<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>;
        /**
         * Find zero or more ExpenseShares that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExpenseShareFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all ExpenseShares
         * const expenseShares = await prisma.expenseShare.findMany()
         *
         * // Get first 10 ExpenseShares
         * const expenseShares = await prisma.expenseShare.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const expenseShareWithIdOnly = await prisma.expenseShare.findMany({ select: { id: true } })
         */
        findMany<T extends ExpenseShareFindManyArgs>(args?: SelectSubset<T, ExpenseShareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "findMany">>;
        /**
         * Create a ExpenseShare.
         * @param {ExpenseShareCreateArgs} args - Arguments to create a ExpenseShare.
         * @example
         * // Create one ExpenseShare
         * const ExpenseShare = await prisma.expenseShare.create({
         *   data: {
         *     // ... data to create a ExpenseShare
         *   }
         * })
         */
        create<T extends ExpenseShareCreateArgs>(args: SelectSubset<T, ExpenseShareCreateArgs<ExtArgs>>): Prisma__ExpenseShareClient<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "create">, never, ExtArgs>;
        /**
         * Create many ExpenseShares.
         * @param {ExpenseShareCreateManyArgs} args - Arguments to create many ExpenseShares.
         * @example
         * // Create many ExpenseShares
         * const expenseShare = await prisma.expenseShare.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         */
        createMany<T extends ExpenseShareCreateManyArgs>(args?: SelectSubset<T, ExpenseShareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create many ExpenseShares and returns the data saved in the database.
         * @param {ExpenseShareCreateManyAndReturnArgs} args - Arguments to create many ExpenseShares.
         * @example
         * // Create many ExpenseShares
         * const expenseShare = await prisma.expenseShare.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many ExpenseShares and only return the `id`
         * const expenseShareWithIdOnly = await prisma.expenseShare.createManyAndReturn({ 
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         */
        createManyAndReturn<T extends ExpenseShareCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseShareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "createManyAndReturn">>;
        /**
         * Delete a ExpenseShare.
         * @param {ExpenseShareDeleteArgs} args - Arguments to delete one ExpenseShare.
         * @example
         * // Delete one ExpenseShare
         * const ExpenseShare = await prisma.expenseShare.delete({
         *   where: {
         *     // ... filter to delete one ExpenseShare
         *   }
         * })
         */
        delete<T extends ExpenseShareDeleteArgs>(args: SelectSubset<T, ExpenseShareDeleteArgs<ExtArgs>>): Prisma__ExpenseShareClient<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "delete">, never, ExtArgs>;
        /**
         * Update one ExpenseShare.
         * @param {ExpenseShareUpdateArgs} args - Arguments to update one ExpenseShare.
         * @example
         * // Update one ExpenseShare
         * const expenseShare = await prisma.expenseShare.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        update<T extends ExpenseShareUpdateArgs>(args: SelectSubset<T, ExpenseShareUpdateArgs<ExtArgs>>): Prisma__ExpenseShareClient<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "update">, never, ExtArgs>;
        /**
         * Delete zero or more ExpenseShares.
         * @param {ExpenseShareDeleteManyArgs} args - Arguments to filter ExpenseShares to delete.
         * @example
         * // Delete a few ExpenseShares
         * const { count } = await prisma.expenseShare.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        deleteMany<T extends ExpenseShareDeleteManyArgs>(args?: SelectSubset<T, ExpenseShareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Update zero or more ExpenseShares.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExpenseShareUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many ExpenseShares
         * const expenseShare = await prisma.expenseShare.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        updateMany<T extends ExpenseShareUpdateManyArgs>(args: SelectSubset<T, ExpenseShareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create or update one ExpenseShare.
         * @param {ExpenseShareUpsertArgs} args - Arguments to update or create a ExpenseShare.
         * @example
         * // Update or create a ExpenseShare
         * const expenseShare = await prisma.expenseShare.upsert({
         *   create: {
         *     // ... data to create a ExpenseShare
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the ExpenseShare we want to update
         *   }
         * })
         */
        upsert<T extends ExpenseShareUpsertArgs>(args: SelectSubset<T, ExpenseShareUpsertArgs<ExtArgs>>): Prisma__ExpenseShareClient<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "upsert">, never, ExtArgs>;
        /**
         * Count the number of ExpenseShares.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExpenseShareCountArgs} args - Arguments to filter ExpenseShares to count.
         * @example
         * // Count the number of ExpenseShares
         * const count = await prisma.expenseShare.count({
         *   where: {
         *     // ... the filter for the ExpenseShares we want to count
         *   }
         * })
         */
        count<T extends ExpenseShareCountArgs>(args?: Subset<T, ExpenseShareCountArgs>): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
            ? T['select'] extends true
            ? number
            : GetScalarType<T['select'], ExpenseShareCountAggregateOutputType>
            : number
        >;
        /**
         * Allows you to perform aggregations operations on a ExpenseShare.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExpenseShareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         */
        aggregate<T extends ExpenseShareAggregateArgs>(args: Subset<T, ExpenseShareAggregateArgs>): Prisma.PrismaPromise<GetExpenseShareAggregateType<T>>;
        /**
         * Group by ExpenseShare.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExpenseShareGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         */
        groupBy<T extends ExpenseShareGroupByArgs, HasSelectOrTake extends Or<
            Extends<'skip', Keys<T>>,
            Extends<'take', Keys<T>>
        >, OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseShareGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseShareGroupByArgs['orderBy'] }, OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>, ByFields extends MaybeTupleToUnion<T['by']>, ByValid extends Has<ByFields, OrderFields>, HavingFields extends GetHavingFields<T['having']>, HavingValid extends Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? True : False, InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
            ]
        }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]>(args: SubsetIntersection<T, ExpenseShareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseShareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    }

    /**
     * The delegate class that acts as a "Promise-like" for ExpenseShare.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__ExpenseShareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>;
        expense<T extends ExpenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseDefaultArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the ExpenseShare model
     */
    interface ExpenseShareFieldRefs {
        readonly id: FieldRef<"ExpenseShare", 'String'>;
        readonly createdAt: FieldRef<"ExpenseShare", 'DateTime'>;
        readonly updatedAt: FieldRef<"ExpenseShare", 'DateTime'>;
        readonly userId: FieldRef<"ExpenseShare", 'String'>;
        readonly expenseId: FieldRef<"ExpenseShare", 'String'>;
        readonly amount: FieldRef<"ExpenseShare", 'Int'>;
        readonly currency: FieldRef<"ExpenseShare", 'CurrencyCode'>;
        readonly locked: FieldRef<"ExpenseShare", 'Boolean'>;
        readonly conversion: FieldRef<"ExpenseShare", 'Json'>;
    }

    export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } };
        /**
         * Fields of the Payment model
         */
        readonly fields: PaymentFieldRefs;
        /**
         * Find zero or one Payment that matches the filter.
         * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
         * @example
         * // Get one Payment
         * const payment = await prisma.payment.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>;
        /**
         * Find one Payment that matches the filter or throw an error with `error.code='P2025'` 
         * if no matches were found.
         * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
         * @example
         * // Get one Payment
         * const payment = await prisma.payment.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>;
        /**
         * Find the first Payment that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
         * @example
         * // Get one Payment
         * const payment = await prisma.payment.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>;
        /**
         * Find the first Payment that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
         * @example
         * // Get one Payment
         * const payment = await prisma.payment.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>;
        /**
         * Find zero or more Payments that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Payments
         * const payments = await prisma.payment.findMany()
         *
         * // Get first 10 Payments
         * const payments = await prisma.payment.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
         */
        findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany">>;
        /**
         * Create a Payment.
         * @param {PaymentCreateArgs} args - Arguments to create a Payment.
         * @example
         * // Create one Payment
         * const Payment = await prisma.payment.create({
         *   data: {
         *     // ... data to create a Payment
         *   }
         * })
         */
        create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>;
        /**
         * Create many Payments.
         * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
         * @example
         * // Create many Payments
         * const payment = await prisma.payment.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         */
        createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create many Payments and returns the data saved in the database.
         * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
         * @example
         * // Create many Payments
         * const payment = await prisma.payment.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Payments and only return the `id`
         * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({ 
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         */
        createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn">>;
        /**
         * Delete a Payment.
         * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
         * @example
         * // Delete one Payment
         * const Payment = await prisma.payment.delete({
         *   where: {
         *     // ... filter to delete one Payment
         *   }
         * })
         */
        delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>;
        /**
         * Update one Payment.
         * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
         * @example
         * // Update one Payment
         * const payment = await prisma.payment.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>;
        /**
         * Delete zero or more Payments.
         * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
         * @example
         * // Delete a few Payments
         * const { count } = await prisma.payment.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Update zero or more Payments.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Payments
         * const payment = await prisma.payment.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create or update one Payment.
         * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
         * @example
         * // Update or create a Payment
         * const payment = await prisma.payment.upsert({
         *   create: {
         *     // ... data to create a Payment
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Payment we want to update
         *   }
         * })
         */
        upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>;
        /**
         * Count the number of Payments.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
         * @example
         * // Count the number of Payments
         * const count = await prisma.payment.count({
         *   where: {
         *     // ... the filter for the Payments we want to count
         *   }
         * })
         */
        count<T extends PaymentCountArgs>(args?: Subset<T, PaymentCountArgs>): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
            ? T['select'] extends true
            ? number
            : GetScalarType<T['select'], PaymentCountAggregateOutputType>
            : number
        >;
        /**
         * Allows you to perform aggregations operations on a Payment.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         */
        aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>;
        /**
         * Group by Payment.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PaymentGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         */
        groupBy<T extends PaymentGroupByArgs, HasSelectOrTake extends Or<
            Extends<'skip', Keys<T>>,
            Extends<'take', Keys<T>>
        >, OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] }, OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>, ByFields extends MaybeTupleToUnion<T['by']>, ByValid extends Has<ByFields, OrderFields>, HavingFields extends GetHavingFields<T['having']>, HavingValid extends Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? True : False, InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
            ]
        }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]>(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    }

    /**
     * The delegate class that acts as a "Promise-like" for Payment.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>;
        recipient<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>;
        payer<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the Payment model
     */
    interface PaymentFieldRefs {
        readonly id: FieldRef<"Payment", 'String'>;
        readonly createdAt: FieldRef<"Payment", 'DateTime'>;
        readonly updatedAt: FieldRef<"Payment", 'DateTime'>;
        readonly groupId: FieldRef<"Payment", 'String'>;
        readonly amount: FieldRef<"Payment", 'Int'>;
        readonly currency: FieldRef<"Payment", 'CurrencyCode'>;
        readonly conversion: FieldRef<"Payment", 'Json'>;
        readonly recipientId: FieldRef<"Payment", 'String'>;
        readonly payerId: FieldRef<"Payment", 'String'>;
    }

    export interface ExchangeRatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExchangeRates'], meta: { name: 'ExchangeRates' } };
        /**
         * Fields of the ExchangeRates model
         */
        readonly fields: ExchangeRatesFieldRefs;
        /**
         * Find zero or one ExchangeRates that matches the filter.
         * @param {ExchangeRatesFindUniqueArgs} args - Arguments to find a ExchangeRates
         * @example
         * // Get one ExchangeRates
         * const exchangeRates = await prisma.exchangeRates.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends ExchangeRatesFindUniqueArgs>(args: SelectSubset<T, ExchangeRatesFindUniqueArgs<ExtArgs>>): Prisma__ExchangeRatesClient<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>;
        /**
         * Find one ExchangeRates that matches the filter or throw an error with `error.code='P2025'` 
         * if no matches were found.
         * @param {ExchangeRatesFindUniqueOrThrowArgs} args - Arguments to find a ExchangeRates
         * @example
         * // Get one ExchangeRates
         * const exchangeRates = await prisma.exchangeRates.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends ExchangeRatesFindUniqueOrThrowArgs>(args: SelectSubset<T, ExchangeRatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExchangeRatesClient<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>;
        /**
         * Find the first ExchangeRates that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExchangeRatesFindFirstArgs} args - Arguments to find a ExchangeRates
         * @example
         * // Get one ExchangeRates
         * const exchangeRates = await prisma.exchangeRates.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends ExchangeRatesFindFirstArgs>(args?: SelectSubset<T, ExchangeRatesFindFirstArgs<ExtArgs>>): Prisma__ExchangeRatesClient<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>;
        /**
         * Find the first ExchangeRates that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExchangeRatesFindFirstOrThrowArgs} args - Arguments to find a ExchangeRates
         * @example
         * // Get one ExchangeRates
         * const exchangeRates = await prisma.exchangeRates.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends ExchangeRatesFindFirstOrThrowArgs>(args?: SelectSubset<T, ExchangeRatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExchangeRatesClient<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>;
        /**
         * Find zero or more ExchangeRates that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExchangeRatesFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all ExchangeRates
         * const exchangeRates = await prisma.exchangeRates.findMany()
         *
         * // Get first 10 ExchangeRates
         * const exchangeRates = await prisma.exchangeRates.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const exchangeRatesWithIdOnly = await prisma.exchangeRates.findMany({ select: { id: true } })
         */
        findMany<T extends ExchangeRatesFindManyArgs>(args?: SelectSubset<T, ExchangeRatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "findMany">>;
        /**
         * Create a ExchangeRates.
         * @param {ExchangeRatesCreateArgs} args - Arguments to create a ExchangeRates.
         * @example
         * // Create one ExchangeRates
         * const ExchangeRates = await prisma.exchangeRates.create({
         *   data: {
         *     // ... data to create a ExchangeRates
         *   }
         * })
         */
        create<T extends ExchangeRatesCreateArgs>(args: SelectSubset<T, ExchangeRatesCreateArgs<ExtArgs>>): Prisma__ExchangeRatesClient<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "create">, never, ExtArgs>;
        /**
         * Create many ExchangeRates.
         * @param {ExchangeRatesCreateManyArgs} args - Arguments to create many ExchangeRates.
         * @example
         * // Create many ExchangeRates
         * const exchangeRates = await prisma.exchangeRates.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         */
        createMany<T extends ExchangeRatesCreateManyArgs>(args?: SelectSubset<T, ExchangeRatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create many ExchangeRates and returns the data saved in the database.
         * @param {ExchangeRatesCreateManyAndReturnArgs} args - Arguments to create many ExchangeRates.
         * @example
         * // Create many ExchangeRates
         * const exchangeRates = await prisma.exchangeRates.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many ExchangeRates and only return the `id`
         * const exchangeRatesWithIdOnly = await prisma.exchangeRates.createManyAndReturn({ 
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         */
        createManyAndReturn<T extends ExchangeRatesCreateManyAndReturnArgs>(args?: SelectSubset<T, ExchangeRatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "createManyAndReturn">>;
        /**
         * Delete a ExchangeRates.
         * @param {ExchangeRatesDeleteArgs} args - Arguments to delete one ExchangeRates.
         * @example
         * // Delete one ExchangeRates
         * const ExchangeRates = await prisma.exchangeRates.delete({
         *   where: {
         *     // ... filter to delete one ExchangeRates
         *   }
         * })
         */
        delete<T extends ExchangeRatesDeleteArgs>(args: SelectSubset<T, ExchangeRatesDeleteArgs<ExtArgs>>): Prisma__ExchangeRatesClient<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "delete">, never, ExtArgs>;
        /**
         * Update one ExchangeRates.
         * @param {ExchangeRatesUpdateArgs} args - Arguments to update one ExchangeRates.
         * @example
         * // Update one ExchangeRates
         * const exchangeRates = await prisma.exchangeRates.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        update<T extends ExchangeRatesUpdateArgs>(args: SelectSubset<T, ExchangeRatesUpdateArgs<ExtArgs>>): Prisma__ExchangeRatesClient<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "update">, never, ExtArgs>;
        /**
         * Delete zero or more ExchangeRates.
         * @param {ExchangeRatesDeleteManyArgs} args - Arguments to filter ExchangeRates to delete.
         * @example
         * // Delete a few ExchangeRates
         * const { count } = await prisma.exchangeRates.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        deleteMany<T extends ExchangeRatesDeleteManyArgs>(args?: SelectSubset<T, ExchangeRatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Update zero or more ExchangeRates.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExchangeRatesUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many ExchangeRates
         * const exchangeRates = await prisma.exchangeRates.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         */
        updateMany<T extends ExchangeRatesUpdateManyArgs>(args: SelectSubset<T, ExchangeRatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>;
        /**
         * Create or update one ExchangeRates.
         * @param {ExchangeRatesUpsertArgs} args - Arguments to update or create a ExchangeRates.
         * @example
         * // Update or create a ExchangeRates
         * const exchangeRates = await prisma.exchangeRates.upsert({
         *   create: {
         *     // ... data to create a ExchangeRates
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the ExchangeRates we want to update
         *   }
         * })
         */
        upsert<T extends ExchangeRatesUpsertArgs>(args: SelectSubset<T, ExchangeRatesUpsertArgs<ExtArgs>>): Prisma__ExchangeRatesClient<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>;
        /**
         * Count the number of ExchangeRates.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExchangeRatesCountArgs} args - Arguments to filter ExchangeRates to count.
         * @example
         * // Count the number of ExchangeRates
         * const count = await prisma.exchangeRates.count({
         *   where: {
         *     // ... the filter for the ExchangeRates we want to count
         *   }
         * })
         */
        count<T extends ExchangeRatesCountArgs>(args?: Subset<T, ExchangeRatesCountArgs>): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
            ? T['select'] extends true
            ? number
            : GetScalarType<T['select'], ExchangeRatesCountAggregateOutputType>
            : number
        >;
        /**
         * Allows you to perform aggregations operations on a ExchangeRates.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExchangeRatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         */
        aggregate<T extends ExchangeRatesAggregateArgs>(args: Subset<T, ExchangeRatesAggregateArgs>): Prisma.PrismaPromise<GetExchangeRatesAggregateType<T>>;
        /**
         * Group by ExchangeRates.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ExchangeRatesGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         */
        groupBy<T extends ExchangeRatesGroupByArgs, HasSelectOrTake extends Or<
            Extends<'skip', Keys<T>>,
            Extends<'take', Keys<T>>
        >, OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExchangeRatesGroupByArgs['orderBy'] }
        : { orderBy?: ExchangeRatesGroupByArgs['orderBy'] }, OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>, ByFields extends MaybeTupleToUnion<T['by']>, ByValid extends Has<ByFields, OrderFields>, HavingFields extends GetHavingFields<T['having']>, HavingValid extends Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? True : False, InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
            ]
        }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
        ? ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]>(args: SubsetIntersection<T, ExchangeRatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExchangeRatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    }

    /**
     * The delegate class that acts as a "Promise-like" for ExchangeRates.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__ExchangeRatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the ExchangeRates model
     */
    interface ExchangeRatesFieldRefs {
        readonly id: FieldRef<"ExchangeRates", 'String'>;
        readonly createdAt: FieldRef<"ExchangeRates", 'DateTime'>;
        readonly updatedAt: FieldRef<"ExchangeRates", 'DateTime'>;
        readonly baseCurrency: FieldRef<"ExchangeRates", 'String'>;
        readonly rates: FieldRef<"ExchangeRates", 'Json'>;
    }

    export type PrismaPromise<T> = $Public.PrismaPromise<T>;
    export type DecimalJsLike = runtime.DecimalJsLike;
    /**
     * Metrics 
     */
    export type Metrics = runtime.Metrics;
    export type Metric<T> = runtime.Metric<T>;
    export type MetricHistogram = runtime.MetricHistogram;
    export type MetricHistogramBucket = runtime.MetricHistogramBucket;
    /**
     * Prisma Client JS version: 5.21.1
     * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
     */
    export type PrismaVersion = {
        client: string
    };
    type SelectAndInclude = {
        select: any
        include: any
    };
    type SelectAndOmit = {
        select: any
        omit: any
    };
    /**
     * Get the type of the value, that the Promise holds.
     */
    export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;
    /**
     * Get the return type of a function which returns a Promise.
     */
    export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;
    /**
     * From T, pick a set of properties whose keys are in the union K
     */
    type Prisma__Pick<T, K extends keyof T> = {
        [P in K]: T[P];
    };
    export type Enumerable<T> = T | Array<T>;
    export type RequiredKeys<T> = {
        [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
    }[keyof T];
    export type TruthyKeys<T> = keyof {
        [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
    };
    export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;
    /**
     * Subset
     * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
     */
    export type Subset<T, U> = {
        [key in keyof T]: key extends keyof U ? T[key] : never;
    };
    /**
     * SelectSubset
     * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
     * Additionally, it validates, if both select and include are present. If the case, it errors.
     */
    export type SelectSubset<T, U> = {
        [key in keyof T]: key extends keyof U ? T[key] : never
    } &
        (T extends SelectAndInclude
            ? 'Please either choose `select` or `include`.'
            : T extends SelectAndOmit
            ? 'Please either choose `select` or `omit`.'
            : {});
    /**
     * Subset + Intersection
     * @desc From `T` pick properties that exist in `U` and intersect `K`
     */
    export type SubsetIntersection<T, U, K> = {
        [key in keyof T]: key extends keyof U ? T[key] : never
    } &
        K;
    type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
    /**
     * XOR is needed to have a real mutually exclusive union type
     * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
     */
    type XOR<T, U> = T extends object ?
        U extends object ?
        (Without<T, U> & U) | (Without<U, T> & T)
        : U : T;
    /**
     * Is T a Record?
     */
    type IsObject<T extends any> = T extends Array<any>
        ? False
        : T extends Date
        ? False
        : T extends Uint8Array
        ? False
        : T extends BigInt
        ? False
        : T extends object
        ? True
        : False;
    /**
     * If it's T[], return T
     */
    export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
    /**
     * From ts-toolbelt
     */
    type __Either<O extends object, K extends Key> = Omit<O, K> &
        {
            // Merge all but K
            [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
        }[K];
    type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
    type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
    type _Either<O extends object, K extends Key, strict extends Boolean> = {
        1: EitherStrict<O, K>
        0: EitherLoose<O, K>
    }[strict];
    type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
    export type Union = any;
    type PatchUndefined<O extends object, O1 extends object> = {
        [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
    } & {};
    /** Helper Types for "Merge" */
    export type IntersectOf<U extends Union> = (
        U extends unknown ? (k: U) => void : never
    ) extends (k: infer I) => void
        ? I
        : never;
    export type Overwrite<O extends object, O1 extends object> = {
        [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
    } & {};
    type _Merge<U extends object> = IntersectOf<Overwrite<U, {
        [K in keyof U]-?: At<U, K>;
    }>>;
    type Key = string | number | symbol;
    type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
    type AtStrict<O extends object, K extends Key> = O[K & keyof O];
    type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
    export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
        1: AtStrict<O, K>;
        0: AtLoose<O, K>;
    }[strict];
    export type ComputeRaw<A extends any> = A extends Function ? A : {
        [K in keyof A]: A[K];
    } & {};
    export type OptionalFlat<O> = {
        [K in keyof O]?: O[K];
    } & {};
    type _Record<K extends keyof any, T> = {
        [P in K]: T;
    };
    type NoExpand<T> = T extends unknown ? T : never;
    type AtLeast<O extends object, K extends string> = NoExpand<
        O extends unknown
        ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
        | { [P in keyof O as P extends K ? K : never]-?: O[P] } & O
        : never>;
    type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
    export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
    /** End Helper Types for "Merge" */
    export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
    /**
     *   A [[Boolean]]
     */
    export type Boolean = True | False;
    export type True = 1;
    /**
     *   0
     */
    export type False = 0;
    export type Not<B extends Boolean> = {
        0: 1
        1: 0
    }[B];
    export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
        ? 0 // anything `never` is false
        : A1 extends A2
        ? 1
        : 0;
    export type Has<U extends Union, U1 extends Union> = Not<
        Extends<Exclude<U1, U>, U1>
    >;
    export type Or<B1 extends Boolean, B2 extends Boolean> = {
        0: {
            0: 0
            1: 1
        }
        1: {
            0: 1
            1: 1
        }
    }[B1][B2];
    export type Keys<U extends Union> = U extends unknown ? keyof U : never;
    type Cast<A, B> = A extends B ? A : B;
    /**
     * Used by group by
     */
    export type GetScalarType<T, O> = O extends object ? {
        [P in keyof T]: P extends keyof O
        ? O[P]
        : never
    } : never;
    type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
    type GetHavingFields<T> = {
        [K in keyof T]: Or<
            Or<Extends<'OR', K>, Extends<'AND', K>>,
            Extends<'NOT', K>
        > extends True
        ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
        : {} extends FieldPaths<T[K]>
        ? never
        : K
    }[keyof T];
    /**
     * Convert tuple to union
     */
    type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
    type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
    type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
    /**
     * Like `Pick`, but additionally can also accept an array of keys
     */
    type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
    /**
     * Exclude all keys with underscores
     */
    type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
    export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
    type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
    export type ModelName = (typeof ModelName)[keyof typeof ModelName];
    export type Datasources = {
        db?: Datasource
    };
    export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
        meta: {
            modelProps: "profile" | "group" | "groupParticipant" | "image" | "message" | "messageAttachment" | "expense" | "expenseShare" | "payment" | "exchangeRates"
            txIsolationLevel: Prisma.TransactionIsolationLevel
        }
        model: {
            Profile: {
                payload: Prisma.$ProfilePayload<ExtArgs>
                fields: Prisma.ProfileFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.ProfileFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
                    }
                    findFirst: {
                        args: Prisma.ProfileFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
                    }
                    findMany: {
                        args: Prisma.ProfileFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
                    }
                    create: {
                        args: Prisma.ProfileCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
                    }
                    createMany: {
                        args: Prisma.ProfileCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
                    }
                    delete: {
                        args: Prisma.ProfileDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
                    }
                    update: {
                        args: Prisma.ProfileUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
                    }
                    deleteMany: {
                        args: Prisma.ProfileDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.ProfileUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.ProfileUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
                    }
                    aggregate: {
                        args: Prisma.ProfileAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateProfile>
                    }
                    groupBy: {
                        args: Prisma.ProfileGroupByArgs<ExtArgs>
                        result: $Utils.Optional<ProfileGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.ProfileCountArgs<ExtArgs>
                        result: $Utils.Optional<ProfileCountAggregateOutputType> | number
                    }
                }
            }
            Group: {
                payload: Prisma.$GroupPayload<ExtArgs>
                fields: Prisma.GroupFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.GroupFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupPayload>
                    }
                    findFirst: {
                        args: Prisma.GroupFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupPayload>
                    }
                    findMany: {
                        args: Prisma.GroupFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
                    }
                    create: {
                        args: Prisma.GroupCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupPayload>
                    }
                    createMany: {
                        args: Prisma.GroupCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
                    }
                    delete: {
                        args: Prisma.GroupDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupPayload>
                    }
                    update: {
                        args: Prisma.GroupUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupPayload>
                    }
                    deleteMany: {
                        args: Prisma.GroupDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.GroupUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.GroupUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupPayload>
                    }
                    aggregate: {
                        args: Prisma.GroupAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateGroup>
                    }
                    groupBy: {
                        args: Prisma.GroupGroupByArgs<ExtArgs>
                        result: $Utils.Optional<GroupGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.GroupCountArgs<ExtArgs>
                        result: $Utils.Optional<GroupCountAggregateOutputType> | number
                    }
                }
            }
            GroupParticipant: {
                payload: Prisma.$GroupParticipantPayload<ExtArgs>
                fields: Prisma.GroupParticipantFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.GroupParticipantFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupParticipantPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.GroupParticipantFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupParticipantPayload>
                    }
                    findFirst: {
                        args: Prisma.GroupParticipantFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupParticipantPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.GroupParticipantFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupParticipantPayload>
                    }
                    findMany: {
                        args: Prisma.GroupParticipantFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupParticipantPayload>[]
                    }
                    create: {
                        args: Prisma.GroupParticipantCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupParticipantPayload>
                    }
                    createMany: {
                        args: Prisma.GroupParticipantCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.GroupParticipantCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupParticipantPayload>[]
                    }
                    delete: {
                        args: Prisma.GroupParticipantDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupParticipantPayload>
                    }
                    update: {
                        args: Prisma.GroupParticipantUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupParticipantPayload>
                    }
                    deleteMany: {
                        args: Prisma.GroupParticipantDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.GroupParticipantUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.GroupParticipantUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$GroupParticipantPayload>
                    }
                    aggregate: {
                        args: Prisma.GroupParticipantAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateGroupParticipant>
                    }
                    groupBy: {
                        args: Prisma.GroupParticipantGroupByArgs<ExtArgs>
                        result: $Utils.Optional<GroupParticipantGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.GroupParticipantCountArgs<ExtArgs>
                        result: $Utils.Optional<GroupParticipantCountAggregateOutputType> | number
                    }
                }
            }
            Image: {
                payload: Prisma.$ImagePayload<ExtArgs>
                fields: Prisma.ImageFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.ImageFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ImagePayload>
                    }
                    findFirst: {
                        args: Prisma.ImageFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ImagePayload>
                    }
                    findMany: {
                        args: Prisma.ImageFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
                    }
                    create: {
                        args: Prisma.ImageCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ImagePayload>
                    }
                    createMany: {
                        args: Prisma.ImageCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
                    }
                    delete: {
                        args: Prisma.ImageDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ImagePayload>
                    }
                    update: {
                        args: Prisma.ImageUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ImagePayload>
                    }
                    deleteMany: {
                        args: Prisma.ImageDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.ImageUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.ImageUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ImagePayload>
                    }
                    aggregate: {
                        args: Prisma.ImageAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateImage>
                    }
                    groupBy: {
                        args: Prisma.ImageGroupByArgs<ExtArgs>
                        result: $Utils.Optional<ImageGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.ImageCountArgs<ExtArgs>
                        result: $Utils.Optional<ImageCountAggregateOutputType> | number
                    }
                }
            }
            Message: {
                payload: Prisma.$MessagePayload<ExtArgs>
                fields: Prisma.MessageFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.MessageFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessagePayload>
                    }
                    findFirst: {
                        args: Prisma.MessageFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessagePayload>
                    }
                    findMany: {
                        args: Prisma.MessageFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
                    }
                    create: {
                        args: Prisma.MessageCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessagePayload>
                    }
                    createMany: {
                        args: Prisma.MessageCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
                    }
                    delete: {
                        args: Prisma.MessageDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessagePayload>
                    }
                    update: {
                        args: Prisma.MessageUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessagePayload>
                    }
                    deleteMany: {
                        args: Prisma.MessageDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.MessageUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.MessageUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessagePayload>
                    }
                    aggregate: {
                        args: Prisma.MessageAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateMessage>
                    }
                    groupBy: {
                        args: Prisma.MessageGroupByArgs<ExtArgs>
                        result: $Utils.Optional<MessageGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.MessageCountArgs<ExtArgs>
                        result: $Utils.Optional<MessageCountAggregateOutputType> | number
                    }
                }
            }
            MessageAttachment: {
                payload: Prisma.$MessageAttachmentPayload<ExtArgs>
                fields: Prisma.MessageAttachmentFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.MessageAttachmentFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.MessageAttachmentFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>
                    }
                    findFirst: {
                        args: Prisma.MessageAttachmentFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.MessageAttachmentFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>
                    }
                    findMany: {
                        args: Prisma.MessageAttachmentFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>[]
                    }
                    create: {
                        args: Prisma.MessageAttachmentCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>
                    }
                    createMany: {
                        args: Prisma.MessageAttachmentCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.MessageAttachmentCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>[]
                    }
                    delete: {
                        args: Prisma.MessageAttachmentDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>
                    }
                    update: {
                        args: Prisma.MessageAttachmentUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>
                    }
                    deleteMany: {
                        args: Prisma.MessageAttachmentDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.MessageAttachmentUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.MessageAttachmentUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>
                    }
                    aggregate: {
                        args: Prisma.MessageAttachmentAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateMessageAttachment>
                    }
                    groupBy: {
                        args: Prisma.MessageAttachmentGroupByArgs<ExtArgs>
                        result: $Utils.Optional<MessageAttachmentGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.MessageAttachmentCountArgs<ExtArgs>
                        result: $Utils.Optional<MessageAttachmentCountAggregateOutputType> | number
                    }
                }
            }
            Expense: {
                payload: Prisma.$ExpensePayload<ExtArgs>
                fields: Prisma.ExpenseFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
                    }
                    findFirst: {
                        args: Prisma.ExpenseFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
                    }
                    findMany: {
                        args: Prisma.ExpenseFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
                    }
                    create: {
                        args: Prisma.ExpenseCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
                    }
                    createMany: {
                        args: Prisma.ExpenseCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
                    }
                    delete: {
                        args: Prisma.ExpenseDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
                    }
                    update: {
                        args: Prisma.ExpenseUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
                    }
                    deleteMany: {
                        args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.ExpenseUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
                    }
                    aggregate: {
                        args: Prisma.ExpenseAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateExpense>
                    }
                    groupBy: {
                        args: Prisma.ExpenseGroupByArgs<ExtArgs>
                        result: $Utils.Optional<ExpenseGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.ExpenseCountArgs<ExtArgs>
                        result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
                    }
                }
            }
            ExpenseShare: {
                payload: Prisma.$ExpenseSharePayload<ExtArgs>
                fields: Prisma.ExpenseShareFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.ExpenseShareFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.ExpenseShareFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload>
                    }
                    findFirst: {
                        args: Prisma.ExpenseShareFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.ExpenseShareFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload>
                    }
                    findMany: {
                        args: Prisma.ExpenseShareFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload>[]
                    }
                    create: {
                        args: Prisma.ExpenseShareCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload>
                    }
                    createMany: {
                        args: Prisma.ExpenseShareCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.ExpenseShareCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload>[]
                    }
                    delete: {
                        args: Prisma.ExpenseShareDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload>
                    }
                    update: {
                        args: Prisma.ExpenseShareUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload>
                    }
                    deleteMany: {
                        args: Prisma.ExpenseShareDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.ExpenseShareUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.ExpenseShareUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload>
                    }
                    aggregate: {
                        args: Prisma.ExpenseShareAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateExpenseShare>
                    }
                    groupBy: {
                        args: Prisma.ExpenseShareGroupByArgs<ExtArgs>
                        result: $Utils.Optional<ExpenseShareGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.ExpenseShareCountArgs<ExtArgs>
                        result: $Utils.Optional<ExpenseShareCountAggregateOutputType> | number
                    }
                }
            }
            Payment: {
                payload: Prisma.$PaymentPayload<ExtArgs>
                fields: Prisma.PaymentFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.PaymentFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
                    }
                    findFirst: {
                        args: Prisma.PaymentFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
                    }
                    findMany: {
                        args: Prisma.PaymentFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
                    }
                    create: {
                        args: Prisma.PaymentCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
                    }
                    createMany: {
                        args: Prisma.PaymentCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
                    }
                    delete: {
                        args: Prisma.PaymentDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
                    }
                    update: {
                        args: Prisma.PaymentUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
                    }
                    deleteMany: {
                        args: Prisma.PaymentDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.PaymentUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.PaymentUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
                    }
                    aggregate: {
                        args: Prisma.PaymentAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregatePayment>
                    }
                    groupBy: {
                        args: Prisma.PaymentGroupByArgs<ExtArgs>
                        result: $Utils.Optional<PaymentGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.PaymentCountArgs<ExtArgs>
                        result: $Utils.Optional<PaymentCountAggregateOutputType> | number
                    }
                }
            }
            ExchangeRates: {
                payload: Prisma.$ExchangeRatesPayload<ExtArgs>
                fields: Prisma.ExchangeRatesFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.ExchangeRatesFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.ExchangeRatesFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload>
                    }
                    findFirst: {
                        args: Prisma.ExchangeRatesFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.ExchangeRatesFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload>
                    }
                    findMany: {
                        args: Prisma.ExchangeRatesFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload>[]
                    }
                    create: {
                        args: Prisma.ExchangeRatesCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload>
                    }
                    createMany: {
                        args: Prisma.ExchangeRatesCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.ExchangeRatesCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload>[]
                    }
                    delete: {
                        args: Prisma.ExchangeRatesDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload>
                    }
                    update: {
                        args: Prisma.ExchangeRatesUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload>
                    }
                    deleteMany: {
                        args: Prisma.ExchangeRatesDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.ExchangeRatesUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.ExchangeRatesUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload>
                    }
                    aggregate: {
                        args: Prisma.ExchangeRatesAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateExchangeRates>
                    }
                    groupBy: {
                        args: Prisma.ExchangeRatesGroupByArgs<ExtArgs>
                        result: $Utils.Optional<ExchangeRatesGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.ExchangeRatesCountArgs<ExtArgs>
                        result: $Utils.Optional<ExchangeRatesCountAggregateOutputType> | number
                    }
                }
            }
        }
    } & {
        other: {
            payload: any
            operations: {
                $executeRaw: {
                    args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
                    result: any
                }
                $executeRawUnsafe: {
                    args: [query: string, ...values: any[]],
                    result: any
                }
                $queryRaw: {
                    args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
                    result: any
                }
                $queryRawUnsafe: {
                    args: [query: string, ...values: any[]],
                    result: any
                }
            }
        }
    };
    export type DefaultPrismaClient = PrismaClient;
    export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
    export type LogLevel = 'info' | 'query' | 'warn' | 'error';
    export type LogDefinition = {
        level: LogLevel
        emit: 'stdout' | 'event'
    };
    export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never;
    export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
        GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
        : never;
    export type QueryEvent = {
        timestamp: Date
        query: string
        params: string
        duration: number
        target: string
    };
    export type LogEvent = {
        timestamp: Date
        message: string
        target: string
    };
    export type PrismaAction = | 'findUnique'
        | 'findUniqueOrThrow'
        | 'findMany'
        | 'findFirst'
        | 'findFirstOrThrow'
        | 'create'
        | 'createMany'
        | 'createManyAndReturn'
        | 'update'
        | 'updateMany'
        | 'upsert'
        | 'delete'
        | 'deleteMany'
        | 'executeRaw'
        | 'queryRaw'
        | 'aggregate'
        | 'count'
        | 'runCommandRaw'
        | 'findRaw'
        | 'groupBy';
    /**
     * These options are being passed into the middleware as "params"
     */
    export type MiddlewareParams = {
        model?: ModelName
        action: PrismaAction
        args: any
        dataPath: string[]
        runInTransaction: boolean
    };
    /**
     * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
     */
    export type Middleware<T = any> = (
        params: MiddlewareParams,
        next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
    ) => $Utils.JsPromise<T>;
    /**
     * `PrismaClient` proxy available in interactive transactions.
     */
    export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;
    export type Datasource = {
        url?: string
    };
    /**
     * Count Types
     */
    /**
     * Count Type ProfileCountOutputType
     */
    export type ProfileCountOutputType = {
        groups: number
        messages: number
        expensesOwned: number
        expensesPaid: number
        expenseShares: number
        paymentsReceived: number
        paymentsPaid: number
    };
    export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        groups?: boolean | ProfileCountOutputTypeCountGroupsArgs
        messages?: boolean | ProfileCountOutputTypeCountMessagesArgs
        expensesOwned?: boolean | ProfileCountOutputTypeCountExpensesOwnedArgs
        expensesPaid?: boolean | ProfileCountOutputTypeCountExpensesPaidArgs
        expenseShares?: boolean | ProfileCountOutputTypeCountExpenseSharesArgs
        paymentsReceived?: boolean | ProfileCountOutputTypeCountPaymentsReceivedArgs
        paymentsPaid?: boolean | ProfileCountOutputTypeCountPaymentsPaidArgs
    };
    /**
     * ProfileCountOutputType without action
     */
    export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ProfileCountOutputType
         */
        select?: ProfileCountOutputTypeSelect<ExtArgs> | null
    };
    /**
     * ProfileCountOutputType without action
     */
    export type ProfileCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: GroupParticipantWhereInput
    };
    /**
     * ProfileCountOutputType without action
     */
    export type ProfileCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: MessageWhereInput
    };
    /**
     * ProfileCountOutputType without action
     */
    export type ProfileCountOutputTypeCountExpensesOwnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: ExpenseWhereInput
    };
    /**
     * ProfileCountOutputType without action
     */
    export type ProfileCountOutputTypeCountExpensesPaidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: ExpenseWhereInput
    };
    /**
     * ProfileCountOutputType without action
     */
    export type ProfileCountOutputTypeCountExpenseSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: ExpenseShareWhereInput
    };
    /**
     * ProfileCountOutputType without action
     */
    export type ProfileCountOutputTypeCountPaymentsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: PaymentWhereInput
    };
    /**
     * ProfileCountOutputType without action
     */
    export type ProfileCountOutputTypeCountPaymentsPaidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: PaymentWhereInput
    };
    /**
     * Count Type GroupCountOutputType
     */
    export type GroupCountOutputType = {
        participants: number
        messages: number
        expenses: number
        payments: number
    };
    export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        participants?: boolean | GroupCountOutputTypeCountParticipantsArgs
        messages?: boolean | GroupCountOutputTypeCountMessagesArgs
        expenses?: boolean | GroupCountOutputTypeCountExpensesArgs
        payments?: boolean | GroupCountOutputTypeCountPaymentsArgs
    };
    /**
     * GroupCountOutputType without action
     */
    export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the GroupCountOutputType
         */
        select?: GroupCountOutputTypeSelect<ExtArgs> | null
    };
    /**
     * GroupCountOutputType without action
     */
    export type GroupCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: GroupParticipantWhereInput
    };
    /**
     * GroupCountOutputType without action
     */
    export type GroupCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: MessageWhereInput
    };
    /**
     * GroupCountOutputType without action
     */
    export type GroupCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: ExpenseWhereInput
    };
    /**
     * GroupCountOutputType without action
     */
    export type GroupCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: PaymentWhereInput
    };
    /**
     * Count Type ImageCountOutputType
     */
    export type ImageCountOutputType = {
        Group: number
        Profile: number
    };
    export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        Group?: boolean | ImageCountOutputTypeCountGroupArgs
        Profile?: boolean | ImageCountOutputTypeCountProfileArgs
    };
    /**
     * ImageCountOutputType without action
     */
    export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ImageCountOutputType
         */
        select?: ImageCountOutputTypeSelect<ExtArgs> | null
    };
    /**
     * ImageCountOutputType without action
     */
    export type ImageCountOutputTypeCountGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: GroupWhereInput
    };
    /**
     * ImageCountOutputType without action
     */
    export type ImageCountOutputTypeCountProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: ProfileWhereInput
    };
    /**
     * Count Type MessageCountOutputType
     */
    export type MessageCountOutputType = {
        attachments: number
    };
    export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        attachments?: boolean | MessageCountOutputTypeCountAttachmentsArgs
    };
    /**
     * MessageCountOutputType without action
     */
    export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MessageCountOutputType
         */
        select?: MessageCountOutputTypeSelect<ExtArgs> | null
    };
    /**
     * MessageCountOutputType without action
     */
    export type MessageCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: MessageAttachmentWhereInput
    };
    /**
     * Count Type ExpenseCountOutputType
     */
    export type ExpenseCountOutputType = {
        shares: number
        messageAttachments: number
    };
    export type ExpenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        shares?: boolean | ExpenseCountOutputTypeCountSharesArgs
        messageAttachments?: boolean | ExpenseCountOutputTypeCountMessageAttachmentsArgs
    };
    /**
     * ExpenseCountOutputType without action
     */
    export type ExpenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExpenseCountOutputType
         */
        select?: ExpenseCountOutputTypeSelect<ExtArgs> | null
    };
    /**
     * ExpenseCountOutputType without action
     */
    export type ExpenseCountOutputTypeCountSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: ExpenseShareWhereInput
    };
    /**
     * ExpenseCountOutputType without action
     */
    export type ExpenseCountOutputTypeCountMessageAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: MessageAttachmentWhereInput
    };
    /**
     * Models
     */
    /**
     * Model Profile
     */
    export type AggregateProfile = {
        _count: ProfileCountAggregateOutputType | null
        _min: ProfileMinAggregateOutputType | null
        _max: ProfileMaxAggregateOutputType | null
    };
    export type ProfileMinAggregateOutputType = {
        userId: string | null
        email: string | null
        firstName: string | null
        lastName: string | null
        currency: $Enums.CurrencyCode | null
        avatarId: string | null
        createdAt: Date | null
        updatedAt: Date | null
    };
    export type ProfileMaxAggregateOutputType = {
        userId: string | null
        email: string | null
        firstName: string | null
        lastName: string | null
        currency: $Enums.CurrencyCode | null
        avatarId: string | null
        createdAt: Date | null
        updatedAt: Date | null
    };
    export type ProfileCountAggregateOutputType = {
        userId: number
        email: number
        firstName: number
        lastName: number
        currency: number
        avatarId: number
        createdAt: number
        updatedAt: number
        _all: number
    };
    export type ProfileMinAggregateInputType = {
        userId?: true
        email?: true
        firstName?: true
        lastName?: true
        currency?: true
        avatarId?: true
        createdAt?: true
        updatedAt?: true
    };
    export type ProfileMaxAggregateInputType = {
        userId?: true
        email?: true
        firstName?: true
        lastName?: true
        currency?: true
        avatarId?: true
        createdAt?: true
        updatedAt?: true
    };
    export type ProfileCountAggregateInputType = {
        userId?: true
        email?: true
        firstName?: true
        lastName?: true
        currency?: true
        avatarId?: true
        createdAt?: true
        updatedAt?: true
        _all?: true
    };
    export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Profile to aggregate.
         */
        where?: ProfileWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Profiles to fetch.
         */
        orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the start position
         */
        cursor?: ProfileWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Profiles from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Profiles.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Count returned Profiles
        **/
        _count?: true | ProfileCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the minimum value
        **/
        _min?: ProfileMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the maximum value
        **/
        _max?: ProfileMaxAggregateInputType
    };
    export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
        ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
        : GetScalarType<T[P], AggregateProfile[P]>
    };
    export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: ProfileWhereInput
        orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
        by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
        having?: ProfileScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: ProfileCountAggregateInputType | true
        _min?: ProfileMinAggregateInputType
        _max?: ProfileMaxAggregateInputType
    };
    export type ProfileGroupByOutputType = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        avatarId: string | null
        createdAt: Date
        updatedAt: Date
        _count: ProfileCountAggregateOutputType | null
        _min: ProfileMinAggregateOutputType | null
        _max: ProfileMaxAggregateOutputType | null
    };
    type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<ProfileGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : GetScalarType<T[P], ProfileGroupByOutputType[P]>
                : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            }
        >
    >;
    export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        userId?: boolean
        email?: boolean
        firstName?: boolean
        lastName?: boolean
        currency?: boolean
        avatarId?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        groups?: boolean | Profile$groupsArgs<ExtArgs>
        avatar?: boolean | Profile$avatarArgs<ExtArgs>
        messages?: boolean | Profile$messagesArgs<ExtArgs>
        expensesOwned?: boolean | Profile$expensesOwnedArgs<ExtArgs>
        expensesPaid?: boolean | Profile$expensesPaidArgs<ExtArgs>
        expenseShares?: boolean | Profile$expenseSharesArgs<ExtArgs>
        paymentsReceived?: boolean | Profile$paymentsReceivedArgs<ExtArgs>
        paymentsPaid?: boolean | Profile$paymentsPaidArgs<ExtArgs>
        _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["profile"]>;
    export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        userId?: boolean
        email?: boolean
        firstName?: boolean
        lastName?: boolean
        currency?: boolean
        avatarId?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        avatar?: boolean | Profile$avatarArgs<ExtArgs>
    }, ExtArgs["result"]["profile"]>;
    export type ProfileSelectScalar = {
        userId?: boolean
        email?: boolean
        firstName?: boolean
        lastName?: boolean
        currency?: boolean
        avatarId?: boolean
        createdAt?: boolean
        updatedAt?: boolean
    };
    export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        groups?: boolean | Profile$groupsArgs<ExtArgs>
        avatar?: boolean | Profile$avatarArgs<ExtArgs>
        messages?: boolean | Profile$messagesArgs<ExtArgs>
        expensesOwned?: boolean | Profile$expensesOwnedArgs<ExtArgs>
        expensesPaid?: boolean | Profile$expensesPaidArgs<ExtArgs>
        expenseShares?: boolean | Profile$expenseSharesArgs<ExtArgs>
        paymentsReceived?: boolean | Profile$paymentsReceivedArgs<ExtArgs>
        paymentsPaid?: boolean | Profile$paymentsPaidArgs<ExtArgs>
        _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
    };
    export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        avatar?: boolean | Profile$avatarArgs<ExtArgs>
    };
    export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "Profile"
        objects: {
            groups: Prisma.$GroupParticipantPayload<ExtArgs>[]
            avatar: Prisma.$ImagePayload<ExtArgs> | null
            messages: Prisma.$MessagePayload<ExtArgs>[]
            expensesOwned: Prisma.$ExpensePayload<ExtArgs>[]
            expensesPaid: Prisma.$ExpensePayload<ExtArgs>[]
            expenseShares: Prisma.$ExpenseSharePayload<ExtArgs>[]
            paymentsReceived: Prisma.$PaymentPayload<ExtArgs>[]
            paymentsPaid: Prisma.$PaymentPayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<{
            userId: string
            email: string
            firstName: string
            lastName: string
            currency: $Enums.CurrencyCode
            avatarId: string | null
            createdAt: Date
            updatedAt: Date
        }, ExtArgs["result"]["profile"]>
        composites: {}
    };
    type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>;
    type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
        select?: ProfileCountAggregateInputType | true
    };
    /**
     * Profile findUnique
     */
    export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Profile
         */
        select?: ProfileSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProfileInclude<ExtArgs> | null
        /**
         * Filter, which Profile to fetch.
         */
        where: ProfileWhereUniqueInput
    };
    /**
     * Profile findUniqueOrThrow
     */
    export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Profile
         */
        select?: ProfileSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProfileInclude<ExtArgs> | null
        /**
         * Filter, which Profile to fetch.
         */
        where: ProfileWhereUniqueInput
    };
    /**
     * Profile findFirst
     */
    export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Profile
         */
        select?: ProfileSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProfileInclude<ExtArgs> | null
        /**
         * Filter, which Profile to fetch.
         */
        where?: ProfileWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Profiles to fetch.
         */
        orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for Profiles.
         */
        cursor?: ProfileWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Profiles from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Profiles.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of Profiles.
         */
        distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
    };
    /**
     * Profile findFirstOrThrow
     */
    export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Profile
         */
        select?: ProfileSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProfileInclude<ExtArgs> | null
        /**
         * Filter, which Profile to fetch.
         */
        where?: ProfileWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Profiles to fetch.
         */
        orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for Profiles.
         */
        cursor?: ProfileWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Profiles from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Profiles.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of Profiles.
         */
        distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
    };
    /**
     * Profile findMany
     */
    export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Profile
         */
        select?: ProfileSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProfileInclude<ExtArgs> | null
        /**
         * Filter, which Profiles to fetch.
         */
        where?: ProfileWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Profiles to fetch.
         */
        orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for listing Profiles.
         */
        cursor?: ProfileWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Profiles from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Profiles.
         */
        skip?: number
        distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
    };
    /**
     * Profile create
     */
    export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Profile
         */
        select?: ProfileSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProfileInclude<ExtArgs> | null
        /**
         * The data needed to create a Profile.
         */
        data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    };
    /**
     * Profile createMany
     */
    export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Profiles.
         */
        data: ProfileCreateManyInput | ProfileCreateManyInput[]
        skipDuplicates?: boolean
    };
    /**
     * Profile createManyAndReturn
     */
    export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Profile
         */
        select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * The data used to create many Profiles.
         */
        data: ProfileCreateManyInput | ProfileCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
    };
    /**
     * Profile update
     */
    export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Profile
         */
        select?: ProfileSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProfileInclude<ExtArgs> | null
        /**
         * The data needed to update a Profile.
         */
        data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
        /**
         * Choose, which Profile to update.
         */
        where: ProfileWhereUniqueInput
    };
    /**
     * Profile updateMany
     */
    export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Profiles.
         */
        data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
        /**
         * Filter which Profiles to update
         */
        where?: ProfileWhereInput
    };
    /**
     * Profile upsert
     */
    export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Profile
         */
        select?: ProfileSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProfileInclude<ExtArgs> | null
        /**
         * The filter to search for the Profile to update in case it exists.
         */
        where: ProfileWhereUniqueInput
        /**
         * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
         */
        create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
        /**
         * In case the Profile was found with the provided `where` argument, update it with this data.
         */
        update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    };
    /**
     * Profile delete
     */
    export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Profile
         */
        select?: ProfileSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProfileInclude<ExtArgs> | null
        /**
         * Filter which Profile to delete.
         */
        where: ProfileWhereUniqueInput
    };
    /**
     * Profile deleteMany
     */
    export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Profiles to delete
         */
        where?: ProfileWhereInput
    };
    /**
     * Profile.groups
     */
    export type Profile$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the GroupParticipant
         */
        select?: GroupParticipantSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupParticipantInclude<ExtArgs> | null
        where?: GroupParticipantWhereInput
        orderBy?: GroupParticipantOrderByWithRelationInput | GroupParticipantOrderByWithRelationInput[]
        cursor?: GroupParticipantWhereUniqueInput
        take?: number
        skip?: number
        distinct?: GroupParticipantScalarFieldEnum | GroupParticipantScalarFieldEnum[]
    };
    /**
     * Profile.avatar
     */
    export type Profile$avatarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Image
         */
        select?: ImageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ImageInclude<ExtArgs> | null
        where?: ImageWhereInput
    };
    /**
     * Profile.messages
     */
    export type Profile$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Message
         */
        select?: MessageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageInclude<ExtArgs> | null
        where?: MessageWhereInput
        orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
        cursor?: MessageWhereUniqueInput
        take?: number
        skip?: number
        distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
    };
    /**
     * Profile.expensesOwned
     */
    export type Profile$expensesOwnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Expense
         */
        select?: ExpenseSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseInclude<ExtArgs> | null
        where?: ExpenseWhereInput
        orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
        cursor?: ExpenseWhereUniqueInput
        take?: number
        skip?: number
        distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
    };
    /**
     * Profile.expensesPaid
     */
    export type Profile$expensesPaidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Expense
         */
        select?: ExpenseSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseInclude<ExtArgs> | null
        where?: ExpenseWhereInput
        orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
        cursor?: ExpenseWhereUniqueInput
        take?: number
        skip?: number
        distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
    };
    /**
     * Profile.expenseShares
     */
    export type Profile$expenseSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExpenseShare
         */
        select?: ExpenseShareSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseShareInclude<ExtArgs> | null
        where?: ExpenseShareWhereInput
        orderBy?: ExpenseShareOrderByWithRelationInput | ExpenseShareOrderByWithRelationInput[]
        cursor?: ExpenseShareWhereUniqueInput
        take?: number
        skip?: number
        distinct?: ExpenseShareScalarFieldEnum | ExpenseShareScalarFieldEnum[]
    };
    /**
     * Profile.paymentsReceived
     */
    export type Profile$paymentsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        where?: PaymentWhereInput
        orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
        cursor?: PaymentWhereUniqueInput
        take?: number
        skip?: number
        distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
    };
    /**
     * Profile.paymentsPaid
     */
    export type Profile$paymentsPaidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        where?: PaymentWhereInput
        orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
        cursor?: PaymentWhereUniqueInput
        take?: number
        skip?: number
        distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
    };
    /**
     * Profile without action
     */
    export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Profile
         */
        select?: ProfileSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProfileInclude<ExtArgs> | null
    };
    /**
     * Model Group
     */
    export type AggregateGroup = {
        _count: GroupCountAggregateOutputType | null
        _min: GroupMinAggregateOutputType | null
        _max: GroupMaxAggregateOutputType | null
    };
    export type GroupMinAggregateOutputType = {
        id: string | null
        createdAt: Date | null
        updatedAt: Date | null
        name: string | null
        currency: $Enums.CurrencyCode | null
        coverImageId: string | null
    };
    export type GroupMaxAggregateOutputType = {
        id: string | null
        createdAt: Date | null
        updatedAt: Date | null
        name: string | null
        currency: $Enums.CurrencyCode | null
        coverImageId: string | null
    };
    export type GroupCountAggregateOutputType = {
        id: number
        createdAt: number
        updatedAt: number
        name: number
        currency: number
        coverImageId: number
        _all: number
    };
    export type GroupMinAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        name?: true
        currency?: true
        coverImageId?: true
    };
    export type GroupMaxAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        name?: true
        currency?: true
        coverImageId?: true
    };
    export type GroupCountAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        name?: true
        currency?: true
        coverImageId?: true
        _all?: true
    };
    export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Group to aggregate.
         */
        where?: GroupWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Groups to fetch.
         */
        orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the start position
         */
        cursor?: GroupWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Groups from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Groups.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Count returned Groups
        **/
        _count?: true | GroupCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the minimum value
        **/
        _min?: GroupMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the maximum value
        **/
        _max?: GroupMaxAggregateInputType
    };
    export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
        ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
        : GetScalarType<T[P], AggregateGroup[P]>
    };
    export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: GroupWhereInput
        orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
        by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
        having?: GroupScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: GroupCountAggregateInputType | true
        _min?: GroupMinAggregateInputType
        _max?: GroupMaxAggregateInputType
    };
    export type GroupGroupByOutputType = {
        id: string
        createdAt: Date
        updatedAt: Date
        name: string
        currency: $Enums.CurrencyCode
        coverImageId: string | null
        _count: GroupCountAggregateOutputType | null
        _min: GroupMinAggregateOutputType | null
        _max: GroupMaxAggregateOutputType | null
    };
    type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<GroupGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : GetScalarType<T[P], GroupGroupByOutputType[P]>
                : GetScalarType<T[P], GroupGroupByOutputType[P]>
            }
        >
    >;
    export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        name?: boolean
        currency?: boolean
        coverImageId?: boolean
        participants?: boolean | Group$participantsArgs<ExtArgs>
        coverImage?: boolean | Group$coverImageArgs<ExtArgs>
        messages?: boolean | Group$messagesArgs<ExtArgs>
        expenses?: boolean | Group$expensesArgs<ExtArgs>
        payments?: boolean | Group$paymentsArgs<ExtArgs>
        _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["group"]>;
    export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        name?: boolean
        currency?: boolean
        coverImageId?: boolean
        coverImage?: boolean | Group$coverImageArgs<ExtArgs>
    }, ExtArgs["result"]["group"]>;
    export type GroupSelectScalar = {
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        name?: boolean
        currency?: boolean
        coverImageId?: boolean
    };
    export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        participants?: boolean | Group$participantsArgs<ExtArgs>
        coverImage?: boolean | Group$coverImageArgs<ExtArgs>
        messages?: boolean | Group$messagesArgs<ExtArgs>
        expenses?: boolean | Group$expensesArgs<ExtArgs>
        payments?: boolean | Group$paymentsArgs<ExtArgs>
        _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
    };
    export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        coverImage?: boolean | Group$coverImageArgs<ExtArgs>
    };
    export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "Group"
        objects: {
            participants: Prisma.$GroupParticipantPayload<ExtArgs>[]
            coverImage: Prisma.$ImagePayload<ExtArgs> | null
            messages: Prisma.$MessagePayload<ExtArgs>[]
            expenses: Prisma.$ExpensePayload<ExtArgs>[]
            payments: Prisma.$PaymentPayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            createdAt: Date
            updatedAt: Date
            name: string
            currency: $Enums.CurrencyCode
            coverImageId: string | null
        }, ExtArgs["result"]["group"]>
        composites: {}
    };
    type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>;
    type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
        select?: GroupCountAggregateInputType | true
    };
    /**
     * Group findUnique
     */
    export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Group
         */
        select?: GroupSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupInclude<ExtArgs> | null
        /**
         * Filter, which Group to fetch.
         */
        where: GroupWhereUniqueInput
    };
    /**
     * Group findUniqueOrThrow
     */
    export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Group
         */
        select?: GroupSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupInclude<ExtArgs> | null
        /**
         * Filter, which Group to fetch.
         */
        where: GroupWhereUniqueInput
    };
    /**
     * Group findFirst
     */
    export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Group
         */
        select?: GroupSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupInclude<ExtArgs> | null
        /**
         * Filter, which Group to fetch.
         */
        where?: GroupWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Groups to fetch.
         */
        orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for Groups.
         */
        cursor?: GroupWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Groups from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Groups.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of Groups.
         */
        distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
    };
    /**
     * Group findFirstOrThrow
     */
    export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Group
         */
        select?: GroupSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupInclude<ExtArgs> | null
        /**
         * Filter, which Group to fetch.
         */
        where?: GroupWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Groups to fetch.
         */
        orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for Groups.
         */
        cursor?: GroupWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Groups from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Groups.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of Groups.
         */
        distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
    };
    /**
     * Group findMany
     */
    export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Group
         */
        select?: GroupSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupInclude<ExtArgs> | null
        /**
         * Filter, which Groups to fetch.
         */
        where?: GroupWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Groups to fetch.
         */
        orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for listing Groups.
         */
        cursor?: GroupWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Groups from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Groups.
         */
        skip?: number
        distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
    };
    /**
     * Group create
     */
    export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Group
         */
        select?: GroupSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupInclude<ExtArgs> | null
        /**
         * The data needed to create a Group.
         */
        data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    };
    /**
     * Group createMany
     */
    export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Groups.
         */
        data: GroupCreateManyInput | GroupCreateManyInput[]
        skipDuplicates?: boolean
    };
    /**
     * Group createManyAndReturn
     */
    export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Group
         */
        select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * The data used to create many Groups.
         */
        data: GroupCreateManyInput | GroupCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
    };
    /**
     * Group update
     */
    export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Group
         */
        select?: GroupSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupInclude<ExtArgs> | null
        /**
         * The data needed to update a Group.
         */
        data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
        /**
         * Choose, which Group to update.
         */
        where: GroupWhereUniqueInput
    };
    /**
     * Group updateMany
     */
    export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Groups.
         */
        data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
        /**
         * Filter which Groups to update
         */
        where?: GroupWhereInput
    };
    /**
     * Group upsert
     */
    export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Group
         */
        select?: GroupSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupInclude<ExtArgs> | null
        /**
         * The filter to search for the Group to update in case it exists.
         */
        where: GroupWhereUniqueInput
        /**
         * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
         */
        create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
        /**
         * In case the Group was found with the provided `where` argument, update it with this data.
         */
        update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    };
    /**
     * Group delete
     */
    export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Group
         */
        select?: GroupSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupInclude<ExtArgs> | null
        /**
         * Filter which Group to delete.
         */
        where: GroupWhereUniqueInput
    };
    /**
     * Group deleteMany
     */
    export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Groups to delete
         */
        where?: GroupWhereInput
    };
    /**
     * Group.participants
     */
    export type Group$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the GroupParticipant
         */
        select?: GroupParticipantSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupParticipantInclude<ExtArgs> | null
        where?: GroupParticipantWhereInput
        orderBy?: GroupParticipantOrderByWithRelationInput | GroupParticipantOrderByWithRelationInput[]
        cursor?: GroupParticipantWhereUniqueInput
        take?: number
        skip?: number
        distinct?: GroupParticipantScalarFieldEnum | GroupParticipantScalarFieldEnum[]
    };
    /**
     * Group.coverImage
     */
    export type Group$coverImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Image
         */
        select?: ImageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ImageInclude<ExtArgs> | null
        where?: ImageWhereInput
    };
    /**
     * Group.messages
     */
    export type Group$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Message
         */
        select?: MessageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageInclude<ExtArgs> | null
        where?: MessageWhereInput
        orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
        cursor?: MessageWhereUniqueInput
        take?: number
        skip?: number
        distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
    };
    /**
     * Group.expenses
     */
    export type Group$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Expense
         */
        select?: ExpenseSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseInclude<ExtArgs> | null
        where?: ExpenseWhereInput
        orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
        cursor?: ExpenseWhereUniqueInput
        take?: number
        skip?: number
        distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
    };
    /**
     * Group.payments
     */
    export type Group$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        where?: PaymentWhereInput
        orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
        cursor?: PaymentWhereUniqueInput
        take?: number
        skip?: number
        distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
    };
    /**
     * Group without action
     */
    export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Group
         */
        select?: GroupSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupInclude<ExtArgs> | null
    };
    /**
     * Model GroupParticipant
     */
    export type AggregateGroupParticipant = {
        _count: GroupParticipantCountAggregateOutputType | null
        _min: GroupParticipantMinAggregateOutputType | null
        _max: GroupParticipantMaxAggregateOutputType | null
    };
    export type GroupParticipantMinAggregateOutputType = {
        id: string | null
        createdAt: Date | null
        updatedAt: Date | null
        userId: string | null
        groupId: string | null
        role: $Enums.Role | null
    };
    export type GroupParticipantMaxAggregateOutputType = {
        id: string | null
        createdAt: Date | null
        updatedAt: Date | null
        userId: string | null
        groupId: string | null
        role: $Enums.Role | null
    };
    export type GroupParticipantCountAggregateOutputType = {
        id: number
        createdAt: number
        updatedAt: number
        userId: number
        groupId: number
        role: number
        _all: number
    };
    export type GroupParticipantMinAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        userId?: true
        groupId?: true
        role?: true
    };
    export type GroupParticipantMaxAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        userId?: true
        groupId?: true
        role?: true
    };
    export type GroupParticipantCountAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        userId?: true
        groupId?: true
        role?: true
        _all?: true
    };
    export type GroupParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which GroupParticipant to aggregate.
         */
        where?: GroupParticipantWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of GroupParticipants to fetch.
         */
        orderBy?: GroupParticipantOrderByWithRelationInput | GroupParticipantOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the start position
         */
        cursor?: GroupParticipantWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` GroupParticipants from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` GroupParticipants.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Count returned GroupParticipants
        **/
        _count?: true | GroupParticipantCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the minimum value
        **/
        _min?: GroupParticipantMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the maximum value
        **/
        _max?: GroupParticipantMaxAggregateInputType
    };
    export type GetGroupParticipantAggregateType<T extends GroupParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupParticipant]: P extends '_count' | 'count'
        ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupParticipant[P]>
        : GetScalarType<T[P], AggregateGroupParticipant[P]>
    };
    export type GroupParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: GroupParticipantWhereInput
        orderBy?: GroupParticipantOrderByWithAggregationInput | GroupParticipantOrderByWithAggregationInput[]
        by: GroupParticipantScalarFieldEnum[] | GroupParticipantScalarFieldEnum
        having?: GroupParticipantScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: GroupParticipantCountAggregateInputType | true
        _min?: GroupParticipantMinAggregateInputType
        _max?: GroupParticipantMaxAggregateInputType
    };
    export type GroupParticipantGroupByOutputType = {
        id: string
        createdAt: Date
        updatedAt: Date
        userId: string
        groupId: string
        role: $Enums.Role
        _count: GroupParticipantCountAggregateOutputType | null
        _min: GroupParticipantMinAggregateOutputType | null
        _max: GroupParticipantMaxAggregateOutputType | null
    };
    type GetGroupParticipantGroupByPayload<T extends GroupParticipantGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<GroupParticipantGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof GroupParticipantGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : GetScalarType<T[P], GroupParticipantGroupByOutputType[P]>
                : GetScalarType<T[P], GroupParticipantGroupByOutputType[P]>
            }
        >
    >;
    export type GroupParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        userId?: boolean
        groupId?: boolean
        role?: boolean
        user?: boolean | ProfileDefaultArgs<ExtArgs>
        group?: boolean | GroupDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["groupParticipant"]>;
    export type GroupParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        userId?: boolean
        groupId?: boolean
        role?: boolean
        user?: boolean | ProfileDefaultArgs<ExtArgs>
        group?: boolean | GroupDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["groupParticipant"]>;
    export type GroupParticipantSelectScalar = {
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        userId?: boolean
        groupId?: boolean
        role?: boolean
    };
    export type GroupParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        user?: boolean | ProfileDefaultArgs<ExtArgs>
        group?: boolean | GroupDefaultArgs<ExtArgs>
    };
    export type GroupParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        user?: boolean | ProfileDefaultArgs<ExtArgs>
        group?: boolean | GroupDefaultArgs<ExtArgs>
    };
    export type $GroupParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "GroupParticipant"
        objects: {
            user: Prisma.$ProfilePayload<ExtArgs>
            group: Prisma.$GroupPayload<ExtArgs>
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            createdAt: Date
            updatedAt: Date
            userId: string
            groupId: string
            role: $Enums.Role
        }, ExtArgs["result"]["groupParticipant"]>
        composites: {}
    };
    type GroupParticipantGetPayload<S extends boolean | null | undefined | GroupParticipantDefaultArgs> = $Result.GetResult<Prisma.$GroupParticipantPayload, S>;
    type GroupParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<GroupParticipantFindManyArgs, 'select' | 'include' | 'distinct'> & {
        select?: GroupParticipantCountAggregateInputType | true
    };
    /**
     * GroupParticipant findUnique
     */
    export type GroupParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the GroupParticipant
         */
        select?: GroupParticipantSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupParticipantInclude<ExtArgs> | null
        /**
         * Filter, which GroupParticipant to fetch.
         */
        where: GroupParticipantWhereUniqueInput
    };
    /**
     * GroupParticipant findUniqueOrThrow
     */
    export type GroupParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the GroupParticipant
         */
        select?: GroupParticipantSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupParticipantInclude<ExtArgs> | null
        /**
         * Filter, which GroupParticipant to fetch.
         */
        where: GroupParticipantWhereUniqueInput
    };
    /**
     * GroupParticipant findFirst
     */
    export type GroupParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the GroupParticipant
         */
        select?: GroupParticipantSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupParticipantInclude<ExtArgs> | null
        /**
         * Filter, which GroupParticipant to fetch.
         */
        where?: GroupParticipantWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of GroupParticipants to fetch.
         */
        orderBy?: GroupParticipantOrderByWithRelationInput | GroupParticipantOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for GroupParticipants.
         */
        cursor?: GroupParticipantWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` GroupParticipants from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` GroupParticipants.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of GroupParticipants.
         */
        distinct?: GroupParticipantScalarFieldEnum | GroupParticipantScalarFieldEnum[]
    };
    /**
     * GroupParticipant findFirstOrThrow
     */
    export type GroupParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the GroupParticipant
         */
        select?: GroupParticipantSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupParticipantInclude<ExtArgs> | null
        /**
         * Filter, which GroupParticipant to fetch.
         */
        where?: GroupParticipantWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of GroupParticipants to fetch.
         */
        orderBy?: GroupParticipantOrderByWithRelationInput | GroupParticipantOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for GroupParticipants.
         */
        cursor?: GroupParticipantWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` GroupParticipants from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` GroupParticipants.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of GroupParticipants.
         */
        distinct?: GroupParticipantScalarFieldEnum | GroupParticipantScalarFieldEnum[]
    };
    /**
     * GroupParticipant findMany
     */
    export type GroupParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the GroupParticipant
         */
        select?: GroupParticipantSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupParticipantInclude<ExtArgs> | null
        /**
         * Filter, which GroupParticipants to fetch.
         */
        where?: GroupParticipantWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of GroupParticipants to fetch.
         */
        orderBy?: GroupParticipantOrderByWithRelationInput | GroupParticipantOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for listing GroupParticipants.
         */
        cursor?: GroupParticipantWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` GroupParticipants from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` GroupParticipants.
         */
        skip?: number
        distinct?: GroupParticipantScalarFieldEnum | GroupParticipantScalarFieldEnum[]
    };
    /**
     * GroupParticipant create
     */
    export type GroupParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the GroupParticipant
         */
        select?: GroupParticipantSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupParticipantInclude<ExtArgs> | null
        /**
         * The data needed to create a GroupParticipant.
         */
        data: XOR<GroupParticipantCreateInput, GroupParticipantUncheckedCreateInput>
    };
    /**
     * GroupParticipant createMany
     */
    export type GroupParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many GroupParticipants.
         */
        data: GroupParticipantCreateManyInput | GroupParticipantCreateManyInput[]
        skipDuplicates?: boolean
    };
    /**
     * GroupParticipant createManyAndReturn
     */
    export type GroupParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the GroupParticipant
         */
        select?: GroupParticipantSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * The data used to create many GroupParticipants.
         */
        data: GroupParticipantCreateManyInput | GroupParticipantCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupParticipantIncludeCreateManyAndReturn<ExtArgs> | null
    };
    /**
     * GroupParticipant update
     */
    export type GroupParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the GroupParticipant
         */
        select?: GroupParticipantSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupParticipantInclude<ExtArgs> | null
        /**
         * The data needed to update a GroupParticipant.
         */
        data: XOR<GroupParticipantUpdateInput, GroupParticipantUncheckedUpdateInput>
        /**
         * Choose, which GroupParticipant to update.
         */
        where: GroupParticipantWhereUniqueInput
    };
    /**
     * GroupParticipant updateMany
     */
    export type GroupParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update GroupParticipants.
         */
        data: XOR<GroupParticipantUpdateManyMutationInput, GroupParticipantUncheckedUpdateManyInput>
        /**
         * Filter which GroupParticipants to update
         */
        where?: GroupParticipantWhereInput
    };
    /**
     * GroupParticipant upsert
     */
    export type GroupParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the GroupParticipant
         */
        select?: GroupParticipantSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupParticipantInclude<ExtArgs> | null
        /**
         * The filter to search for the GroupParticipant to update in case it exists.
         */
        where: GroupParticipantWhereUniqueInput
        /**
         * In case the GroupParticipant found by the `where` argument doesn't exist, create a new GroupParticipant with this data.
         */
        create: XOR<GroupParticipantCreateInput, GroupParticipantUncheckedCreateInput>
        /**
         * In case the GroupParticipant was found with the provided `where` argument, update it with this data.
         */
        update: XOR<GroupParticipantUpdateInput, GroupParticipantUncheckedUpdateInput>
    };
    /**
     * GroupParticipant delete
     */
    export type GroupParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the GroupParticipant
         */
        select?: GroupParticipantSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupParticipantInclude<ExtArgs> | null
        /**
         * Filter which GroupParticipant to delete.
         */
        where: GroupParticipantWhereUniqueInput
    };
    /**
     * GroupParticipant deleteMany
     */
    export type GroupParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which GroupParticipants to delete
         */
        where?: GroupParticipantWhereInput
    };
    /**
     * GroupParticipant without action
     */
    export type GroupParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the GroupParticipant
         */
        select?: GroupParticipantSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupParticipantInclude<ExtArgs> | null
    };
    /**
     * Model Image
     */
    export type AggregateImage = {
        _count: ImageCountAggregateOutputType | null
        _min: ImageMinAggregateOutputType | null
        _max: ImageMaxAggregateOutputType | null
    };
    export type ImageMinAggregateOutputType = {
        id: string | null
        createdAt: Date | null
        updatedAt: Date | null
        path: string | null
        bucket: string | null
        uploadedById: string | null
        blurhash: string | null
    };
    export type ImageMaxAggregateOutputType = {
        id: string | null
        createdAt: Date | null
        updatedAt: Date | null
        path: string | null
        bucket: string | null
        uploadedById: string | null
        blurhash: string | null
    };
    export type ImageCountAggregateOutputType = {
        id: number
        createdAt: number
        updatedAt: number
        path: number
        bucket: number
        uploadedById: number
        blurhash: number
        _all: number
    };
    export type ImageMinAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        path?: true
        bucket?: true
        uploadedById?: true
        blurhash?: true
    };
    export type ImageMaxAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        path?: true
        bucket?: true
        uploadedById?: true
        blurhash?: true
    };
    export type ImageCountAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        path?: true
        bucket?: true
        uploadedById?: true
        blurhash?: true
        _all?: true
    };
    export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Image to aggregate.
         */
        where?: ImageWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Images to fetch.
         */
        orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the start position
         */
        cursor?: ImageWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Images from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Images.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Count returned Images
        **/
        _count?: true | ImageCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the minimum value
        **/
        _min?: ImageMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the maximum value
        **/
        _max?: ImageMaxAggregateInputType
    };
    export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
        ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
        : GetScalarType<T[P], AggregateImage[P]>
    };
    export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: ImageWhereInput
        orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
        by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
        having?: ImageScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: ImageCountAggregateInputType | true
        _min?: ImageMinAggregateInputType
        _max?: ImageMaxAggregateInputType
    };
    export type ImageGroupByOutputType = {
        id: string
        createdAt: Date
        updatedAt: Date
        path: string
        bucket: string
        uploadedById: string
        blurhash: string | null
        _count: ImageCountAggregateOutputType | null
        _min: ImageMinAggregateOutputType | null
        _max: ImageMaxAggregateOutputType | null
    };
    type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<ImageGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : GetScalarType<T[P], ImageGroupByOutputType[P]>
                : GetScalarType<T[P], ImageGroupByOutputType[P]>
            }
        >
    >;
    export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        path?: boolean
        bucket?: boolean
        uploadedById?: boolean
        blurhash?: boolean
        Group?: boolean | Image$GroupArgs<ExtArgs>
        Profile?: boolean | Image$ProfileArgs<ExtArgs>
        _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["image"]>;
    export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        path?: boolean
        bucket?: boolean
        uploadedById?: boolean
        blurhash?: boolean
    }, ExtArgs["result"]["image"]>;
    export type ImageSelectScalar = {
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        path?: boolean
        bucket?: boolean
        uploadedById?: boolean
        blurhash?: boolean
    };
    export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        Group?: boolean | Image$GroupArgs<ExtArgs>
        Profile?: boolean | Image$ProfileArgs<ExtArgs>
        _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
    };
    export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {};
    export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "Image"
        objects: {
            Group: Prisma.$GroupPayload<ExtArgs>[]
            Profile: Prisma.$ProfilePayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            createdAt: Date
            updatedAt: Date
            path: string
            bucket: string
            uploadedById: string
            blurhash: string | null
        }, ExtArgs["result"]["image"]>
        composites: {}
    };
    type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>;
    type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
        select?: ImageCountAggregateInputType | true
    };
    /**
     * Image findUnique
     */
    export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Image
         */
        select?: ImageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ImageInclude<ExtArgs> | null
        /**
         * Filter, which Image to fetch.
         */
        where: ImageWhereUniqueInput
    };
    /**
     * Image findUniqueOrThrow
     */
    export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Image
         */
        select?: ImageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ImageInclude<ExtArgs> | null
        /**
         * Filter, which Image to fetch.
         */
        where: ImageWhereUniqueInput
    };
    /**
     * Image findFirst
     */
    export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Image
         */
        select?: ImageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ImageInclude<ExtArgs> | null
        /**
         * Filter, which Image to fetch.
         */
        where?: ImageWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Images to fetch.
         */
        orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for Images.
         */
        cursor?: ImageWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Images from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Images.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of Images.
         */
        distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
    };
    /**
     * Image findFirstOrThrow
     */
    export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Image
         */
        select?: ImageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ImageInclude<ExtArgs> | null
        /**
         * Filter, which Image to fetch.
         */
        where?: ImageWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Images to fetch.
         */
        orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for Images.
         */
        cursor?: ImageWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Images from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Images.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of Images.
         */
        distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
    };
    /**
     * Image findMany
     */
    export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Image
         */
        select?: ImageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ImageInclude<ExtArgs> | null
        /**
         * Filter, which Images to fetch.
         */
        where?: ImageWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Images to fetch.
         */
        orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for listing Images.
         */
        cursor?: ImageWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Images from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Images.
         */
        skip?: number
        distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
    };
    /**
     * Image create
     */
    export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Image
         */
        select?: ImageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ImageInclude<ExtArgs> | null
        /**
         * The data needed to create a Image.
         */
        data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    };
    /**
     * Image createMany
     */
    export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Images.
         */
        data: ImageCreateManyInput | ImageCreateManyInput[]
        skipDuplicates?: boolean
    };
    /**
     * Image createManyAndReturn
     */
    export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Image
         */
        select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * The data used to create many Images.
         */
        data: ImageCreateManyInput | ImageCreateManyInput[]
        skipDuplicates?: boolean
    };
    /**
     * Image update
     */
    export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Image
         */
        select?: ImageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ImageInclude<ExtArgs> | null
        /**
         * The data needed to update a Image.
         */
        data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
        /**
         * Choose, which Image to update.
         */
        where: ImageWhereUniqueInput
    };
    /**
     * Image updateMany
     */
    export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Images.
         */
        data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
        /**
         * Filter which Images to update
         */
        where?: ImageWhereInput
    };
    /**
     * Image upsert
     */
    export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Image
         */
        select?: ImageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ImageInclude<ExtArgs> | null
        /**
         * The filter to search for the Image to update in case it exists.
         */
        where: ImageWhereUniqueInput
        /**
         * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
         */
        create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
        /**
         * In case the Image was found with the provided `where` argument, update it with this data.
         */
        update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    };
    /**
     * Image delete
     */
    export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Image
         */
        select?: ImageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ImageInclude<ExtArgs> | null
        /**
         * Filter which Image to delete.
         */
        where: ImageWhereUniqueInput
    };
    /**
     * Image deleteMany
     */
    export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Images to delete
         */
        where?: ImageWhereInput
    };
    /**
     * Image.Group
     */
    export type Image$GroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Group
         */
        select?: GroupSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GroupInclude<ExtArgs> | null
        where?: GroupWhereInput
        orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
        cursor?: GroupWhereUniqueInput
        take?: number
        skip?: number
        distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
    };
    /**
     * Image.Profile
     */
    export type Image$ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Profile
         */
        select?: ProfileSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProfileInclude<ExtArgs> | null
        where?: ProfileWhereInput
        orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
        cursor?: ProfileWhereUniqueInput
        take?: number
        skip?: number
        distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
    };
    /**
     * Image without action
     */
    export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Image
         */
        select?: ImageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ImageInclude<ExtArgs> | null
    };
    /**
     * Model Message
     */
    export type AggregateMessage = {
        _count: MessageCountAggregateOutputType | null
        _min: MessageMinAggregateOutputType | null
        _max: MessageMaxAggregateOutputType | null
    };
    export type MessageMinAggregateOutputType = {
        id: string | null
        createdAt: Date | null
        updatedAt: Date | null
        key: string | null
        text: string | null
        authorType: $Enums.AuthorType | null
        authorId: string | null
        groupId: string | null
    };
    export type MessageMaxAggregateOutputType = {
        id: string | null
        createdAt: Date | null
        updatedAt: Date | null
        key: string | null
        text: string | null
        authorType: $Enums.AuthorType | null
        authorId: string | null
        groupId: string | null
    };
    export type MessageCountAggregateOutputType = {
        id: number
        createdAt: number
        updatedAt: number
        key: number
        text: number
        authorType: number
        authorId: number
        groupId: number
        _all: number
    };
    export type MessageMinAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        key?: true
        text?: true
        authorType?: true
        authorId?: true
        groupId?: true
    };
    export type MessageMaxAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        key?: true
        text?: true
        authorType?: true
        authorId?: true
        groupId?: true
    };
    export type MessageCountAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        key?: true
        text?: true
        authorType?: true
        authorId?: true
        groupId?: true
        _all?: true
    };
    export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Message to aggregate.
         */
        where?: MessageWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Messages to fetch.
         */
        orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the start position
         */
        cursor?: MessageWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Messages from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Messages.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Count returned Messages
        **/
        _count?: true | MessageCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the minimum value
        **/
        _min?: MessageMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the maximum value
        **/
        _max?: MessageMaxAggregateInputType
    };
    export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
        ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
        : GetScalarType<T[P], AggregateMessage[P]>
    };
    export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: MessageWhereInput
        orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
        by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
        having?: MessageScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: MessageCountAggregateInputType | true
        _min?: MessageMinAggregateInputType
        _max?: MessageMaxAggregateInputType
    };
    export type MessageGroupByOutputType = {
        id: string
        createdAt: Date
        updatedAt: Date
        key: string
        text: string | null
        authorType: $Enums.AuthorType
        authorId: string | null
        groupId: string
        _count: MessageCountAggregateOutputType | null
        _min: MessageMinAggregateOutputType | null
        _max: MessageMaxAggregateOutputType | null
    };
    type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<MessageGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : GetScalarType<T[P], MessageGroupByOutputType[P]>
                : GetScalarType<T[P], MessageGroupByOutputType[P]>
            }
        >
    >;
    export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        key?: boolean
        text?: boolean
        authorType?: boolean
        authorId?: boolean
        groupId?: boolean
        author?: boolean | Message$authorArgs<ExtArgs>
        group?: boolean | GroupDefaultArgs<ExtArgs>
        attachments?: boolean | Message$attachmentsArgs<ExtArgs>
        _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["message"]>;
    export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        key?: boolean
        text?: boolean
        authorType?: boolean
        authorId?: boolean
        groupId?: boolean
        author?: boolean | Message$authorArgs<ExtArgs>
        group?: boolean | GroupDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["message"]>;
    export type MessageSelectScalar = {
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        key?: boolean
        text?: boolean
        authorType?: boolean
        authorId?: boolean
        groupId?: boolean
    };
    export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        author?: boolean | Message$authorArgs<ExtArgs>
        group?: boolean | GroupDefaultArgs<ExtArgs>
        attachments?: boolean | Message$attachmentsArgs<ExtArgs>
        _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
    };
    export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        author?: boolean | Message$authorArgs<ExtArgs>
        group?: boolean | GroupDefaultArgs<ExtArgs>
    };
    export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "Message"
        objects: {
            author: Prisma.$ProfilePayload<ExtArgs> | null
            group: Prisma.$GroupPayload<ExtArgs>
            attachments: Prisma.$MessageAttachmentPayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            createdAt: Date
            updatedAt: Date
            key: string
            text: string | null
            authorType: $Enums.AuthorType
            authorId: string | null
            groupId: string
        }, ExtArgs["result"]["message"]>
        composites: {}
    };
    type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>;
    type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
        select?: MessageCountAggregateInputType | true
    };
    /**
     * Message findUnique
     */
    export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Message
         */
        select?: MessageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageInclude<ExtArgs> | null
        /**
         * Filter, which Message to fetch.
         */
        where: MessageWhereUniqueInput
    };
    /**
     * Message findUniqueOrThrow
     */
    export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Message
         */
        select?: MessageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageInclude<ExtArgs> | null
        /**
         * Filter, which Message to fetch.
         */
        where: MessageWhereUniqueInput
    };
    /**
     * Message findFirst
     */
    export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Message
         */
        select?: MessageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageInclude<ExtArgs> | null
        /**
         * Filter, which Message to fetch.
         */
        where?: MessageWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Messages to fetch.
         */
        orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for Messages.
         */
        cursor?: MessageWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Messages from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Messages.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of Messages.
         */
        distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
    };
    /**
     * Message findFirstOrThrow
     */
    export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Message
         */
        select?: MessageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageInclude<ExtArgs> | null
        /**
         * Filter, which Message to fetch.
         */
        where?: MessageWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Messages to fetch.
         */
        orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for Messages.
         */
        cursor?: MessageWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Messages from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Messages.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of Messages.
         */
        distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
    };
    /**
     * Message findMany
     */
    export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Message
         */
        select?: MessageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageInclude<ExtArgs> | null
        /**
         * Filter, which Messages to fetch.
         */
        where?: MessageWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Messages to fetch.
         */
        orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for listing Messages.
         */
        cursor?: MessageWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Messages from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Messages.
         */
        skip?: number
        distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
    };
    /**
     * Message create
     */
    export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Message
         */
        select?: MessageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageInclude<ExtArgs> | null
        /**
         * The data needed to create a Message.
         */
        data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    };
    /**
     * Message createMany
     */
    export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Messages.
         */
        data: MessageCreateManyInput | MessageCreateManyInput[]
        skipDuplicates?: boolean
    };
    /**
     * Message createManyAndReturn
     */
    export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Message
         */
        select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * The data used to create many Messages.
         */
        data: MessageCreateManyInput | MessageCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
    };
    /**
     * Message update
     */
    export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Message
         */
        select?: MessageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageInclude<ExtArgs> | null
        /**
         * The data needed to update a Message.
         */
        data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
        /**
         * Choose, which Message to update.
         */
        where: MessageWhereUniqueInput
    };
    /**
     * Message updateMany
     */
    export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Messages.
         */
        data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
        /**
         * Filter which Messages to update
         */
        where?: MessageWhereInput
    };
    /**
     * Message upsert
     */
    export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Message
         */
        select?: MessageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageInclude<ExtArgs> | null
        /**
         * The filter to search for the Message to update in case it exists.
         */
        where: MessageWhereUniqueInput
        /**
         * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
         */
        create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
        /**
         * In case the Message was found with the provided `where` argument, update it with this data.
         */
        update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    };
    /**
     * Message delete
     */
    export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Message
         */
        select?: MessageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageInclude<ExtArgs> | null
        /**
         * Filter which Message to delete.
         */
        where: MessageWhereUniqueInput
    };
    /**
     * Message deleteMany
     */
    export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Messages to delete
         */
        where?: MessageWhereInput
    };
    /**
     * Message.author
     */
    export type Message$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Profile
         */
        select?: ProfileSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProfileInclude<ExtArgs> | null
        where?: ProfileWhereInput
    };
    /**
     * Message.attachments
     */
    export type Message$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MessageAttachment
         */
        select?: MessageAttachmentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageAttachmentInclude<ExtArgs> | null
        where?: MessageAttachmentWhereInput
        orderBy?: MessageAttachmentOrderByWithRelationInput | MessageAttachmentOrderByWithRelationInput[]
        cursor?: MessageAttachmentWhereUniqueInput
        take?: number
        skip?: number
        distinct?: MessageAttachmentScalarFieldEnum | MessageAttachmentScalarFieldEnum[]
    };
    /**
     * Message without action
     */
    export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Message
         */
        select?: MessageSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageInclude<ExtArgs> | null
    };
    /**
     * Model MessageAttachment
     */
    export type AggregateMessageAttachment = {
        _count: MessageAttachmentCountAggregateOutputType | null
        _min: MessageAttachmentMinAggregateOutputType | null
        _max: MessageAttachmentMaxAggregateOutputType | null
    };
    export type MessageAttachmentMinAggregateOutputType = {
        id: string | null
        createdAt: Date | null
        updatedAt: Date | null
        messageId: string | null
        type: $Enums.MessageAttachmentType | null
        expenseId: string | null
    };
    export type MessageAttachmentMaxAggregateOutputType = {
        id: string | null
        createdAt: Date | null
        updatedAt: Date | null
        messageId: string | null
        type: $Enums.MessageAttachmentType | null
        expenseId: string | null
    };
    export type MessageAttachmentCountAggregateOutputType = {
        id: number
        createdAt: number
        updatedAt: number
        messageId: number
        type: number
        expenseId: number
        _all: number
    };
    export type MessageAttachmentMinAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        messageId?: true
        type?: true
        expenseId?: true
    };
    export type MessageAttachmentMaxAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        messageId?: true
        type?: true
        expenseId?: true
    };
    export type MessageAttachmentCountAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        messageId?: true
        type?: true
        expenseId?: true
        _all?: true
    };
    export type MessageAttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which MessageAttachment to aggregate.
         */
        where?: MessageAttachmentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of MessageAttachments to fetch.
         */
        orderBy?: MessageAttachmentOrderByWithRelationInput | MessageAttachmentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the start position
         */
        cursor?: MessageAttachmentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` MessageAttachments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` MessageAttachments.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Count returned MessageAttachments
        **/
        _count?: true | MessageAttachmentCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the minimum value
        **/
        _min?: MessageAttachmentMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the maximum value
        **/
        _max?: MessageAttachmentMaxAggregateInputType
    };
    export type GetMessageAttachmentAggregateType<T extends MessageAttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageAttachment]: P extends '_count' | 'count'
        ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageAttachment[P]>
        : GetScalarType<T[P], AggregateMessageAttachment[P]>
    };
    export type MessageAttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: MessageAttachmentWhereInput
        orderBy?: MessageAttachmentOrderByWithAggregationInput | MessageAttachmentOrderByWithAggregationInput[]
        by: MessageAttachmentScalarFieldEnum[] | MessageAttachmentScalarFieldEnum
        having?: MessageAttachmentScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: MessageAttachmentCountAggregateInputType | true
        _min?: MessageAttachmentMinAggregateInputType
        _max?: MessageAttachmentMaxAggregateInputType
    };
    export type MessageAttachmentGroupByOutputType = {
        id: string
        createdAt: Date
        updatedAt: Date
        messageId: string
        type: $Enums.MessageAttachmentType
        expenseId: string | null
        _count: MessageAttachmentCountAggregateOutputType | null
        _min: MessageAttachmentMinAggregateOutputType | null
        _max: MessageAttachmentMaxAggregateOutputType | null
    };
    type GetMessageAttachmentGroupByPayload<T extends MessageAttachmentGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<MessageAttachmentGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof MessageAttachmentGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : GetScalarType<T[P], MessageAttachmentGroupByOutputType[P]>
                : GetScalarType<T[P], MessageAttachmentGroupByOutputType[P]>
            }
        >
    >;
    export type MessageAttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        messageId?: boolean
        type?: boolean
        expenseId?: boolean
        message?: boolean | MessageDefaultArgs<ExtArgs>
        expense?: boolean | MessageAttachment$expenseArgs<ExtArgs>
    }, ExtArgs["result"]["messageAttachment"]>;
    export type MessageAttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        messageId?: boolean
        type?: boolean
        expenseId?: boolean
        message?: boolean | MessageDefaultArgs<ExtArgs>
        expense?: boolean | MessageAttachment$expenseArgs<ExtArgs>
    }, ExtArgs["result"]["messageAttachment"]>;
    export type MessageAttachmentSelectScalar = {
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        messageId?: boolean
        type?: boolean
        expenseId?: boolean
    };
    export type MessageAttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        message?: boolean | MessageDefaultArgs<ExtArgs>
        expense?: boolean | MessageAttachment$expenseArgs<ExtArgs>
    };
    export type MessageAttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        message?: boolean | MessageDefaultArgs<ExtArgs>
        expense?: boolean | MessageAttachment$expenseArgs<ExtArgs>
    };
    export type $MessageAttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "MessageAttachment"
        objects: {
            message: Prisma.$MessagePayload<ExtArgs>
            expense: Prisma.$ExpensePayload<ExtArgs> | null
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            createdAt: Date
            updatedAt: Date
            messageId: string
            type: $Enums.MessageAttachmentType
            expenseId: string | null
        }, ExtArgs["result"]["messageAttachment"]>
        composites: {}
    };
    type MessageAttachmentGetPayload<S extends boolean | null | undefined | MessageAttachmentDefaultArgs> = $Result.GetResult<Prisma.$MessageAttachmentPayload, S>;
    type MessageAttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<MessageAttachmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
        select?: MessageAttachmentCountAggregateInputType | true
    };
    /**
     * MessageAttachment findUnique
     */
    export type MessageAttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MessageAttachment
         */
        select?: MessageAttachmentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageAttachmentInclude<ExtArgs> | null
        /**
         * Filter, which MessageAttachment to fetch.
         */
        where: MessageAttachmentWhereUniqueInput
    };
    /**
     * MessageAttachment findUniqueOrThrow
     */
    export type MessageAttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MessageAttachment
         */
        select?: MessageAttachmentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageAttachmentInclude<ExtArgs> | null
        /**
         * Filter, which MessageAttachment to fetch.
         */
        where: MessageAttachmentWhereUniqueInput
    };
    /**
     * MessageAttachment findFirst
     */
    export type MessageAttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MessageAttachment
         */
        select?: MessageAttachmentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageAttachmentInclude<ExtArgs> | null
        /**
         * Filter, which MessageAttachment to fetch.
         */
        where?: MessageAttachmentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of MessageAttachments to fetch.
         */
        orderBy?: MessageAttachmentOrderByWithRelationInput | MessageAttachmentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for MessageAttachments.
         */
        cursor?: MessageAttachmentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` MessageAttachments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` MessageAttachments.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of MessageAttachments.
         */
        distinct?: MessageAttachmentScalarFieldEnum | MessageAttachmentScalarFieldEnum[]
    };
    /**
     * MessageAttachment findFirstOrThrow
     */
    export type MessageAttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MessageAttachment
         */
        select?: MessageAttachmentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageAttachmentInclude<ExtArgs> | null
        /**
         * Filter, which MessageAttachment to fetch.
         */
        where?: MessageAttachmentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of MessageAttachments to fetch.
         */
        orderBy?: MessageAttachmentOrderByWithRelationInput | MessageAttachmentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for MessageAttachments.
         */
        cursor?: MessageAttachmentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` MessageAttachments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` MessageAttachments.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of MessageAttachments.
         */
        distinct?: MessageAttachmentScalarFieldEnum | MessageAttachmentScalarFieldEnum[]
    };
    /**
     * MessageAttachment findMany
     */
    export type MessageAttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MessageAttachment
         */
        select?: MessageAttachmentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageAttachmentInclude<ExtArgs> | null
        /**
         * Filter, which MessageAttachments to fetch.
         */
        where?: MessageAttachmentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of MessageAttachments to fetch.
         */
        orderBy?: MessageAttachmentOrderByWithRelationInput | MessageAttachmentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for listing MessageAttachments.
         */
        cursor?: MessageAttachmentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` MessageAttachments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` MessageAttachments.
         */
        skip?: number
        distinct?: MessageAttachmentScalarFieldEnum | MessageAttachmentScalarFieldEnum[]
    };
    /**
     * MessageAttachment create
     */
    export type MessageAttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MessageAttachment
         */
        select?: MessageAttachmentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageAttachmentInclude<ExtArgs> | null
        /**
         * The data needed to create a MessageAttachment.
         */
        data: XOR<MessageAttachmentCreateInput, MessageAttachmentUncheckedCreateInput>
    };
    /**
     * MessageAttachment createMany
     */
    export type MessageAttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many MessageAttachments.
         */
        data: MessageAttachmentCreateManyInput | MessageAttachmentCreateManyInput[]
        skipDuplicates?: boolean
    };
    /**
     * MessageAttachment createManyAndReturn
     */
    export type MessageAttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MessageAttachment
         */
        select?: MessageAttachmentSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * The data used to create many MessageAttachments.
         */
        data: MessageAttachmentCreateManyInput | MessageAttachmentCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageAttachmentIncludeCreateManyAndReturn<ExtArgs> | null
    };
    /**
     * MessageAttachment update
     */
    export type MessageAttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MessageAttachment
         */
        select?: MessageAttachmentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageAttachmentInclude<ExtArgs> | null
        /**
         * The data needed to update a MessageAttachment.
         */
        data: XOR<MessageAttachmentUpdateInput, MessageAttachmentUncheckedUpdateInput>
        /**
         * Choose, which MessageAttachment to update.
         */
        where: MessageAttachmentWhereUniqueInput
    };
    /**
     * MessageAttachment updateMany
     */
    export type MessageAttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update MessageAttachments.
         */
        data: XOR<MessageAttachmentUpdateManyMutationInput, MessageAttachmentUncheckedUpdateManyInput>
        /**
         * Filter which MessageAttachments to update
         */
        where?: MessageAttachmentWhereInput
    };
    /**
     * MessageAttachment upsert
     */
    export type MessageAttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MessageAttachment
         */
        select?: MessageAttachmentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageAttachmentInclude<ExtArgs> | null
        /**
         * The filter to search for the MessageAttachment to update in case it exists.
         */
        where: MessageAttachmentWhereUniqueInput
        /**
         * In case the MessageAttachment found by the `where` argument doesn't exist, create a new MessageAttachment with this data.
         */
        create: XOR<MessageAttachmentCreateInput, MessageAttachmentUncheckedCreateInput>
        /**
         * In case the MessageAttachment was found with the provided `where` argument, update it with this data.
         */
        update: XOR<MessageAttachmentUpdateInput, MessageAttachmentUncheckedUpdateInput>
    };
    /**
     * MessageAttachment delete
     */
    export type MessageAttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MessageAttachment
         */
        select?: MessageAttachmentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageAttachmentInclude<ExtArgs> | null
        /**
         * Filter which MessageAttachment to delete.
         */
        where: MessageAttachmentWhereUniqueInput
    };
    /**
     * MessageAttachment deleteMany
     */
    export type MessageAttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which MessageAttachments to delete
         */
        where?: MessageAttachmentWhereInput
    };
    /**
     * MessageAttachment.expense
     */
    export type MessageAttachment$expenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Expense
         */
        select?: ExpenseSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseInclude<ExtArgs> | null
        where?: ExpenseWhereInput
    };
    /**
     * MessageAttachment without action
     */
    export type MessageAttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MessageAttachment
         */
        select?: MessageAttachmentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageAttachmentInclude<ExtArgs> | null
    };
    /**
     * Model Expense
     */
    export type AggregateExpense = {
        _count: ExpenseCountAggregateOutputType | null
        _avg: ExpenseAvgAggregateOutputType | null
        _sum: ExpenseSumAggregateOutputType | null
        _min: ExpenseMinAggregateOutputType | null
        _max: ExpenseMaxAggregateOutputType | null
    };
    export type ExpenseAvgAggregateOutputType = {
        amount: number | null
    };
    export type ExpenseSumAggregateOutputType = {
        amount: number | null
    };
    export type ExpenseMinAggregateOutputType = {
        id: string | null
        createdAt: Date | null
        updatedAt: Date | null
        ownerId: string | null
        payerId: string | null
        groupId: string | null
        amount: number | null
        currency: $Enums.CurrencyCode | null
        description: string | null
    };
    export type ExpenseMaxAggregateOutputType = {
        id: string | null
        createdAt: Date | null
        updatedAt: Date | null
        ownerId: string | null
        payerId: string | null
        groupId: string | null
        amount: number | null
        currency: $Enums.CurrencyCode | null
        description: string | null
    };
    export type ExpenseCountAggregateOutputType = {
        id: number
        createdAt: number
        updatedAt: number
        ownerId: number
        payerId: number
        groupId: number
        amount: number
        currency: number
        description: number
        conversion: number
        _all: number
    };
    export type ExpenseAvgAggregateInputType = {
        amount?: true
    };
    export type ExpenseSumAggregateInputType = {
        amount?: true
    };
    export type ExpenseMinAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        ownerId?: true
        payerId?: true
        groupId?: true
        amount?: true
        currency?: true
        description?: true
    };
    export type ExpenseMaxAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        ownerId?: true
        payerId?: true
        groupId?: true
        amount?: true
        currency?: true
        description?: true
    };
    export type ExpenseCountAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        ownerId?: true
        payerId?: true
        groupId?: true
        amount?: true
        currency?: true
        description?: true
        conversion?: true
        _all?: true
    };
    export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Expense to aggregate.
         */
        where?: ExpenseWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Expenses to fetch.
         */
        orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the start position
         */
        cursor?: ExpenseWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Expenses from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Expenses.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Count returned Expenses
        **/
        _count?: true | ExpenseCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to average
        **/
        _avg?: ExpenseAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to sum
        **/
        _sum?: ExpenseSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the minimum value
        **/
        _min?: ExpenseMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the maximum value
        **/
        _max?: ExpenseMaxAggregateInputType
    };
    export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
        ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
        : GetScalarType<T[P], AggregateExpense[P]>
    };
    export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: ExpenseWhereInput
        orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
        by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
        having?: ExpenseScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: ExpenseCountAggregateInputType | true
        _avg?: ExpenseAvgAggregateInputType
        _sum?: ExpenseSumAggregateInputType
        _min?: ExpenseMinAggregateInputType
        _max?: ExpenseMaxAggregateInputType
    };
    export type ExpenseGroupByOutputType = {
        id: string
        createdAt: Date
        updatedAt: Date
        ownerId: string
        payerId: string
        groupId: string
        amount: number
        currency: $Enums.CurrencyCode
        description: string | null
        conversion: CurrencyConversion | null
        _count: ExpenseCountAggregateOutputType | null
        _avg: ExpenseAvgAggregateOutputType | null
        _sum: ExpenseSumAggregateOutputType | null
        _min: ExpenseMinAggregateOutputType | null
        _max: ExpenseMaxAggregateOutputType | null
    };
    type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<ExpenseGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
                : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            }
        >
    >;
    export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        ownerId?: boolean
        payerId?: boolean
        groupId?: boolean
        amount?: boolean
        currency?: boolean
        description?: boolean
        conversion?: boolean
        owner?: boolean | ProfileDefaultArgs<ExtArgs>
        payer?: boolean | ProfileDefaultArgs<ExtArgs>
        group?: boolean | GroupDefaultArgs<ExtArgs>
        shares?: boolean | Expense$sharesArgs<ExtArgs>
        messageAttachments?: boolean | Expense$messageAttachmentsArgs<ExtArgs>
        _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["expense"]>;
    export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        ownerId?: boolean
        payerId?: boolean
        groupId?: boolean
        amount?: boolean
        currency?: boolean
        description?: boolean
        conversion?: boolean
        owner?: boolean | ProfileDefaultArgs<ExtArgs>
        payer?: boolean | ProfileDefaultArgs<ExtArgs>
        group?: boolean | GroupDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["expense"]>;
    export type ExpenseSelectScalar = {
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        ownerId?: boolean
        payerId?: boolean
        groupId?: boolean
        amount?: boolean
        currency?: boolean
        description?: boolean
        conversion?: boolean
    };
    export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        owner?: boolean | ProfileDefaultArgs<ExtArgs>
        payer?: boolean | ProfileDefaultArgs<ExtArgs>
        group?: boolean | GroupDefaultArgs<ExtArgs>
        shares?: boolean | Expense$sharesArgs<ExtArgs>
        messageAttachments?: boolean | Expense$messageAttachmentsArgs<ExtArgs>
        _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
    };
    export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        owner?: boolean | ProfileDefaultArgs<ExtArgs>
        payer?: boolean | ProfileDefaultArgs<ExtArgs>
        group?: boolean | GroupDefaultArgs<ExtArgs>
    };
    export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "Expense"
        objects: {
            owner: Prisma.$ProfilePayload<ExtArgs>
            payer: Prisma.$ProfilePayload<ExtArgs>
            group: Prisma.$GroupPayload<ExtArgs>
            shares: Prisma.$ExpenseSharePayload<ExtArgs>[]
            messageAttachments: Prisma.$MessageAttachmentPayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            createdAt: Date
            updatedAt: Date
            ownerId: string
            payerId: string
            groupId: string
            amount: number
            currency: $Enums.CurrencyCode
            description: string | null
            /**
             * @json
             */
            conversion: CurrencyConversion | null
        }, ExtArgs["result"]["expense"]>
        composites: {}
    };
    type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>;
    type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct'> & {
        select?: ExpenseCountAggregateInputType | true
    };
    /**
     * Expense findUnique
     */
    export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Expense
         */
        select?: ExpenseSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseInclude<ExtArgs> | null
        /**
         * Filter, which Expense to fetch.
         */
        where: ExpenseWhereUniqueInput
    };
    /**
     * Expense findUniqueOrThrow
     */
    export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Expense
         */
        select?: ExpenseSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseInclude<ExtArgs> | null
        /**
         * Filter, which Expense to fetch.
         */
        where: ExpenseWhereUniqueInput
    };
    /**
     * Expense findFirst
     */
    export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Expense
         */
        select?: ExpenseSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseInclude<ExtArgs> | null
        /**
         * Filter, which Expense to fetch.
         */
        where?: ExpenseWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Expenses to fetch.
         */
        orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for Expenses.
         */
        cursor?: ExpenseWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Expenses from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Expenses.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of Expenses.
         */
        distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
    };
    /**
     * Expense findFirstOrThrow
     */
    export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Expense
         */
        select?: ExpenseSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseInclude<ExtArgs> | null
        /**
         * Filter, which Expense to fetch.
         */
        where?: ExpenseWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Expenses to fetch.
         */
        orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for Expenses.
         */
        cursor?: ExpenseWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Expenses from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Expenses.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of Expenses.
         */
        distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
    };
    /**
     * Expense findMany
     */
    export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Expense
         */
        select?: ExpenseSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseInclude<ExtArgs> | null
        /**
         * Filter, which Expenses to fetch.
         */
        where?: ExpenseWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Expenses to fetch.
         */
        orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for listing Expenses.
         */
        cursor?: ExpenseWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Expenses from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Expenses.
         */
        skip?: number
        distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
    };
    /**
     * Expense create
     */
    export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Expense
         */
        select?: ExpenseSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseInclude<ExtArgs> | null
        /**
         * The data needed to create a Expense.
         */
        data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    };
    /**
     * Expense createMany
     */
    export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Expenses.
         */
        data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
        skipDuplicates?: boolean
    };
    /**
     * Expense createManyAndReturn
     */
    export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Expense
         */
        select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * The data used to create many Expenses.
         */
        data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
    };
    /**
     * Expense update
     */
    export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Expense
         */
        select?: ExpenseSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseInclude<ExtArgs> | null
        /**
         * The data needed to update a Expense.
         */
        data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
        /**
         * Choose, which Expense to update.
         */
        where: ExpenseWhereUniqueInput
    };
    /**
     * Expense updateMany
     */
    export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Expenses.
         */
        data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
        /**
         * Filter which Expenses to update
         */
        where?: ExpenseWhereInput
    };
    /**
     * Expense upsert
     */
    export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Expense
         */
        select?: ExpenseSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseInclude<ExtArgs> | null
        /**
         * The filter to search for the Expense to update in case it exists.
         */
        where: ExpenseWhereUniqueInput
        /**
         * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
         */
        create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
        /**
         * In case the Expense was found with the provided `where` argument, update it with this data.
         */
        update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    };
    /**
     * Expense delete
     */
    export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Expense
         */
        select?: ExpenseSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseInclude<ExtArgs> | null
        /**
         * Filter which Expense to delete.
         */
        where: ExpenseWhereUniqueInput
    };
    /**
     * Expense deleteMany
     */
    export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Expenses to delete
         */
        where?: ExpenseWhereInput
    };
    /**
     * Expense.shares
     */
    export type Expense$sharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExpenseShare
         */
        select?: ExpenseShareSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseShareInclude<ExtArgs> | null
        where?: ExpenseShareWhereInput
        orderBy?: ExpenseShareOrderByWithRelationInput | ExpenseShareOrderByWithRelationInput[]
        cursor?: ExpenseShareWhereUniqueInput
        take?: number
        skip?: number
        distinct?: ExpenseShareScalarFieldEnum | ExpenseShareScalarFieldEnum[]
    };
    /**
     * Expense.messageAttachments
     */
    export type Expense$messageAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MessageAttachment
         */
        select?: MessageAttachmentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MessageAttachmentInclude<ExtArgs> | null
        where?: MessageAttachmentWhereInput
        orderBy?: MessageAttachmentOrderByWithRelationInput | MessageAttachmentOrderByWithRelationInput[]
        cursor?: MessageAttachmentWhereUniqueInput
        take?: number
        skip?: number
        distinct?: MessageAttachmentScalarFieldEnum | MessageAttachmentScalarFieldEnum[]
    };
    /**
     * Expense without action
     */
    export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Expense
         */
        select?: ExpenseSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseInclude<ExtArgs> | null
    };
    /**
     * Model ExpenseShare
     */
    export type AggregateExpenseShare = {
        _count: ExpenseShareCountAggregateOutputType | null
        _avg: ExpenseShareAvgAggregateOutputType | null
        _sum: ExpenseShareSumAggregateOutputType | null
        _min: ExpenseShareMinAggregateOutputType | null
        _max: ExpenseShareMaxAggregateOutputType | null
    };
    export type ExpenseShareAvgAggregateOutputType = {
        amount: number | null
    };
    export type ExpenseShareSumAggregateOutputType = {
        amount: number | null
    };
    export type ExpenseShareMinAggregateOutputType = {
        id: string | null
        createdAt: Date | null
        updatedAt: Date | null
        userId: string | null
        expenseId: string | null
        amount: number | null
        currency: $Enums.CurrencyCode | null
        locked: boolean | null
    };
    export type ExpenseShareMaxAggregateOutputType = {
        id: string | null
        createdAt: Date | null
        updatedAt: Date | null
        userId: string | null
        expenseId: string | null
        amount: number | null
        currency: $Enums.CurrencyCode | null
        locked: boolean | null
    };
    export type ExpenseShareCountAggregateOutputType = {
        id: number
        createdAt: number
        updatedAt: number
        userId: number
        expenseId: number
        amount: number
        currency: number
        locked: number
        conversion: number
        _all: number
    };
    export type ExpenseShareAvgAggregateInputType = {
        amount?: true
    };
    export type ExpenseShareSumAggregateInputType = {
        amount?: true
    };
    export type ExpenseShareMinAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        userId?: true
        expenseId?: true
        amount?: true
        currency?: true
        locked?: true
    };
    export type ExpenseShareMaxAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        userId?: true
        expenseId?: true
        amount?: true
        currency?: true
        locked?: true
    };
    export type ExpenseShareCountAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        userId?: true
        expenseId?: true
        amount?: true
        currency?: true
        locked?: true
        conversion?: true
        _all?: true
    };
    export type ExpenseShareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which ExpenseShare to aggregate.
         */
        where?: ExpenseShareWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of ExpenseShares to fetch.
         */
        orderBy?: ExpenseShareOrderByWithRelationInput | ExpenseShareOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the start position
         */
        cursor?: ExpenseShareWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` ExpenseShares from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` ExpenseShares.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Count returned ExpenseShares
        **/
        _count?: true | ExpenseShareCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to average
        **/
        _avg?: ExpenseShareAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to sum
        **/
        _sum?: ExpenseShareSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the minimum value
        **/
        _min?: ExpenseShareMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the maximum value
        **/
        _max?: ExpenseShareMaxAggregateInputType
    };
    export type GetExpenseShareAggregateType<T extends ExpenseShareAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenseShare]: P extends '_count' | 'count'
        ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenseShare[P]>
        : GetScalarType<T[P], AggregateExpenseShare[P]>
    };
    export type ExpenseShareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: ExpenseShareWhereInput
        orderBy?: ExpenseShareOrderByWithAggregationInput | ExpenseShareOrderByWithAggregationInput[]
        by: ExpenseShareScalarFieldEnum[] | ExpenseShareScalarFieldEnum
        having?: ExpenseShareScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: ExpenseShareCountAggregateInputType | true
        _avg?: ExpenseShareAvgAggregateInputType
        _sum?: ExpenseShareSumAggregateInputType
        _min?: ExpenseShareMinAggregateInputType
        _max?: ExpenseShareMaxAggregateInputType
    };
    export type ExpenseShareGroupByOutputType = {
        id: string
        createdAt: Date
        updatedAt: Date
        userId: string
        expenseId: string
        amount: number
        currency: $Enums.CurrencyCode
        locked: boolean
        conversion: CurrencyConversion | null
        _count: ExpenseShareCountAggregateOutputType | null
        _avg: ExpenseShareAvgAggregateOutputType | null
        _sum: ExpenseShareSumAggregateOutputType | null
        _min: ExpenseShareMinAggregateOutputType | null
        _max: ExpenseShareMaxAggregateOutputType | null
    };
    type GetExpenseShareGroupByPayload<T extends ExpenseShareGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<ExpenseShareGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof ExpenseShareGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : GetScalarType<T[P], ExpenseShareGroupByOutputType[P]>
                : GetScalarType<T[P], ExpenseShareGroupByOutputType[P]>
            }
        >
    >;
    export type ExpenseShareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        userId?: boolean
        expenseId?: boolean
        amount?: boolean
        currency?: boolean
        locked?: boolean
        conversion?: boolean
        user?: boolean | ProfileDefaultArgs<ExtArgs>
        expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["expenseShare"]>;
    export type ExpenseShareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        userId?: boolean
        expenseId?: boolean
        amount?: boolean
        currency?: boolean
        locked?: boolean
        conversion?: boolean
        user?: boolean | ProfileDefaultArgs<ExtArgs>
        expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["expenseShare"]>;
    export type ExpenseShareSelectScalar = {
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        userId?: boolean
        expenseId?: boolean
        amount?: boolean
        currency?: boolean
        locked?: boolean
        conversion?: boolean
    };
    export type ExpenseShareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        user?: boolean | ProfileDefaultArgs<ExtArgs>
        expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    };
    export type ExpenseShareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        user?: boolean | ProfileDefaultArgs<ExtArgs>
        expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    };
    export type $ExpenseSharePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "ExpenseShare"
        objects: {
            user: Prisma.$ProfilePayload<ExtArgs>
            expense: Prisma.$ExpensePayload<ExtArgs>
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            createdAt: Date
            updatedAt: Date
            userId: string
            expenseId: string
            amount: number
            currency: $Enums.CurrencyCode
            locked: boolean
            /**
             * @json
             */
            conversion: CurrencyConversion | null
        }, ExtArgs["result"]["expenseShare"]>
        composites: {}
    };
    type ExpenseShareGetPayload<S extends boolean | null | undefined | ExpenseShareDefaultArgs> = $Result.GetResult<Prisma.$ExpenseSharePayload, S>;
    type ExpenseShareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<ExpenseShareFindManyArgs, 'select' | 'include' | 'distinct'> & {
        select?: ExpenseShareCountAggregateInputType | true
    };
    /**
     * ExpenseShare findUnique
     */
    export type ExpenseShareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExpenseShare
         */
        select?: ExpenseShareSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseShareInclude<ExtArgs> | null
        /**
         * Filter, which ExpenseShare to fetch.
         */
        where: ExpenseShareWhereUniqueInput
    };
    /**
     * ExpenseShare findUniqueOrThrow
     */
    export type ExpenseShareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExpenseShare
         */
        select?: ExpenseShareSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseShareInclude<ExtArgs> | null
        /**
         * Filter, which ExpenseShare to fetch.
         */
        where: ExpenseShareWhereUniqueInput
    };
    /**
     * ExpenseShare findFirst
     */
    export type ExpenseShareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExpenseShare
         */
        select?: ExpenseShareSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseShareInclude<ExtArgs> | null
        /**
         * Filter, which ExpenseShare to fetch.
         */
        where?: ExpenseShareWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of ExpenseShares to fetch.
         */
        orderBy?: ExpenseShareOrderByWithRelationInput | ExpenseShareOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for ExpenseShares.
         */
        cursor?: ExpenseShareWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` ExpenseShares from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` ExpenseShares.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of ExpenseShares.
         */
        distinct?: ExpenseShareScalarFieldEnum | ExpenseShareScalarFieldEnum[]
    };
    /**
     * ExpenseShare findFirstOrThrow
     */
    export type ExpenseShareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExpenseShare
         */
        select?: ExpenseShareSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseShareInclude<ExtArgs> | null
        /**
         * Filter, which ExpenseShare to fetch.
         */
        where?: ExpenseShareWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of ExpenseShares to fetch.
         */
        orderBy?: ExpenseShareOrderByWithRelationInput | ExpenseShareOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for ExpenseShares.
         */
        cursor?: ExpenseShareWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` ExpenseShares from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` ExpenseShares.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of ExpenseShares.
         */
        distinct?: ExpenseShareScalarFieldEnum | ExpenseShareScalarFieldEnum[]
    };
    /**
     * ExpenseShare findMany
     */
    export type ExpenseShareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExpenseShare
         */
        select?: ExpenseShareSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseShareInclude<ExtArgs> | null
        /**
         * Filter, which ExpenseShares to fetch.
         */
        where?: ExpenseShareWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of ExpenseShares to fetch.
         */
        orderBy?: ExpenseShareOrderByWithRelationInput | ExpenseShareOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for listing ExpenseShares.
         */
        cursor?: ExpenseShareWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` ExpenseShares from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` ExpenseShares.
         */
        skip?: number
        distinct?: ExpenseShareScalarFieldEnum | ExpenseShareScalarFieldEnum[]
    };
    /**
     * ExpenseShare create
     */
    export type ExpenseShareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExpenseShare
         */
        select?: ExpenseShareSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseShareInclude<ExtArgs> | null
        /**
         * The data needed to create a ExpenseShare.
         */
        data: XOR<ExpenseShareCreateInput, ExpenseShareUncheckedCreateInput>
    };
    /**
     * ExpenseShare createMany
     */
    export type ExpenseShareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many ExpenseShares.
         */
        data: ExpenseShareCreateManyInput | ExpenseShareCreateManyInput[]
        skipDuplicates?: boolean
    };
    /**
     * ExpenseShare createManyAndReturn
     */
    export type ExpenseShareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExpenseShare
         */
        select?: ExpenseShareSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * The data used to create many ExpenseShares.
         */
        data: ExpenseShareCreateManyInput | ExpenseShareCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseShareIncludeCreateManyAndReturn<ExtArgs> | null
    };
    /**
     * ExpenseShare update
     */
    export type ExpenseShareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExpenseShare
         */
        select?: ExpenseShareSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseShareInclude<ExtArgs> | null
        /**
         * The data needed to update a ExpenseShare.
         */
        data: XOR<ExpenseShareUpdateInput, ExpenseShareUncheckedUpdateInput>
        /**
         * Choose, which ExpenseShare to update.
         */
        where: ExpenseShareWhereUniqueInput
    };
    /**
     * ExpenseShare updateMany
     */
    export type ExpenseShareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update ExpenseShares.
         */
        data: XOR<ExpenseShareUpdateManyMutationInput, ExpenseShareUncheckedUpdateManyInput>
        /**
         * Filter which ExpenseShares to update
         */
        where?: ExpenseShareWhereInput
    };
    /**
     * ExpenseShare upsert
     */
    export type ExpenseShareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExpenseShare
         */
        select?: ExpenseShareSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseShareInclude<ExtArgs> | null
        /**
         * The filter to search for the ExpenseShare to update in case it exists.
         */
        where: ExpenseShareWhereUniqueInput
        /**
         * In case the ExpenseShare found by the `where` argument doesn't exist, create a new ExpenseShare with this data.
         */
        create: XOR<ExpenseShareCreateInput, ExpenseShareUncheckedCreateInput>
        /**
         * In case the ExpenseShare was found with the provided `where` argument, update it with this data.
         */
        update: XOR<ExpenseShareUpdateInput, ExpenseShareUncheckedUpdateInput>
    };
    /**
     * ExpenseShare delete
     */
    export type ExpenseShareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExpenseShare
         */
        select?: ExpenseShareSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseShareInclude<ExtArgs> | null
        /**
         * Filter which ExpenseShare to delete.
         */
        where: ExpenseShareWhereUniqueInput
    };
    /**
     * ExpenseShare deleteMany
     */
    export type ExpenseShareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which ExpenseShares to delete
         */
        where?: ExpenseShareWhereInput
    };
    /**
     * ExpenseShare without action
     */
    export type ExpenseShareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExpenseShare
         */
        select?: ExpenseShareSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ExpenseShareInclude<ExtArgs> | null
    };
    /**
     * Model Payment
     */
    export type AggregatePayment = {
        _count: PaymentCountAggregateOutputType | null
        _avg: PaymentAvgAggregateOutputType | null
        _sum: PaymentSumAggregateOutputType | null
        _min: PaymentMinAggregateOutputType | null
        _max: PaymentMaxAggregateOutputType | null
    };
    export type PaymentAvgAggregateOutputType = {
        amount: number | null
    };
    export type PaymentSumAggregateOutputType = {
        amount: number | null
    };
    export type PaymentMinAggregateOutputType = {
        id: string | null
        createdAt: Date | null
        updatedAt: Date | null
        groupId: string | null
        amount: number | null
        currency: $Enums.CurrencyCode | null
        recipientId: string | null
        payerId: string | null
    };
    export type PaymentMaxAggregateOutputType = {
        id: string | null
        createdAt: Date | null
        updatedAt: Date | null
        groupId: string | null
        amount: number | null
        currency: $Enums.CurrencyCode | null
        recipientId: string | null
        payerId: string | null
    };
    export type PaymentCountAggregateOutputType = {
        id: number
        createdAt: number
        updatedAt: number
        groupId: number
        amount: number
        currency: number
        conversion: number
        recipientId: number
        payerId: number
        _all: number
    };
    export type PaymentAvgAggregateInputType = {
        amount?: true
    };
    export type PaymentSumAggregateInputType = {
        amount?: true
    };
    export type PaymentMinAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        groupId?: true
        amount?: true
        currency?: true
        recipientId?: true
        payerId?: true
    };
    export type PaymentMaxAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        groupId?: true
        amount?: true
        currency?: true
        recipientId?: true
        payerId?: true
    };
    export type PaymentCountAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        groupId?: true
        amount?: true
        currency?: true
        conversion?: true
        recipientId?: true
        payerId?: true
        _all?: true
    };
    export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Payment to aggregate.
         */
        where?: PaymentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Payments to fetch.
         */
        orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the start position
         */
        cursor?: PaymentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Payments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Payments.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Count returned Payments
        **/
        _count?: true | PaymentCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to average
        **/
        _avg?: PaymentAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to sum
        **/
        _sum?: PaymentSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the minimum value
        **/
        _min?: PaymentMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the maximum value
        **/
        _max?: PaymentMaxAggregateInputType
    };
    export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
        ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
        : GetScalarType<T[P], AggregatePayment[P]>
    };
    export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: PaymentWhereInput
        orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
        by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
        having?: PaymentScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: PaymentCountAggregateInputType | true
        _avg?: PaymentAvgAggregateInputType
        _sum?: PaymentSumAggregateInputType
        _min?: PaymentMinAggregateInputType
        _max?: PaymentMaxAggregateInputType
    };
    export type PaymentGroupByOutputType = {
        id: string
        createdAt: Date
        updatedAt: Date
        groupId: string
        amount: number
        currency: $Enums.CurrencyCode
        conversion: CurrencyConversion | null
        recipientId: string
        payerId: string
        _count: PaymentCountAggregateOutputType | null
        _avg: PaymentAvgAggregateOutputType | null
        _sum: PaymentSumAggregateOutputType | null
        _min: PaymentMinAggregateOutputType | null
        _max: PaymentMaxAggregateOutputType | null
    };
    type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<PaymentGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : GetScalarType<T[P], PaymentGroupByOutputType[P]>
                : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            }
        >
    >;
    export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        groupId?: boolean
        amount?: boolean
        currency?: boolean
        conversion?: boolean
        recipientId?: boolean
        payerId?: boolean
        group?: boolean | GroupDefaultArgs<ExtArgs>
        recipient?: boolean | ProfileDefaultArgs<ExtArgs>
        payer?: boolean | ProfileDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["payment"]>;
    export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        groupId?: boolean
        amount?: boolean
        currency?: boolean
        conversion?: boolean
        recipientId?: boolean
        payerId?: boolean
        group?: boolean | GroupDefaultArgs<ExtArgs>
        recipient?: boolean | ProfileDefaultArgs<ExtArgs>
        payer?: boolean | ProfileDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["payment"]>;
    export type PaymentSelectScalar = {
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        groupId?: boolean
        amount?: boolean
        currency?: boolean
        conversion?: boolean
        recipientId?: boolean
        payerId?: boolean
    };
    export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        group?: boolean | GroupDefaultArgs<ExtArgs>
        recipient?: boolean | ProfileDefaultArgs<ExtArgs>
        payer?: boolean | ProfileDefaultArgs<ExtArgs>
    };
    export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        group?: boolean | GroupDefaultArgs<ExtArgs>
        recipient?: boolean | ProfileDefaultArgs<ExtArgs>
        payer?: boolean | ProfileDefaultArgs<ExtArgs>
    };
    export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "Payment"
        objects: {
            group: Prisma.$GroupPayload<ExtArgs>
            recipient: Prisma.$ProfilePayload<ExtArgs>
            payer: Prisma.$ProfilePayload<ExtArgs>
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            createdAt: Date
            updatedAt: Date
            groupId: string
            amount: number
            currency: $Enums.CurrencyCode
            /**
             * @json
             */
            conversion: CurrencyConversion | null
            recipientId: string
            payerId: string
        }, ExtArgs["result"]["payment"]>
        composites: {}
    };
    type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>;
    type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
        select?: PaymentCountAggregateInputType | true
    };
    /**
     * Payment findUnique
     */
    export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        /**
         * Filter, which Payment to fetch.
         */
        where: PaymentWhereUniqueInput
    };
    /**
     * Payment findUniqueOrThrow
     */
    export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        /**
         * Filter, which Payment to fetch.
         */
        where: PaymentWhereUniqueInput
    };
    /**
     * Payment findFirst
     */
    export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        /**
         * Filter, which Payment to fetch.
         */
        where?: PaymentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Payments to fetch.
         */
        orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for Payments.
         */
        cursor?: PaymentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Payments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Payments.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of Payments.
         */
        distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
    };
    /**
     * Payment findFirstOrThrow
     */
    export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        /**
         * Filter, which Payment to fetch.
         */
        where?: PaymentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Payments to fetch.
         */
        orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for Payments.
         */
        cursor?: PaymentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Payments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Payments.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of Payments.
         */
        distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
    };
    /**
     * Payment findMany
     */
    export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        /**
         * Filter, which Payments to fetch.
         */
        where?: PaymentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of Payments to fetch.
         */
        orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for listing Payments.
         */
        cursor?: PaymentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` Payments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` Payments.
         */
        skip?: number
        distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
    };
    /**
     * Payment create
     */
    export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        /**
         * The data needed to create a Payment.
         */
        data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    };
    /**
     * Payment createMany
     */
    export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Payments.
         */
        data: PaymentCreateManyInput | PaymentCreateManyInput[]
        skipDuplicates?: boolean
    };
    /**
     * Payment createManyAndReturn
     */
    export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * The data used to create many Payments.
         */
        data: PaymentCreateManyInput | PaymentCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
    };
    /**
     * Payment update
     */
    export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        /**
         * The data needed to update a Payment.
         */
        data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
        /**
         * Choose, which Payment to update.
         */
        where: PaymentWhereUniqueInput
    };
    /**
     * Payment updateMany
     */
    export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Payments.
         */
        data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
        /**
         * Filter which Payments to update
         */
        where?: PaymentWhereInput
    };
    /**
     * Payment upsert
     */
    export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        /**
         * The filter to search for the Payment to update in case it exists.
         */
        where: PaymentWhereUniqueInput
        /**
         * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
         */
        create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
        /**
         * In case the Payment was found with the provided `where` argument, update it with this data.
         */
        update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    };
    /**
     * Payment delete
     */
    export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        /**
         * Filter which Payment to delete.
         */
        where: PaymentWhereUniqueInput
    };
    /**
     * Payment deleteMany
     */
    export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Payments to delete
         */
        where?: PaymentWhereInput
    };
    /**
     * Payment without action
     */
    export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
    };
    /**
     * Model ExchangeRates
     */
    export type AggregateExchangeRates = {
        _count: ExchangeRatesCountAggregateOutputType | null
        _min: ExchangeRatesMinAggregateOutputType | null
        _max: ExchangeRatesMaxAggregateOutputType | null
    };
    export type ExchangeRatesMinAggregateOutputType = {
        id: string | null
        createdAt: Date | null
        updatedAt: Date | null
        baseCurrency: string | null
    };
    export type ExchangeRatesMaxAggregateOutputType = {
        id: string | null
        createdAt: Date | null
        updatedAt: Date | null
        baseCurrency: string | null
    };
    export type ExchangeRatesCountAggregateOutputType = {
        id: number
        createdAt: number
        updatedAt: number
        baseCurrency: number
        rates: number
        _all: number
    };
    export type ExchangeRatesMinAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        baseCurrency?: true
    };
    export type ExchangeRatesMaxAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        baseCurrency?: true
    };
    export type ExchangeRatesCountAggregateInputType = {
        id?: true
        createdAt?: true
        updatedAt?: true
        baseCurrency?: true
        rates?: true
        _all?: true
    };
    export type ExchangeRatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which ExchangeRates to aggregate.
         */
        where?: ExchangeRatesWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of ExchangeRates to fetch.
         */
        orderBy?: ExchangeRatesOrderByWithRelationInput | ExchangeRatesOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the start position
         */
        cursor?: ExchangeRatesWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` ExchangeRates from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` ExchangeRates.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Count returned ExchangeRates
        **/
        _count?: true | ExchangeRatesCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the minimum value
        **/
        _min?: ExchangeRatesMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         * 
         * Select which fields to find the maximum value
        **/
        _max?: ExchangeRatesMaxAggregateInputType
    };
    export type GetExchangeRatesAggregateType<T extends ExchangeRatesAggregateArgs> = {
        [P in keyof T & keyof AggregateExchangeRates]: P extends '_count' | 'count'
        ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExchangeRates[P]>
        : GetScalarType<T[P], AggregateExchangeRates[P]>
    };
    export type ExchangeRatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: ExchangeRatesWhereInput
        orderBy?: ExchangeRatesOrderByWithAggregationInput | ExchangeRatesOrderByWithAggregationInput[]
        by: ExchangeRatesScalarFieldEnum[] | ExchangeRatesScalarFieldEnum
        having?: ExchangeRatesScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: ExchangeRatesCountAggregateInputType | true
        _min?: ExchangeRatesMinAggregateInputType
        _max?: ExchangeRatesMaxAggregateInputType
    };
    export type ExchangeRatesGroupByOutputType = {
        id: string
        createdAt: Date
        updatedAt: Date
        baseCurrency: string
        rates: JsonValue
        _count: ExchangeRatesCountAggregateOutputType | null
        _min: ExchangeRatesMinAggregateOutputType | null
        _max: ExchangeRatesMaxAggregateOutputType | null
    };
    type GetExchangeRatesGroupByPayload<T extends ExchangeRatesGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<ExchangeRatesGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof ExchangeRatesGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : GetScalarType<T[P], ExchangeRatesGroupByOutputType[P]>
                : GetScalarType<T[P], ExchangeRatesGroupByOutputType[P]>
            }
        >
    >;
    export type ExchangeRatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        baseCurrency?: boolean
        rates?: boolean
    }, ExtArgs["result"]["exchangeRates"]>;
    export type ExchangeRatesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        baseCurrency?: boolean
        rates?: boolean
    }, ExtArgs["result"]["exchangeRates"]>;
    export type ExchangeRatesSelectScalar = {
        id?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        baseCurrency?: boolean
        rates?: boolean
    };
    export type $ExchangeRatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "ExchangeRates"
        objects: {}
        scalars: $Extensions.GetPayloadResult<{
            id: string
            createdAt: Date
            updatedAt: Date
            baseCurrency: string
            rates: Prisma.JsonValue
        }, ExtArgs["result"]["exchangeRates"]>
        composites: {}
    };
    type ExchangeRatesGetPayload<S extends boolean | null | undefined | ExchangeRatesDefaultArgs> = $Result.GetResult<Prisma.$ExchangeRatesPayload, S>;
    type ExchangeRatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<ExchangeRatesFindManyArgs, 'select' | 'include' | 'distinct'> & {
        select?: ExchangeRatesCountAggregateInputType | true
    };
    /**
     * ExchangeRates findUnique
     */
    export type ExchangeRatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExchangeRates
         */
        select?: ExchangeRatesSelect<ExtArgs> | null
        /**
         * Filter, which ExchangeRates to fetch.
         */
        where: ExchangeRatesWhereUniqueInput
    };
    /**
     * ExchangeRates findUniqueOrThrow
     */
    export type ExchangeRatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExchangeRates
         */
        select?: ExchangeRatesSelect<ExtArgs> | null
        /**
         * Filter, which ExchangeRates to fetch.
         */
        where: ExchangeRatesWhereUniqueInput
    };
    /**
     * ExchangeRates findFirst
     */
    export type ExchangeRatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExchangeRates
         */
        select?: ExchangeRatesSelect<ExtArgs> | null
        /**
         * Filter, which ExchangeRates to fetch.
         */
        where?: ExchangeRatesWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of ExchangeRates to fetch.
         */
        orderBy?: ExchangeRatesOrderByWithRelationInput | ExchangeRatesOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for ExchangeRates.
         */
        cursor?: ExchangeRatesWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` ExchangeRates from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` ExchangeRates.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of ExchangeRates.
         */
        distinct?: ExchangeRatesScalarFieldEnum | ExchangeRatesScalarFieldEnum[]
    };
    /**
     * ExchangeRates findFirstOrThrow
     */
    export type ExchangeRatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExchangeRates
         */
        select?: ExchangeRatesSelect<ExtArgs> | null
        /**
         * Filter, which ExchangeRates to fetch.
         */
        where?: ExchangeRatesWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of ExchangeRates to fetch.
         */
        orderBy?: ExchangeRatesOrderByWithRelationInput | ExchangeRatesOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for searching for ExchangeRates.
         */
        cursor?: ExchangeRatesWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` ExchangeRates from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` ExchangeRates.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         * 
         * Filter by unique combinations of ExchangeRates.
         */
        distinct?: ExchangeRatesScalarFieldEnum | ExchangeRatesScalarFieldEnum[]
    };
    /**
     * ExchangeRates findMany
     */
    export type ExchangeRatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExchangeRates
         */
        select?: ExchangeRatesSelect<ExtArgs> | null
        /**
         * Filter, which ExchangeRates to fetch.
         */
        where?: ExchangeRatesWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         * 
         * Determine the order of ExchangeRates to fetch.
         */
        orderBy?: ExchangeRatesOrderByWithRelationInput | ExchangeRatesOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         * 
         * Sets the position for listing ExchangeRates.
         */
        cursor?: ExchangeRatesWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Take `±n` ExchangeRates from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         * 
         * Skip the first `n` ExchangeRates.
         */
        skip?: number
        distinct?: ExchangeRatesScalarFieldEnum | ExchangeRatesScalarFieldEnum[]
    };
    /**
     * ExchangeRates create
     */
    export type ExchangeRatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExchangeRates
         */
        select?: ExchangeRatesSelect<ExtArgs> | null
        /**
         * The data needed to create a ExchangeRates.
         */
        data: XOR<ExchangeRatesCreateInput, ExchangeRatesUncheckedCreateInput>
    };
    /**
     * ExchangeRates createMany
     */
    export type ExchangeRatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many ExchangeRates.
         */
        data: ExchangeRatesCreateManyInput | ExchangeRatesCreateManyInput[]
        skipDuplicates?: boolean
    };
    /**
     * ExchangeRates createManyAndReturn
     */
    export type ExchangeRatesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExchangeRates
         */
        select?: ExchangeRatesSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * The data used to create many ExchangeRates.
         */
        data: ExchangeRatesCreateManyInput | ExchangeRatesCreateManyInput[]
        skipDuplicates?: boolean
    };
    /**
     * ExchangeRates update
     */
    export type ExchangeRatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExchangeRates
         */
        select?: ExchangeRatesSelect<ExtArgs> | null
        /**
         * The data needed to update a ExchangeRates.
         */
        data: XOR<ExchangeRatesUpdateInput, ExchangeRatesUncheckedUpdateInput>
        /**
         * Choose, which ExchangeRates to update.
         */
        where: ExchangeRatesWhereUniqueInput
    };
    /**
     * ExchangeRates updateMany
     */
    export type ExchangeRatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update ExchangeRates.
         */
        data: XOR<ExchangeRatesUpdateManyMutationInput, ExchangeRatesUncheckedUpdateManyInput>
        /**
         * Filter which ExchangeRates to update
         */
        where?: ExchangeRatesWhereInput
    };
    /**
     * ExchangeRates upsert
     */
    export type ExchangeRatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExchangeRates
         */
        select?: ExchangeRatesSelect<ExtArgs> | null
        /**
         * The filter to search for the ExchangeRates to update in case it exists.
         */
        where: ExchangeRatesWhereUniqueInput
        /**
         * In case the ExchangeRates found by the `where` argument doesn't exist, create a new ExchangeRates with this data.
         */
        create: XOR<ExchangeRatesCreateInput, ExchangeRatesUncheckedCreateInput>
        /**
         * In case the ExchangeRates was found with the provided `where` argument, update it with this data.
         */
        update: XOR<ExchangeRatesUpdateInput, ExchangeRatesUncheckedUpdateInput>
    };
    /**
     * ExchangeRates delete
     */
    export type ExchangeRatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExchangeRates
         */
        select?: ExchangeRatesSelect<ExtArgs> | null
        /**
         * Filter which ExchangeRates to delete.
         */
        where: ExchangeRatesWhereUniqueInput
    };
    /**
     * ExchangeRates deleteMany
     */
    export type ExchangeRatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which ExchangeRates to delete
         */
        where?: ExchangeRatesWhereInput
    };
    /**
     * ExchangeRates without action
     */
    export type ExchangeRatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ExchangeRates
         */
        select?: ExchangeRatesSelect<ExtArgs> | null
    };
    export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
    export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum];
    export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum];
    export type GroupParticipantScalarFieldEnum = (typeof GroupParticipantScalarFieldEnum)[keyof typeof GroupParticipantScalarFieldEnum];
    export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum];
    export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];
    export type MessageAttachmentScalarFieldEnum = (typeof MessageAttachmentScalarFieldEnum)[keyof typeof MessageAttachmentScalarFieldEnum];
    export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum];
    export type ExpenseShareScalarFieldEnum = (typeof ExpenseShareScalarFieldEnum)[keyof typeof ExpenseShareScalarFieldEnum];
    export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];
    export type ExchangeRatesScalarFieldEnum = (typeof ExchangeRatesScalarFieldEnum)[keyof typeof ExchangeRatesScalarFieldEnum];
    export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
    export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
    export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
    export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
    export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
    export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
    /**
     * Field references 
     */
    /**
     * Reference to a field of type 'String'
     */
    export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
    /**
     * Reference to a field of type 'String[]'
     */
    export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
    /**
     * Reference to a field of type 'CurrencyCode'
     */
    export type EnumCurrencyCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyCode'>;
    /**
     * Reference to a field of type 'CurrencyCode[]'
     */
    export type ListEnumCurrencyCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyCode[]'>;
    /**
     * Reference to a field of type 'DateTime'
     */
    export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
    /**
     * Reference to a field of type 'DateTime[]'
     */
    export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
    /**
     * Reference to a field of type 'Role'
     */
    export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
    /**
     * Reference to a field of type 'Role[]'
     */
    export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
    /**
     * Reference to a field of type 'AuthorType'
     */
    export type EnumAuthorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthorType'>;
    /**
     * Reference to a field of type 'AuthorType[]'
     */
    export type ListEnumAuthorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthorType[]'>;
    /**
     * Reference to a field of type 'MessageAttachmentType'
     */
    export type EnumMessageAttachmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageAttachmentType'>;
    /**
     * Reference to a field of type 'MessageAttachmentType[]'
     */
    export type ListEnumMessageAttachmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageAttachmentType[]'>;
    /**
     * Reference to a field of type 'Int'
     */
    export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
    /**
     * Reference to a field of type 'Int[]'
     */
    export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
    /**
     * Reference to a field of type 'Json'
     */
    export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
    /**
     * Reference to a field of type 'Boolean'
     */
    export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
    /**
     * Reference to a field of type 'Float'
     */
    export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
    /**
     * Reference to a field of type 'Float[]'
     */
    export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
    /**
     * Deep Input Types
     */
    export type ProfileWhereInput = {
        AND?: ProfileWhereInput | ProfileWhereInput[]
        OR?: ProfileWhereInput[]
        NOT?: ProfileWhereInput | ProfileWhereInput[]
        userId?: StringFilter<"Profile"> | string
        email?: StringFilter<"Profile"> | string
        firstName?: StringFilter<"Profile"> | string
        lastName?: StringFilter<"Profile"> | string
        currency?: EnumCurrencyCodeFilter<"Profile"> | $Enums.CurrencyCode
        avatarId?: StringNullableFilter<"Profile"> | string | null
        createdAt?: DateTimeFilter<"Profile"> | Date | string
        updatedAt?: DateTimeFilter<"Profile"> | Date | string
        groups?: GroupParticipantListRelationFilter
        avatar?: XOR<ImageNullableRelationFilter, ImageWhereInput> | null
        messages?: MessageListRelationFilter
        expensesOwned?: ExpenseListRelationFilter
        expensesPaid?: ExpenseListRelationFilter
        expenseShares?: ExpenseShareListRelationFilter
        paymentsReceived?: PaymentListRelationFilter
        paymentsPaid?: PaymentListRelationFilter
    };
    export type ProfileOrderByWithRelationInput = {
        userId?: SortOrder
        email?: SortOrder
        firstName?: SortOrder
        lastName?: SortOrder
        currency?: SortOrder
        avatarId?: SortOrderInput | SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        groups?: GroupParticipantOrderByRelationAggregateInput
        avatar?: ImageOrderByWithRelationInput
        messages?: MessageOrderByRelationAggregateInput
        expensesOwned?: ExpenseOrderByRelationAggregateInput
        expensesPaid?: ExpenseOrderByRelationAggregateInput
        expenseShares?: ExpenseShareOrderByRelationAggregateInput
        paymentsReceived?: PaymentOrderByRelationAggregateInput
        paymentsPaid?: PaymentOrderByRelationAggregateInput
    };
    export type ProfileWhereUniqueInput = Prisma.AtLeast<{
        userId?: string
        AND?: ProfileWhereInput | ProfileWhereInput[]
        OR?: ProfileWhereInput[]
        NOT?: ProfileWhereInput | ProfileWhereInput[]
        email?: StringFilter<"Profile"> | string
        firstName?: StringFilter<"Profile"> | string
        lastName?: StringFilter<"Profile"> | string
        currency?: EnumCurrencyCodeFilter<"Profile"> | $Enums.CurrencyCode
        avatarId?: StringNullableFilter<"Profile"> | string | null
        createdAt?: DateTimeFilter<"Profile"> | Date | string
        updatedAt?: DateTimeFilter<"Profile"> | Date | string
        groups?: GroupParticipantListRelationFilter
        avatar?: XOR<ImageNullableRelationFilter, ImageWhereInput> | null
        messages?: MessageListRelationFilter
        expensesOwned?: ExpenseListRelationFilter
        expensesPaid?: ExpenseListRelationFilter
        expenseShares?: ExpenseShareListRelationFilter
        paymentsReceived?: PaymentListRelationFilter
        paymentsPaid?: PaymentListRelationFilter
    }, "userId">;
    export type ProfileOrderByWithAggregationInput = {
        userId?: SortOrder
        email?: SortOrder
        firstName?: SortOrder
        lastName?: SortOrder
        currency?: SortOrder
        avatarId?: SortOrderInput | SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        _count?: ProfileCountOrderByAggregateInput
        _max?: ProfileMaxOrderByAggregateInput
        _min?: ProfileMinOrderByAggregateInput
    };
    export type ProfileScalarWhereWithAggregatesInput = {
        AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
        OR?: ProfileScalarWhereWithAggregatesInput[]
        NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
        userId?: StringWithAggregatesFilter<"Profile"> | string
        email?: StringWithAggregatesFilter<"Profile"> | string
        firstName?: StringWithAggregatesFilter<"Profile"> | string
        lastName?: StringWithAggregatesFilter<"Profile"> | string
        currency?: EnumCurrencyCodeWithAggregatesFilter<"Profile"> | $Enums.CurrencyCode
        avatarId?: StringNullableWithAggregatesFilter<"Profile"> | string | null
        createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    };
    export type GroupWhereInput = {
        AND?: GroupWhereInput | GroupWhereInput[]
        OR?: GroupWhereInput[]
        NOT?: GroupWhereInput | GroupWhereInput[]
        id?: StringFilter<"Group"> | string
        createdAt?: DateTimeFilter<"Group"> | Date | string
        updatedAt?: DateTimeFilter<"Group"> | Date | string
        name?: StringFilter<"Group"> | string
        currency?: EnumCurrencyCodeFilter<"Group"> | $Enums.CurrencyCode
        coverImageId?: StringNullableFilter<"Group"> | string | null
        participants?: GroupParticipantListRelationFilter
        coverImage?: XOR<ImageNullableRelationFilter, ImageWhereInput> | null
        messages?: MessageListRelationFilter
        expenses?: ExpenseListRelationFilter
        payments?: PaymentListRelationFilter
    };
    export type GroupOrderByWithRelationInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        name?: SortOrder
        currency?: SortOrder
        coverImageId?: SortOrderInput | SortOrder
        participants?: GroupParticipantOrderByRelationAggregateInput
        coverImage?: ImageOrderByWithRelationInput
        messages?: MessageOrderByRelationAggregateInput
        expenses?: ExpenseOrderByRelationAggregateInput
        payments?: PaymentOrderByRelationAggregateInput
    };
    export type GroupWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        AND?: GroupWhereInput | GroupWhereInput[]
        OR?: GroupWhereInput[]
        NOT?: GroupWhereInput | GroupWhereInput[]
        createdAt?: DateTimeFilter<"Group"> | Date | string
        updatedAt?: DateTimeFilter<"Group"> | Date | string
        name?: StringFilter<"Group"> | string
        currency?: EnumCurrencyCodeFilter<"Group"> | $Enums.CurrencyCode
        coverImageId?: StringNullableFilter<"Group"> | string | null
        participants?: GroupParticipantListRelationFilter
        coverImage?: XOR<ImageNullableRelationFilter, ImageWhereInput> | null
        messages?: MessageListRelationFilter
        expenses?: ExpenseListRelationFilter
        payments?: PaymentListRelationFilter
    }, "id">;
    export type GroupOrderByWithAggregationInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        name?: SortOrder
        currency?: SortOrder
        coverImageId?: SortOrderInput | SortOrder
        _count?: GroupCountOrderByAggregateInput
        _max?: GroupMaxOrderByAggregateInput
        _min?: GroupMinOrderByAggregateInput
    };
    export type GroupScalarWhereWithAggregatesInput = {
        AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
        OR?: GroupScalarWhereWithAggregatesInput[]
        NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"Group"> | string
        createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
        name?: StringWithAggregatesFilter<"Group"> | string
        currency?: EnumCurrencyCodeWithAggregatesFilter<"Group"> | $Enums.CurrencyCode
        coverImageId?: StringNullableWithAggregatesFilter<"Group"> | string | null
    };
    export type GroupParticipantWhereInput = {
        AND?: GroupParticipantWhereInput | GroupParticipantWhereInput[]
        OR?: GroupParticipantWhereInput[]
        NOT?: GroupParticipantWhereInput | GroupParticipantWhereInput[]
        id?: StringFilter<"GroupParticipant"> | string
        createdAt?: DateTimeFilter<"GroupParticipant"> | Date | string
        updatedAt?: DateTimeFilter<"GroupParticipant"> | Date | string
        userId?: StringFilter<"GroupParticipant"> | string
        groupId?: StringFilter<"GroupParticipant"> | string
        role?: EnumRoleFilter<"GroupParticipant"> | $Enums.Role
        user?: XOR<ProfileRelationFilter, ProfileWhereInput>
        group?: XOR<GroupRelationFilter, GroupWhereInput>
    };
    export type GroupParticipantOrderByWithRelationInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        userId?: SortOrder
        groupId?: SortOrder
        role?: SortOrder
        user?: ProfileOrderByWithRelationInput
        group?: GroupOrderByWithRelationInput
    };
    export type GroupParticipantWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        AND?: GroupParticipantWhereInput | GroupParticipantWhereInput[]
        OR?: GroupParticipantWhereInput[]
        NOT?: GroupParticipantWhereInput | GroupParticipantWhereInput[]
        createdAt?: DateTimeFilter<"GroupParticipant"> | Date | string
        updatedAt?: DateTimeFilter<"GroupParticipant"> | Date | string
        userId?: StringFilter<"GroupParticipant"> | string
        groupId?: StringFilter<"GroupParticipant"> | string
        role?: EnumRoleFilter<"GroupParticipant"> | $Enums.Role
        user?: XOR<ProfileRelationFilter, ProfileWhereInput>
        group?: XOR<GroupRelationFilter, GroupWhereInput>
    }, "id">;
    export type GroupParticipantOrderByWithAggregationInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        userId?: SortOrder
        groupId?: SortOrder
        role?: SortOrder
        _count?: GroupParticipantCountOrderByAggregateInput
        _max?: GroupParticipantMaxOrderByAggregateInput
        _min?: GroupParticipantMinOrderByAggregateInput
    };
    export type GroupParticipantScalarWhereWithAggregatesInput = {
        AND?: GroupParticipantScalarWhereWithAggregatesInput | GroupParticipantScalarWhereWithAggregatesInput[]
        OR?: GroupParticipantScalarWhereWithAggregatesInput[]
        NOT?: GroupParticipantScalarWhereWithAggregatesInput | GroupParticipantScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"GroupParticipant"> | string
        createdAt?: DateTimeWithAggregatesFilter<"GroupParticipant"> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<"GroupParticipant"> | Date | string
        userId?: StringWithAggregatesFilter<"GroupParticipant"> | string
        groupId?: StringWithAggregatesFilter<"GroupParticipant"> | string
        role?: EnumRoleWithAggregatesFilter<"GroupParticipant"> | $Enums.Role
    };
    export type ImageWhereInput = {
        AND?: ImageWhereInput | ImageWhereInput[]
        OR?: ImageWhereInput[]
        NOT?: ImageWhereInput | ImageWhereInput[]
        id?: StringFilter<"Image"> | string
        createdAt?: DateTimeFilter<"Image"> | Date | string
        updatedAt?: DateTimeFilter<"Image"> | Date | string
        path?: StringFilter<"Image"> | string
        bucket?: StringFilter<"Image"> | string
        uploadedById?: StringFilter<"Image"> | string
        blurhash?: StringNullableFilter<"Image"> | string | null
        Group?: GroupListRelationFilter
        Profile?: ProfileListRelationFilter
    };
    export type ImageOrderByWithRelationInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        path?: SortOrder
        bucket?: SortOrder
        uploadedById?: SortOrder
        blurhash?: SortOrderInput | SortOrder
        Group?: GroupOrderByRelationAggregateInput
        Profile?: ProfileOrderByRelationAggregateInput
    };
    export type ImageWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        AND?: ImageWhereInput | ImageWhereInput[]
        OR?: ImageWhereInput[]
        NOT?: ImageWhereInput | ImageWhereInput[]
        createdAt?: DateTimeFilter<"Image"> | Date | string
        updatedAt?: DateTimeFilter<"Image"> | Date | string
        path?: StringFilter<"Image"> | string
        bucket?: StringFilter<"Image"> | string
        uploadedById?: StringFilter<"Image"> | string
        blurhash?: StringNullableFilter<"Image"> | string | null
        Group?: GroupListRelationFilter
        Profile?: ProfileListRelationFilter
    }, "id">;
    export type ImageOrderByWithAggregationInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        path?: SortOrder
        bucket?: SortOrder
        uploadedById?: SortOrder
        blurhash?: SortOrderInput | SortOrder
        _count?: ImageCountOrderByAggregateInput
        _max?: ImageMaxOrderByAggregateInput
        _min?: ImageMinOrderByAggregateInput
    };
    export type ImageScalarWhereWithAggregatesInput = {
        AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
        OR?: ImageScalarWhereWithAggregatesInput[]
        NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"Image"> | string
        createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
        path?: StringWithAggregatesFilter<"Image"> | string
        bucket?: StringWithAggregatesFilter<"Image"> | string
        uploadedById?: StringWithAggregatesFilter<"Image"> | string
        blurhash?: StringNullableWithAggregatesFilter<"Image"> | string | null
    };
    export type MessageWhereInput = {
        AND?: MessageWhereInput | MessageWhereInput[]
        OR?: MessageWhereInput[]
        NOT?: MessageWhereInput | MessageWhereInput[]
        id?: StringFilter<"Message"> | string
        createdAt?: DateTimeFilter<"Message"> | Date | string
        updatedAt?: DateTimeFilter<"Message"> | Date | string
        key?: StringFilter<"Message"> | string
        text?: StringNullableFilter<"Message"> | string | null
        authorType?: EnumAuthorTypeFilter<"Message"> | $Enums.AuthorType
        authorId?: StringNullableFilter<"Message"> | string | null
        groupId?: StringFilter<"Message"> | string
        author?: XOR<ProfileNullableRelationFilter, ProfileWhereInput> | null
        group?: XOR<GroupRelationFilter, GroupWhereInput>
        attachments?: MessageAttachmentListRelationFilter
    };
    export type MessageOrderByWithRelationInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        key?: SortOrder
        text?: SortOrderInput | SortOrder
        authorType?: SortOrder
        authorId?: SortOrderInput | SortOrder
        groupId?: SortOrder
        author?: ProfileOrderByWithRelationInput
        group?: GroupOrderByWithRelationInput
        attachments?: MessageAttachmentOrderByRelationAggregateInput
    };
    export type MessageWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        AND?: MessageWhereInput | MessageWhereInput[]
        OR?: MessageWhereInput[]
        NOT?: MessageWhereInput | MessageWhereInput[]
        createdAt?: DateTimeFilter<"Message"> | Date | string
        updatedAt?: DateTimeFilter<"Message"> | Date | string
        key?: StringFilter<"Message"> | string
        text?: StringNullableFilter<"Message"> | string | null
        authorType?: EnumAuthorTypeFilter<"Message"> | $Enums.AuthorType
        authorId?: StringNullableFilter<"Message"> | string | null
        groupId?: StringFilter<"Message"> | string
        author?: XOR<ProfileNullableRelationFilter, ProfileWhereInput> | null
        group?: XOR<GroupRelationFilter, GroupWhereInput>
        attachments?: MessageAttachmentListRelationFilter
    }, "id">;
    export type MessageOrderByWithAggregationInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        key?: SortOrder
        text?: SortOrderInput | SortOrder
        authorType?: SortOrder
        authorId?: SortOrderInput | SortOrder
        groupId?: SortOrder
        _count?: MessageCountOrderByAggregateInput
        _max?: MessageMaxOrderByAggregateInput
        _min?: MessageMinOrderByAggregateInput
    };
    export type MessageScalarWhereWithAggregatesInput = {
        AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
        OR?: MessageScalarWhereWithAggregatesInput[]
        NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"Message"> | string
        createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
        key?: StringWithAggregatesFilter<"Message"> | string
        text?: StringNullableWithAggregatesFilter<"Message"> | string | null
        authorType?: EnumAuthorTypeWithAggregatesFilter<"Message"> | $Enums.AuthorType
        authorId?: StringNullableWithAggregatesFilter<"Message"> | string | null
        groupId?: StringWithAggregatesFilter<"Message"> | string
    };
    export type MessageAttachmentWhereInput = {
        AND?: MessageAttachmentWhereInput | MessageAttachmentWhereInput[]
        OR?: MessageAttachmentWhereInput[]
        NOT?: MessageAttachmentWhereInput | MessageAttachmentWhereInput[]
        id?: StringFilter<"MessageAttachment"> | string
        createdAt?: DateTimeFilter<"MessageAttachment"> | Date | string
        updatedAt?: DateTimeFilter<"MessageAttachment"> | Date | string
        messageId?: StringFilter<"MessageAttachment"> | string
        type?: EnumMessageAttachmentTypeFilter<"MessageAttachment"> | $Enums.MessageAttachmentType
        expenseId?: StringNullableFilter<"MessageAttachment"> | string | null
        message?: XOR<MessageRelationFilter, MessageWhereInput>
        expense?: XOR<ExpenseNullableRelationFilter, ExpenseWhereInput> | null
    };
    export type MessageAttachmentOrderByWithRelationInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        messageId?: SortOrder
        type?: SortOrder
        expenseId?: SortOrderInput | SortOrder
        message?: MessageOrderByWithRelationInput
        expense?: ExpenseOrderByWithRelationInput
    };
    export type MessageAttachmentWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        AND?: MessageAttachmentWhereInput | MessageAttachmentWhereInput[]
        OR?: MessageAttachmentWhereInput[]
        NOT?: MessageAttachmentWhereInput | MessageAttachmentWhereInput[]
        createdAt?: DateTimeFilter<"MessageAttachment"> | Date | string
        updatedAt?: DateTimeFilter<"MessageAttachment"> | Date | string
        messageId?: StringFilter<"MessageAttachment"> | string
        type?: EnumMessageAttachmentTypeFilter<"MessageAttachment"> | $Enums.MessageAttachmentType
        expenseId?: StringNullableFilter<"MessageAttachment"> | string | null
        message?: XOR<MessageRelationFilter, MessageWhereInput>
        expense?: XOR<ExpenseNullableRelationFilter, ExpenseWhereInput> | null
    }, "id">;
    export type MessageAttachmentOrderByWithAggregationInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        messageId?: SortOrder
        type?: SortOrder
        expenseId?: SortOrderInput | SortOrder
        _count?: MessageAttachmentCountOrderByAggregateInput
        _max?: MessageAttachmentMaxOrderByAggregateInput
        _min?: MessageAttachmentMinOrderByAggregateInput
    };
    export type MessageAttachmentScalarWhereWithAggregatesInput = {
        AND?: MessageAttachmentScalarWhereWithAggregatesInput | MessageAttachmentScalarWhereWithAggregatesInput[]
        OR?: MessageAttachmentScalarWhereWithAggregatesInput[]
        NOT?: MessageAttachmentScalarWhereWithAggregatesInput | MessageAttachmentScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"MessageAttachment"> | string
        createdAt?: DateTimeWithAggregatesFilter<"MessageAttachment"> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<"MessageAttachment"> | Date | string
        messageId?: StringWithAggregatesFilter<"MessageAttachment"> | string
        type?: EnumMessageAttachmentTypeWithAggregatesFilter<"MessageAttachment"> | $Enums.MessageAttachmentType
        expenseId?: StringNullableWithAggregatesFilter<"MessageAttachment"> | string | null
    };
    export type ExpenseWhereInput = {
        AND?: ExpenseWhereInput | ExpenseWhereInput[]
        OR?: ExpenseWhereInput[]
        NOT?: ExpenseWhereInput | ExpenseWhereInput[]
        id?: StringFilter<"Expense"> | string
        createdAt?: DateTimeFilter<"Expense"> | Date | string
        updatedAt?: DateTimeFilter<"Expense"> | Date | string
        ownerId?: StringFilter<"Expense"> | string
        payerId?: StringFilter<"Expense"> | string
        groupId?: StringFilter<"Expense"> | string
        amount?: IntFilter<"Expense"> | number
        currency?: EnumCurrencyCodeFilter<"Expense"> | $Enums.CurrencyCode
        description?: StringNullableFilter<"Expense"> | string | null
        conversion?: JsonNullableFilter<"Expense">
        owner?: XOR<ProfileRelationFilter, ProfileWhereInput>
        payer?: XOR<ProfileRelationFilter, ProfileWhereInput>
        group?: XOR<GroupRelationFilter, GroupWhereInput>
        shares?: ExpenseShareListRelationFilter
        messageAttachments?: MessageAttachmentListRelationFilter
    };
    export type ExpenseOrderByWithRelationInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        ownerId?: SortOrder
        payerId?: SortOrder
        groupId?: SortOrder
        amount?: SortOrder
        currency?: SortOrder
        description?: SortOrderInput | SortOrder
        conversion?: SortOrderInput | SortOrder
        owner?: ProfileOrderByWithRelationInput
        payer?: ProfileOrderByWithRelationInput
        group?: GroupOrderByWithRelationInput
        shares?: ExpenseShareOrderByRelationAggregateInput
        messageAttachments?: MessageAttachmentOrderByRelationAggregateInput
    };
    export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        AND?: ExpenseWhereInput | ExpenseWhereInput[]
        OR?: ExpenseWhereInput[]
        NOT?: ExpenseWhereInput | ExpenseWhereInput[]
        createdAt?: DateTimeFilter<"Expense"> | Date | string
        updatedAt?: DateTimeFilter<"Expense"> | Date | string
        ownerId?: StringFilter<"Expense"> | string
        payerId?: StringFilter<"Expense"> | string
        groupId?: StringFilter<"Expense"> | string
        amount?: IntFilter<"Expense"> | number
        currency?: EnumCurrencyCodeFilter<"Expense"> | $Enums.CurrencyCode
        description?: StringNullableFilter<"Expense"> | string | null
        conversion?: JsonNullableFilter<"Expense">
        owner?: XOR<ProfileRelationFilter, ProfileWhereInput>
        payer?: XOR<ProfileRelationFilter, ProfileWhereInput>
        group?: XOR<GroupRelationFilter, GroupWhereInput>
        shares?: ExpenseShareListRelationFilter
        messageAttachments?: MessageAttachmentListRelationFilter
    }, "id">;
    export type ExpenseOrderByWithAggregationInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        ownerId?: SortOrder
        payerId?: SortOrder
        groupId?: SortOrder
        amount?: SortOrder
        currency?: SortOrder
        description?: SortOrderInput | SortOrder
        conversion?: SortOrderInput | SortOrder
        _count?: ExpenseCountOrderByAggregateInput
        _avg?: ExpenseAvgOrderByAggregateInput
        _max?: ExpenseMaxOrderByAggregateInput
        _min?: ExpenseMinOrderByAggregateInput
        _sum?: ExpenseSumOrderByAggregateInput
    };
    export type ExpenseScalarWhereWithAggregatesInput = {
        AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
        OR?: ExpenseScalarWhereWithAggregatesInput[]
        NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"Expense"> | string
        createdAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
        ownerId?: StringWithAggregatesFilter<"Expense"> | string
        payerId?: StringWithAggregatesFilter<"Expense"> | string
        groupId?: StringWithAggregatesFilter<"Expense"> | string
        amount?: IntWithAggregatesFilter<"Expense"> | number
        currency?: EnumCurrencyCodeWithAggregatesFilter<"Expense"> | $Enums.CurrencyCode
        description?: StringNullableWithAggregatesFilter<"Expense"> | string | null
        conversion?: JsonNullableWithAggregatesFilter<"Expense">
    };
    export type ExpenseShareWhereInput = {
        AND?: ExpenseShareWhereInput | ExpenseShareWhereInput[]
        OR?: ExpenseShareWhereInput[]
        NOT?: ExpenseShareWhereInput | ExpenseShareWhereInput[]
        id?: StringFilter<"ExpenseShare"> | string
        createdAt?: DateTimeFilter<"ExpenseShare"> | Date | string
        updatedAt?: DateTimeFilter<"ExpenseShare"> | Date | string
        userId?: StringFilter<"ExpenseShare"> | string
        expenseId?: StringFilter<"ExpenseShare"> | string
        amount?: IntFilter<"ExpenseShare"> | number
        currency?: EnumCurrencyCodeFilter<"ExpenseShare"> | $Enums.CurrencyCode
        locked?: BoolFilter<"ExpenseShare"> | boolean
        conversion?: JsonNullableFilter<"ExpenseShare">
        user?: XOR<ProfileRelationFilter, ProfileWhereInput>
        expense?: XOR<ExpenseRelationFilter, ExpenseWhereInput>
    };
    export type ExpenseShareOrderByWithRelationInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        userId?: SortOrder
        expenseId?: SortOrder
        amount?: SortOrder
        currency?: SortOrder
        locked?: SortOrder
        conversion?: SortOrderInput | SortOrder
        user?: ProfileOrderByWithRelationInput
        expense?: ExpenseOrderByWithRelationInput
    };
    export type ExpenseShareWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        AND?: ExpenseShareWhereInput | ExpenseShareWhereInput[]
        OR?: ExpenseShareWhereInput[]
        NOT?: ExpenseShareWhereInput | ExpenseShareWhereInput[]
        createdAt?: DateTimeFilter<"ExpenseShare"> | Date | string
        updatedAt?: DateTimeFilter<"ExpenseShare"> | Date | string
        userId?: StringFilter<"ExpenseShare"> | string
        expenseId?: StringFilter<"ExpenseShare"> | string
        amount?: IntFilter<"ExpenseShare"> | number
        currency?: EnumCurrencyCodeFilter<"ExpenseShare"> | $Enums.CurrencyCode
        locked?: BoolFilter<"ExpenseShare"> | boolean
        conversion?: JsonNullableFilter<"ExpenseShare">
        user?: XOR<ProfileRelationFilter, ProfileWhereInput>
        expense?: XOR<ExpenseRelationFilter, ExpenseWhereInput>
    }, "id">;
    export type ExpenseShareOrderByWithAggregationInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        userId?: SortOrder
        expenseId?: SortOrder
        amount?: SortOrder
        currency?: SortOrder
        locked?: SortOrder
        conversion?: SortOrderInput | SortOrder
        _count?: ExpenseShareCountOrderByAggregateInput
        _avg?: ExpenseShareAvgOrderByAggregateInput
        _max?: ExpenseShareMaxOrderByAggregateInput
        _min?: ExpenseShareMinOrderByAggregateInput
        _sum?: ExpenseShareSumOrderByAggregateInput
    };
    export type ExpenseShareScalarWhereWithAggregatesInput = {
        AND?: ExpenseShareScalarWhereWithAggregatesInput | ExpenseShareScalarWhereWithAggregatesInput[]
        OR?: ExpenseShareScalarWhereWithAggregatesInput[]
        NOT?: ExpenseShareScalarWhereWithAggregatesInput | ExpenseShareScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"ExpenseShare"> | string
        createdAt?: DateTimeWithAggregatesFilter<"ExpenseShare"> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<"ExpenseShare"> | Date | string
        userId?: StringWithAggregatesFilter<"ExpenseShare"> | string
        expenseId?: StringWithAggregatesFilter<"ExpenseShare"> | string
        amount?: IntWithAggregatesFilter<"ExpenseShare"> | number
        currency?: EnumCurrencyCodeWithAggregatesFilter<"ExpenseShare"> | $Enums.CurrencyCode
        locked?: BoolWithAggregatesFilter<"ExpenseShare"> | boolean
        conversion?: JsonNullableWithAggregatesFilter<"ExpenseShare">
    };
    export type PaymentWhereInput = {
        AND?: PaymentWhereInput | PaymentWhereInput[]
        OR?: PaymentWhereInput[]
        NOT?: PaymentWhereInput | PaymentWhereInput[]
        id?: StringFilter<"Payment"> | string
        createdAt?: DateTimeFilter<"Payment"> | Date | string
        updatedAt?: DateTimeFilter<"Payment"> | Date | string
        groupId?: StringFilter<"Payment"> | string
        amount?: IntFilter<"Payment"> | number
        currency?: EnumCurrencyCodeFilter<"Payment"> | $Enums.CurrencyCode
        conversion?: JsonNullableFilter<"Payment">
        recipientId?: StringFilter<"Payment"> | string
        payerId?: StringFilter<"Payment"> | string
        group?: XOR<GroupRelationFilter, GroupWhereInput>
        recipient?: XOR<ProfileRelationFilter, ProfileWhereInput>
        payer?: XOR<ProfileRelationFilter, ProfileWhereInput>
    };
    export type PaymentOrderByWithRelationInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        groupId?: SortOrder
        amount?: SortOrder
        currency?: SortOrder
        conversion?: SortOrderInput | SortOrder
        recipientId?: SortOrder
        payerId?: SortOrder
        group?: GroupOrderByWithRelationInput
        recipient?: ProfileOrderByWithRelationInput
        payer?: ProfileOrderByWithRelationInput
    };
    export type PaymentWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        AND?: PaymentWhereInput | PaymentWhereInput[]
        OR?: PaymentWhereInput[]
        NOT?: PaymentWhereInput | PaymentWhereInput[]
        createdAt?: DateTimeFilter<"Payment"> | Date | string
        updatedAt?: DateTimeFilter<"Payment"> | Date | string
        groupId?: StringFilter<"Payment"> | string
        amount?: IntFilter<"Payment"> | number
        currency?: EnumCurrencyCodeFilter<"Payment"> | $Enums.CurrencyCode
        conversion?: JsonNullableFilter<"Payment">
        recipientId?: StringFilter<"Payment"> | string
        payerId?: StringFilter<"Payment"> | string
        group?: XOR<GroupRelationFilter, GroupWhereInput>
        recipient?: XOR<ProfileRelationFilter, ProfileWhereInput>
        payer?: XOR<ProfileRelationFilter, ProfileWhereInput>
    }, "id">;
    export type PaymentOrderByWithAggregationInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        groupId?: SortOrder
        amount?: SortOrder
        currency?: SortOrder
        conversion?: SortOrderInput | SortOrder
        recipientId?: SortOrder
        payerId?: SortOrder
        _count?: PaymentCountOrderByAggregateInput
        _avg?: PaymentAvgOrderByAggregateInput
        _max?: PaymentMaxOrderByAggregateInput
        _min?: PaymentMinOrderByAggregateInput
        _sum?: PaymentSumOrderByAggregateInput
    };
    export type PaymentScalarWhereWithAggregatesInput = {
        AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
        OR?: PaymentScalarWhereWithAggregatesInput[]
        NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"Payment"> | string
        createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
        groupId?: StringWithAggregatesFilter<"Payment"> | string
        amount?: IntWithAggregatesFilter<"Payment"> | number
        currency?: EnumCurrencyCodeWithAggregatesFilter<"Payment"> | $Enums.CurrencyCode
        conversion?: JsonNullableWithAggregatesFilter<"Payment">
        recipientId?: StringWithAggregatesFilter<"Payment"> | string
        payerId?: StringWithAggregatesFilter<"Payment"> | string
    };
    export type ExchangeRatesWhereInput = {
        AND?: ExchangeRatesWhereInput | ExchangeRatesWhereInput[]
        OR?: ExchangeRatesWhereInput[]
        NOT?: ExchangeRatesWhereInput | ExchangeRatesWhereInput[]
        id?: StringFilter<"ExchangeRates"> | string
        createdAt?: DateTimeFilter<"ExchangeRates"> | Date | string
        updatedAt?: DateTimeFilter<"ExchangeRates"> | Date | string
        baseCurrency?: StringFilter<"ExchangeRates"> | string
        rates?: JsonFilter<"ExchangeRates">
    };
    export type ExchangeRatesOrderByWithRelationInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        baseCurrency?: SortOrder
        rates?: SortOrder
    };
    export type ExchangeRatesWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        AND?: ExchangeRatesWhereInput | ExchangeRatesWhereInput[]
        OR?: ExchangeRatesWhereInput[]
        NOT?: ExchangeRatesWhereInput | ExchangeRatesWhereInput[]
        createdAt?: DateTimeFilter<"ExchangeRates"> | Date | string
        updatedAt?: DateTimeFilter<"ExchangeRates"> | Date | string
        baseCurrency?: StringFilter<"ExchangeRates"> | string
        rates?: JsonFilter<"ExchangeRates">
    }, "id">;
    export type ExchangeRatesOrderByWithAggregationInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        baseCurrency?: SortOrder
        rates?: SortOrder
        _count?: ExchangeRatesCountOrderByAggregateInput
        _max?: ExchangeRatesMaxOrderByAggregateInput
        _min?: ExchangeRatesMinOrderByAggregateInput
    };
    export type ExchangeRatesScalarWhereWithAggregatesInput = {
        AND?: ExchangeRatesScalarWhereWithAggregatesInput | ExchangeRatesScalarWhereWithAggregatesInput[]
        OR?: ExchangeRatesScalarWhereWithAggregatesInput[]
        NOT?: ExchangeRatesScalarWhereWithAggregatesInput | ExchangeRatesScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"ExchangeRates"> | string
        createdAt?: DateTimeWithAggregatesFilter<"ExchangeRates"> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<"ExchangeRates"> | Date | string
        baseCurrency?: StringWithAggregatesFilter<"ExchangeRates"> | string
        rates?: JsonWithAggregatesFilter<"ExchangeRates">
    };
    export type ProfileCreateInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        createdAt?: Date | string
        updatedAt?: Date | string
        groups?: GroupParticipantCreateNestedManyWithoutUserInput
        avatar?: ImageCreateNestedOneWithoutProfileInput
        messages?: MessageCreateNestedManyWithoutAuthorInput
        expensesOwned?: ExpenseCreateNestedManyWithoutOwnerInput
        expensesPaid?: ExpenseCreateNestedManyWithoutPayerInput
        expenseShares?: ExpenseShareCreateNestedManyWithoutUserInput
        paymentsReceived?: PaymentCreateNestedManyWithoutRecipientInput
        paymentsPaid?: PaymentCreateNestedManyWithoutPayerInput
    };
    export type ProfileUncheckedCreateInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        avatarId?: string | null
        createdAt?: Date | string
        updatedAt?: Date | string
        groups?: GroupParticipantUncheckedCreateNestedManyWithoutUserInput
        messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
        expensesOwned?: ExpenseUncheckedCreateNestedManyWithoutOwnerInput
        expensesPaid?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
        expenseShares?: ExpenseShareUncheckedCreateNestedManyWithoutUserInput
        paymentsReceived?: PaymentUncheckedCreateNestedManyWithoutRecipientInput
        paymentsPaid?: PaymentUncheckedCreateNestedManyWithoutPayerInput
    };
    export type ProfileUpdateInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groups?: GroupParticipantUpdateManyWithoutUserNestedInput
        avatar?: ImageUpdateOneWithoutProfileNestedInput
        messages?: MessageUpdateManyWithoutAuthorNestedInput
        expensesOwned?: ExpenseUpdateManyWithoutOwnerNestedInput
        expensesPaid?: ExpenseUpdateManyWithoutPayerNestedInput
        expenseShares?: ExpenseShareUpdateManyWithoutUserNestedInput
        paymentsReceived?: PaymentUpdateManyWithoutRecipientNestedInput
        paymentsPaid?: PaymentUpdateManyWithoutPayerNestedInput
    };
    export type ProfileUncheckedUpdateInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        avatarId?: NullableStringFieldUpdateOperationsInput | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groups?: GroupParticipantUncheckedUpdateManyWithoutUserNestedInput
        messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
        expensesOwned?: ExpenseUncheckedUpdateManyWithoutOwnerNestedInput
        expensesPaid?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
        expenseShares?: ExpenseShareUncheckedUpdateManyWithoutUserNestedInput
        paymentsReceived?: PaymentUncheckedUpdateManyWithoutRecipientNestedInput
        paymentsPaid?: PaymentUncheckedUpdateManyWithoutPayerNestedInput
    };
    export type ProfileCreateManyInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        avatarId?: string | null
        createdAt?: Date | string
        updatedAt?: Date | string
    };
    export type ProfileUpdateManyMutationInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    };
    export type ProfileUncheckedUpdateManyInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        avatarId?: NullableStringFieldUpdateOperationsInput | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    };
    export type GroupCreateInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        name: string
        currency: $Enums.CurrencyCode
        participants?: GroupParticipantCreateNestedManyWithoutGroupInput
        coverImage?: ImageCreateNestedOneWithoutGroupInput
        messages?: MessageCreateNestedManyWithoutGroupInput
        expenses?: ExpenseCreateNestedManyWithoutGroupInput
        payments?: PaymentCreateNestedManyWithoutGroupInput
    };
    export type GroupUncheckedCreateInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        name: string
        currency: $Enums.CurrencyCode
        coverImageId?: string | null
        participants?: GroupParticipantUncheckedCreateNestedManyWithoutGroupInput
        messages?: MessageUncheckedCreateNestedManyWithoutGroupInput
        expenses?: ExpenseUncheckedCreateNestedManyWithoutGroupInput
        payments?: PaymentUncheckedCreateNestedManyWithoutGroupInput
    };
    export type GroupUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        name?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        participants?: GroupParticipantUpdateManyWithoutGroupNestedInput
        coverImage?: ImageUpdateOneWithoutGroupNestedInput
        messages?: MessageUpdateManyWithoutGroupNestedInput
        expenses?: ExpenseUpdateManyWithoutGroupNestedInput
        payments?: PaymentUpdateManyWithoutGroupNestedInput
    };
    export type GroupUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        name?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        coverImageId?: NullableStringFieldUpdateOperationsInput | string | null
        participants?: GroupParticipantUncheckedUpdateManyWithoutGroupNestedInput
        messages?: MessageUncheckedUpdateManyWithoutGroupNestedInput
        expenses?: ExpenseUncheckedUpdateManyWithoutGroupNestedInput
        payments?: PaymentUncheckedUpdateManyWithoutGroupNestedInput
    };
    export type GroupCreateManyInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        name: string
        currency: $Enums.CurrencyCode
        coverImageId?: string | null
    };
    export type GroupUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        name?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    };
    export type GroupUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        name?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        coverImageId?: NullableStringFieldUpdateOperationsInput | string | null
    };
    export type GroupParticipantCreateInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        role: $Enums.Role
        user: ProfileCreateNestedOneWithoutGroupsInput
        group: GroupCreateNestedOneWithoutParticipantsInput
    };
    export type GroupParticipantUncheckedCreateInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        userId: string
        groupId: string
        role: $Enums.Role
    };
    export type GroupParticipantUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
        user?: ProfileUpdateOneRequiredWithoutGroupsNestedInput
        group?: GroupUpdateOneRequiredWithoutParticipantsNestedInput
    };
    export type GroupParticipantUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        userId?: StringFieldUpdateOperationsInput | string
        groupId?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    };
    export type GroupParticipantCreateManyInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        userId: string
        groupId: string
        role: $Enums.Role
    };
    export type GroupParticipantUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    };
    export type GroupParticipantUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        userId?: StringFieldUpdateOperationsInput | string
        groupId?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    };
    export type ImageCreateInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        path: string
        bucket: string
        uploadedById: string
        blurhash?: string | null
        Group?: GroupCreateNestedManyWithoutCoverImageInput
        Profile?: ProfileCreateNestedManyWithoutAvatarInput
    };
    export type ImageUncheckedCreateInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        path: string
        bucket: string
        uploadedById: string
        blurhash?: string | null
        Group?: GroupUncheckedCreateNestedManyWithoutCoverImageInput
        Profile?: ProfileUncheckedCreateNestedManyWithoutAvatarInput
    };
    export type ImageUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        path?: StringFieldUpdateOperationsInput | string
        bucket?: StringFieldUpdateOperationsInput | string
        uploadedById?: StringFieldUpdateOperationsInput | string
        blurhash?: NullableStringFieldUpdateOperationsInput | string | null
        Group?: GroupUpdateManyWithoutCoverImageNestedInput
        Profile?: ProfileUpdateManyWithoutAvatarNestedInput
    };
    export type ImageUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        path?: StringFieldUpdateOperationsInput | string
        bucket?: StringFieldUpdateOperationsInput | string
        uploadedById?: StringFieldUpdateOperationsInput | string
        blurhash?: NullableStringFieldUpdateOperationsInput | string | null
        Group?: GroupUncheckedUpdateManyWithoutCoverImageNestedInput
        Profile?: ProfileUncheckedUpdateManyWithoutAvatarNestedInput
    };
    export type ImageCreateManyInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        path: string
        bucket: string
        uploadedById: string
        blurhash?: string | null
    };
    export type ImageUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        path?: StringFieldUpdateOperationsInput | string
        bucket?: StringFieldUpdateOperationsInput | string
        uploadedById?: StringFieldUpdateOperationsInput | string
        blurhash?: NullableStringFieldUpdateOperationsInput | string | null
    };
    export type ImageUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        path?: StringFieldUpdateOperationsInput | string
        bucket?: StringFieldUpdateOperationsInput | string
        uploadedById?: StringFieldUpdateOperationsInput | string
        blurhash?: NullableStringFieldUpdateOperationsInput | string | null
    };
    export type MessageCreateInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        key: string
        text?: string | null
        authorType: $Enums.AuthorType
        author?: ProfileCreateNestedOneWithoutMessagesInput
        group: GroupCreateNestedOneWithoutMessagesInput
        attachments?: MessageAttachmentCreateNestedManyWithoutMessageInput
    };
    export type MessageUncheckedCreateInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        key: string
        text?: string | null
        authorType: $Enums.AuthorType
        authorId?: string | null
        groupId: string
        attachments?: MessageAttachmentUncheckedCreateNestedManyWithoutMessageInput
    };
    export type MessageUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        key?: StringFieldUpdateOperationsInput | string
        text?: NullableStringFieldUpdateOperationsInput | string | null
        authorType?: EnumAuthorTypeFieldUpdateOperationsInput | $Enums.AuthorType
        author?: ProfileUpdateOneWithoutMessagesNestedInput
        group?: GroupUpdateOneRequiredWithoutMessagesNestedInput
        attachments?: MessageAttachmentUpdateManyWithoutMessageNestedInput
    };
    export type MessageUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        key?: StringFieldUpdateOperationsInput | string
        text?: NullableStringFieldUpdateOperationsInput | string | null
        authorType?: EnumAuthorTypeFieldUpdateOperationsInput | $Enums.AuthorType
        authorId?: NullableStringFieldUpdateOperationsInput | string | null
        groupId?: StringFieldUpdateOperationsInput | string
        attachments?: MessageAttachmentUncheckedUpdateManyWithoutMessageNestedInput
    };
    export type MessageCreateManyInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        key: string
        text?: string | null
        authorType: $Enums.AuthorType
        authorId?: string | null
        groupId: string
    };
    export type MessageUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        key?: StringFieldUpdateOperationsInput | string
        text?: NullableStringFieldUpdateOperationsInput | string | null
        authorType?: EnumAuthorTypeFieldUpdateOperationsInput | $Enums.AuthorType
    };
    export type MessageUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        key?: StringFieldUpdateOperationsInput | string
        text?: NullableStringFieldUpdateOperationsInput | string | null
        authorType?: EnumAuthorTypeFieldUpdateOperationsInput | $Enums.AuthorType
        authorId?: NullableStringFieldUpdateOperationsInput | string | null
        groupId?: StringFieldUpdateOperationsInput | string
    };
    export type MessageAttachmentCreateInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        type: $Enums.MessageAttachmentType
        message: MessageCreateNestedOneWithoutAttachmentsInput
        expense?: ExpenseCreateNestedOneWithoutMessageAttachmentsInput
    };
    export type MessageAttachmentUncheckedCreateInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        messageId: string
        type: $Enums.MessageAttachmentType
        expenseId?: string | null
    };
    export type MessageAttachmentUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        type?: EnumMessageAttachmentTypeFieldUpdateOperationsInput | $Enums.MessageAttachmentType
        message?: MessageUpdateOneRequiredWithoutAttachmentsNestedInput
        expense?: ExpenseUpdateOneWithoutMessageAttachmentsNestedInput
    };
    export type MessageAttachmentUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        messageId?: StringFieldUpdateOperationsInput | string
        type?: EnumMessageAttachmentTypeFieldUpdateOperationsInput | $Enums.MessageAttachmentType
        expenseId?: NullableStringFieldUpdateOperationsInput | string | null
    };
    export type MessageAttachmentCreateManyInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        messageId: string
        type: $Enums.MessageAttachmentType
        expenseId?: string | null
    };
    export type MessageAttachmentUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        type?: EnumMessageAttachmentTypeFieldUpdateOperationsInput | $Enums.MessageAttachmentType
    };
    export type MessageAttachmentUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        messageId?: StringFieldUpdateOperationsInput | string
        type?: EnumMessageAttachmentTypeFieldUpdateOperationsInput | $Enums.MessageAttachmentType
        expenseId?: NullableStringFieldUpdateOperationsInput | string | null
    };
    export type ExpenseCreateInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        amount: number
        currency: $Enums.CurrencyCode
        description?: string | null
        conversion?: CurrencyConversion | null
        owner: ProfileCreateNestedOneWithoutExpensesOwnedInput
        payer: ProfileCreateNestedOneWithoutExpensesPaidInput
        group: GroupCreateNestedOneWithoutExpensesInput
        shares?: ExpenseShareCreateNestedManyWithoutExpenseInput
        messageAttachments?: MessageAttachmentCreateNestedManyWithoutExpenseInput
    };
    export type ExpenseUncheckedCreateInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        ownerId: string
        payerId: string
        groupId: string
        amount: number
        currency: $Enums.CurrencyCode
        description?: string | null
        conversion?: CurrencyConversion | null
        shares?: ExpenseShareUncheckedCreateNestedManyWithoutExpenseInput
        messageAttachments?: MessageAttachmentUncheckedCreateNestedManyWithoutExpenseInput
    };
    export type ExpenseUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        description?: NullableStringFieldUpdateOperationsInput | string | null
        conversion?: CurrencyConversion | null
        owner?: ProfileUpdateOneRequiredWithoutExpensesOwnedNestedInput
        payer?: ProfileUpdateOneRequiredWithoutExpensesPaidNestedInput
        group?: GroupUpdateOneRequiredWithoutExpensesNestedInput
        shares?: ExpenseShareUpdateManyWithoutExpenseNestedInput
        messageAttachments?: MessageAttachmentUpdateManyWithoutExpenseNestedInput
    };
    export type ExpenseUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        ownerId?: StringFieldUpdateOperationsInput | string
        payerId?: StringFieldUpdateOperationsInput | string
        groupId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        description?: NullableStringFieldUpdateOperationsInput | string | null
        conversion?: CurrencyConversion | null
        shares?: ExpenseShareUncheckedUpdateManyWithoutExpenseNestedInput
        messageAttachments?: MessageAttachmentUncheckedUpdateManyWithoutExpenseNestedInput
    };
    export type ExpenseCreateManyInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        ownerId: string
        payerId: string
        groupId: string
        amount: number
        currency: $Enums.CurrencyCode
        description?: string | null
        conversion?: CurrencyConversion | null
    };
    export type ExpenseUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        description?: NullableStringFieldUpdateOperationsInput | string | null
        conversion?: CurrencyConversion | null
    };
    export type ExpenseUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        ownerId?: StringFieldUpdateOperationsInput | string
        payerId?: StringFieldUpdateOperationsInput | string
        groupId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        description?: NullableStringFieldUpdateOperationsInput | string | null
        conversion?: CurrencyConversion | null
    };
    export type ExpenseShareCreateInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        amount: number
        currency: $Enums.CurrencyCode
        locked?: boolean
        conversion?: CurrencyConversion | null
        user: ProfileCreateNestedOneWithoutExpenseSharesInput
        expense: ExpenseCreateNestedOneWithoutSharesInput
    };
    export type ExpenseShareUncheckedCreateInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        userId: string
        expenseId: string
        amount: number
        currency: $Enums.CurrencyCode
        locked?: boolean
        conversion?: CurrencyConversion | null
    };
    export type ExpenseShareUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        locked?: BoolFieldUpdateOperationsInput | boolean
        conversion?: CurrencyConversion | null
        user?: ProfileUpdateOneRequiredWithoutExpenseSharesNestedInput
        expense?: ExpenseUpdateOneRequiredWithoutSharesNestedInput
    };
    export type ExpenseShareUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        userId?: StringFieldUpdateOperationsInput | string
        expenseId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        locked?: BoolFieldUpdateOperationsInput | boolean
        conversion?: CurrencyConversion | null
    };
    export type ExpenseShareCreateManyInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        userId: string
        expenseId: string
        amount: number
        currency: $Enums.CurrencyCode
        locked?: boolean
        conversion?: CurrencyConversion | null
    };
    export type ExpenseShareUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        locked?: BoolFieldUpdateOperationsInput | boolean
        conversion?: CurrencyConversion | null
    };
    export type ExpenseShareUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        userId?: StringFieldUpdateOperationsInput | string
        expenseId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        locked?: BoolFieldUpdateOperationsInput | boolean
        conversion?: CurrencyConversion | null
    };
    export type PaymentCreateInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        amount: number
        currency: $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        group: GroupCreateNestedOneWithoutPaymentsInput
        recipient: ProfileCreateNestedOneWithoutPaymentsReceivedInput
        payer: ProfileCreateNestedOneWithoutPaymentsPaidInput
    };
    export type PaymentUncheckedCreateInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        groupId: string
        amount: number
        currency: $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        recipientId: string
        payerId: string
    };
    export type PaymentUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        group?: GroupUpdateOneRequiredWithoutPaymentsNestedInput
        recipient?: ProfileUpdateOneRequiredWithoutPaymentsReceivedNestedInput
        payer?: ProfileUpdateOneRequiredWithoutPaymentsPaidNestedInput
    };
    export type PaymentUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groupId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        recipientId?: StringFieldUpdateOperationsInput | string
        payerId?: StringFieldUpdateOperationsInput | string
    };
    export type PaymentCreateManyInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        groupId: string
        amount: number
        currency: $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        recipientId: string
        payerId: string
    };
    export type PaymentUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
    };
    export type PaymentUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groupId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        recipientId?: StringFieldUpdateOperationsInput | string
        payerId?: StringFieldUpdateOperationsInput | string
    };
    export type ExchangeRatesCreateInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        baseCurrency: string
        rates: JsonNullValueInput | InputJsonValue
    };
    export type ExchangeRatesUncheckedCreateInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        baseCurrency: string
        rates: JsonNullValueInput | InputJsonValue
    };
    export type ExchangeRatesUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        baseCurrency?: StringFieldUpdateOperationsInput | string
        rates?: JsonNullValueInput | InputJsonValue
    };
    export type ExchangeRatesUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        baseCurrency?: StringFieldUpdateOperationsInput | string
        rates?: JsonNullValueInput | InputJsonValue
    };
    export type ExchangeRatesCreateManyInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        baseCurrency: string
        rates: JsonNullValueInput | InputJsonValue
    };
    export type ExchangeRatesUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        baseCurrency?: StringFieldUpdateOperationsInput | string
        rates?: JsonNullValueInput | InputJsonValue
    };
    export type ExchangeRatesUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        baseCurrency?: StringFieldUpdateOperationsInput | string
        rates?: JsonNullValueInput | InputJsonValue
    };
    export type StringFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[] | ListStringFieldRefInput<$PrismaModel>
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        mode?: QueryMode
        not?: NestedStringFilter<$PrismaModel> | string
    };
    export type EnumCurrencyCodeFilter<$PrismaModel = never> = {
        equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
        in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
        notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
        not?: NestedEnumCurrencyCodeFilter<$PrismaModel> | $Enums.CurrencyCode
    };
    export type StringNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        mode?: QueryMode
        not?: NestedStringNullableFilter<$PrismaModel> | string | null
    };
    export type DateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string
    };
    export type GroupParticipantListRelationFilter = {
        every?: GroupParticipantWhereInput
        some?: GroupParticipantWhereInput
        none?: GroupParticipantWhereInput
    };
    export type ImageNullableRelationFilter = {
        is?: ImageWhereInput | null
        isNot?: ImageWhereInput | null
    };
    export type MessageListRelationFilter = {
        every?: MessageWhereInput
        some?: MessageWhereInput
        none?: MessageWhereInput
    };
    export type ExpenseListRelationFilter = {
        every?: ExpenseWhereInput
        some?: ExpenseWhereInput
        none?: ExpenseWhereInput
    };
    export type ExpenseShareListRelationFilter = {
        every?: ExpenseShareWhereInput
        some?: ExpenseShareWhereInput
        none?: ExpenseShareWhereInput
    };
    export type PaymentListRelationFilter = {
        every?: PaymentWhereInput
        some?: PaymentWhereInput
        none?: PaymentWhereInput
    };
    export type SortOrderInput = {
        sort: SortOrder
        nulls?: NullsOrder
    };
    export type GroupParticipantOrderByRelationAggregateInput = {
        _count?: SortOrder
    };
    export type MessageOrderByRelationAggregateInput = {
        _count?: SortOrder
    };
    export type ExpenseOrderByRelationAggregateInput = {
        _count?: SortOrder
    };
    export type ExpenseShareOrderByRelationAggregateInput = {
        _count?: SortOrder
    };
    export type PaymentOrderByRelationAggregateInput = {
        _count?: SortOrder
    };
    export type ProfileCountOrderByAggregateInput = {
        userId?: SortOrder
        email?: SortOrder
        firstName?: SortOrder
        lastName?: SortOrder
        currency?: SortOrder
        avatarId?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    };
    export type ProfileMaxOrderByAggregateInput = {
        userId?: SortOrder
        email?: SortOrder
        firstName?: SortOrder
        lastName?: SortOrder
        currency?: SortOrder
        avatarId?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    };
    export type ProfileMinOrderByAggregateInput = {
        userId?: SortOrder
        email?: SortOrder
        firstName?: SortOrder
        lastName?: SortOrder
        currency?: SortOrder
        avatarId?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    };
    export type StringWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[] | ListStringFieldRefInput<$PrismaModel>
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        mode?: QueryMode
        not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedStringFilter<$PrismaModel>
        _max?: NestedStringFilter<$PrismaModel>
    };
    export type EnumCurrencyCodeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
        in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
        notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
        not?: NestedEnumCurrencyCodeWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyCode
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumCurrencyCodeFilter<$PrismaModel>
        _max?: NestedEnumCurrencyCodeFilter<$PrismaModel>
    };
    export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        mode?: QueryMode
        not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _min?: NestedStringNullableFilter<$PrismaModel>
        _max?: NestedStringNullableFilter<$PrismaModel>
    };
    export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedDateTimeFilter<$PrismaModel>
        _max?: NestedDateTimeFilter<$PrismaModel>
    };
    export type GroupCountOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        name?: SortOrder
        currency?: SortOrder
        coverImageId?: SortOrder
    };
    export type GroupMaxOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        name?: SortOrder
        currency?: SortOrder
        coverImageId?: SortOrder
    };
    export type GroupMinOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        name?: SortOrder
        currency?: SortOrder
        coverImageId?: SortOrder
    };
    export type EnumRoleFilter<$PrismaModel = never> = {
        equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
        in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
        notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
        not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
    };
    export type ProfileRelationFilter = {
        is?: ProfileWhereInput
        isNot?: ProfileWhereInput
    };
    export type GroupRelationFilter = {
        is?: GroupWhereInput
        isNot?: GroupWhereInput
    };
    export type GroupParticipantCountOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        userId?: SortOrder
        groupId?: SortOrder
        role?: SortOrder
    };
    export type GroupParticipantMaxOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        userId?: SortOrder
        groupId?: SortOrder
        role?: SortOrder
    };
    export type GroupParticipantMinOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        userId?: SortOrder
        groupId?: SortOrder
        role?: SortOrder
    };
    export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
        in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
        notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
        not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumRoleFilter<$PrismaModel>
        _max?: NestedEnumRoleFilter<$PrismaModel>
    };
    export type GroupListRelationFilter = {
        every?: GroupWhereInput
        some?: GroupWhereInput
        none?: GroupWhereInput
    };
    export type ProfileListRelationFilter = {
        every?: ProfileWhereInput
        some?: ProfileWhereInput
        none?: ProfileWhereInput
    };
    export type GroupOrderByRelationAggregateInput = {
        _count?: SortOrder
    };
    export type ProfileOrderByRelationAggregateInput = {
        _count?: SortOrder
    };
    export type ImageCountOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        path?: SortOrder
        bucket?: SortOrder
        uploadedById?: SortOrder
        blurhash?: SortOrder
    };
    export type ImageMaxOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        path?: SortOrder
        bucket?: SortOrder
        uploadedById?: SortOrder
        blurhash?: SortOrder
    };
    export type ImageMinOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        path?: SortOrder
        bucket?: SortOrder
        uploadedById?: SortOrder
        blurhash?: SortOrder
    };
    export type EnumAuthorTypeFilter<$PrismaModel = never> = {
        equals?: $Enums.AuthorType | EnumAuthorTypeFieldRefInput<$PrismaModel>
        in?: $Enums.AuthorType[] | ListEnumAuthorTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.AuthorType[] | ListEnumAuthorTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumAuthorTypeFilter<$PrismaModel> | $Enums.AuthorType
    };
    export type ProfileNullableRelationFilter = {
        is?: ProfileWhereInput | null
        isNot?: ProfileWhereInput | null
    };
    export type MessageAttachmentListRelationFilter = {
        every?: MessageAttachmentWhereInput
        some?: MessageAttachmentWhereInput
        none?: MessageAttachmentWhereInput
    };
    export type MessageAttachmentOrderByRelationAggregateInput = {
        _count?: SortOrder
    };
    export type MessageCountOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        key?: SortOrder
        text?: SortOrder
        authorType?: SortOrder
        authorId?: SortOrder
        groupId?: SortOrder
    };
    export type MessageMaxOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        key?: SortOrder
        text?: SortOrder
        authorType?: SortOrder
        authorId?: SortOrder
        groupId?: SortOrder
    };
    export type MessageMinOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        key?: SortOrder
        text?: SortOrder
        authorType?: SortOrder
        authorId?: SortOrder
        groupId?: SortOrder
    };
    export type EnumAuthorTypeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.AuthorType | EnumAuthorTypeFieldRefInput<$PrismaModel>
        in?: $Enums.AuthorType[] | ListEnumAuthorTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.AuthorType[] | ListEnumAuthorTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumAuthorTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuthorType
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumAuthorTypeFilter<$PrismaModel>
        _max?: NestedEnumAuthorTypeFilter<$PrismaModel>
    };
    export type EnumMessageAttachmentTypeFilter<$PrismaModel = never> = {
        equals?: $Enums.MessageAttachmentType | EnumMessageAttachmentTypeFieldRefInput<$PrismaModel>
        in?: $Enums.MessageAttachmentType[] | ListEnumMessageAttachmentTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.MessageAttachmentType[] | ListEnumMessageAttachmentTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumMessageAttachmentTypeFilter<$PrismaModel> | $Enums.MessageAttachmentType
    };
    export type MessageRelationFilter = {
        is?: MessageWhereInput
        isNot?: MessageWhereInput
    };
    export type ExpenseNullableRelationFilter = {
        is?: ExpenseWhereInput | null
        isNot?: ExpenseWhereInput | null
    };
    export type MessageAttachmentCountOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        messageId?: SortOrder
        type?: SortOrder
        expenseId?: SortOrder
    };
    export type MessageAttachmentMaxOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        messageId?: SortOrder
        type?: SortOrder
        expenseId?: SortOrder
    };
    export type MessageAttachmentMinOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        messageId?: SortOrder
        type?: SortOrder
        expenseId?: SortOrder
    };
    export type EnumMessageAttachmentTypeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.MessageAttachmentType | EnumMessageAttachmentTypeFieldRefInput<$PrismaModel>
        in?: $Enums.MessageAttachmentType[] | ListEnumMessageAttachmentTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.MessageAttachmentType[] | ListEnumMessageAttachmentTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumMessageAttachmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageAttachmentType
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumMessageAttachmentTypeFilter<$PrismaModel>
        _max?: NestedEnumMessageAttachmentTypeFilter<$PrismaModel>
    };
    export type IntFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>
        in?: number[] | ListIntFieldRefInput<$PrismaModel>
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntFilter<$PrismaModel> | number
    };
    export type JsonNullableFilter<$PrismaModel = never> = | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
    >
        | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
    export type JsonNullableFilterBase<$PrismaModel = never> = {
        equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
        path?: string[]
        string_contains?: string | StringFieldRefInput<$PrismaModel>
        string_starts_with?: string | StringFieldRefInput<$PrismaModel>
        string_ends_with?: string | StringFieldRefInput<$PrismaModel>
        array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    };
    export type ExpenseCountOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        ownerId?: SortOrder
        payerId?: SortOrder
        groupId?: SortOrder
        amount?: SortOrder
        currency?: SortOrder
        description?: SortOrder
        conversion?: SortOrder
    };
    export type ExpenseAvgOrderByAggregateInput = {
        amount?: SortOrder
    };
    export type ExpenseMaxOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        ownerId?: SortOrder
        payerId?: SortOrder
        groupId?: SortOrder
        amount?: SortOrder
        currency?: SortOrder
        description?: SortOrder
    };
    export type ExpenseMinOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        ownerId?: SortOrder
        payerId?: SortOrder
        groupId?: SortOrder
        amount?: SortOrder
        currency?: SortOrder
        description?: SortOrder
    };
    export type ExpenseSumOrderByAggregateInput = {
        amount?: SortOrder
    };
    export type IntWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>
        in?: number[] | ListIntFieldRefInput<$PrismaModel>
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
        _count?: NestedIntFilter<$PrismaModel>
        _avg?: NestedFloatFilter<$PrismaModel>
        _sum?: NestedIntFilter<$PrismaModel>
        _min?: NestedIntFilter<$PrismaModel>
        _max?: NestedIntFilter<$PrismaModel>
    };
    export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
    >
        | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
    export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
        equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
        path?: string[]
        string_contains?: string | StringFieldRefInput<$PrismaModel>
        string_starts_with?: string | StringFieldRefInput<$PrismaModel>
        string_ends_with?: string | StringFieldRefInput<$PrismaModel>
        array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
        _count?: NestedIntNullableFilter<$PrismaModel>
        _min?: NestedJsonNullableFilter<$PrismaModel>
        _max?: NestedJsonNullableFilter<$PrismaModel>
    };
    export type BoolFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>
        not?: NestedBoolFilter<$PrismaModel> | boolean
    };
    export type ExpenseRelationFilter = {
        is?: ExpenseWhereInput
        isNot?: ExpenseWhereInput
    };
    export type ExpenseShareCountOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        userId?: SortOrder
        expenseId?: SortOrder
        amount?: SortOrder
        currency?: SortOrder
        locked?: SortOrder
        conversion?: SortOrder
    };
    export type ExpenseShareAvgOrderByAggregateInput = {
        amount?: SortOrder
    };
    export type ExpenseShareMaxOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        userId?: SortOrder
        expenseId?: SortOrder
        amount?: SortOrder
        currency?: SortOrder
        locked?: SortOrder
    };
    export type ExpenseShareMinOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        userId?: SortOrder
        expenseId?: SortOrder
        amount?: SortOrder
        currency?: SortOrder
        locked?: SortOrder
    };
    export type ExpenseShareSumOrderByAggregateInput = {
        amount?: SortOrder
    };
    export type BoolWithAggregatesFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>
        not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedBoolFilter<$PrismaModel>
        _max?: NestedBoolFilter<$PrismaModel>
    };
    export type PaymentCountOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        groupId?: SortOrder
        amount?: SortOrder
        currency?: SortOrder
        conversion?: SortOrder
        recipientId?: SortOrder
        payerId?: SortOrder
    };
    export type PaymentAvgOrderByAggregateInput = {
        amount?: SortOrder
    };
    export type PaymentMaxOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        groupId?: SortOrder
        amount?: SortOrder
        currency?: SortOrder
        recipientId?: SortOrder
        payerId?: SortOrder
    };
    export type PaymentMinOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        groupId?: SortOrder
        amount?: SortOrder
        currency?: SortOrder
        recipientId?: SortOrder
        payerId?: SortOrder
    };
    export type PaymentSumOrderByAggregateInput = {
        amount?: SortOrder
    };
    export type JsonFilter<$PrismaModel = never> = | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
    >
        | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;
    export type JsonFilterBase<$PrismaModel = never> = {
        equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
        path?: string[]
        string_contains?: string | StringFieldRefInput<$PrismaModel>
        string_starts_with?: string | StringFieldRefInput<$PrismaModel>
        string_ends_with?: string | StringFieldRefInput<$PrismaModel>
        array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    };
    export type ExchangeRatesCountOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        baseCurrency?: SortOrder
        rates?: SortOrder
    };
    export type ExchangeRatesMaxOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        baseCurrency?: SortOrder
    };
    export type ExchangeRatesMinOrderByAggregateInput = {
        id?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        baseCurrency?: SortOrder
    };
    export type JsonWithAggregatesFilter<$PrismaModel = never> = | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
    >
        | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
    export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
        equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
        path?: string[]
        string_contains?: string | StringFieldRefInput<$PrismaModel>
        string_starts_with?: string | StringFieldRefInput<$PrismaModel>
        string_ends_with?: string | StringFieldRefInput<$PrismaModel>
        array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedJsonFilter<$PrismaModel>
        _max?: NestedJsonFilter<$PrismaModel>
    };
    export type GroupParticipantCreateNestedManyWithoutUserInput = {
        create?: XOR<GroupParticipantCreateWithoutUserInput, GroupParticipantUncheckedCreateWithoutUserInput> | GroupParticipantCreateWithoutUserInput[] | GroupParticipantUncheckedCreateWithoutUserInput[]
        connectOrCreate?: GroupParticipantCreateOrConnectWithoutUserInput | GroupParticipantCreateOrConnectWithoutUserInput[]
        createMany?: GroupParticipantCreateManyUserInputEnvelope
        connect?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
    };
    export type ImageCreateNestedOneWithoutProfileInput = {
        create?: XOR<ImageCreateWithoutProfileInput, ImageUncheckedCreateWithoutProfileInput>
        connectOrCreate?: ImageCreateOrConnectWithoutProfileInput
        connect?: ImageWhereUniqueInput
    };
    export type MessageCreateNestedManyWithoutAuthorInput = {
        create?: XOR<MessageCreateWithoutAuthorInput, MessageUncheckedCreateWithoutAuthorInput> | MessageCreateWithoutAuthorInput[] | MessageUncheckedCreateWithoutAuthorInput[]
        connectOrCreate?: MessageCreateOrConnectWithoutAuthorInput | MessageCreateOrConnectWithoutAuthorInput[]
        createMany?: MessageCreateManyAuthorInputEnvelope
        connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    };
    export type ExpenseCreateNestedManyWithoutOwnerInput = {
        create?: XOR<ExpenseCreateWithoutOwnerInput, ExpenseUncheckedCreateWithoutOwnerInput> | ExpenseCreateWithoutOwnerInput[] | ExpenseUncheckedCreateWithoutOwnerInput[]
        connectOrCreate?: ExpenseCreateOrConnectWithoutOwnerInput | ExpenseCreateOrConnectWithoutOwnerInput[]
        createMany?: ExpenseCreateManyOwnerInputEnvelope
        connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    };
    export type ExpenseCreateNestedManyWithoutPayerInput = {
        create?: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput> | ExpenseCreateWithoutPayerInput[] | ExpenseUncheckedCreateWithoutPayerInput[]
        connectOrCreate?: ExpenseCreateOrConnectWithoutPayerInput | ExpenseCreateOrConnectWithoutPayerInput[]
        createMany?: ExpenseCreateManyPayerInputEnvelope
        connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    };
    export type ExpenseShareCreateNestedManyWithoutUserInput = {
        create?: XOR<ExpenseShareCreateWithoutUserInput, ExpenseShareUncheckedCreateWithoutUserInput> | ExpenseShareCreateWithoutUserInput[] | ExpenseShareUncheckedCreateWithoutUserInput[]
        connectOrCreate?: ExpenseShareCreateOrConnectWithoutUserInput | ExpenseShareCreateOrConnectWithoutUserInput[]
        createMany?: ExpenseShareCreateManyUserInputEnvelope
        connect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    };
    export type PaymentCreateNestedManyWithoutRecipientInput = {
        create?: XOR<PaymentCreateWithoutRecipientInput, PaymentUncheckedCreateWithoutRecipientInput> | PaymentCreateWithoutRecipientInput[] | PaymentUncheckedCreateWithoutRecipientInput[]
        connectOrCreate?: PaymentCreateOrConnectWithoutRecipientInput | PaymentCreateOrConnectWithoutRecipientInput[]
        createMany?: PaymentCreateManyRecipientInputEnvelope
        connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    };
    export type PaymentCreateNestedManyWithoutPayerInput = {
        create?: XOR<PaymentCreateWithoutPayerInput, PaymentUncheckedCreateWithoutPayerInput> | PaymentCreateWithoutPayerInput[] | PaymentUncheckedCreateWithoutPayerInput[]
        connectOrCreate?: PaymentCreateOrConnectWithoutPayerInput | PaymentCreateOrConnectWithoutPayerInput[]
        createMany?: PaymentCreateManyPayerInputEnvelope
        connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    };
    export type GroupParticipantUncheckedCreateNestedManyWithoutUserInput = {
        create?: XOR<GroupParticipantCreateWithoutUserInput, GroupParticipantUncheckedCreateWithoutUserInput> | GroupParticipantCreateWithoutUserInput[] | GroupParticipantUncheckedCreateWithoutUserInput[]
        connectOrCreate?: GroupParticipantCreateOrConnectWithoutUserInput | GroupParticipantCreateOrConnectWithoutUserInput[]
        createMany?: GroupParticipantCreateManyUserInputEnvelope
        connect?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
    };
    export type MessageUncheckedCreateNestedManyWithoutAuthorInput = {
        create?: XOR<MessageCreateWithoutAuthorInput, MessageUncheckedCreateWithoutAuthorInput> | MessageCreateWithoutAuthorInput[] | MessageUncheckedCreateWithoutAuthorInput[]
        connectOrCreate?: MessageCreateOrConnectWithoutAuthorInput | MessageCreateOrConnectWithoutAuthorInput[]
        createMany?: MessageCreateManyAuthorInputEnvelope
        connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    };
    export type ExpenseUncheckedCreateNestedManyWithoutOwnerInput = {
        create?: XOR<ExpenseCreateWithoutOwnerInput, ExpenseUncheckedCreateWithoutOwnerInput> | ExpenseCreateWithoutOwnerInput[] | ExpenseUncheckedCreateWithoutOwnerInput[]
        connectOrCreate?: ExpenseCreateOrConnectWithoutOwnerInput | ExpenseCreateOrConnectWithoutOwnerInput[]
        createMany?: ExpenseCreateManyOwnerInputEnvelope
        connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    };
    export type ExpenseUncheckedCreateNestedManyWithoutPayerInput = {
        create?: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput> | ExpenseCreateWithoutPayerInput[] | ExpenseUncheckedCreateWithoutPayerInput[]
        connectOrCreate?: ExpenseCreateOrConnectWithoutPayerInput | ExpenseCreateOrConnectWithoutPayerInput[]
        createMany?: ExpenseCreateManyPayerInputEnvelope
        connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    };
    export type ExpenseShareUncheckedCreateNestedManyWithoutUserInput = {
        create?: XOR<ExpenseShareCreateWithoutUserInput, ExpenseShareUncheckedCreateWithoutUserInput> | ExpenseShareCreateWithoutUserInput[] | ExpenseShareUncheckedCreateWithoutUserInput[]
        connectOrCreate?: ExpenseShareCreateOrConnectWithoutUserInput | ExpenseShareCreateOrConnectWithoutUserInput[]
        createMany?: ExpenseShareCreateManyUserInputEnvelope
        connect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    };
    export type PaymentUncheckedCreateNestedManyWithoutRecipientInput = {
        create?: XOR<PaymentCreateWithoutRecipientInput, PaymentUncheckedCreateWithoutRecipientInput> | PaymentCreateWithoutRecipientInput[] | PaymentUncheckedCreateWithoutRecipientInput[]
        connectOrCreate?: PaymentCreateOrConnectWithoutRecipientInput | PaymentCreateOrConnectWithoutRecipientInput[]
        createMany?: PaymentCreateManyRecipientInputEnvelope
        connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    };
    export type PaymentUncheckedCreateNestedManyWithoutPayerInput = {
        create?: XOR<PaymentCreateWithoutPayerInput, PaymentUncheckedCreateWithoutPayerInput> | PaymentCreateWithoutPayerInput[] | PaymentUncheckedCreateWithoutPayerInput[]
        connectOrCreate?: PaymentCreateOrConnectWithoutPayerInput | PaymentCreateOrConnectWithoutPayerInput[]
        createMany?: PaymentCreateManyPayerInputEnvelope
        connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    };
    export type StringFieldUpdateOperationsInput = {
        set?: string
    };
    export type EnumCurrencyCodeFieldUpdateOperationsInput = {
        set?: $Enums.CurrencyCode
    };
    export type DateTimeFieldUpdateOperationsInput = {
        set?: Date | string
    };
    export type GroupParticipantUpdateManyWithoutUserNestedInput = {
        create?: XOR<GroupParticipantCreateWithoutUserInput, GroupParticipantUncheckedCreateWithoutUserInput> | GroupParticipantCreateWithoutUserInput[] | GroupParticipantUncheckedCreateWithoutUserInput[]
        connectOrCreate?: GroupParticipantCreateOrConnectWithoutUserInput | GroupParticipantCreateOrConnectWithoutUserInput[]
        upsert?: GroupParticipantUpsertWithWhereUniqueWithoutUserInput | GroupParticipantUpsertWithWhereUniqueWithoutUserInput[]
        createMany?: GroupParticipantCreateManyUserInputEnvelope
        set?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
        disconnect?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
        delete?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
        connect?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
        update?: GroupParticipantUpdateWithWhereUniqueWithoutUserInput | GroupParticipantUpdateWithWhereUniqueWithoutUserInput[]
        updateMany?: GroupParticipantUpdateManyWithWhereWithoutUserInput | GroupParticipantUpdateManyWithWhereWithoutUserInput[]
        deleteMany?: GroupParticipantScalarWhereInput | GroupParticipantScalarWhereInput[]
    };
    export type ImageUpdateOneWithoutProfileNestedInput = {
        create?: XOR<ImageCreateWithoutProfileInput, ImageUncheckedCreateWithoutProfileInput>
        connectOrCreate?: ImageCreateOrConnectWithoutProfileInput
        upsert?: ImageUpsertWithoutProfileInput
        disconnect?: ImageWhereInput | boolean
        delete?: ImageWhereInput | boolean
        connect?: ImageWhereUniqueInput
        update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutProfileInput, ImageUpdateWithoutProfileInput>, ImageUncheckedUpdateWithoutProfileInput>
    };
    export type MessageUpdateManyWithoutAuthorNestedInput = {
        create?: XOR<MessageCreateWithoutAuthorInput, MessageUncheckedCreateWithoutAuthorInput> | MessageCreateWithoutAuthorInput[] | MessageUncheckedCreateWithoutAuthorInput[]
        connectOrCreate?: MessageCreateOrConnectWithoutAuthorInput | MessageCreateOrConnectWithoutAuthorInput[]
        upsert?: MessageUpsertWithWhereUniqueWithoutAuthorInput | MessageUpsertWithWhereUniqueWithoutAuthorInput[]
        createMany?: MessageCreateManyAuthorInputEnvelope
        set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
        disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
        delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
        connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
        update?: MessageUpdateWithWhereUniqueWithoutAuthorInput | MessageUpdateWithWhereUniqueWithoutAuthorInput[]
        updateMany?: MessageUpdateManyWithWhereWithoutAuthorInput | MessageUpdateManyWithWhereWithoutAuthorInput[]
        deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
    };
    export type ExpenseUpdateManyWithoutOwnerNestedInput = {
        create?: XOR<ExpenseCreateWithoutOwnerInput, ExpenseUncheckedCreateWithoutOwnerInput> | ExpenseCreateWithoutOwnerInput[] | ExpenseUncheckedCreateWithoutOwnerInput[]
        connectOrCreate?: ExpenseCreateOrConnectWithoutOwnerInput | ExpenseCreateOrConnectWithoutOwnerInput[]
        upsert?: ExpenseUpsertWithWhereUniqueWithoutOwnerInput | ExpenseUpsertWithWhereUniqueWithoutOwnerInput[]
        createMany?: ExpenseCreateManyOwnerInputEnvelope
        set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        update?: ExpenseUpdateWithWhereUniqueWithoutOwnerInput | ExpenseUpdateWithWhereUniqueWithoutOwnerInput[]
        updateMany?: ExpenseUpdateManyWithWhereWithoutOwnerInput | ExpenseUpdateManyWithWhereWithoutOwnerInput[]
        deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    };
    export type ExpenseUpdateManyWithoutPayerNestedInput = {
        create?: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput> | ExpenseCreateWithoutPayerInput[] | ExpenseUncheckedCreateWithoutPayerInput[]
        connectOrCreate?: ExpenseCreateOrConnectWithoutPayerInput | ExpenseCreateOrConnectWithoutPayerInput[]
        upsert?: ExpenseUpsertWithWhereUniqueWithoutPayerInput | ExpenseUpsertWithWhereUniqueWithoutPayerInput[]
        createMany?: ExpenseCreateManyPayerInputEnvelope
        set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        update?: ExpenseUpdateWithWhereUniqueWithoutPayerInput | ExpenseUpdateWithWhereUniqueWithoutPayerInput[]
        updateMany?: ExpenseUpdateManyWithWhereWithoutPayerInput | ExpenseUpdateManyWithWhereWithoutPayerInput[]
        deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    };
    export type ExpenseShareUpdateManyWithoutUserNestedInput = {
        create?: XOR<ExpenseShareCreateWithoutUserInput, ExpenseShareUncheckedCreateWithoutUserInput> | ExpenseShareCreateWithoutUserInput[] | ExpenseShareUncheckedCreateWithoutUserInput[]
        connectOrCreate?: ExpenseShareCreateOrConnectWithoutUserInput | ExpenseShareCreateOrConnectWithoutUserInput[]
        upsert?: ExpenseShareUpsertWithWhereUniqueWithoutUserInput | ExpenseShareUpsertWithWhereUniqueWithoutUserInput[]
        createMany?: ExpenseShareCreateManyUserInputEnvelope
        set?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
        disconnect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
        delete?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
        connect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
        update?: ExpenseShareUpdateWithWhereUniqueWithoutUserInput | ExpenseShareUpdateWithWhereUniqueWithoutUserInput[]
        updateMany?: ExpenseShareUpdateManyWithWhereWithoutUserInput | ExpenseShareUpdateManyWithWhereWithoutUserInput[]
        deleteMany?: ExpenseShareScalarWhereInput | ExpenseShareScalarWhereInput[]
    };
    export type PaymentUpdateManyWithoutRecipientNestedInput = {
        create?: XOR<PaymentCreateWithoutRecipientInput, PaymentUncheckedCreateWithoutRecipientInput> | PaymentCreateWithoutRecipientInput[] | PaymentUncheckedCreateWithoutRecipientInput[]
        connectOrCreate?: PaymentCreateOrConnectWithoutRecipientInput | PaymentCreateOrConnectWithoutRecipientInput[]
        upsert?: PaymentUpsertWithWhereUniqueWithoutRecipientInput | PaymentUpsertWithWhereUniqueWithoutRecipientInput[]
        createMany?: PaymentCreateManyRecipientInputEnvelope
        set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        update?: PaymentUpdateWithWhereUniqueWithoutRecipientInput | PaymentUpdateWithWhereUniqueWithoutRecipientInput[]
        updateMany?: PaymentUpdateManyWithWhereWithoutRecipientInput | PaymentUpdateManyWithWhereWithoutRecipientInput[]
        deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    };
    export type PaymentUpdateManyWithoutPayerNestedInput = {
        create?: XOR<PaymentCreateWithoutPayerInput, PaymentUncheckedCreateWithoutPayerInput> | PaymentCreateWithoutPayerInput[] | PaymentUncheckedCreateWithoutPayerInput[]
        connectOrCreate?: PaymentCreateOrConnectWithoutPayerInput | PaymentCreateOrConnectWithoutPayerInput[]
        upsert?: PaymentUpsertWithWhereUniqueWithoutPayerInput | PaymentUpsertWithWhereUniqueWithoutPayerInput[]
        createMany?: PaymentCreateManyPayerInputEnvelope
        set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        update?: PaymentUpdateWithWhereUniqueWithoutPayerInput | PaymentUpdateWithWhereUniqueWithoutPayerInput[]
        updateMany?: PaymentUpdateManyWithWhereWithoutPayerInput | PaymentUpdateManyWithWhereWithoutPayerInput[]
        deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    };
    export type NullableStringFieldUpdateOperationsInput = {
        set?: string | null
    };
    export type GroupParticipantUncheckedUpdateManyWithoutUserNestedInput = {
        create?: XOR<GroupParticipantCreateWithoutUserInput, GroupParticipantUncheckedCreateWithoutUserInput> | GroupParticipantCreateWithoutUserInput[] | GroupParticipantUncheckedCreateWithoutUserInput[]
        connectOrCreate?: GroupParticipantCreateOrConnectWithoutUserInput | GroupParticipantCreateOrConnectWithoutUserInput[]
        upsert?: GroupParticipantUpsertWithWhereUniqueWithoutUserInput | GroupParticipantUpsertWithWhereUniqueWithoutUserInput[]
        createMany?: GroupParticipantCreateManyUserInputEnvelope
        set?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
        disconnect?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
        delete?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
        connect?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
        update?: GroupParticipantUpdateWithWhereUniqueWithoutUserInput | GroupParticipantUpdateWithWhereUniqueWithoutUserInput[]
        updateMany?: GroupParticipantUpdateManyWithWhereWithoutUserInput | GroupParticipantUpdateManyWithWhereWithoutUserInput[]
        deleteMany?: GroupParticipantScalarWhereInput | GroupParticipantScalarWhereInput[]
    };
    export type MessageUncheckedUpdateManyWithoutAuthorNestedInput = {
        create?: XOR<MessageCreateWithoutAuthorInput, MessageUncheckedCreateWithoutAuthorInput> | MessageCreateWithoutAuthorInput[] | MessageUncheckedCreateWithoutAuthorInput[]
        connectOrCreate?: MessageCreateOrConnectWithoutAuthorInput | MessageCreateOrConnectWithoutAuthorInput[]
        upsert?: MessageUpsertWithWhereUniqueWithoutAuthorInput | MessageUpsertWithWhereUniqueWithoutAuthorInput[]
        createMany?: MessageCreateManyAuthorInputEnvelope
        set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
        disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
        delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
        connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
        update?: MessageUpdateWithWhereUniqueWithoutAuthorInput | MessageUpdateWithWhereUniqueWithoutAuthorInput[]
        updateMany?: MessageUpdateManyWithWhereWithoutAuthorInput | MessageUpdateManyWithWhereWithoutAuthorInput[]
        deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
    };
    export type ExpenseUncheckedUpdateManyWithoutOwnerNestedInput = {
        create?: XOR<ExpenseCreateWithoutOwnerInput, ExpenseUncheckedCreateWithoutOwnerInput> | ExpenseCreateWithoutOwnerInput[] | ExpenseUncheckedCreateWithoutOwnerInput[]
        connectOrCreate?: ExpenseCreateOrConnectWithoutOwnerInput | ExpenseCreateOrConnectWithoutOwnerInput[]
        upsert?: ExpenseUpsertWithWhereUniqueWithoutOwnerInput | ExpenseUpsertWithWhereUniqueWithoutOwnerInput[]
        createMany?: ExpenseCreateManyOwnerInputEnvelope
        set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        update?: ExpenseUpdateWithWhereUniqueWithoutOwnerInput | ExpenseUpdateWithWhereUniqueWithoutOwnerInput[]
        updateMany?: ExpenseUpdateManyWithWhereWithoutOwnerInput | ExpenseUpdateManyWithWhereWithoutOwnerInput[]
        deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    };
    export type ExpenseUncheckedUpdateManyWithoutPayerNestedInput = {
        create?: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput> | ExpenseCreateWithoutPayerInput[] | ExpenseUncheckedCreateWithoutPayerInput[]
        connectOrCreate?: ExpenseCreateOrConnectWithoutPayerInput | ExpenseCreateOrConnectWithoutPayerInput[]
        upsert?: ExpenseUpsertWithWhereUniqueWithoutPayerInput | ExpenseUpsertWithWhereUniqueWithoutPayerInput[]
        createMany?: ExpenseCreateManyPayerInputEnvelope
        set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        update?: ExpenseUpdateWithWhereUniqueWithoutPayerInput | ExpenseUpdateWithWhereUniqueWithoutPayerInput[]
        updateMany?: ExpenseUpdateManyWithWhereWithoutPayerInput | ExpenseUpdateManyWithWhereWithoutPayerInput[]
        deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    };
    export type ExpenseShareUncheckedUpdateManyWithoutUserNestedInput = {
        create?: XOR<ExpenseShareCreateWithoutUserInput, ExpenseShareUncheckedCreateWithoutUserInput> | ExpenseShareCreateWithoutUserInput[] | ExpenseShareUncheckedCreateWithoutUserInput[]
        connectOrCreate?: ExpenseShareCreateOrConnectWithoutUserInput | ExpenseShareCreateOrConnectWithoutUserInput[]
        upsert?: ExpenseShareUpsertWithWhereUniqueWithoutUserInput | ExpenseShareUpsertWithWhereUniqueWithoutUserInput[]
        createMany?: ExpenseShareCreateManyUserInputEnvelope
        set?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
        disconnect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
        delete?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
        connect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
        update?: ExpenseShareUpdateWithWhereUniqueWithoutUserInput | ExpenseShareUpdateWithWhereUniqueWithoutUserInput[]
        updateMany?: ExpenseShareUpdateManyWithWhereWithoutUserInput | ExpenseShareUpdateManyWithWhereWithoutUserInput[]
        deleteMany?: ExpenseShareScalarWhereInput | ExpenseShareScalarWhereInput[]
    };
    export type PaymentUncheckedUpdateManyWithoutRecipientNestedInput = {
        create?: XOR<PaymentCreateWithoutRecipientInput, PaymentUncheckedCreateWithoutRecipientInput> | PaymentCreateWithoutRecipientInput[] | PaymentUncheckedCreateWithoutRecipientInput[]
        connectOrCreate?: PaymentCreateOrConnectWithoutRecipientInput | PaymentCreateOrConnectWithoutRecipientInput[]
        upsert?: PaymentUpsertWithWhereUniqueWithoutRecipientInput | PaymentUpsertWithWhereUniqueWithoutRecipientInput[]
        createMany?: PaymentCreateManyRecipientInputEnvelope
        set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        update?: PaymentUpdateWithWhereUniqueWithoutRecipientInput | PaymentUpdateWithWhereUniqueWithoutRecipientInput[]
        updateMany?: PaymentUpdateManyWithWhereWithoutRecipientInput | PaymentUpdateManyWithWhereWithoutRecipientInput[]
        deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    };
    export type PaymentUncheckedUpdateManyWithoutPayerNestedInput = {
        create?: XOR<PaymentCreateWithoutPayerInput, PaymentUncheckedCreateWithoutPayerInput> | PaymentCreateWithoutPayerInput[] | PaymentUncheckedCreateWithoutPayerInput[]
        connectOrCreate?: PaymentCreateOrConnectWithoutPayerInput | PaymentCreateOrConnectWithoutPayerInput[]
        upsert?: PaymentUpsertWithWhereUniqueWithoutPayerInput | PaymentUpsertWithWhereUniqueWithoutPayerInput[]
        createMany?: PaymentCreateManyPayerInputEnvelope
        set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        update?: PaymentUpdateWithWhereUniqueWithoutPayerInput | PaymentUpdateWithWhereUniqueWithoutPayerInput[]
        updateMany?: PaymentUpdateManyWithWhereWithoutPayerInput | PaymentUpdateManyWithWhereWithoutPayerInput[]
        deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    };
    export type GroupParticipantCreateNestedManyWithoutGroupInput = {
        create?: XOR<GroupParticipantCreateWithoutGroupInput, GroupParticipantUncheckedCreateWithoutGroupInput> | GroupParticipantCreateWithoutGroupInput[] | GroupParticipantUncheckedCreateWithoutGroupInput[]
        connectOrCreate?: GroupParticipantCreateOrConnectWithoutGroupInput | GroupParticipantCreateOrConnectWithoutGroupInput[]
        createMany?: GroupParticipantCreateManyGroupInputEnvelope
        connect?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
    };
    export type ImageCreateNestedOneWithoutGroupInput = {
        create?: XOR<ImageCreateWithoutGroupInput, ImageUncheckedCreateWithoutGroupInput>
        connectOrCreate?: ImageCreateOrConnectWithoutGroupInput
        connect?: ImageWhereUniqueInput
    };
    export type MessageCreateNestedManyWithoutGroupInput = {
        create?: XOR<MessageCreateWithoutGroupInput, MessageUncheckedCreateWithoutGroupInput> | MessageCreateWithoutGroupInput[] | MessageUncheckedCreateWithoutGroupInput[]
        connectOrCreate?: MessageCreateOrConnectWithoutGroupInput | MessageCreateOrConnectWithoutGroupInput[]
        createMany?: MessageCreateManyGroupInputEnvelope
        connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    };
    export type ExpenseCreateNestedManyWithoutGroupInput = {
        create?: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput> | ExpenseCreateWithoutGroupInput[] | ExpenseUncheckedCreateWithoutGroupInput[]
        connectOrCreate?: ExpenseCreateOrConnectWithoutGroupInput | ExpenseCreateOrConnectWithoutGroupInput[]
        createMany?: ExpenseCreateManyGroupInputEnvelope
        connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    };
    export type PaymentCreateNestedManyWithoutGroupInput = {
        create?: XOR<PaymentCreateWithoutGroupInput, PaymentUncheckedCreateWithoutGroupInput> | PaymentCreateWithoutGroupInput[] | PaymentUncheckedCreateWithoutGroupInput[]
        connectOrCreate?: PaymentCreateOrConnectWithoutGroupInput | PaymentCreateOrConnectWithoutGroupInput[]
        createMany?: PaymentCreateManyGroupInputEnvelope
        connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    };
    export type GroupParticipantUncheckedCreateNestedManyWithoutGroupInput = {
        create?: XOR<GroupParticipantCreateWithoutGroupInput, GroupParticipantUncheckedCreateWithoutGroupInput> | GroupParticipantCreateWithoutGroupInput[] | GroupParticipantUncheckedCreateWithoutGroupInput[]
        connectOrCreate?: GroupParticipantCreateOrConnectWithoutGroupInput | GroupParticipantCreateOrConnectWithoutGroupInput[]
        createMany?: GroupParticipantCreateManyGroupInputEnvelope
        connect?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
    };
    export type MessageUncheckedCreateNestedManyWithoutGroupInput = {
        create?: XOR<MessageCreateWithoutGroupInput, MessageUncheckedCreateWithoutGroupInput> | MessageCreateWithoutGroupInput[] | MessageUncheckedCreateWithoutGroupInput[]
        connectOrCreate?: MessageCreateOrConnectWithoutGroupInput | MessageCreateOrConnectWithoutGroupInput[]
        createMany?: MessageCreateManyGroupInputEnvelope
        connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    };
    export type ExpenseUncheckedCreateNestedManyWithoutGroupInput = {
        create?: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput> | ExpenseCreateWithoutGroupInput[] | ExpenseUncheckedCreateWithoutGroupInput[]
        connectOrCreate?: ExpenseCreateOrConnectWithoutGroupInput | ExpenseCreateOrConnectWithoutGroupInput[]
        createMany?: ExpenseCreateManyGroupInputEnvelope
        connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    };
    export type PaymentUncheckedCreateNestedManyWithoutGroupInput = {
        create?: XOR<PaymentCreateWithoutGroupInput, PaymentUncheckedCreateWithoutGroupInput> | PaymentCreateWithoutGroupInput[] | PaymentUncheckedCreateWithoutGroupInput[]
        connectOrCreate?: PaymentCreateOrConnectWithoutGroupInput | PaymentCreateOrConnectWithoutGroupInput[]
        createMany?: PaymentCreateManyGroupInputEnvelope
        connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    };
    export type GroupParticipantUpdateManyWithoutGroupNestedInput = {
        create?: XOR<GroupParticipantCreateWithoutGroupInput, GroupParticipantUncheckedCreateWithoutGroupInput> | GroupParticipantCreateWithoutGroupInput[] | GroupParticipantUncheckedCreateWithoutGroupInput[]
        connectOrCreate?: GroupParticipantCreateOrConnectWithoutGroupInput | GroupParticipantCreateOrConnectWithoutGroupInput[]
        upsert?: GroupParticipantUpsertWithWhereUniqueWithoutGroupInput | GroupParticipantUpsertWithWhereUniqueWithoutGroupInput[]
        createMany?: GroupParticipantCreateManyGroupInputEnvelope
        set?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
        disconnect?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
        delete?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
        connect?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
        update?: GroupParticipantUpdateWithWhereUniqueWithoutGroupInput | GroupParticipantUpdateWithWhereUniqueWithoutGroupInput[]
        updateMany?: GroupParticipantUpdateManyWithWhereWithoutGroupInput | GroupParticipantUpdateManyWithWhereWithoutGroupInput[]
        deleteMany?: GroupParticipantScalarWhereInput | GroupParticipantScalarWhereInput[]
    };
    export type ImageUpdateOneWithoutGroupNestedInput = {
        create?: XOR<ImageCreateWithoutGroupInput, ImageUncheckedCreateWithoutGroupInput>
        connectOrCreate?: ImageCreateOrConnectWithoutGroupInput
        upsert?: ImageUpsertWithoutGroupInput
        disconnect?: ImageWhereInput | boolean
        delete?: ImageWhereInput | boolean
        connect?: ImageWhereUniqueInput
        update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutGroupInput, ImageUpdateWithoutGroupInput>, ImageUncheckedUpdateWithoutGroupInput>
    };
    export type MessageUpdateManyWithoutGroupNestedInput = {
        create?: XOR<MessageCreateWithoutGroupInput, MessageUncheckedCreateWithoutGroupInput> | MessageCreateWithoutGroupInput[] | MessageUncheckedCreateWithoutGroupInput[]
        connectOrCreate?: MessageCreateOrConnectWithoutGroupInput | MessageCreateOrConnectWithoutGroupInput[]
        upsert?: MessageUpsertWithWhereUniqueWithoutGroupInput | MessageUpsertWithWhereUniqueWithoutGroupInput[]
        createMany?: MessageCreateManyGroupInputEnvelope
        set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
        disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
        delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
        connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
        update?: MessageUpdateWithWhereUniqueWithoutGroupInput | MessageUpdateWithWhereUniqueWithoutGroupInput[]
        updateMany?: MessageUpdateManyWithWhereWithoutGroupInput | MessageUpdateManyWithWhereWithoutGroupInput[]
        deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
    };
    export type ExpenseUpdateManyWithoutGroupNestedInput = {
        create?: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput> | ExpenseCreateWithoutGroupInput[] | ExpenseUncheckedCreateWithoutGroupInput[]
        connectOrCreate?: ExpenseCreateOrConnectWithoutGroupInput | ExpenseCreateOrConnectWithoutGroupInput[]
        upsert?: ExpenseUpsertWithWhereUniqueWithoutGroupInput | ExpenseUpsertWithWhereUniqueWithoutGroupInput[]
        createMany?: ExpenseCreateManyGroupInputEnvelope
        set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        update?: ExpenseUpdateWithWhereUniqueWithoutGroupInput | ExpenseUpdateWithWhereUniqueWithoutGroupInput[]
        updateMany?: ExpenseUpdateManyWithWhereWithoutGroupInput | ExpenseUpdateManyWithWhereWithoutGroupInput[]
        deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    };
    export type PaymentUpdateManyWithoutGroupNestedInput = {
        create?: XOR<PaymentCreateWithoutGroupInput, PaymentUncheckedCreateWithoutGroupInput> | PaymentCreateWithoutGroupInput[] | PaymentUncheckedCreateWithoutGroupInput[]
        connectOrCreate?: PaymentCreateOrConnectWithoutGroupInput | PaymentCreateOrConnectWithoutGroupInput[]
        upsert?: PaymentUpsertWithWhereUniqueWithoutGroupInput | PaymentUpsertWithWhereUniqueWithoutGroupInput[]
        createMany?: PaymentCreateManyGroupInputEnvelope
        set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        update?: PaymentUpdateWithWhereUniqueWithoutGroupInput | PaymentUpdateWithWhereUniqueWithoutGroupInput[]
        updateMany?: PaymentUpdateManyWithWhereWithoutGroupInput | PaymentUpdateManyWithWhereWithoutGroupInput[]
        deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    };
    export type GroupParticipantUncheckedUpdateManyWithoutGroupNestedInput = {
        create?: XOR<GroupParticipantCreateWithoutGroupInput, GroupParticipantUncheckedCreateWithoutGroupInput> | GroupParticipantCreateWithoutGroupInput[] | GroupParticipantUncheckedCreateWithoutGroupInput[]
        connectOrCreate?: GroupParticipantCreateOrConnectWithoutGroupInput | GroupParticipantCreateOrConnectWithoutGroupInput[]
        upsert?: GroupParticipantUpsertWithWhereUniqueWithoutGroupInput | GroupParticipantUpsertWithWhereUniqueWithoutGroupInput[]
        createMany?: GroupParticipantCreateManyGroupInputEnvelope
        set?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
        disconnect?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
        delete?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
        connect?: GroupParticipantWhereUniqueInput | GroupParticipantWhereUniqueInput[]
        update?: GroupParticipantUpdateWithWhereUniqueWithoutGroupInput | GroupParticipantUpdateWithWhereUniqueWithoutGroupInput[]
        updateMany?: GroupParticipantUpdateManyWithWhereWithoutGroupInput | GroupParticipantUpdateManyWithWhereWithoutGroupInput[]
        deleteMany?: GroupParticipantScalarWhereInput | GroupParticipantScalarWhereInput[]
    };
    export type MessageUncheckedUpdateManyWithoutGroupNestedInput = {
        create?: XOR<MessageCreateWithoutGroupInput, MessageUncheckedCreateWithoutGroupInput> | MessageCreateWithoutGroupInput[] | MessageUncheckedCreateWithoutGroupInput[]
        connectOrCreate?: MessageCreateOrConnectWithoutGroupInput | MessageCreateOrConnectWithoutGroupInput[]
        upsert?: MessageUpsertWithWhereUniqueWithoutGroupInput | MessageUpsertWithWhereUniqueWithoutGroupInput[]
        createMany?: MessageCreateManyGroupInputEnvelope
        set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
        disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
        delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
        connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
        update?: MessageUpdateWithWhereUniqueWithoutGroupInput | MessageUpdateWithWhereUniqueWithoutGroupInput[]
        updateMany?: MessageUpdateManyWithWhereWithoutGroupInput | MessageUpdateManyWithWhereWithoutGroupInput[]
        deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
    };
    export type ExpenseUncheckedUpdateManyWithoutGroupNestedInput = {
        create?: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput> | ExpenseCreateWithoutGroupInput[] | ExpenseUncheckedCreateWithoutGroupInput[]
        connectOrCreate?: ExpenseCreateOrConnectWithoutGroupInput | ExpenseCreateOrConnectWithoutGroupInput[]
        upsert?: ExpenseUpsertWithWhereUniqueWithoutGroupInput | ExpenseUpsertWithWhereUniqueWithoutGroupInput[]
        createMany?: ExpenseCreateManyGroupInputEnvelope
        set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
        update?: ExpenseUpdateWithWhereUniqueWithoutGroupInput | ExpenseUpdateWithWhereUniqueWithoutGroupInput[]
        updateMany?: ExpenseUpdateManyWithWhereWithoutGroupInput | ExpenseUpdateManyWithWhereWithoutGroupInput[]
        deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    };
    export type PaymentUncheckedUpdateManyWithoutGroupNestedInput = {
        create?: XOR<PaymentCreateWithoutGroupInput, PaymentUncheckedCreateWithoutGroupInput> | PaymentCreateWithoutGroupInput[] | PaymentUncheckedCreateWithoutGroupInput[]
        connectOrCreate?: PaymentCreateOrConnectWithoutGroupInput | PaymentCreateOrConnectWithoutGroupInput[]
        upsert?: PaymentUpsertWithWhereUniqueWithoutGroupInput | PaymentUpsertWithWhereUniqueWithoutGroupInput[]
        createMany?: PaymentCreateManyGroupInputEnvelope
        set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        update?: PaymentUpdateWithWhereUniqueWithoutGroupInput | PaymentUpdateWithWhereUniqueWithoutGroupInput[]
        updateMany?: PaymentUpdateManyWithWhereWithoutGroupInput | PaymentUpdateManyWithWhereWithoutGroupInput[]
        deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    };
    export type ProfileCreateNestedOneWithoutGroupsInput = {
        create?: XOR<ProfileCreateWithoutGroupsInput, ProfileUncheckedCreateWithoutGroupsInput>
        connectOrCreate?: ProfileCreateOrConnectWithoutGroupsInput
        connect?: ProfileWhereUniqueInput
    };
    export type GroupCreateNestedOneWithoutParticipantsInput = {
        create?: XOR<GroupCreateWithoutParticipantsInput, GroupUncheckedCreateWithoutParticipantsInput>
        connectOrCreate?: GroupCreateOrConnectWithoutParticipantsInput
        connect?: GroupWhereUniqueInput
    };
    export type EnumRoleFieldUpdateOperationsInput = {
        set?: $Enums.Role
    };
    export type ProfileUpdateOneRequiredWithoutGroupsNestedInput = {
        create?: XOR<ProfileCreateWithoutGroupsInput, ProfileUncheckedCreateWithoutGroupsInput>
        connectOrCreate?: ProfileCreateOrConnectWithoutGroupsInput
        upsert?: ProfileUpsertWithoutGroupsInput
        connect?: ProfileWhereUniqueInput
        update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutGroupsInput, ProfileUpdateWithoutGroupsInput>, ProfileUncheckedUpdateWithoutGroupsInput>
    };
    export type GroupUpdateOneRequiredWithoutParticipantsNestedInput = {
        create?: XOR<GroupCreateWithoutParticipantsInput, GroupUncheckedCreateWithoutParticipantsInput>
        connectOrCreate?: GroupCreateOrConnectWithoutParticipantsInput
        upsert?: GroupUpsertWithoutParticipantsInput
        connect?: GroupWhereUniqueInput
        update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutParticipantsInput, GroupUpdateWithoutParticipantsInput>, GroupUncheckedUpdateWithoutParticipantsInput>
    };
    export type GroupCreateNestedManyWithoutCoverImageInput = {
        create?: XOR<GroupCreateWithoutCoverImageInput, GroupUncheckedCreateWithoutCoverImageInput> | GroupCreateWithoutCoverImageInput[] | GroupUncheckedCreateWithoutCoverImageInput[]
        connectOrCreate?: GroupCreateOrConnectWithoutCoverImageInput | GroupCreateOrConnectWithoutCoverImageInput[]
        createMany?: GroupCreateManyCoverImageInputEnvelope
        connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    };
    export type ProfileCreateNestedManyWithoutAvatarInput = {
        create?: XOR<ProfileCreateWithoutAvatarInput, ProfileUncheckedCreateWithoutAvatarInput> | ProfileCreateWithoutAvatarInput[] | ProfileUncheckedCreateWithoutAvatarInput[]
        connectOrCreate?: ProfileCreateOrConnectWithoutAvatarInput | ProfileCreateOrConnectWithoutAvatarInput[]
        createMany?: ProfileCreateManyAvatarInputEnvelope
        connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    };
    export type GroupUncheckedCreateNestedManyWithoutCoverImageInput = {
        create?: XOR<GroupCreateWithoutCoverImageInput, GroupUncheckedCreateWithoutCoverImageInput> | GroupCreateWithoutCoverImageInput[] | GroupUncheckedCreateWithoutCoverImageInput[]
        connectOrCreate?: GroupCreateOrConnectWithoutCoverImageInput | GroupCreateOrConnectWithoutCoverImageInput[]
        createMany?: GroupCreateManyCoverImageInputEnvelope
        connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    };
    export type ProfileUncheckedCreateNestedManyWithoutAvatarInput = {
        create?: XOR<ProfileCreateWithoutAvatarInput, ProfileUncheckedCreateWithoutAvatarInput> | ProfileCreateWithoutAvatarInput[] | ProfileUncheckedCreateWithoutAvatarInput[]
        connectOrCreate?: ProfileCreateOrConnectWithoutAvatarInput | ProfileCreateOrConnectWithoutAvatarInput[]
        createMany?: ProfileCreateManyAvatarInputEnvelope
        connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    };
    export type GroupUpdateManyWithoutCoverImageNestedInput = {
        create?: XOR<GroupCreateWithoutCoverImageInput, GroupUncheckedCreateWithoutCoverImageInput> | GroupCreateWithoutCoverImageInput[] | GroupUncheckedCreateWithoutCoverImageInput[]
        connectOrCreate?: GroupCreateOrConnectWithoutCoverImageInput | GroupCreateOrConnectWithoutCoverImageInput[]
        upsert?: GroupUpsertWithWhereUniqueWithoutCoverImageInput | GroupUpsertWithWhereUniqueWithoutCoverImageInput[]
        createMany?: GroupCreateManyCoverImageInputEnvelope
        set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
        disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
        delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
        connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
        update?: GroupUpdateWithWhereUniqueWithoutCoverImageInput | GroupUpdateWithWhereUniqueWithoutCoverImageInput[]
        updateMany?: GroupUpdateManyWithWhereWithoutCoverImageInput | GroupUpdateManyWithWhereWithoutCoverImageInput[]
        deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
    };
    export type ProfileUpdateManyWithoutAvatarNestedInput = {
        create?: XOR<ProfileCreateWithoutAvatarInput, ProfileUncheckedCreateWithoutAvatarInput> | ProfileCreateWithoutAvatarInput[] | ProfileUncheckedCreateWithoutAvatarInput[]
        connectOrCreate?: ProfileCreateOrConnectWithoutAvatarInput | ProfileCreateOrConnectWithoutAvatarInput[]
        upsert?: ProfileUpsertWithWhereUniqueWithoutAvatarInput | ProfileUpsertWithWhereUniqueWithoutAvatarInput[]
        createMany?: ProfileCreateManyAvatarInputEnvelope
        set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
        disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
        delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
        connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
        update?: ProfileUpdateWithWhereUniqueWithoutAvatarInput | ProfileUpdateWithWhereUniqueWithoutAvatarInput[]
        updateMany?: ProfileUpdateManyWithWhereWithoutAvatarInput | ProfileUpdateManyWithWhereWithoutAvatarInput[]
        deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    };
    export type GroupUncheckedUpdateManyWithoutCoverImageNestedInput = {
        create?: XOR<GroupCreateWithoutCoverImageInput, GroupUncheckedCreateWithoutCoverImageInput> | GroupCreateWithoutCoverImageInput[] | GroupUncheckedCreateWithoutCoverImageInput[]
        connectOrCreate?: GroupCreateOrConnectWithoutCoverImageInput | GroupCreateOrConnectWithoutCoverImageInput[]
        upsert?: GroupUpsertWithWhereUniqueWithoutCoverImageInput | GroupUpsertWithWhereUniqueWithoutCoverImageInput[]
        createMany?: GroupCreateManyCoverImageInputEnvelope
        set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
        disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
        delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
        connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
        update?: GroupUpdateWithWhereUniqueWithoutCoverImageInput | GroupUpdateWithWhereUniqueWithoutCoverImageInput[]
        updateMany?: GroupUpdateManyWithWhereWithoutCoverImageInput | GroupUpdateManyWithWhereWithoutCoverImageInput[]
        deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
    };
    export type ProfileUncheckedUpdateManyWithoutAvatarNestedInput = {
        create?: XOR<ProfileCreateWithoutAvatarInput, ProfileUncheckedCreateWithoutAvatarInput> | ProfileCreateWithoutAvatarInput[] | ProfileUncheckedCreateWithoutAvatarInput[]
        connectOrCreate?: ProfileCreateOrConnectWithoutAvatarInput | ProfileCreateOrConnectWithoutAvatarInput[]
        upsert?: ProfileUpsertWithWhereUniqueWithoutAvatarInput | ProfileUpsertWithWhereUniqueWithoutAvatarInput[]
        createMany?: ProfileCreateManyAvatarInputEnvelope
        set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
        disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
        delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
        connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
        update?: ProfileUpdateWithWhereUniqueWithoutAvatarInput | ProfileUpdateWithWhereUniqueWithoutAvatarInput[]
        updateMany?: ProfileUpdateManyWithWhereWithoutAvatarInput | ProfileUpdateManyWithWhereWithoutAvatarInput[]
        deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    };
    export type ProfileCreateNestedOneWithoutMessagesInput = {
        create?: XOR<ProfileCreateWithoutMessagesInput, ProfileUncheckedCreateWithoutMessagesInput>
        connectOrCreate?: ProfileCreateOrConnectWithoutMessagesInput
        connect?: ProfileWhereUniqueInput
    };
    export type GroupCreateNestedOneWithoutMessagesInput = {
        create?: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
        connectOrCreate?: GroupCreateOrConnectWithoutMessagesInput
        connect?: GroupWhereUniqueInput
    };
    export type MessageAttachmentCreateNestedManyWithoutMessageInput = {
        create?: XOR<MessageAttachmentCreateWithoutMessageInput, MessageAttachmentUncheckedCreateWithoutMessageInput> | MessageAttachmentCreateWithoutMessageInput[] | MessageAttachmentUncheckedCreateWithoutMessageInput[]
        connectOrCreate?: MessageAttachmentCreateOrConnectWithoutMessageInput | MessageAttachmentCreateOrConnectWithoutMessageInput[]
        createMany?: MessageAttachmentCreateManyMessageInputEnvelope
        connect?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
    };
    export type MessageAttachmentUncheckedCreateNestedManyWithoutMessageInput = {
        create?: XOR<MessageAttachmentCreateWithoutMessageInput, MessageAttachmentUncheckedCreateWithoutMessageInput> | MessageAttachmentCreateWithoutMessageInput[] | MessageAttachmentUncheckedCreateWithoutMessageInput[]
        connectOrCreate?: MessageAttachmentCreateOrConnectWithoutMessageInput | MessageAttachmentCreateOrConnectWithoutMessageInput[]
        createMany?: MessageAttachmentCreateManyMessageInputEnvelope
        connect?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
    };
    export type EnumAuthorTypeFieldUpdateOperationsInput = {
        set?: $Enums.AuthorType
    };
    export type ProfileUpdateOneWithoutMessagesNestedInput = {
        create?: XOR<ProfileCreateWithoutMessagesInput, ProfileUncheckedCreateWithoutMessagesInput>
        connectOrCreate?: ProfileCreateOrConnectWithoutMessagesInput
        upsert?: ProfileUpsertWithoutMessagesInput
        disconnect?: ProfileWhereInput | boolean
        delete?: ProfileWhereInput | boolean
        connect?: ProfileWhereUniqueInput
        update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutMessagesInput, ProfileUpdateWithoutMessagesInput>, ProfileUncheckedUpdateWithoutMessagesInput>
    };
    export type GroupUpdateOneRequiredWithoutMessagesNestedInput = {
        create?: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
        connectOrCreate?: GroupCreateOrConnectWithoutMessagesInput
        upsert?: GroupUpsertWithoutMessagesInput
        connect?: GroupWhereUniqueInput
        update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMessagesInput, GroupUpdateWithoutMessagesInput>, GroupUncheckedUpdateWithoutMessagesInput>
    };
    export type MessageAttachmentUpdateManyWithoutMessageNestedInput = {
        create?: XOR<MessageAttachmentCreateWithoutMessageInput, MessageAttachmentUncheckedCreateWithoutMessageInput> | MessageAttachmentCreateWithoutMessageInput[] | MessageAttachmentUncheckedCreateWithoutMessageInput[]
        connectOrCreate?: MessageAttachmentCreateOrConnectWithoutMessageInput | MessageAttachmentCreateOrConnectWithoutMessageInput[]
        upsert?: MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput | MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput[]
        createMany?: MessageAttachmentCreateManyMessageInputEnvelope
        set?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
        disconnect?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
        delete?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
        connect?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
        update?: MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput | MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput[]
        updateMany?: MessageAttachmentUpdateManyWithWhereWithoutMessageInput | MessageAttachmentUpdateManyWithWhereWithoutMessageInput[]
        deleteMany?: MessageAttachmentScalarWhereInput | MessageAttachmentScalarWhereInput[]
    };
    export type MessageAttachmentUncheckedUpdateManyWithoutMessageNestedInput = {
        create?: XOR<MessageAttachmentCreateWithoutMessageInput, MessageAttachmentUncheckedCreateWithoutMessageInput> | MessageAttachmentCreateWithoutMessageInput[] | MessageAttachmentUncheckedCreateWithoutMessageInput[]
        connectOrCreate?: MessageAttachmentCreateOrConnectWithoutMessageInput | MessageAttachmentCreateOrConnectWithoutMessageInput[]
        upsert?: MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput | MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput[]
        createMany?: MessageAttachmentCreateManyMessageInputEnvelope
        set?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
        disconnect?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
        delete?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
        connect?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
        update?: MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput | MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput[]
        updateMany?: MessageAttachmentUpdateManyWithWhereWithoutMessageInput | MessageAttachmentUpdateManyWithWhereWithoutMessageInput[]
        deleteMany?: MessageAttachmentScalarWhereInput | MessageAttachmentScalarWhereInput[]
    };
    export type MessageCreateNestedOneWithoutAttachmentsInput = {
        create?: XOR<MessageCreateWithoutAttachmentsInput, MessageUncheckedCreateWithoutAttachmentsInput>
        connectOrCreate?: MessageCreateOrConnectWithoutAttachmentsInput
        connect?: MessageWhereUniqueInput
    };
    export type ExpenseCreateNestedOneWithoutMessageAttachmentsInput = {
        create?: XOR<ExpenseCreateWithoutMessageAttachmentsInput, ExpenseUncheckedCreateWithoutMessageAttachmentsInput>
        connectOrCreate?: ExpenseCreateOrConnectWithoutMessageAttachmentsInput
        connect?: ExpenseWhereUniqueInput
    };
    export type EnumMessageAttachmentTypeFieldUpdateOperationsInput = {
        set?: $Enums.MessageAttachmentType
    };
    export type MessageUpdateOneRequiredWithoutAttachmentsNestedInput = {
        create?: XOR<MessageCreateWithoutAttachmentsInput, MessageUncheckedCreateWithoutAttachmentsInput>
        connectOrCreate?: MessageCreateOrConnectWithoutAttachmentsInput
        upsert?: MessageUpsertWithoutAttachmentsInput
        connect?: MessageWhereUniqueInput
        update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutAttachmentsInput, MessageUpdateWithoutAttachmentsInput>, MessageUncheckedUpdateWithoutAttachmentsInput>
    };
    export type ExpenseUpdateOneWithoutMessageAttachmentsNestedInput = {
        create?: XOR<ExpenseCreateWithoutMessageAttachmentsInput, ExpenseUncheckedCreateWithoutMessageAttachmentsInput>
        connectOrCreate?: ExpenseCreateOrConnectWithoutMessageAttachmentsInput
        upsert?: ExpenseUpsertWithoutMessageAttachmentsInput
        disconnect?: ExpenseWhereInput | boolean
        delete?: ExpenseWhereInput | boolean
        connect?: ExpenseWhereUniqueInput
        update?: XOR<XOR<ExpenseUpdateToOneWithWhereWithoutMessageAttachmentsInput, ExpenseUpdateWithoutMessageAttachmentsInput>, ExpenseUncheckedUpdateWithoutMessageAttachmentsInput>
    };
    export type ProfileCreateNestedOneWithoutExpensesOwnedInput = {
        create?: XOR<ProfileCreateWithoutExpensesOwnedInput, ProfileUncheckedCreateWithoutExpensesOwnedInput>
        connectOrCreate?: ProfileCreateOrConnectWithoutExpensesOwnedInput
        connect?: ProfileWhereUniqueInput
    };
    export type ProfileCreateNestedOneWithoutExpensesPaidInput = {
        create?: XOR<ProfileCreateWithoutExpensesPaidInput, ProfileUncheckedCreateWithoutExpensesPaidInput>
        connectOrCreate?: ProfileCreateOrConnectWithoutExpensesPaidInput
        connect?: ProfileWhereUniqueInput
    };
    export type GroupCreateNestedOneWithoutExpensesInput = {
        create?: XOR<GroupCreateWithoutExpensesInput, GroupUncheckedCreateWithoutExpensesInput>
        connectOrCreate?: GroupCreateOrConnectWithoutExpensesInput
        connect?: GroupWhereUniqueInput
    };
    export type ExpenseShareCreateNestedManyWithoutExpenseInput = {
        create?: XOR<ExpenseShareCreateWithoutExpenseInput, ExpenseShareUncheckedCreateWithoutExpenseInput> | ExpenseShareCreateWithoutExpenseInput[] | ExpenseShareUncheckedCreateWithoutExpenseInput[]
        connectOrCreate?: ExpenseShareCreateOrConnectWithoutExpenseInput | ExpenseShareCreateOrConnectWithoutExpenseInput[]
        createMany?: ExpenseShareCreateManyExpenseInputEnvelope
        connect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    };
    export type MessageAttachmentCreateNestedManyWithoutExpenseInput = {
        create?: XOR<MessageAttachmentCreateWithoutExpenseInput, MessageAttachmentUncheckedCreateWithoutExpenseInput> | MessageAttachmentCreateWithoutExpenseInput[] | MessageAttachmentUncheckedCreateWithoutExpenseInput[]
        connectOrCreate?: MessageAttachmentCreateOrConnectWithoutExpenseInput | MessageAttachmentCreateOrConnectWithoutExpenseInput[]
        createMany?: MessageAttachmentCreateManyExpenseInputEnvelope
        connect?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
    };
    export type ExpenseShareUncheckedCreateNestedManyWithoutExpenseInput = {
        create?: XOR<ExpenseShareCreateWithoutExpenseInput, ExpenseShareUncheckedCreateWithoutExpenseInput> | ExpenseShareCreateWithoutExpenseInput[] | ExpenseShareUncheckedCreateWithoutExpenseInput[]
        connectOrCreate?: ExpenseShareCreateOrConnectWithoutExpenseInput | ExpenseShareCreateOrConnectWithoutExpenseInput[]
        createMany?: ExpenseShareCreateManyExpenseInputEnvelope
        connect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    };
    export type MessageAttachmentUncheckedCreateNestedManyWithoutExpenseInput = {
        create?: XOR<MessageAttachmentCreateWithoutExpenseInput, MessageAttachmentUncheckedCreateWithoutExpenseInput> | MessageAttachmentCreateWithoutExpenseInput[] | MessageAttachmentUncheckedCreateWithoutExpenseInput[]
        connectOrCreate?: MessageAttachmentCreateOrConnectWithoutExpenseInput | MessageAttachmentCreateOrConnectWithoutExpenseInput[]
        createMany?: MessageAttachmentCreateManyExpenseInputEnvelope
        connect?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
    };
    export type IntFieldUpdateOperationsInput = {
        set?: number
        increment?: number
        decrement?: number
        multiply?: number
        divide?: number
    };
    export type ProfileUpdateOneRequiredWithoutExpensesOwnedNestedInput = {
        create?: XOR<ProfileCreateWithoutExpensesOwnedInput, ProfileUncheckedCreateWithoutExpensesOwnedInput>
        connectOrCreate?: ProfileCreateOrConnectWithoutExpensesOwnedInput
        upsert?: ProfileUpsertWithoutExpensesOwnedInput
        connect?: ProfileWhereUniqueInput
        update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutExpensesOwnedInput, ProfileUpdateWithoutExpensesOwnedInput>, ProfileUncheckedUpdateWithoutExpensesOwnedInput>
    };
    export type ProfileUpdateOneRequiredWithoutExpensesPaidNestedInput = {
        create?: XOR<ProfileCreateWithoutExpensesPaidInput, ProfileUncheckedCreateWithoutExpensesPaidInput>
        connectOrCreate?: ProfileCreateOrConnectWithoutExpensesPaidInput
        upsert?: ProfileUpsertWithoutExpensesPaidInput
        connect?: ProfileWhereUniqueInput
        update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutExpensesPaidInput, ProfileUpdateWithoutExpensesPaidInput>, ProfileUncheckedUpdateWithoutExpensesPaidInput>
    };
    export type GroupUpdateOneRequiredWithoutExpensesNestedInput = {
        create?: XOR<GroupCreateWithoutExpensesInput, GroupUncheckedCreateWithoutExpensesInput>
        connectOrCreate?: GroupCreateOrConnectWithoutExpensesInput
        upsert?: GroupUpsertWithoutExpensesInput
        connect?: GroupWhereUniqueInput
        update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutExpensesInput, GroupUpdateWithoutExpensesInput>, GroupUncheckedUpdateWithoutExpensesInput>
    };
    export type ExpenseShareUpdateManyWithoutExpenseNestedInput = {
        create?: XOR<ExpenseShareCreateWithoutExpenseInput, ExpenseShareUncheckedCreateWithoutExpenseInput> | ExpenseShareCreateWithoutExpenseInput[] | ExpenseShareUncheckedCreateWithoutExpenseInput[]
        connectOrCreate?: ExpenseShareCreateOrConnectWithoutExpenseInput | ExpenseShareCreateOrConnectWithoutExpenseInput[]
        upsert?: ExpenseShareUpsertWithWhereUniqueWithoutExpenseInput | ExpenseShareUpsertWithWhereUniqueWithoutExpenseInput[]
        createMany?: ExpenseShareCreateManyExpenseInputEnvelope
        set?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
        disconnect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
        delete?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
        connect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
        update?: ExpenseShareUpdateWithWhereUniqueWithoutExpenseInput | ExpenseShareUpdateWithWhereUniqueWithoutExpenseInput[]
        updateMany?: ExpenseShareUpdateManyWithWhereWithoutExpenseInput | ExpenseShareUpdateManyWithWhereWithoutExpenseInput[]
        deleteMany?: ExpenseShareScalarWhereInput | ExpenseShareScalarWhereInput[]
    };
    export type MessageAttachmentUpdateManyWithoutExpenseNestedInput = {
        create?: XOR<MessageAttachmentCreateWithoutExpenseInput, MessageAttachmentUncheckedCreateWithoutExpenseInput> | MessageAttachmentCreateWithoutExpenseInput[] | MessageAttachmentUncheckedCreateWithoutExpenseInput[]
        connectOrCreate?: MessageAttachmentCreateOrConnectWithoutExpenseInput | MessageAttachmentCreateOrConnectWithoutExpenseInput[]
        upsert?: MessageAttachmentUpsertWithWhereUniqueWithoutExpenseInput | MessageAttachmentUpsertWithWhereUniqueWithoutExpenseInput[]
        createMany?: MessageAttachmentCreateManyExpenseInputEnvelope
        set?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
        disconnect?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
        delete?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
        connect?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
        update?: MessageAttachmentUpdateWithWhereUniqueWithoutExpenseInput | MessageAttachmentUpdateWithWhereUniqueWithoutExpenseInput[]
        updateMany?: MessageAttachmentUpdateManyWithWhereWithoutExpenseInput | MessageAttachmentUpdateManyWithWhereWithoutExpenseInput[]
        deleteMany?: MessageAttachmentScalarWhereInput | MessageAttachmentScalarWhereInput[]
    };
    export type ExpenseShareUncheckedUpdateManyWithoutExpenseNestedInput = {
        create?: XOR<ExpenseShareCreateWithoutExpenseInput, ExpenseShareUncheckedCreateWithoutExpenseInput> | ExpenseShareCreateWithoutExpenseInput[] | ExpenseShareUncheckedCreateWithoutExpenseInput[]
        connectOrCreate?: ExpenseShareCreateOrConnectWithoutExpenseInput | ExpenseShareCreateOrConnectWithoutExpenseInput[]
        upsert?: ExpenseShareUpsertWithWhereUniqueWithoutExpenseInput | ExpenseShareUpsertWithWhereUniqueWithoutExpenseInput[]
        createMany?: ExpenseShareCreateManyExpenseInputEnvelope
        set?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
        disconnect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
        delete?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
        connect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
        update?: ExpenseShareUpdateWithWhereUniqueWithoutExpenseInput | ExpenseShareUpdateWithWhereUniqueWithoutExpenseInput[]
        updateMany?: ExpenseShareUpdateManyWithWhereWithoutExpenseInput | ExpenseShareUpdateManyWithWhereWithoutExpenseInput[]
        deleteMany?: ExpenseShareScalarWhereInput | ExpenseShareScalarWhereInput[]
    };
    export type MessageAttachmentUncheckedUpdateManyWithoutExpenseNestedInput = {
        create?: XOR<MessageAttachmentCreateWithoutExpenseInput, MessageAttachmentUncheckedCreateWithoutExpenseInput> | MessageAttachmentCreateWithoutExpenseInput[] | MessageAttachmentUncheckedCreateWithoutExpenseInput[]
        connectOrCreate?: MessageAttachmentCreateOrConnectWithoutExpenseInput | MessageAttachmentCreateOrConnectWithoutExpenseInput[]
        upsert?: MessageAttachmentUpsertWithWhereUniqueWithoutExpenseInput | MessageAttachmentUpsertWithWhereUniqueWithoutExpenseInput[]
        createMany?: MessageAttachmentCreateManyExpenseInputEnvelope
        set?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
        disconnect?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
        delete?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
        connect?: MessageAttachmentWhereUniqueInput | MessageAttachmentWhereUniqueInput[]
        update?: MessageAttachmentUpdateWithWhereUniqueWithoutExpenseInput | MessageAttachmentUpdateWithWhereUniqueWithoutExpenseInput[]
        updateMany?: MessageAttachmentUpdateManyWithWhereWithoutExpenseInput | MessageAttachmentUpdateManyWithWhereWithoutExpenseInput[]
        deleteMany?: MessageAttachmentScalarWhereInput | MessageAttachmentScalarWhereInput[]
    };
    export type ProfileCreateNestedOneWithoutExpenseSharesInput = {
        create?: XOR<ProfileCreateWithoutExpenseSharesInput, ProfileUncheckedCreateWithoutExpenseSharesInput>
        connectOrCreate?: ProfileCreateOrConnectWithoutExpenseSharesInput
        connect?: ProfileWhereUniqueInput
    };
    export type ExpenseCreateNestedOneWithoutSharesInput = {
        create?: XOR<ExpenseCreateWithoutSharesInput, ExpenseUncheckedCreateWithoutSharesInput>
        connectOrCreate?: ExpenseCreateOrConnectWithoutSharesInput
        connect?: ExpenseWhereUniqueInput
    };
    export type BoolFieldUpdateOperationsInput = {
        set?: boolean
    };
    export type ProfileUpdateOneRequiredWithoutExpenseSharesNestedInput = {
        create?: XOR<ProfileCreateWithoutExpenseSharesInput, ProfileUncheckedCreateWithoutExpenseSharesInput>
        connectOrCreate?: ProfileCreateOrConnectWithoutExpenseSharesInput
        upsert?: ProfileUpsertWithoutExpenseSharesInput
        connect?: ProfileWhereUniqueInput
        update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutExpenseSharesInput, ProfileUpdateWithoutExpenseSharesInput>, ProfileUncheckedUpdateWithoutExpenseSharesInput>
    };
    export type ExpenseUpdateOneRequiredWithoutSharesNestedInput = {
        create?: XOR<ExpenseCreateWithoutSharesInput, ExpenseUncheckedCreateWithoutSharesInput>
        connectOrCreate?: ExpenseCreateOrConnectWithoutSharesInput
        upsert?: ExpenseUpsertWithoutSharesInput
        connect?: ExpenseWhereUniqueInput
        update?: XOR<XOR<ExpenseUpdateToOneWithWhereWithoutSharesInput, ExpenseUpdateWithoutSharesInput>, ExpenseUncheckedUpdateWithoutSharesInput>
    };
    export type GroupCreateNestedOneWithoutPaymentsInput = {
        create?: XOR<GroupCreateWithoutPaymentsInput, GroupUncheckedCreateWithoutPaymentsInput>
        connectOrCreate?: GroupCreateOrConnectWithoutPaymentsInput
        connect?: GroupWhereUniqueInput
    };
    export type ProfileCreateNestedOneWithoutPaymentsReceivedInput = {
        create?: XOR<ProfileCreateWithoutPaymentsReceivedInput, ProfileUncheckedCreateWithoutPaymentsReceivedInput>
        connectOrCreate?: ProfileCreateOrConnectWithoutPaymentsReceivedInput
        connect?: ProfileWhereUniqueInput
    };
    export type ProfileCreateNestedOneWithoutPaymentsPaidInput = {
        create?: XOR<ProfileCreateWithoutPaymentsPaidInput, ProfileUncheckedCreateWithoutPaymentsPaidInput>
        connectOrCreate?: ProfileCreateOrConnectWithoutPaymentsPaidInput
        connect?: ProfileWhereUniqueInput
    };
    export type GroupUpdateOneRequiredWithoutPaymentsNestedInput = {
        create?: XOR<GroupCreateWithoutPaymentsInput, GroupUncheckedCreateWithoutPaymentsInput>
        connectOrCreate?: GroupCreateOrConnectWithoutPaymentsInput
        upsert?: GroupUpsertWithoutPaymentsInput
        connect?: GroupWhereUniqueInput
        update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutPaymentsInput, GroupUpdateWithoutPaymentsInput>, GroupUncheckedUpdateWithoutPaymentsInput>
    };
    export type ProfileUpdateOneRequiredWithoutPaymentsReceivedNestedInput = {
        create?: XOR<ProfileCreateWithoutPaymentsReceivedInput, ProfileUncheckedCreateWithoutPaymentsReceivedInput>
        connectOrCreate?: ProfileCreateOrConnectWithoutPaymentsReceivedInput
        upsert?: ProfileUpsertWithoutPaymentsReceivedInput
        connect?: ProfileWhereUniqueInput
        update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutPaymentsReceivedInput, ProfileUpdateWithoutPaymentsReceivedInput>, ProfileUncheckedUpdateWithoutPaymentsReceivedInput>
    };
    export type ProfileUpdateOneRequiredWithoutPaymentsPaidNestedInput = {
        create?: XOR<ProfileCreateWithoutPaymentsPaidInput, ProfileUncheckedCreateWithoutPaymentsPaidInput>
        connectOrCreate?: ProfileCreateOrConnectWithoutPaymentsPaidInput
        upsert?: ProfileUpsertWithoutPaymentsPaidInput
        connect?: ProfileWhereUniqueInput
        update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutPaymentsPaidInput, ProfileUpdateWithoutPaymentsPaidInput>, ProfileUncheckedUpdateWithoutPaymentsPaidInput>
    };
    export type NestedStringFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[] | ListStringFieldRefInput<$PrismaModel>
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        not?: NestedStringFilter<$PrismaModel> | string
    };
    export type NestedEnumCurrencyCodeFilter<$PrismaModel = never> = {
        equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
        in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
        notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
        not?: NestedEnumCurrencyCodeFilter<$PrismaModel> | $Enums.CurrencyCode
    };
    export type NestedStringNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        not?: NestedStringNullableFilter<$PrismaModel> | string | null
    };
    export type NestedDateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string
    };
    export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[] | ListStringFieldRefInput<$PrismaModel>
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedStringFilter<$PrismaModel>
        _max?: NestedStringFilter<$PrismaModel>
    };
    export type NestedIntFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>
        in?: number[] | ListIntFieldRefInput<$PrismaModel>
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntFilter<$PrismaModel> | number
    };
    export type NestedEnumCurrencyCodeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
        in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
        notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
        not?: NestedEnumCurrencyCodeWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyCode
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumCurrencyCodeFilter<$PrismaModel>
        _max?: NestedEnumCurrencyCodeFilter<$PrismaModel>
    };
    export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _min?: NestedStringNullableFilter<$PrismaModel>
        _max?: NestedStringNullableFilter<$PrismaModel>
    };
    export type NestedIntNullableFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel> | null
        in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntNullableFilter<$PrismaModel> | number | null
    };
    export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedDateTimeFilter<$PrismaModel>
        _max?: NestedDateTimeFilter<$PrismaModel>
    };
    export type NestedEnumRoleFilter<$PrismaModel = never> = {
        equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
        in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
        notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
        not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
    };
    export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
        in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
        notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
        not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumRoleFilter<$PrismaModel>
        _max?: NestedEnumRoleFilter<$PrismaModel>
    };
    export type NestedEnumAuthorTypeFilter<$PrismaModel = never> = {
        equals?: $Enums.AuthorType | EnumAuthorTypeFieldRefInput<$PrismaModel>
        in?: $Enums.AuthorType[] | ListEnumAuthorTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.AuthorType[] | ListEnumAuthorTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumAuthorTypeFilter<$PrismaModel> | $Enums.AuthorType
    };
    export type NestedEnumAuthorTypeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.AuthorType | EnumAuthorTypeFieldRefInput<$PrismaModel>
        in?: $Enums.AuthorType[] | ListEnumAuthorTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.AuthorType[] | ListEnumAuthorTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumAuthorTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuthorType
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumAuthorTypeFilter<$PrismaModel>
        _max?: NestedEnumAuthorTypeFilter<$PrismaModel>
    };
    export type NestedEnumMessageAttachmentTypeFilter<$PrismaModel = never> = {
        equals?: $Enums.MessageAttachmentType | EnumMessageAttachmentTypeFieldRefInput<$PrismaModel>
        in?: $Enums.MessageAttachmentType[] | ListEnumMessageAttachmentTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.MessageAttachmentType[] | ListEnumMessageAttachmentTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumMessageAttachmentTypeFilter<$PrismaModel> | $Enums.MessageAttachmentType
    };
    export type NestedEnumMessageAttachmentTypeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.MessageAttachmentType | EnumMessageAttachmentTypeFieldRefInput<$PrismaModel>
        in?: $Enums.MessageAttachmentType[] | ListEnumMessageAttachmentTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.MessageAttachmentType[] | ListEnumMessageAttachmentTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumMessageAttachmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageAttachmentType
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumMessageAttachmentTypeFilter<$PrismaModel>
        _max?: NestedEnumMessageAttachmentTypeFilter<$PrismaModel>
    };
    export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>
        in?: number[] | ListIntFieldRefInput<$PrismaModel>
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
        _count?: NestedIntFilter<$PrismaModel>
        _avg?: NestedFloatFilter<$PrismaModel>
        _sum?: NestedIntFilter<$PrismaModel>
        _min?: NestedIntFilter<$PrismaModel>
        _max?: NestedIntFilter<$PrismaModel>
    };
    export type NestedFloatFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel>
        in?: number[] | ListFloatFieldRefInput<$PrismaModel>
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
        lt?: number | FloatFieldRefInput<$PrismaModel>
        lte?: number | FloatFieldRefInput<$PrismaModel>
        gt?: number | FloatFieldRefInput<$PrismaModel>
        gte?: number | FloatFieldRefInput<$PrismaModel>
        not?: NestedFloatFilter<$PrismaModel> | number
    };
    export type NestedJsonNullableFilter<$PrismaModel = never> = | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
    >
        | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
    export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
        equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
        path?: string[]
        string_contains?: string | StringFieldRefInput<$PrismaModel>
        string_starts_with?: string | StringFieldRefInput<$PrismaModel>
        string_ends_with?: string | StringFieldRefInput<$PrismaModel>
        array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    };
    export type NestedBoolFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>
        not?: NestedBoolFilter<$PrismaModel> | boolean
    };
    export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>
        not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedBoolFilter<$PrismaModel>
        _max?: NestedBoolFilter<$PrismaModel>
    };
    export type NestedJsonFilter<$PrismaModel = never> = | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
    >
        | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;
    export type NestedJsonFilterBase<$PrismaModel = never> = {
        equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
        path?: string[]
        string_contains?: string | StringFieldRefInput<$PrismaModel>
        string_starts_with?: string | StringFieldRefInput<$PrismaModel>
        string_ends_with?: string | StringFieldRefInput<$PrismaModel>
        array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    };
    export type GroupParticipantCreateWithoutUserInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        role: $Enums.Role
        group: GroupCreateNestedOneWithoutParticipantsInput
    };
    export type GroupParticipantUncheckedCreateWithoutUserInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        groupId: string
        role: $Enums.Role
    };
    export type GroupParticipantCreateOrConnectWithoutUserInput = {
        where: GroupParticipantWhereUniqueInput
        create: XOR<GroupParticipantCreateWithoutUserInput, GroupParticipantUncheckedCreateWithoutUserInput>
    };
    export type GroupParticipantCreateManyUserInputEnvelope = {
        data: GroupParticipantCreateManyUserInput | GroupParticipantCreateManyUserInput[]
        skipDuplicates?: boolean
    };
    export type ImageCreateWithoutProfileInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        path: string
        bucket: string
        uploadedById: string
        blurhash?: string | null
        Group?: GroupCreateNestedManyWithoutCoverImageInput
    };
    export type ImageUncheckedCreateWithoutProfileInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        path: string
        bucket: string
        uploadedById: string
        blurhash?: string | null
        Group?: GroupUncheckedCreateNestedManyWithoutCoverImageInput
    };
    export type ImageCreateOrConnectWithoutProfileInput = {
        where: ImageWhereUniqueInput
        create: XOR<ImageCreateWithoutProfileInput, ImageUncheckedCreateWithoutProfileInput>
    };
    export type MessageCreateWithoutAuthorInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        key: string
        text?: string | null
        authorType: $Enums.AuthorType
        group: GroupCreateNestedOneWithoutMessagesInput
        attachments?: MessageAttachmentCreateNestedManyWithoutMessageInput
    };
    export type MessageUncheckedCreateWithoutAuthorInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        key: string
        text?: string | null
        authorType: $Enums.AuthorType
        groupId: string
        attachments?: MessageAttachmentUncheckedCreateNestedManyWithoutMessageInput
    };
    export type MessageCreateOrConnectWithoutAuthorInput = {
        where: MessageWhereUniqueInput
        create: XOR<MessageCreateWithoutAuthorInput, MessageUncheckedCreateWithoutAuthorInput>
    };
    export type MessageCreateManyAuthorInputEnvelope = {
        data: MessageCreateManyAuthorInput | MessageCreateManyAuthorInput[]
        skipDuplicates?: boolean
    };
    export type ExpenseCreateWithoutOwnerInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        amount: number
        currency: $Enums.CurrencyCode
        description?: string | null
        conversion?: CurrencyConversion | null
        payer: ProfileCreateNestedOneWithoutExpensesPaidInput
        group: GroupCreateNestedOneWithoutExpensesInput
        shares?: ExpenseShareCreateNestedManyWithoutExpenseInput
        messageAttachments?: MessageAttachmentCreateNestedManyWithoutExpenseInput
    };
    export type ExpenseUncheckedCreateWithoutOwnerInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        payerId: string
        groupId: string
        amount: number
        currency: $Enums.CurrencyCode
        description?: string | null
        conversion?: CurrencyConversion | null
        shares?: ExpenseShareUncheckedCreateNestedManyWithoutExpenseInput
        messageAttachments?: MessageAttachmentUncheckedCreateNestedManyWithoutExpenseInput
    };
    export type ExpenseCreateOrConnectWithoutOwnerInput = {
        where: ExpenseWhereUniqueInput
        create: XOR<ExpenseCreateWithoutOwnerInput, ExpenseUncheckedCreateWithoutOwnerInput>
    };
    export type ExpenseCreateManyOwnerInputEnvelope = {
        data: ExpenseCreateManyOwnerInput | ExpenseCreateManyOwnerInput[]
        skipDuplicates?: boolean
    };
    export type ExpenseCreateWithoutPayerInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        amount: number
        currency: $Enums.CurrencyCode
        description?: string | null
        conversion?: CurrencyConversion | null
        owner: ProfileCreateNestedOneWithoutExpensesOwnedInput
        group: GroupCreateNestedOneWithoutExpensesInput
        shares?: ExpenseShareCreateNestedManyWithoutExpenseInput
        messageAttachments?: MessageAttachmentCreateNestedManyWithoutExpenseInput
    };
    export type ExpenseUncheckedCreateWithoutPayerInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        ownerId: string
        groupId: string
        amount: number
        currency: $Enums.CurrencyCode
        description?: string | null
        conversion?: CurrencyConversion | null
        shares?: ExpenseShareUncheckedCreateNestedManyWithoutExpenseInput
        messageAttachments?: MessageAttachmentUncheckedCreateNestedManyWithoutExpenseInput
    };
    export type ExpenseCreateOrConnectWithoutPayerInput = {
        where: ExpenseWhereUniqueInput
        create: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput>
    };
    export type ExpenseCreateManyPayerInputEnvelope = {
        data: ExpenseCreateManyPayerInput | ExpenseCreateManyPayerInput[]
        skipDuplicates?: boolean
    };
    export type ExpenseShareCreateWithoutUserInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        amount: number
        currency: $Enums.CurrencyCode
        locked?: boolean
        conversion?: CurrencyConversion | null
        expense: ExpenseCreateNestedOneWithoutSharesInput
    };
    export type ExpenseShareUncheckedCreateWithoutUserInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        expenseId: string
        amount: number
        currency: $Enums.CurrencyCode
        locked?: boolean
        conversion?: CurrencyConversion | null
    };
    export type ExpenseShareCreateOrConnectWithoutUserInput = {
        where: ExpenseShareWhereUniqueInput
        create: XOR<ExpenseShareCreateWithoutUserInput, ExpenseShareUncheckedCreateWithoutUserInput>
    };
    export type ExpenseShareCreateManyUserInputEnvelope = {
        data: ExpenseShareCreateManyUserInput | ExpenseShareCreateManyUserInput[]
        skipDuplicates?: boolean
    };
    export type PaymentCreateWithoutRecipientInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        amount: number
        currency: $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        group: GroupCreateNestedOneWithoutPaymentsInput
        payer: ProfileCreateNestedOneWithoutPaymentsPaidInput
    };
    export type PaymentUncheckedCreateWithoutRecipientInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        groupId: string
        amount: number
        currency: $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        payerId: string
    };
    export type PaymentCreateOrConnectWithoutRecipientInput = {
        where: PaymentWhereUniqueInput
        create: XOR<PaymentCreateWithoutRecipientInput, PaymentUncheckedCreateWithoutRecipientInput>
    };
    export type PaymentCreateManyRecipientInputEnvelope = {
        data: PaymentCreateManyRecipientInput | PaymentCreateManyRecipientInput[]
        skipDuplicates?: boolean
    };
    export type PaymentCreateWithoutPayerInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        amount: number
        currency: $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        group: GroupCreateNestedOneWithoutPaymentsInput
        recipient: ProfileCreateNestedOneWithoutPaymentsReceivedInput
    };
    export type PaymentUncheckedCreateWithoutPayerInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        groupId: string
        amount: number
        currency: $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        recipientId: string
    };
    export type PaymentCreateOrConnectWithoutPayerInput = {
        where: PaymentWhereUniqueInput
        create: XOR<PaymentCreateWithoutPayerInput, PaymentUncheckedCreateWithoutPayerInput>
    };
    export type PaymentCreateManyPayerInputEnvelope = {
        data: PaymentCreateManyPayerInput | PaymentCreateManyPayerInput[]
        skipDuplicates?: boolean
    };
    export type GroupParticipantUpsertWithWhereUniqueWithoutUserInput = {
        where: GroupParticipantWhereUniqueInput
        update: XOR<GroupParticipantUpdateWithoutUserInput, GroupParticipantUncheckedUpdateWithoutUserInput>
        create: XOR<GroupParticipantCreateWithoutUserInput, GroupParticipantUncheckedCreateWithoutUserInput>
    };
    export type GroupParticipantUpdateWithWhereUniqueWithoutUserInput = {
        where: GroupParticipantWhereUniqueInput
        data: XOR<GroupParticipantUpdateWithoutUserInput, GroupParticipantUncheckedUpdateWithoutUserInput>
    };
    export type GroupParticipantUpdateManyWithWhereWithoutUserInput = {
        where: GroupParticipantScalarWhereInput
        data: XOR<GroupParticipantUpdateManyMutationInput, GroupParticipantUncheckedUpdateManyWithoutUserInput>
    };
    export type GroupParticipantScalarWhereInput = {
        AND?: GroupParticipantScalarWhereInput | GroupParticipantScalarWhereInput[]
        OR?: GroupParticipantScalarWhereInput[]
        NOT?: GroupParticipantScalarWhereInput | GroupParticipantScalarWhereInput[]
        id?: StringFilter<"GroupParticipant"> | string
        createdAt?: DateTimeFilter<"GroupParticipant"> | Date | string
        updatedAt?: DateTimeFilter<"GroupParticipant"> | Date | string
        userId?: StringFilter<"GroupParticipant"> | string
        groupId?: StringFilter<"GroupParticipant"> | string
        role?: EnumRoleFilter<"GroupParticipant"> | $Enums.Role
    };
    export type ImageUpsertWithoutProfileInput = {
        update: XOR<ImageUpdateWithoutProfileInput, ImageUncheckedUpdateWithoutProfileInput>
        create: XOR<ImageCreateWithoutProfileInput, ImageUncheckedCreateWithoutProfileInput>
        where?: ImageWhereInput
    };
    export type ImageUpdateToOneWithWhereWithoutProfileInput = {
        where?: ImageWhereInput
        data: XOR<ImageUpdateWithoutProfileInput, ImageUncheckedUpdateWithoutProfileInput>
    };
    export type ImageUpdateWithoutProfileInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        path?: StringFieldUpdateOperationsInput | string
        bucket?: StringFieldUpdateOperationsInput | string
        uploadedById?: StringFieldUpdateOperationsInput | string
        blurhash?: NullableStringFieldUpdateOperationsInput | string | null
        Group?: GroupUpdateManyWithoutCoverImageNestedInput
    };
    export type ImageUncheckedUpdateWithoutProfileInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        path?: StringFieldUpdateOperationsInput | string
        bucket?: StringFieldUpdateOperationsInput | string
        uploadedById?: StringFieldUpdateOperationsInput | string
        blurhash?: NullableStringFieldUpdateOperationsInput | string | null
        Group?: GroupUncheckedUpdateManyWithoutCoverImageNestedInput
    };
    export type MessageUpsertWithWhereUniqueWithoutAuthorInput = {
        where: MessageWhereUniqueInput
        update: XOR<MessageUpdateWithoutAuthorInput, MessageUncheckedUpdateWithoutAuthorInput>
        create: XOR<MessageCreateWithoutAuthorInput, MessageUncheckedCreateWithoutAuthorInput>
    };
    export type MessageUpdateWithWhereUniqueWithoutAuthorInput = {
        where: MessageWhereUniqueInput
        data: XOR<MessageUpdateWithoutAuthorInput, MessageUncheckedUpdateWithoutAuthorInput>
    };
    export type MessageUpdateManyWithWhereWithoutAuthorInput = {
        where: MessageScalarWhereInput
        data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutAuthorInput>
    };
    export type MessageScalarWhereInput = {
        AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
        OR?: MessageScalarWhereInput[]
        NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
        id?: StringFilter<"Message"> | string
        createdAt?: DateTimeFilter<"Message"> | Date | string
        updatedAt?: DateTimeFilter<"Message"> | Date | string
        key?: StringFilter<"Message"> | string
        text?: StringNullableFilter<"Message"> | string | null
        authorType?: EnumAuthorTypeFilter<"Message"> | $Enums.AuthorType
        authorId?: StringNullableFilter<"Message"> | string | null
        groupId?: StringFilter<"Message"> | string
    };
    export type ExpenseUpsertWithWhereUniqueWithoutOwnerInput = {
        where: ExpenseWhereUniqueInput
        update: XOR<ExpenseUpdateWithoutOwnerInput, ExpenseUncheckedUpdateWithoutOwnerInput>
        create: XOR<ExpenseCreateWithoutOwnerInput, ExpenseUncheckedCreateWithoutOwnerInput>
    };
    export type ExpenseUpdateWithWhereUniqueWithoutOwnerInput = {
        where: ExpenseWhereUniqueInput
        data: XOR<ExpenseUpdateWithoutOwnerInput, ExpenseUncheckedUpdateWithoutOwnerInput>
    };
    export type ExpenseUpdateManyWithWhereWithoutOwnerInput = {
        where: ExpenseScalarWhereInput
        data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutOwnerInput>
    };
    export type ExpenseScalarWhereInput = {
        AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
        OR?: ExpenseScalarWhereInput[]
        NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
        id?: StringFilter<"Expense"> | string
        createdAt?: DateTimeFilter<"Expense"> | Date | string
        updatedAt?: DateTimeFilter<"Expense"> | Date | string
        ownerId?: StringFilter<"Expense"> | string
        payerId?: StringFilter<"Expense"> | string
        groupId?: StringFilter<"Expense"> | string
        amount?: IntFilter<"Expense"> | number
        currency?: EnumCurrencyCodeFilter<"Expense"> | $Enums.CurrencyCode
        description?: StringNullableFilter<"Expense"> | string | null
        conversion?: JsonNullableFilter<"Expense">
    };
    export type ExpenseUpsertWithWhereUniqueWithoutPayerInput = {
        where: ExpenseWhereUniqueInput
        update: XOR<ExpenseUpdateWithoutPayerInput, ExpenseUncheckedUpdateWithoutPayerInput>
        create: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput>
    };
    export type ExpenseUpdateWithWhereUniqueWithoutPayerInput = {
        where: ExpenseWhereUniqueInput
        data: XOR<ExpenseUpdateWithoutPayerInput, ExpenseUncheckedUpdateWithoutPayerInput>
    };
    export type ExpenseUpdateManyWithWhereWithoutPayerInput = {
        where: ExpenseScalarWhereInput
        data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutPayerInput>
    };
    export type ExpenseShareUpsertWithWhereUniqueWithoutUserInput = {
        where: ExpenseShareWhereUniqueInput
        update: XOR<ExpenseShareUpdateWithoutUserInput, ExpenseShareUncheckedUpdateWithoutUserInput>
        create: XOR<ExpenseShareCreateWithoutUserInput, ExpenseShareUncheckedCreateWithoutUserInput>
    };
    export type ExpenseShareUpdateWithWhereUniqueWithoutUserInput = {
        where: ExpenseShareWhereUniqueInput
        data: XOR<ExpenseShareUpdateWithoutUserInput, ExpenseShareUncheckedUpdateWithoutUserInput>
    };
    export type ExpenseShareUpdateManyWithWhereWithoutUserInput = {
        where: ExpenseShareScalarWhereInput
        data: XOR<ExpenseShareUpdateManyMutationInput, ExpenseShareUncheckedUpdateManyWithoutUserInput>
    };
    export type ExpenseShareScalarWhereInput = {
        AND?: ExpenseShareScalarWhereInput | ExpenseShareScalarWhereInput[]
        OR?: ExpenseShareScalarWhereInput[]
        NOT?: ExpenseShareScalarWhereInput | ExpenseShareScalarWhereInput[]
        id?: StringFilter<"ExpenseShare"> | string
        createdAt?: DateTimeFilter<"ExpenseShare"> | Date | string
        updatedAt?: DateTimeFilter<"ExpenseShare"> | Date | string
        userId?: StringFilter<"ExpenseShare"> | string
        expenseId?: StringFilter<"ExpenseShare"> | string
        amount?: IntFilter<"ExpenseShare"> | number
        currency?: EnumCurrencyCodeFilter<"ExpenseShare"> | $Enums.CurrencyCode
        locked?: BoolFilter<"ExpenseShare"> | boolean
        conversion?: JsonNullableFilter<"ExpenseShare">
    };
    export type PaymentUpsertWithWhereUniqueWithoutRecipientInput = {
        where: PaymentWhereUniqueInput
        update: XOR<PaymentUpdateWithoutRecipientInput, PaymentUncheckedUpdateWithoutRecipientInput>
        create: XOR<PaymentCreateWithoutRecipientInput, PaymentUncheckedCreateWithoutRecipientInput>
    };
    export type PaymentUpdateWithWhereUniqueWithoutRecipientInput = {
        where: PaymentWhereUniqueInput
        data: XOR<PaymentUpdateWithoutRecipientInput, PaymentUncheckedUpdateWithoutRecipientInput>
    };
    export type PaymentUpdateManyWithWhereWithoutRecipientInput = {
        where: PaymentScalarWhereInput
        data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutRecipientInput>
    };
    export type PaymentScalarWhereInput = {
        AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
        OR?: PaymentScalarWhereInput[]
        NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
        id?: StringFilter<"Payment"> | string
        createdAt?: DateTimeFilter<"Payment"> | Date | string
        updatedAt?: DateTimeFilter<"Payment"> | Date | string
        groupId?: StringFilter<"Payment"> | string
        amount?: IntFilter<"Payment"> | number
        currency?: EnumCurrencyCodeFilter<"Payment"> | $Enums.CurrencyCode
        conversion?: JsonNullableFilter<"Payment">
        recipientId?: StringFilter<"Payment"> | string
        payerId?: StringFilter<"Payment"> | string
    };
    export type PaymentUpsertWithWhereUniqueWithoutPayerInput = {
        where: PaymentWhereUniqueInput
        update: XOR<PaymentUpdateWithoutPayerInput, PaymentUncheckedUpdateWithoutPayerInput>
        create: XOR<PaymentCreateWithoutPayerInput, PaymentUncheckedCreateWithoutPayerInput>
    };
    export type PaymentUpdateWithWhereUniqueWithoutPayerInput = {
        where: PaymentWhereUniqueInput
        data: XOR<PaymentUpdateWithoutPayerInput, PaymentUncheckedUpdateWithoutPayerInput>
    };
    export type PaymentUpdateManyWithWhereWithoutPayerInput = {
        where: PaymentScalarWhereInput
        data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutPayerInput>
    };
    export type GroupParticipantCreateWithoutGroupInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        role: $Enums.Role
        user: ProfileCreateNestedOneWithoutGroupsInput
    };
    export type GroupParticipantUncheckedCreateWithoutGroupInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        userId: string
        role: $Enums.Role
    };
    export type GroupParticipantCreateOrConnectWithoutGroupInput = {
        where: GroupParticipantWhereUniqueInput
        create: XOR<GroupParticipantCreateWithoutGroupInput, GroupParticipantUncheckedCreateWithoutGroupInput>
    };
    export type GroupParticipantCreateManyGroupInputEnvelope = {
        data: GroupParticipantCreateManyGroupInput | GroupParticipantCreateManyGroupInput[]
        skipDuplicates?: boolean
    };
    export type ImageCreateWithoutGroupInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        path: string
        bucket: string
        uploadedById: string
        blurhash?: string | null
        Profile?: ProfileCreateNestedManyWithoutAvatarInput
    };
    export type ImageUncheckedCreateWithoutGroupInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        path: string
        bucket: string
        uploadedById: string
        blurhash?: string | null
        Profile?: ProfileUncheckedCreateNestedManyWithoutAvatarInput
    };
    export type ImageCreateOrConnectWithoutGroupInput = {
        where: ImageWhereUniqueInput
        create: XOR<ImageCreateWithoutGroupInput, ImageUncheckedCreateWithoutGroupInput>
    };
    export type MessageCreateWithoutGroupInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        key: string
        text?: string | null
        authorType: $Enums.AuthorType
        author?: ProfileCreateNestedOneWithoutMessagesInput
        attachments?: MessageAttachmentCreateNestedManyWithoutMessageInput
    };
    export type MessageUncheckedCreateWithoutGroupInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        key: string
        text?: string | null
        authorType: $Enums.AuthorType
        authorId?: string | null
        attachments?: MessageAttachmentUncheckedCreateNestedManyWithoutMessageInput
    };
    export type MessageCreateOrConnectWithoutGroupInput = {
        where: MessageWhereUniqueInput
        create: XOR<MessageCreateWithoutGroupInput, MessageUncheckedCreateWithoutGroupInput>
    };
    export type MessageCreateManyGroupInputEnvelope = {
        data: MessageCreateManyGroupInput | MessageCreateManyGroupInput[]
        skipDuplicates?: boolean
    };
    export type ExpenseCreateWithoutGroupInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        amount: number
        currency: $Enums.CurrencyCode
        description?: string | null
        conversion?: CurrencyConversion | null
        owner: ProfileCreateNestedOneWithoutExpensesOwnedInput
        payer: ProfileCreateNestedOneWithoutExpensesPaidInput
        shares?: ExpenseShareCreateNestedManyWithoutExpenseInput
        messageAttachments?: MessageAttachmentCreateNestedManyWithoutExpenseInput
    };
    export type ExpenseUncheckedCreateWithoutGroupInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        ownerId: string
        payerId: string
        amount: number
        currency: $Enums.CurrencyCode
        description?: string | null
        conversion?: CurrencyConversion | null
        shares?: ExpenseShareUncheckedCreateNestedManyWithoutExpenseInput
        messageAttachments?: MessageAttachmentUncheckedCreateNestedManyWithoutExpenseInput
    };
    export type ExpenseCreateOrConnectWithoutGroupInput = {
        where: ExpenseWhereUniqueInput
        create: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput>
    };
    export type ExpenseCreateManyGroupInputEnvelope = {
        data: ExpenseCreateManyGroupInput | ExpenseCreateManyGroupInput[]
        skipDuplicates?: boolean
    };
    export type PaymentCreateWithoutGroupInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        amount: number
        currency: $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        recipient: ProfileCreateNestedOneWithoutPaymentsReceivedInput
        payer: ProfileCreateNestedOneWithoutPaymentsPaidInput
    };
    export type PaymentUncheckedCreateWithoutGroupInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        amount: number
        currency: $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        recipientId: string
        payerId: string
    };
    export type PaymentCreateOrConnectWithoutGroupInput = {
        where: PaymentWhereUniqueInput
        create: XOR<PaymentCreateWithoutGroupInput, PaymentUncheckedCreateWithoutGroupInput>
    };
    export type PaymentCreateManyGroupInputEnvelope = {
        data: PaymentCreateManyGroupInput | PaymentCreateManyGroupInput[]
        skipDuplicates?: boolean
    };
    export type GroupParticipantUpsertWithWhereUniqueWithoutGroupInput = {
        where: GroupParticipantWhereUniqueInput
        update: XOR<GroupParticipantUpdateWithoutGroupInput, GroupParticipantUncheckedUpdateWithoutGroupInput>
        create: XOR<GroupParticipantCreateWithoutGroupInput, GroupParticipantUncheckedCreateWithoutGroupInput>
    };
    export type GroupParticipantUpdateWithWhereUniqueWithoutGroupInput = {
        where: GroupParticipantWhereUniqueInput
        data: XOR<GroupParticipantUpdateWithoutGroupInput, GroupParticipantUncheckedUpdateWithoutGroupInput>
    };
    export type GroupParticipantUpdateManyWithWhereWithoutGroupInput = {
        where: GroupParticipantScalarWhereInput
        data: XOR<GroupParticipantUpdateManyMutationInput, GroupParticipantUncheckedUpdateManyWithoutGroupInput>
    };
    export type ImageUpsertWithoutGroupInput = {
        update: XOR<ImageUpdateWithoutGroupInput, ImageUncheckedUpdateWithoutGroupInput>
        create: XOR<ImageCreateWithoutGroupInput, ImageUncheckedCreateWithoutGroupInput>
        where?: ImageWhereInput
    };
    export type ImageUpdateToOneWithWhereWithoutGroupInput = {
        where?: ImageWhereInput
        data: XOR<ImageUpdateWithoutGroupInput, ImageUncheckedUpdateWithoutGroupInput>
    };
    export type ImageUpdateWithoutGroupInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        path?: StringFieldUpdateOperationsInput | string
        bucket?: StringFieldUpdateOperationsInput | string
        uploadedById?: StringFieldUpdateOperationsInput | string
        blurhash?: NullableStringFieldUpdateOperationsInput | string | null
        Profile?: ProfileUpdateManyWithoutAvatarNestedInput
    };
    export type ImageUncheckedUpdateWithoutGroupInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        path?: StringFieldUpdateOperationsInput | string
        bucket?: StringFieldUpdateOperationsInput | string
        uploadedById?: StringFieldUpdateOperationsInput | string
        blurhash?: NullableStringFieldUpdateOperationsInput | string | null
        Profile?: ProfileUncheckedUpdateManyWithoutAvatarNestedInput
    };
    export type MessageUpsertWithWhereUniqueWithoutGroupInput = {
        where: MessageWhereUniqueInput
        update: XOR<MessageUpdateWithoutGroupInput, MessageUncheckedUpdateWithoutGroupInput>
        create: XOR<MessageCreateWithoutGroupInput, MessageUncheckedCreateWithoutGroupInput>
    };
    export type MessageUpdateWithWhereUniqueWithoutGroupInput = {
        where: MessageWhereUniqueInput
        data: XOR<MessageUpdateWithoutGroupInput, MessageUncheckedUpdateWithoutGroupInput>
    };
    export type MessageUpdateManyWithWhereWithoutGroupInput = {
        where: MessageScalarWhereInput
        data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutGroupInput>
    };
    export type ExpenseUpsertWithWhereUniqueWithoutGroupInput = {
        where: ExpenseWhereUniqueInput
        update: XOR<ExpenseUpdateWithoutGroupInput, ExpenseUncheckedUpdateWithoutGroupInput>
        create: XOR<ExpenseCreateWithoutGroupInput, ExpenseUncheckedCreateWithoutGroupInput>
    };
    export type ExpenseUpdateWithWhereUniqueWithoutGroupInput = {
        where: ExpenseWhereUniqueInput
        data: XOR<ExpenseUpdateWithoutGroupInput, ExpenseUncheckedUpdateWithoutGroupInput>
    };
    export type ExpenseUpdateManyWithWhereWithoutGroupInput = {
        where: ExpenseScalarWhereInput
        data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutGroupInput>
    };
    export type PaymentUpsertWithWhereUniqueWithoutGroupInput = {
        where: PaymentWhereUniqueInput
        update: XOR<PaymentUpdateWithoutGroupInput, PaymentUncheckedUpdateWithoutGroupInput>
        create: XOR<PaymentCreateWithoutGroupInput, PaymentUncheckedCreateWithoutGroupInput>
    };
    export type PaymentUpdateWithWhereUniqueWithoutGroupInput = {
        where: PaymentWhereUniqueInput
        data: XOR<PaymentUpdateWithoutGroupInput, PaymentUncheckedUpdateWithoutGroupInput>
    };
    export type PaymentUpdateManyWithWhereWithoutGroupInput = {
        where: PaymentScalarWhereInput
        data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutGroupInput>
    };
    export type ProfileCreateWithoutGroupsInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        createdAt?: Date | string
        updatedAt?: Date | string
        avatar?: ImageCreateNestedOneWithoutProfileInput
        messages?: MessageCreateNestedManyWithoutAuthorInput
        expensesOwned?: ExpenseCreateNestedManyWithoutOwnerInput
        expensesPaid?: ExpenseCreateNestedManyWithoutPayerInput
        expenseShares?: ExpenseShareCreateNestedManyWithoutUserInput
        paymentsReceived?: PaymentCreateNestedManyWithoutRecipientInput
        paymentsPaid?: PaymentCreateNestedManyWithoutPayerInput
    };
    export type ProfileUncheckedCreateWithoutGroupsInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        avatarId?: string | null
        createdAt?: Date | string
        updatedAt?: Date | string
        messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
        expensesOwned?: ExpenseUncheckedCreateNestedManyWithoutOwnerInput
        expensesPaid?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
        expenseShares?: ExpenseShareUncheckedCreateNestedManyWithoutUserInput
        paymentsReceived?: PaymentUncheckedCreateNestedManyWithoutRecipientInput
        paymentsPaid?: PaymentUncheckedCreateNestedManyWithoutPayerInput
    };
    export type ProfileCreateOrConnectWithoutGroupsInput = {
        where: ProfileWhereUniqueInput
        create: XOR<ProfileCreateWithoutGroupsInput, ProfileUncheckedCreateWithoutGroupsInput>
    };
    export type GroupCreateWithoutParticipantsInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        name: string
        currency: $Enums.CurrencyCode
        coverImage?: ImageCreateNestedOneWithoutGroupInput
        messages?: MessageCreateNestedManyWithoutGroupInput
        expenses?: ExpenseCreateNestedManyWithoutGroupInput
        payments?: PaymentCreateNestedManyWithoutGroupInput
    };
    export type GroupUncheckedCreateWithoutParticipantsInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        name: string
        currency: $Enums.CurrencyCode
        coverImageId?: string | null
        messages?: MessageUncheckedCreateNestedManyWithoutGroupInput
        expenses?: ExpenseUncheckedCreateNestedManyWithoutGroupInput
        payments?: PaymentUncheckedCreateNestedManyWithoutGroupInput
    };
    export type GroupCreateOrConnectWithoutParticipantsInput = {
        where: GroupWhereUniqueInput
        create: XOR<GroupCreateWithoutParticipantsInput, GroupUncheckedCreateWithoutParticipantsInput>
    };
    export type ProfileUpsertWithoutGroupsInput = {
        update: XOR<ProfileUpdateWithoutGroupsInput, ProfileUncheckedUpdateWithoutGroupsInput>
        create: XOR<ProfileCreateWithoutGroupsInput, ProfileUncheckedCreateWithoutGroupsInput>
        where?: ProfileWhereInput
    };
    export type ProfileUpdateToOneWithWhereWithoutGroupsInput = {
        where?: ProfileWhereInput
        data: XOR<ProfileUpdateWithoutGroupsInput, ProfileUncheckedUpdateWithoutGroupsInput>
    };
    export type ProfileUpdateWithoutGroupsInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        avatar?: ImageUpdateOneWithoutProfileNestedInput
        messages?: MessageUpdateManyWithoutAuthorNestedInput
        expensesOwned?: ExpenseUpdateManyWithoutOwnerNestedInput
        expensesPaid?: ExpenseUpdateManyWithoutPayerNestedInput
        expenseShares?: ExpenseShareUpdateManyWithoutUserNestedInput
        paymentsReceived?: PaymentUpdateManyWithoutRecipientNestedInput
        paymentsPaid?: PaymentUpdateManyWithoutPayerNestedInput
    };
    export type ProfileUncheckedUpdateWithoutGroupsInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        avatarId?: NullableStringFieldUpdateOperationsInput | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
        expensesOwned?: ExpenseUncheckedUpdateManyWithoutOwnerNestedInput
        expensesPaid?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
        expenseShares?: ExpenseShareUncheckedUpdateManyWithoutUserNestedInput
        paymentsReceived?: PaymentUncheckedUpdateManyWithoutRecipientNestedInput
        paymentsPaid?: PaymentUncheckedUpdateManyWithoutPayerNestedInput
    };
    export type GroupUpsertWithoutParticipantsInput = {
        update: XOR<GroupUpdateWithoutParticipantsInput, GroupUncheckedUpdateWithoutParticipantsInput>
        create: XOR<GroupCreateWithoutParticipantsInput, GroupUncheckedCreateWithoutParticipantsInput>
        where?: GroupWhereInput
    };
    export type GroupUpdateToOneWithWhereWithoutParticipantsInput = {
        where?: GroupWhereInput
        data: XOR<GroupUpdateWithoutParticipantsInput, GroupUncheckedUpdateWithoutParticipantsInput>
    };
    export type GroupUpdateWithoutParticipantsInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        name?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        coverImage?: ImageUpdateOneWithoutGroupNestedInput
        messages?: MessageUpdateManyWithoutGroupNestedInput
        expenses?: ExpenseUpdateManyWithoutGroupNestedInput
        payments?: PaymentUpdateManyWithoutGroupNestedInput
    };
    export type GroupUncheckedUpdateWithoutParticipantsInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        name?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        coverImageId?: NullableStringFieldUpdateOperationsInput | string | null
        messages?: MessageUncheckedUpdateManyWithoutGroupNestedInput
        expenses?: ExpenseUncheckedUpdateManyWithoutGroupNestedInput
        payments?: PaymentUncheckedUpdateManyWithoutGroupNestedInput
    };
    export type GroupCreateWithoutCoverImageInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        name: string
        currency: $Enums.CurrencyCode
        participants?: GroupParticipantCreateNestedManyWithoutGroupInput
        messages?: MessageCreateNestedManyWithoutGroupInput
        expenses?: ExpenseCreateNestedManyWithoutGroupInput
        payments?: PaymentCreateNestedManyWithoutGroupInput
    };
    export type GroupUncheckedCreateWithoutCoverImageInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        name: string
        currency: $Enums.CurrencyCode
        participants?: GroupParticipantUncheckedCreateNestedManyWithoutGroupInput
        messages?: MessageUncheckedCreateNestedManyWithoutGroupInput
        expenses?: ExpenseUncheckedCreateNestedManyWithoutGroupInput
        payments?: PaymentUncheckedCreateNestedManyWithoutGroupInput
    };
    export type GroupCreateOrConnectWithoutCoverImageInput = {
        where: GroupWhereUniqueInput
        create: XOR<GroupCreateWithoutCoverImageInput, GroupUncheckedCreateWithoutCoverImageInput>
    };
    export type GroupCreateManyCoverImageInputEnvelope = {
        data: GroupCreateManyCoverImageInput | GroupCreateManyCoverImageInput[]
        skipDuplicates?: boolean
    };
    export type ProfileCreateWithoutAvatarInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        createdAt?: Date | string
        updatedAt?: Date | string
        groups?: GroupParticipantCreateNestedManyWithoutUserInput
        messages?: MessageCreateNestedManyWithoutAuthorInput
        expensesOwned?: ExpenseCreateNestedManyWithoutOwnerInput
        expensesPaid?: ExpenseCreateNestedManyWithoutPayerInput
        expenseShares?: ExpenseShareCreateNestedManyWithoutUserInput
        paymentsReceived?: PaymentCreateNestedManyWithoutRecipientInput
        paymentsPaid?: PaymentCreateNestedManyWithoutPayerInput
    };
    export type ProfileUncheckedCreateWithoutAvatarInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        createdAt?: Date | string
        updatedAt?: Date | string
        groups?: GroupParticipantUncheckedCreateNestedManyWithoutUserInput
        messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
        expensesOwned?: ExpenseUncheckedCreateNestedManyWithoutOwnerInput
        expensesPaid?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
        expenseShares?: ExpenseShareUncheckedCreateNestedManyWithoutUserInput
        paymentsReceived?: PaymentUncheckedCreateNestedManyWithoutRecipientInput
        paymentsPaid?: PaymentUncheckedCreateNestedManyWithoutPayerInput
    };
    export type ProfileCreateOrConnectWithoutAvatarInput = {
        where: ProfileWhereUniqueInput
        create: XOR<ProfileCreateWithoutAvatarInput, ProfileUncheckedCreateWithoutAvatarInput>
    };
    export type ProfileCreateManyAvatarInputEnvelope = {
        data: ProfileCreateManyAvatarInput | ProfileCreateManyAvatarInput[]
        skipDuplicates?: boolean
    };
    export type GroupUpsertWithWhereUniqueWithoutCoverImageInput = {
        where: GroupWhereUniqueInput
        update: XOR<GroupUpdateWithoutCoverImageInput, GroupUncheckedUpdateWithoutCoverImageInput>
        create: XOR<GroupCreateWithoutCoverImageInput, GroupUncheckedCreateWithoutCoverImageInput>
    };
    export type GroupUpdateWithWhereUniqueWithoutCoverImageInput = {
        where: GroupWhereUniqueInput
        data: XOR<GroupUpdateWithoutCoverImageInput, GroupUncheckedUpdateWithoutCoverImageInput>
    };
    export type GroupUpdateManyWithWhereWithoutCoverImageInput = {
        where: GroupScalarWhereInput
        data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutCoverImageInput>
    };
    export type GroupScalarWhereInput = {
        AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
        OR?: GroupScalarWhereInput[]
        NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
        id?: StringFilter<"Group"> | string
        createdAt?: DateTimeFilter<"Group"> | Date | string
        updatedAt?: DateTimeFilter<"Group"> | Date | string
        name?: StringFilter<"Group"> | string
        currency?: EnumCurrencyCodeFilter<"Group"> | $Enums.CurrencyCode
        coverImageId?: StringNullableFilter<"Group"> | string | null
    };
    export type ProfileUpsertWithWhereUniqueWithoutAvatarInput = {
        where: ProfileWhereUniqueInput
        update: XOR<ProfileUpdateWithoutAvatarInput, ProfileUncheckedUpdateWithoutAvatarInput>
        create: XOR<ProfileCreateWithoutAvatarInput, ProfileUncheckedCreateWithoutAvatarInput>
    };
    export type ProfileUpdateWithWhereUniqueWithoutAvatarInput = {
        where: ProfileWhereUniqueInput
        data: XOR<ProfileUpdateWithoutAvatarInput, ProfileUncheckedUpdateWithoutAvatarInput>
    };
    export type ProfileUpdateManyWithWhereWithoutAvatarInput = {
        where: ProfileScalarWhereInput
        data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyWithoutAvatarInput>
    };
    export type ProfileScalarWhereInput = {
        AND?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
        OR?: ProfileScalarWhereInput[]
        NOT?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
        userId?: StringFilter<"Profile"> | string
        email?: StringFilter<"Profile"> | string
        firstName?: StringFilter<"Profile"> | string
        lastName?: StringFilter<"Profile"> | string
        currency?: EnumCurrencyCodeFilter<"Profile"> | $Enums.CurrencyCode
        avatarId?: StringNullableFilter<"Profile"> | string | null
        createdAt?: DateTimeFilter<"Profile"> | Date | string
        updatedAt?: DateTimeFilter<"Profile"> | Date | string
    };
    export type ProfileCreateWithoutMessagesInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        createdAt?: Date | string
        updatedAt?: Date | string
        groups?: GroupParticipantCreateNestedManyWithoutUserInput
        avatar?: ImageCreateNestedOneWithoutProfileInput
        expensesOwned?: ExpenseCreateNestedManyWithoutOwnerInput
        expensesPaid?: ExpenseCreateNestedManyWithoutPayerInput
        expenseShares?: ExpenseShareCreateNestedManyWithoutUserInput
        paymentsReceived?: PaymentCreateNestedManyWithoutRecipientInput
        paymentsPaid?: PaymentCreateNestedManyWithoutPayerInput
    };
    export type ProfileUncheckedCreateWithoutMessagesInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        avatarId?: string | null
        createdAt?: Date | string
        updatedAt?: Date | string
        groups?: GroupParticipantUncheckedCreateNestedManyWithoutUserInput
        expensesOwned?: ExpenseUncheckedCreateNestedManyWithoutOwnerInput
        expensesPaid?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
        expenseShares?: ExpenseShareUncheckedCreateNestedManyWithoutUserInput
        paymentsReceived?: PaymentUncheckedCreateNestedManyWithoutRecipientInput
        paymentsPaid?: PaymentUncheckedCreateNestedManyWithoutPayerInput
    };
    export type ProfileCreateOrConnectWithoutMessagesInput = {
        where: ProfileWhereUniqueInput
        create: XOR<ProfileCreateWithoutMessagesInput, ProfileUncheckedCreateWithoutMessagesInput>
    };
    export type GroupCreateWithoutMessagesInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        name: string
        currency: $Enums.CurrencyCode
        participants?: GroupParticipantCreateNestedManyWithoutGroupInput
        coverImage?: ImageCreateNestedOneWithoutGroupInput
        expenses?: ExpenseCreateNestedManyWithoutGroupInput
        payments?: PaymentCreateNestedManyWithoutGroupInput
    };
    export type GroupUncheckedCreateWithoutMessagesInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        name: string
        currency: $Enums.CurrencyCode
        coverImageId?: string | null
        participants?: GroupParticipantUncheckedCreateNestedManyWithoutGroupInput
        expenses?: ExpenseUncheckedCreateNestedManyWithoutGroupInput
        payments?: PaymentUncheckedCreateNestedManyWithoutGroupInput
    };
    export type GroupCreateOrConnectWithoutMessagesInput = {
        where: GroupWhereUniqueInput
        create: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
    };
    export type MessageAttachmentCreateWithoutMessageInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        type: $Enums.MessageAttachmentType
        expense?: ExpenseCreateNestedOneWithoutMessageAttachmentsInput
    };
    export type MessageAttachmentUncheckedCreateWithoutMessageInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        type: $Enums.MessageAttachmentType
        expenseId?: string | null
    };
    export type MessageAttachmentCreateOrConnectWithoutMessageInput = {
        where: MessageAttachmentWhereUniqueInput
        create: XOR<MessageAttachmentCreateWithoutMessageInput, MessageAttachmentUncheckedCreateWithoutMessageInput>
    };
    export type MessageAttachmentCreateManyMessageInputEnvelope = {
        data: MessageAttachmentCreateManyMessageInput | MessageAttachmentCreateManyMessageInput[]
        skipDuplicates?: boolean
    };
    export type ProfileUpsertWithoutMessagesInput = {
        update: XOR<ProfileUpdateWithoutMessagesInput, ProfileUncheckedUpdateWithoutMessagesInput>
        create: XOR<ProfileCreateWithoutMessagesInput, ProfileUncheckedCreateWithoutMessagesInput>
        where?: ProfileWhereInput
    };
    export type ProfileUpdateToOneWithWhereWithoutMessagesInput = {
        where?: ProfileWhereInput
        data: XOR<ProfileUpdateWithoutMessagesInput, ProfileUncheckedUpdateWithoutMessagesInput>
    };
    export type ProfileUpdateWithoutMessagesInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groups?: GroupParticipantUpdateManyWithoutUserNestedInput
        avatar?: ImageUpdateOneWithoutProfileNestedInput
        expensesOwned?: ExpenseUpdateManyWithoutOwnerNestedInput
        expensesPaid?: ExpenseUpdateManyWithoutPayerNestedInput
        expenseShares?: ExpenseShareUpdateManyWithoutUserNestedInput
        paymentsReceived?: PaymentUpdateManyWithoutRecipientNestedInput
        paymentsPaid?: PaymentUpdateManyWithoutPayerNestedInput
    };
    export type ProfileUncheckedUpdateWithoutMessagesInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        avatarId?: NullableStringFieldUpdateOperationsInput | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groups?: GroupParticipantUncheckedUpdateManyWithoutUserNestedInput
        expensesOwned?: ExpenseUncheckedUpdateManyWithoutOwnerNestedInput
        expensesPaid?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
        expenseShares?: ExpenseShareUncheckedUpdateManyWithoutUserNestedInput
        paymentsReceived?: PaymentUncheckedUpdateManyWithoutRecipientNestedInput
        paymentsPaid?: PaymentUncheckedUpdateManyWithoutPayerNestedInput
    };
    export type GroupUpsertWithoutMessagesInput = {
        update: XOR<GroupUpdateWithoutMessagesInput, GroupUncheckedUpdateWithoutMessagesInput>
        create: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
        where?: GroupWhereInput
    };
    export type GroupUpdateToOneWithWhereWithoutMessagesInput = {
        where?: GroupWhereInput
        data: XOR<GroupUpdateWithoutMessagesInput, GroupUncheckedUpdateWithoutMessagesInput>
    };
    export type GroupUpdateWithoutMessagesInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        name?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        participants?: GroupParticipantUpdateManyWithoutGroupNestedInput
        coverImage?: ImageUpdateOneWithoutGroupNestedInput
        expenses?: ExpenseUpdateManyWithoutGroupNestedInput
        payments?: PaymentUpdateManyWithoutGroupNestedInput
    };
    export type GroupUncheckedUpdateWithoutMessagesInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        name?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        coverImageId?: NullableStringFieldUpdateOperationsInput | string | null
        participants?: GroupParticipantUncheckedUpdateManyWithoutGroupNestedInput
        expenses?: ExpenseUncheckedUpdateManyWithoutGroupNestedInput
        payments?: PaymentUncheckedUpdateManyWithoutGroupNestedInput
    };
    export type MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput = {
        where: MessageAttachmentWhereUniqueInput
        update: XOR<MessageAttachmentUpdateWithoutMessageInput, MessageAttachmentUncheckedUpdateWithoutMessageInput>
        create: XOR<MessageAttachmentCreateWithoutMessageInput, MessageAttachmentUncheckedCreateWithoutMessageInput>
    };
    export type MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput = {
        where: MessageAttachmentWhereUniqueInput
        data: XOR<MessageAttachmentUpdateWithoutMessageInput, MessageAttachmentUncheckedUpdateWithoutMessageInput>
    };
    export type MessageAttachmentUpdateManyWithWhereWithoutMessageInput = {
        where: MessageAttachmentScalarWhereInput
        data: XOR<MessageAttachmentUpdateManyMutationInput, MessageAttachmentUncheckedUpdateManyWithoutMessageInput>
    };
    export type MessageAttachmentScalarWhereInput = {
        AND?: MessageAttachmentScalarWhereInput | MessageAttachmentScalarWhereInput[]
        OR?: MessageAttachmentScalarWhereInput[]
        NOT?: MessageAttachmentScalarWhereInput | MessageAttachmentScalarWhereInput[]
        id?: StringFilter<"MessageAttachment"> | string
        createdAt?: DateTimeFilter<"MessageAttachment"> | Date | string
        updatedAt?: DateTimeFilter<"MessageAttachment"> | Date | string
        messageId?: StringFilter<"MessageAttachment"> | string
        type?: EnumMessageAttachmentTypeFilter<"MessageAttachment"> | $Enums.MessageAttachmentType
        expenseId?: StringNullableFilter<"MessageAttachment"> | string | null
    };
    export type MessageCreateWithoutAttachmentsInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        key: string
        text?: string | null
        authorType: $Enums.AuthorType
        author?: ProfileCreateNestedOneWithoutMessagesInput
        group: GroupCreateNestedOneWithoutMessagesInput
    };
    export type MessageUncheckedCreateWithoutAttachmentsInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        key: string
        text?: string | null
        authorType: $Enums.AuthorType
        authorId?: string | null
        groupId: string
    };
    export type MessageCreateOrConnectWithoutAttachmentsInput = {
        where: MessageWhereUniqueInput
        create: XOR<MessageCreateWithoutAttachmentsInput, MessageUncheckedCreateWithoutAttachmentsInput>
    };
    export type ExpenseCreateWithoutMessageAttachmentsInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        amount: number
        currency: $Enums.CurrencyCode
        description?: string | null
        conversion?: CurrencyConversion | null
        owner: ProfileCreateNestedOneWithoutExpensesOwnedInput
        payer: ProfileCreateNestedOneWithoutExpensesPaidInput
        group: GroupCreateNestedOneWithoutExpensesInput
        shares?: ExpenseShareCreateNestedManyWithoutExpenseInput
    };
    export type ExpenseUncheckedCreateWithoutMessageAttachmentsInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        ownerId: string
        payerId: string
        groupId: string
        amount: number
        currency: $Enums.CurrencyCode
        description?: string | null
        conversion?: CurrencyConversion | null
        shares?: ExpenseShareUncheckedCreateNestedManyWithoutExpenseInput
    };
    export type ExpenseCreateOrConnectWithoutMessageAttachmentsInput = {
        where: ExpenseWhereUniqueInput
        create: XOR<ExpenseCreateWithoutMessageAttachmentsInput, ExpenseUncheckedCreateWithoutMessageAttachmentsInput>
    };
    export type MessageUpsertWithoutAttachmentsInput = {
        update: XOR<MessageUpdateWithoutAttachmentsInput, MessageUncheckedUpdateWithoutAttachmentsInput>
        create: XOR<MessageCreateWithoutAttachmentsInput, MessageUncheckedCreateWithoutAttachmentsInput>
        where?: MessageWhereInput
    };
    export type MessageUpdateToOneWithWhereWithoutAttachmentsInput = {
        where?: MessageWhereInput
        data: XOR<MessageUpdateWithoutAttachmentsInput, MessageUncheckedUpdateWithoutAttachmentsInput>
    };
    export type MessageUpdateWithoutAttachmentsInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        key?: StringFieldUpdateOperationsInput | string
        text?: NullableStringFieldUpdateOperationsInput | string | null
        authorType?: EnumAuthorTypeFieldUpdateOperationsInput | $Enums.AuthorType
        author?: ProfileUpdateOneWithoutMessagesNestedInput
        group?: GroupUpdateOneRequiredWithoutMessagesNestedInput
    };
    export type MessageUncheckedUpdateWithoutAttachmentsInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        key?: StringFieldUpdateOperationsInput | string
        text?: NullableStringFieldUpdateOperationsInput | string | null
        authorType?: EnumAuthorTypeFieldUpdateOperationsInput | $Enums.AuthorType
        authorId?: NullableStringFieldUpdateOperationsInput | string | null
        groupId?: StringFieldUpdateOperationsInput | string
    };
    export type ExpenseUpsertWithoutMessageAttachmentsInput = {
        update: XOR<ExpenseUpdateWithoutMessageAttachmentsInput, ExpenseUncheckedUpdateWithoutMessageAttachmentsInput>
        create: XOR<ExpenseCreateWithoutMessageAttachmentsInput, ExpenseUncheckedCreateWithoutMessageAttachmentsInput>
        where?: ExpenseWhereInput
    };
    export type ExpenseUpdateToOneWithWhereWithoutMessageAttachmentsInput = {
        where?: ExpenseWhereInput
        data: XOR<ExpenseUpdateWithoutMessageAttachmentsInput, ExpenseUncheckedUpdateWithoutMessageAttachmentsInput>
    };
    export type ExpenseUpdateWithoutMessageAttachmentsInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        description?: NullableStringFieldUpdateOperationsInput | string | null
        conversion?: CurrencyConversion | null
        owner?: ProfileUpdateOneRequiredWithoutExpensesOwnedNestedInput
        payer?: ProfileUpdateOneRequiredWithoutExpensesPaidNestedInput
        group?: GroupUpdateOneRequiredWithoutExpensesNestedInput
        shares?: ExpenseShareUpdateManyWithoutExpenseNestedInput
    };
    export type ExpenseUncheckedUpdateWithoutMessageAttachmentsInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        ownerId?: StringFieldUpdateOperationsInput | string
        payerId?: StringFieldUpdateOperationsInput | string
        groupId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        description?: NullableStringFieldUpdateOperationsInput | string | null
        conversion?: CurrencyConversion | null
        shares?: ExpenseShareUncheckedUpdateManyWithoutExpenseNestedInput
    };
    export type ProfileCreateWithoutExpensesOwnedInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        createdAt?: Date | string
        updatedAt?: Date | string
        groups?: GroupParticipantCreateNestedManyWithoutUserInput
        avatar?: ImageCreateNestedOneWithoutProfileInput
        messages?: MessageCreateNestedManyWithoutAuthorInput
        expensesPaid?: ExpenseCreateNestedManyWithoutPayerInput
        expenseShares?: ExpenseShareCreateNestedManyWithoutUserInput
        paymentsReceived?: PaymentCreateNestedManyWithoutRecipientInput
        paymentsPaid?: PaymentCreateNestedManyWithoutPayerInput
    };
    export type ProfileUncheckedCreateWithoutExpensesOwnedInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        avatarId?: string | null
        createdAt?: Date | string
        updatedAt?: Date | string
        groups?: GroupParticipantUncheckedCreateNestedManyWithoutUserInput
        messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
        expensesPaid?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
        expenseShares?: ExpenseShareUncheckedCreateNestedManyWithoutUserInput
        paymentsReceived?: PaymentUncheckedCreateNestedManyWithoutRecipientInput
        paymentsPaid?: PaymentUncheckedCreateNestedManyWithoutPayerInput
    };
    export type ProfileCreateOrConnectWithoutExpensesOwnedInput = {
        where: ProfileWhereUniqueInput
        create: XOR<ProfileCreateWithoutExpensesOwnedInput, ProfileUncheckedCreateWithoutExpensesOwnedInput>
    };
    export type ProfileCreateWithoutExpensesPaidInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        createdAt?: Date | string
        updatedAt?: Date | string
        groups?: GroupParticipantCreateNestedManyWithoutUserInput
        avatar?: ImageCreateNestedOneWithoutProfileInput
        messages?: MessageCreateNestedManyWithoutAuthorInput
        expensesOwned?: ExpenseCreateNestedManyWithoutOwnerInput
        expenseShares?: ExpenseShareCreateNestedManyWithoutUserInput
        paymentsReceived?: PaymentCreateNestedManyWithoutRecipientInput
        paymentsPaid?: PaymentCreateNestedManyWithoutPayerInput
    };
    export type ProfileUncheckedCreateWithoutExpensesPaidInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        avatarId?: string | null
        createdAt?: Date | string
        updatedAt?: Date | string
        groups?: GroupParticipantUncheckedCreateNestedManyWithoutUserInput
        messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
        expensesOwned?: ExpenseUncheckedCreateNestedManyWithoutOwnerInput
        expenseShares?: ExpenseShareUncheckedCreateNestedManyWithoutUserInput
        paymentsReceived?: PaymentUncheckedCreateNestedManyWithoutRecipientInput
        paymentsPaid?: PaymentUncheckedCreateNestedManyWithoutPayerInput
    };
    export type ProfileCreateOrConnectWithoutExpensesPaidInput = {
        where: ProfileWhereUniqueInput
        create: XOR<ProfileCreateWithoutExpensesPaidInput, ProfileUncheckedCreateWithoutExpensesPaidInput>
    };
    export type GroupCreateWithoutExpensesInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        name: string
        currency: $Enums.CurrencyCode
        participants?: GroupParticipantCreateNestedManyWithoutGroupInput
        coverImage?: ImageCreateNestedOneWithoutGroupInput
        messages?: MessageCreateNestedManyWithoutGroupInput
        payments?: PaymentCreateNestedManyWithoutGroupInput
    };
    export type GroupUncheckedCreateWithoutExpensesInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        name: string
        currency: $Enums.CurrencyCode
        coverImageId?: string | null
        participants?: GroupParticipantUncheckedCreateNestedManyWithoutGroupInput
        messages?: MessageUncheckedCreateNestedManyWithoutGroupInput
        payments?: PaymentUncheckedCreateNestedManyWithoutGroupInput
    };
    export type GroupCreateOrConnectWithoutExpensesInput = {
        where: GroupWhereUniqueInput
        create: XOR<GroupCreateWithoutExpensesInput, GroupUncheckedCreateWithoutExpensesInput>
    };
    export type ExpenseShareCreateWithoutExpenseInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        amount: number
        currency: $Enums.CurrencyCode
        locked?: boolean
        conversion?: CurrencyConversion | null
        user: ProfileCreateNestedOneWithoutExpenseSharesInput
    };
    export type ExpenseShareUncheckedCreateWithoutExpenseInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        userId: string
        amount: number
        currency: $Enums.CurrencyCode
        locked?: boolean
        conversion?: CurrencyConversion | null
    };
    export type ExpenseShareCreateOrConnectWithoutExpenseInput = {
        where: ExpenseShareWhereUniqueInput
        create: XOR<ExpenseShareCreateWithoutExpenseInput, ExpenseShareUncheckedCreateWithoutExpenseInput>
    };
    export type ExpenseShareCreateManyExpenseInputEnvelope = {
        data: ExpenseShareCreateManyExpenseInput | ExpenseShareCreateManyExpenseInput[]
        skipDuplicates?: boolean
    };
    export type MessageAttachmentCreateWithoutExpenseInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        type: $Enums.MessageAttachmentType
        message: MessageCreateNestedOneWithoutAttachmentsInput
    };
    export type MessageAttachmentUncheckedCreateWithoutExpenseInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        messageId: string
        type: $Enums.MessageAttachmentType
    };
    export type MessageAttachmentCreateOrConnectWithoutExpenseInput = {
        where: MessageAttachmentWhereUniqueInput
        create: XOR<MessageAttachmentCreateWithoutExpenseInput, MessageAttachmentUncheckedCreateWithoutExpenseInput>
    };
    export type MessageAttachmentCreateManyExpenseInputEnvelope = {
        data: MessageAttachmentCreateManyExpenseInput | MessageAttachmentCreateManyExpenseInput[]
        skipDuplicates?: boolean
    };
    export type ProfileUpsertWithoutExpensesOwnedInput = {
        update: XOR<ProfileUpdateWithoutExpensesOwnedInput, ProfileUncheckedUpdateWithoutExpensesOwnedInput>
        create: XOR<ProfileCreateWithoutExpensesOwnedInput, ProfileUncheckedCreateWithoutExpensesOwnedInput>
        where?: ProfileWhereInput
    };
    export type ProfileUpdateToOneWithWhereWithoutExpensesOwnedInput = {
        where?: ProfileWhereInput
        data: XOR<ProfileUpdateWithoutExpensesOwnedInput, ProfileUncheckedUpdateWithoutExpensesOwnedInput>
    };
    export type ProfileUpdateWithoutExpensesOwnedInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groups?: GroupParticipantUpdateManyWithoutUserNestedInput
        avatar?: ImageUpdateOneWithoutProfileNestedInput
        messages?: MessageUpdateManyWithoutAuthorNestedInput
        expensesPaid?: ExpenseUpdateManyWithoutPayerNestedInput
        expenseShares?: ExpenseShareUpdateManyWithoutUserNestedInput
        paymentsReceived?: PaymentUpdateManyWithoutRecipientNestedInput
        paymentsPaid?: PaymentUpdateManyWithoutPayerNestedInput
    };
    export type ProfileUncheckedUpdateWithoutExpensesOwnedInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        avatarId?: NullableStringFieldUpdateOperationsInput | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groups?: GroupParticipantUncheckedUpdateManyWithoutUserNestedInput
        messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
        expensesPaid?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
        expenseShares?: ExpenseShareUncheckedUpdateManyWithoutUserNestedInput
        paymentsReceived?: PaymentUncheckedUpdateManyWithoutRecipientNestedInput
        paymentsPaid?: PaymentUncheckedUpdateManyWithoutPayerNestedInput
    };
    export type ProfileUpsertWithoutExpensesPaidInput = {
        update: XOR<ProfileUpdateWithoutExpensesPaidInput, ProfileUncheckedUpdateWithoutExpensesPaidInput>
        create: XOR<ProfileCreateWithoutExpensesPaidInput, ProfileUncheckedCreateWithoutExpensesPaidInput>
        where?: ProfileWhereInput
    };
    export type ProfileUpdateToOneWithWhereWithoutExpensesPaidInput = {
        where?: ProfileWhereInput
        data: XOR<ProfileUpdateWithoutExpensesPaidInput, ProfileUncheckedUpdateWithoutExpensesPaidInput>
    };
    export type ProfileUpdateWithoutExpensesPaidInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groups?: GroupParticipantUpdateManyWithoutUserNestedInput
        avatar?: ImageUpdateOneWithoutProfileNestedInput
        messages?: MessageUpdateManyWithoutAuthorNestedInput
        expensesOwned?: ExpenseUpdateManyWithoutOwnerNestedInput
        expenseShares?: ExpenseShareUpdateManyWithoutUserNestedInput
        paymentsReceived?: PaymentUpdateManyWithoutRecipientNestedInput
        paymentsPaid?: PaymentUpdateManyWithoutPayerNestedInput
    };
    export type ProfileUncheckedUpdateWithoutExpensesPaidInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        avatarId?: NullableStringFieldUpdateOperationsInput | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groups?: GroupParticipantUncheckedUpdateManyWithoutUserNestedInput
        messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
        expensesOwned?: ExpenseUncheckedUpdateManyWithoutOwnerNestedInput
        expenseShares?: ExpenseShareUncheckedUpdateManyWithoutUserNestedInput
        paymentsReceived?: PaymentUncheckedUpdateManyWithoutRecipientNestedInput
        paymentsPaid?: PaymentUncheckedUpdateManyWithoutPayerNestedInput
    };
    export type GroupUpsertWithoutExpensesInput = {
        update: XOR<GroupUpdateWithoutExpensesInput, GroupUncheckedUpdateWithoutExpensesInput>
        create: XOR<GroupCreateWithoutExpensesInput, GroupUncheckedCreateWithoutExpensesInput>
        where?: GroupWhereInput
    };
    export type GroupUpdateToOneWithWhereWithoutExpensesInput = {
        where?: GroupWhereInput
        data: XOR<GroupUpdateWithoutExpensesInput, GroupUncheckedUpdateWithoutExpensesInput>
    };
    export type GroupUpdateWithoutExpensesInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        name?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        participants?: GroupParticipantUpdateManyWithoutGroupNestedInput
        coverImage?: ImageUpdateOneWithoutGroupNestedInput
        messages?: MessageUpdateManyWithoutGroupNestedInput
        payments?: PaymentUpdateManyWithoutGroupNestedInput
    };
    export type GroupUncheckedUpdateWithoutExpensesInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        name?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        coverImageId?: NullableStringFieldUpdateOperationsInput | string | null
        participants?: GroupParticipantUncheckedUpdateManyWithoutGroupNestedInput
        messages?: MessageUncheckedUpdateManyWithoutGroupNestedInput
        payments?: PaymentUncheckedUpdateManyWithoutGroupNestedInput
    };
    export type ExpenseShareUpsertWithWhereUniqueWithoutExpenseInput = {
        where: ExpenseShareWhereUniqueInput
        update: XOR<ExpenseShareUpdateWithoutExpenseInput, ExpenseShareUncheckedUpdateWithoutExpenseInput>
        create: XOR<ExpenseShareCreateWithoutExpenseInput, ExpenseShareUncheckedCreateWithoutExpenseInput>
    };
    export type ExpenseShareUpdateWithWhereUniqueWithoutExpenseInput = {
        where: ExpenseShareWhereUniqueInput
        data: XOR<ExpenseShareUpdateWithoutExpenseInput, ExpenseShareUncheckedUpdateWithoutExpenseInput>
    };
    export type ExpenseShareUpdateManyWithWhereWithoutExpenseInput = {
        where: ExpenseShareScalarWhereInput
        data: XOR<ExpenseShareUpdateManyMutationInput, ExpenseShareUncheckedUpdateManyWithoutExpenseInput>
    };
    export type MessageAttachmentUpsertWithWhereUniqueWithoutExpenseInput = {
        where: MessageAttachmentWhereUniqueInput
        update: XOR<MessageAttachmentUpdateWithoutExpenseInput, MessageAttachmentUncheckedUpdateWithoutExpenseInput>
        create: XOR<MessageAttachmentCreateWithoutExpenseInput, MessageAttachmentUncheckedCreateWithoutExpenseInput>
    };
    export type MessageAttachmentUpdateWithWhereUniqueWithoutExpenseInput = {
        where: MessageAttachmentWhereUniqueInput
        data: XOR<MessageAttachmentUpdateWithoutExpenseInput, MessageAttachmentUncheckedUpdateWithoutExpenseInput>
    };
    export type MessageAttachmentUpdateManyWithWhereWithoutExpenseInput = {
        where: MessageAttachmentScalarWhereInput
        data: XOR<MessageAttachmentUpdateManyMutationInput, MessageAttachmentUncheckedUpdateManyWithoutExpenseInput>
    };
    export type ProfileCreateWithoutExpenseSharesInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        createdAt?: Date | string
        updatedAt?: Date | string
        groups?: GroupParticipantCreateNestedManyWithoutUserInput
        avatar?: ImageCreateNestedOneWithoutProfileInput
        messages?: MessageCreateNestedManyWithoutAuthorInput
        expensesOwned?: ExpenseCreateNestedManyWithoutOwnerInput
        expensesPaid?: ExpenseCreateNestedManyWithoutPayerInput
        paymentsReceived?: PaymentCreateNestedManyWithoutRecipientInput
        paymentsPaid?: PaymentCreateNestedManyWithoutPayerInput
    };
    export type ProfileUncheckedCreateWithoutExpenseSharesInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        avatarId?: string | null
        createdAt?: Date | string
        updatedAt?: Date | string
        groups?: GroupParticipantUncheckedCreateNestedManyWithoutUserInput
        messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
        expensesOwned?: ExpenseUncheckedCreateNestedManyWithoutOwnerInput
        expensesPaid?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
        paymentsReceived?: PaymentUncheckedCreateNestedManyWithoutRecipientInput
        paymentsPaid?: PaymentUncheckedCreateNestedManyWithoutPayerInput
    };
    export type ProfileCreateOrConnectWithoutExpenseSharesInput = {
        where: ProfileWhereUniqueInput
        create: XOR<ProfileCreateWithoutExpenseSharesInput, ProfileUncheckedCreateWithoutExpenseSharesInput>
    };
    export type ExpenseCreateWithoutSharesInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        amount: number
        currency: $Enums.CurrencyCode
        description?: string | null
        conversion?: CurrencyConversion | null
        owner: ProfileCreateNestedOneWithoutExpensesOwnedInput
        payer: ProfileCreateNestedOneWithoutExpensesPaidInput
        group: GroupCreateNestedOneWithoutExpensesInput
        messageAttachments?: MessageAttachmentCreateNestedManyWithoutExpenseInput
    };
    export type ExpenseUncheckedCreateWithoutSharesInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        ownerId: string
        payerId: string
        groupId: string
        amount: number
        currency: $Enums.CurrencyCode
        description?: string | null
        conversion?: CurrencyConversion | null
        messageAttachments?: MessageAttachmentUncheckedCreateNestedManyWithoutExpenseInput
    };
    export type ExpenseCreateOrConnectWithoutSharesInput = {
        where: ExpenseWhereUniqueInput
        create: XOR<ExpenseCreateWithoutSharesInput, ExpenseUncheckedCreateWithoutSharesInput>
    };
    export type ProfileUpsertWithoutExpenseSharesInput = {
        update: XOR<ProfileUpdateWithoutExpenseSharesInput, ProfileUncheckedUpdateWithoutExpenseSharesInput>
        create: XOR<ProfileCreateWithoutExpenseSharesInput, ProfileUncheckedCreateWithoutExpenseSharesInput>
        where?: ProfileWhereInput
    };
    export type ProfileUpdateToOneWithWhereWithoutExpenseSharesInput = {
        where?: ProfileWhereInput
        data: XOR<ProfileUpdateWithoutExpenseSharesInput, ProfileUncheckedUpdateWithoutExpenseSharesInput>
    };
    export type ProfileUpdateWithoutExpenseSharesInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groups?: GroupParticipantUpdateManyWithoutUserNestedInput
        avatar?: ImageUpdateOneWithoutProfileNestedInput
        messages?: MessageUpdateManyWithoutAuthorNestedInput
        expensesOwned?: ExpenseUpdateManyWithoutOwnerNestedInput
        expensesPaid?: ExpenseUpdateManyWithoutPayerNestedInput
        paymentsReceived?: PaymentUpdateManyWithoutRecipientNestedInput
        paymentsPaid?: PaymentUpdateManyWithoutPayerNestedInput
    };
    export type ProfileUncheckedUpdateWithoutExpenseSharesInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        avatarId?: NullableStringFieldUpdateOperationsInput | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groups?: GroupParticipantUncheckedUpdateManyWithoutUserNestedInput
        messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
        expensesOwned?: ExpenseUncheckedUpdateManyWithoutOwnerNestedInput
        expensesPaid?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
        paymentsReceived?: PaymentUncheckedUpdateManyWithoutRecipientNestedInput
        paymentsPaid?: PaymentUncheckedUpdateManyWithoutPayerNestedInput
    };
    export type ExpenseUpsertWithoutSharesInput = {
        update: XOR<ExpenseUpdateWithoutSharesInput, ExpenseUncheckedUpdateWithoutSharesInput>
        create: XOR<ExpenseCreateWithoutSharesInput, ExpenseUncheckedCreateWithoutSharesInput>
        where?: ExpenseWhereInput
    };
    export type ExpenseUpdateToOneWithWhereWithoutSharesInput = {
        where?: ExpenseWhereInput
        data: XOR<ExpenseUpdateWithoutSharesInput, ExpenseUncheckedUpdateWithoutSharesInput>
    };
    export type ExpenseUpdateWithoutSharesInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        description?: NullableStringFieldUpdateOperationsInput | string | null
        conversion?: CurrencyConversion | null
        owner?: ProfileUpdateOneRequiredWithoutExpensesOwnedNestedInput
        payer?: ProfileUpdateOneRequiredWithoutExpensesPaidNestedInput
        group?: GroupUpdateOneRequiredWithoutExpensesNestedInput
        messageAttachments?: MessageAttachmentUpdateManyWithoutExpenseNestedInput
    };
    export type ExpenseUncheckedUpdateWithoutSharesInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        ownerId?: StringFieldUpdateOperationsInput | string
        payerId?: StringFieldUpdateOperationsInput | string
        groupId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        description?: NullableStringFieldUpdateOperationsInput | string | null
        conversion?: CurrencyConversion | null
        messageAttachments?: MessageAttachmentUncheckedUpdateManyWithoutExpenseNestedInput
    };
    export type GroupCreateWithoutPaymentsInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        name: string
        currency: $Enums.CurrencyCode
        participants?: GroupParticipantCreateNestedManyWithoutGroupInput
        coverImage?: ImageCreateNestedOneWithoutGroupInput
        messages?: MessageCreateNestedManyWithoutGroupInput
        expenses?: ExpenseCreateNestedManyWithoutGroupInput
    };
    export type GroupUncheckedCreateWithoutPaymentsInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        name: string
        currency: $Enums.CurrencyCode
        coverImageId?: string | null
        participants?: GroupParticipantUncheckedCreateNestedManyWithoutGroupInput
        messages?: MessageUncheckedCreateNestedManyWithoutGroupInput
        expenses?: ExpenseUncheckedCreateNestedManyWithoutGroupInput
    };
    export type GroupCreateOrConnectWithoutPaymentsInput = {
        where: GroupWhereUniqueInput
        create: XOR<GroupCreateWithoutPaymentsInput, GroupUncheckedCreateWithoutPaymentsInput>
    };
    export type ProfileCreateWithoutPaymentsReceivedInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        createdAt?: Date | string
        updatedAt?: Date | string
        groups?: GroupParticipantCreateNestedManyWithoutUserInput
        avatar?: ImageCreateNestedOneWithoutProfileInput
        messages?: MessageCreateNestedManyWithoutAuthorInput
        expensesOwned?: ExpenseCreateNestedManyWithoutOwnerInput
        expensesPaid?: ExpenseCreateNestedManyWithoutPayerInput
        expenseShares?: ExpenseShareCreateNestedManyWithoutUserInput
        paymentsPaid?: PaymentCreateNestedManyWithoutPayerInput
    };
    export type ProfileUncheckedCreateWithoutPaymentsReceivedInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        avatarId?: string | null
        createdAt?: Date | string
        updatedAt?: Date | string
        groups?: GroupParticipantUncheckedCreateNestedManyWithoutUserInput
        messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
        expensesOwned?: ExpenseUncheckedCreateNestedManyWithoutOwnerInput
        expensesPaid?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
        expenseShares?: ExpenseShareUncheckedCreateNestedManyWithoutUserInput
        paymentsPaid?: PaymentUncheckedCreateNestedManyWithoutPayerInput
    };
    export type ProfileCreateOrConnectWithoutPaymentsReceivedInput = {
        where: ProfileWhereUniqueInput
        create: XOR<ProfileCreateWithoutPaymentsReceivedInput, ProfileUncheckedCreateWithoutPaymentsReceivedInput>
    };
    export type ProfileCreateWithoutPaymentsPaidInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        createdAt?: Date | string
        updatedAt?: Date | string
        groups?: GroupParticipantCreateNestedManyWithoutUserInput
        avatar?: ImageCreateNestedOneWithoutProfileInput
        messages?: MessageCreateNestedManyWithoutAuthorInput
        expensesOwned?: ExpenseCreateNestedManyWithoutOwnerInput
        expensesPaid?: ExpenseCreateNestedManyWithoutPayerInput
        expenseShares?: ExpenseShareCreateNestedManyWithoutUserInput
        paymentsReceived?: PaymentCreateNestedManyWithoutRecipientInput
    };
    export type ProfileUncheckedCreateWithoutPaymentsPaidInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        avatarId?: string | null
        createdAt?: Date | string
        updatedAt?: Date | string
        groups?: GroupParticipantUncheckedCreateNestedManyWithoutUserInput
        messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
        expensesOwned?: ExpenseUncheckedCreateNestedManyWithoutOwnerInput
        expensesPaid?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
        expenseShares?: ExpenseShareUncheckedCreateNestedManyWithoutUserInput
        paymentsReceived?: PaymentUncheckedCreateNestedManyWithoutRecipientInput
    };
    export type ProfileCreateOrConnectWithoutPaymentsPaidInput = {
        where: ProfileWhereUniqueInput
        create: XOR<ProfileCreateWithoutPaymentsPaidInput, ProfileUncheckedCreateWithoutPaymentsPaidInput>
    };
    export type GroupUpsertWithoutPaymentsInput = {
        update: XOR<GroupUpdateWithoutPaymentsInput, GroupUncheckedUpdateWithoutPaymentsInput>
        create: XOR<GroupCreateWithoutPaymentsInput, GroupUncheckedCreateWithoutPaymentsInput>
        where?: GroupWhereInput
    };
    export type GroupUpdateToOneWithWhereWithoutPaymentsInput = {
        where?: GroupWhereInput
        data: XOR<GroupUpdateWithoutPaymentsInput, GroupUncheckedUpdateWithoutPaymentsInput>
    };
    export type GroupUpdateWithoutPaymentsInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        name?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        participants?: GroupParticipantUpdateManyWithoutGroupNestedInput
        coverImage?: ImageUpdateOneWithoutGroupNestedInput
        messages?: MessageUpdateManyWithoutGroupNestedInput
        expenses?: ExpenseUpdateManyWithoutGroupNestedInput
    };
    export type GroupUncheckedUpdateWithoutPaymentsInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        name?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        coverImageId?: NullableStringFieldUpdateOperationsInput | string | null
        participants?: GroupParticipantUncheckedUpdateManyWithoutGroupNestedInput
        messages?: MessageUncheckedUpdateManyWithoutGroupNestedInput
        expenses?: ExpenseUncheckedUpdateManyWithoutGroupNestedInput
    };
    export type ProfileUpsertWithoutPaymentsReceivedInput = {
        update: XOR<ProfileUpdateWithoutPaymentsReceivedInput, ProfileUncheckedUpdateWithoutPaymentsReceivedInput>
        create: XOR<ProfileCreateWithoutPaymentsReceivedInput, ProfileUncheckedCreateWithoutPaymentsReceivedInput>
        where?: ProfileWhereInput
    };
    export type ProfileUpdateToOneWithWhereWithoutPaymentsReceivedInput = {
        where?: ProfileWhereInput
        data: XOR<ProfileUpdateWithoutPaymentsReceivedInput, ProfileUncheckedUpdateWithoutPaymentsReceivedInput>
    };
    export type ProfileUpdateWithoutPaymentsReceivedInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groups?: GroupParticipantUpdateManyWithoutUserNestedInput
        avatar?: ImageUpdateOneWithoutProfileNestedInput
        messages?: MessageUpdateManyWithoutAuthorNestedInput
        expensesOwned?: ExpenseUpdateManyWithoutOwnerNestedInput
        expensesPaid?: ExpenseUpdateManyWithoutPayerNestedInput
        expenseShares?: ExpenseShareUpdateManyWithoutUserNestedInput
        paymentsPaid?: PaymentUpdateManyWithoutPayerNestedInput
    };
    export type ProfileUncheckedUpdateWithoutPaymentsReceivedInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        avatarId?: NullableStringFieldUpdateOperationsInput | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groups?: GroupParticipantUncheckedUpdateManyWithoutUserNestedInput
        messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
        expensesOwned?: ExpenseUncheckedUpdateManyWithoutOwnerNestedInput
        expensesPaid?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
        expenseShares?: ExpenseShareUncheckedUpdateManyWithoutUserNestedInput
        paymentsPaid?: PaymentUncheckedUpdateManyWithoutPayerNestedInput
    };
    export type ProfileUpsertWithoutPaymentsPaidInput = {
        update: XOR<ProfileUpdateWithoutPaymentsPaidInput, ProfileUncheckedUpdateWithoutPaymentsPaidInput>
        create: XOR<ProfileCreateWithoutPaymentsPaidInput, ProfileUncheckedCreateWithoutPaymentsPaidInput>
        where?: ProfileWhereInput
    };
    export type ProfileUpdateToOneWithWhereWithoutPaymentsPaidInput = {
        where?: ProfileWhereInput
        data: XOR<ProfileUpdateWithoutPaymentsPaidInput, ProfileUncheckedUpdateWithoutPaymentsPaidInput>
    };
    export type ProfileUpdateWithoutPaymentsPaidInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groups?: GroupParticipantUpdateManyWithoutUserNestedInput
        avatar?: ImageUpdateOneWithoutProfileNestedInput
        messages?: MessageUpdateManyWithoutAuthorNestedInput
        expensesOwned?: ExpenseUpdateManyWithoutOwnerNestedInput
        expensesPaid?: ExpenseUpdateManyWithoutPayerNestedInput
        expenseShares?: ExpenseShareUpdateManyWithoutUserNestedInput
        paymentsReceived?: PaymentUpdateManyWithoutRecipientNestedInput
    };
    export type ProfileUncheckedUpdateWithoutPaymentsPaidInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        avatarId?: NullableStringFieldUpdateOperationsInput | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groups?: GroupParticipantUncheckedUpdateManyWithoutUserNestedInput
        messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
        expensesOwned?: ExpenseUncheckedUpdateManyWithoutOwnerNestedInput
        expensesPaid?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
        expenseShares?: ExpenseShareUncheckedUpdateManyWithoutUserNestedInput
        paymentsReceived?: PaymentUncheckedUpdateManyWithoutRecipientNestedInput
    };
    export type GroupParticipantCreateManyUserInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        groupId: string
        role: $Enums.Role
    };
    export type MessageCreateManyAuthorInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        key: string
        text?: string | null
        authorType: $Enums.AuthorType
        groupId: string
    };
    export type ExpenseCreateManyOwnerInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        payerId: string
        groupId: string
        amount: number
        currency: $Enums.CurrencyCode
        description?: string | null
        conversion?: CurrencyConversion | null
    };
    export type ExpenseCreateManyPayerInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        ownerId: string
        groupId: string
        amount: number
        currency: $Enums.CurrencyCode
        description?: string | null
        conversion?: CurrencyConversion | null
    };
    export type ExpenseShareCreateManyUserInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        expenseId: string
        amount: number
        currency: $Enums.CurrencyCode
        locked?: boolean
        conversion?: CurrencyConversion | null
    };
    export type PaymentCreateManyRecipientInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        groupId: string
        amount: number
        currency: $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        payerId: string
    };
    export type PaymentCreateManyPayerInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        groupId: string
        amount: number
        currency: $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        recipientId: string
    };
    export type GroupParticipantUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
        group?: GroupUpdateOneRequiredWithoutParticipantsNestedInput
    };
    export type GroupParticipantUncheckedUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groupId?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    };
    export type GroupParticipantUncheckedUpdateManyWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groupId?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    };
    export type MessageUpdateWithoutAuthorInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        key?: StringFieldUpdateOperationsInput | string
        text?: NullableStringFieldUpdateOperationsInput | string | null
        authorType?: EnumAuthorTypeFieldUpdateOperationsInput | $Enums.AuthorType
        group?: GroupUpdateOneRequiredWithoutMessagesNestedInput
        attachments?: MessageAttachmentUpdateManyWithoutMessageNestedInput
    };
    export type MessageUncheckedUpdateWithoutAuthorInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        key?: StringFieldUpdateOperationsInput | string
        text?: NullableStringFieldUpdateOperationsInput | string | null
        authorType?: EnumAuthorTypeFieldUpdateOperationsInput | $Enums.AuthorType
        groupId?: StringFieldUpdateOperationsInput | string
        attachments?: MessageAttachmentUncheckedUpdateManyWithoutMessageNestedInput
    };
    export type MessageUncheckedUpdateManyWithoutAuthorInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        key?: StringFieldUpdateOperationsInput | string
        text?: NullableStringFieldUpdateOperationsInput | string | null
        authorType?: EnumAuthorTypeFieldUpdateOperationsInput | $Enums.AuthorType
        groupId?: StringFieldUpdateOperationsInput | string
    };
    export type ExpenseUpdateWithoutOwnerInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        description?: NullableStringFieldUpdateOperationsInput | string | null
        conversion?: CurrencyConversion | null
        payer?: ProfileUpdateOneRequiredWithoutExpensesPaidNestedInput
        group?: GroupUpdateOneRequiredWithoutExpensesNestedInput
        shares?: ExpenseShareUpdateManyWithoutExpenseNestedInput
        messageAttachments?: MessageAttachmentUpdateManyWithoutExpenseNestedInput
    };
    export type ExpenseUncheckedUpdateWithoutOwnerInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        payerId?: StringFieldUpdateOperationsInput | string
        groupId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        description?: NullableStringFieldUpdateOperationsInput | string | null
        conversion?: CurrencyConversion | null
        shares?: ExpenseShareUncheckedUpdateManyWithoutExpenseNestedInput
        messageAttachments?: MessageAttachmentUncheckedUpdateManyWithoutExpenseNestedInput
    };
    export type ExpenseUncheckedUpdateManyWithoutOwnerInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        payerId?: StringFieldUpdateOperationsInput | string
        groupId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        description?: NullableStringFieldUpdateOperationsInput | string | null
        conversion?: CurrencyConversion | null
    };
    export type ExpenseUpdateWithoutPayerInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        description?: NullableStringFieldUpdateOperationsInput | string | null
        conversion?: CurrencyConversion | null
        owner?: ProfileUpdateOneRequiredWithoutExpensesOwnedNestedInput
        group?: GroupUpdateOneRequiredWithoutExpensesNestedInput
        shares?: ExpenseShareUpdateManyWithoutExpenseNestedInput
        messageAttachments?: MessageAttachmentUpdateManyWithoutExpenseNestedInput
    };
    export type ExpenseUncheckedUpdateWithoutPayerInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        ownerId?: StringFieldUpdateOperationsInput | string
        groupId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        description?: NullableStringFieldUpdateOperationsInput | string | null
        conversion?: CurrencyConversion | null
        shares?: ExpenseShareUncheckedUpdateManyWithoutExpenseNestedInput
        messageAttachments?: MessageAttachmentUncheckedUpdateManyWithoutExpenseNestedInput
    };
    export type ExpenseUncheckedUpdateManyWithoutPayerInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        ownerId?: StringFieldUpdateOperationsInput | string
        groupId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        description?: NullableStringFieldUpdateOperationsInput | string | null
        conversion?: CurrencyConversion | null
    };
    export type ExpenseShareUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        locked?: BoolFieldUpdateOperationsInput | boolean
        conversion?: CurrencyConversion | null
        expense?: ExpenseUpdateOneRequiredWithoutSharesNestedInput
    };
    export type ExpenseShareUncheckedUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        expenseId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        locked?: BoolFieldUpdateOperationsInput | boolean
        conversion?: CurrencyConversion | null
    };
    export type ExpenseShareUncheckedUpdateManyWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        expenseId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        locked?: BoolFieldUpdateOperationsInput | boolean
        conversion?: CurrencyConversion | null
    };
    export type PaymentUpdateWithoutRecipientInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        group?: GroupUpdateOneRequiredWithoutPaymentsNestedInput
        payer?: ProfileUpdateOneRequiredWithoutPaymentsPaidNestedInput
    };
    export type PaymentUncheckedUpdateWithoutRecipientInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groupId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        payerId?: StringFieldUpdateOperationsInput | string
    };
    export type PaymentUncheckedUpdateManyWithoutRecipientInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groupId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        payerId?: StringFieldUpdateOperationsInput | string
    };
    export type PaymentUpdateWithoutPayerInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        group?: GroupUpdateOneRequiredWithoutPaymentsNestedInput
        recipient?: ProfileUpdateOneRequiredWithoutPaymentsReceivedNestedInput
    };
    export type PaymentUncheckedUpdateWithoutPayerInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groupId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        recipientId?: StringFieldUpdateOperationsInput | string
    };
    export type PaymentUncheckedUpdateManyWithoutPayerInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groupId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        recipientId?: StringFieldUpdateOperationsInput | string
    };
    export type GroupParticipantCreateManyGroupInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        userId: string
        role: $Enums.Role
    };
    export type MessageCreateManyGroupInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        key: string
        text?: string | null
        authorType: $Enums.AuthorType
        authorId?: string | null
    };
    export type ExpenseCreateManyGroupInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        ownerId: string
        payerId: string
        amount: number
        currency: $Enums.CurrencyCode
        description?: string | null
        conversion?: CurrencyConversion | null
    };
    export type PaymentCreateManyGroupInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        amount: number
        currency: $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        recipientId: string
        payerId: string
    };
    export type GroupParticipantUpdateWithoutGroupInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
        user?: ProfileUpdateOneRequiredWithoutGroupsNestedInput
    };
    export type GroupParticipantUncheckedUpdateWithoutGroupInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        userId?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    };
    export type GroupParticipantUncheckedUpdateManyWithoutGroupInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        userId?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    };
    export type MessageUpdateWithoutGroupInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        key?: StringFieldUpdateOperationsInput | string
        text?: NullableStringFieldUpdateOperationsInput | string | null
        authorType?: EnumAuthorTypeFieldUpdateOperationsInput | $Enums.AuthorType
        author?: ProfileUpdateOneWithoutMessagesNestedInput
        attachments?: MessageAttachmentUpdateManyWithoutMessageNestedInput
    };
    export type MessageUncheckedUpdateWithoutGroupInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        key?: StringFieldUpdateOperationsInput | string
        text?: NullableStringFieldUpdateOperationsInput | string | null
        authorType?: EnumAuthorTypeFieldUpdateOperationsInput | $Enums.AuthorType
        authorId?: NullableStringFieldUpdateOperationsInput | string | null
        attachments?: MessageAttachmentUncheckedUpdateManyWithoutMessageNestedInput
    };
    export type MessageUncheckedUpdateManyWithoutGroupInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        key?: StringFieldUpdateOperationsInput | string
        text?: NullableStringFieldUpdateOperationsInput | string | null
        authorType?: EnumAuthorTypeFieldUpdateOperationsInput | $Enums.AuthorType
        authorId?: NullableStringFieldUpdateOperationsInput | string | null
    };
    export type ExpenseUpdateWithoutGroupInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        description?: NullableStringFieldUpdateOperationsInput | string | null
        conversion?: CurrencyConversion | null
        owner?: ProfileUpdateOneRequiredWithoutExpensesOwnedNestedInput
        payer?: ProfileUpdateOneRequiredWithoutExpensesPaidNestedInput
        shares?: ExpenseShareUpdateManyWithoutExpenseNestedInput
        messageAttachments?: MessageAttachmentUpdateManyWithoutExpenseNestedInput
    };
    export type ExpenseUncheckedUpdateWithoutGroupInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        ownerId?: StringFieldUpdateOperationsInput | string
        payerId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        description?: NullableStringFieldUpdateOperationsInput | string | null
        conversion?: CurrencyConversion | null
        shares?: ExpenseShareUncheckedUpdateManyWithoutExpenseNestedInput
        messageAttachments?: MessageAttachmentUncheckedUpdateManyWithoutExpenseNestedInput
    };
    export type ExpenseUncheckedUpdateManyWithoutGroupInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        ownerId?: StringFieldUpdateOperationsInput | string
        payerId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        description?: NullableStringFieldUpdateOperationsInput | string | null
        conversion?: CurrencyConversion | null
    };
    export type PaymentUpdateWithoutGroupInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        recipient?: ProfileUpdateOneRequiredWithoutPaymentsReceivedNestedInput
        payer?: ProfileUpdateOneRequiredWithoutPaymentsPaidNestedInput
    };
    export type PaymentUncheckedUpdateWithoutGroupInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        recipientId?: StringFieldUpdateOperationsInput | string
        payerId?: StringFieldUpdateOperationsInput | string
    };
    export type PaymentUncheckedUpdateManyWithoutGroupInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        conversion?: CurrencyConversion | null
        recipientId?: StringFieldUpdateOperationsInput | string
        payerId?: StringFieldUpdateOperationsInput | string
    };
    export type GroupCreateManyCoverImageInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        name: string
        currency: $Enums.CurrencyCode
    };
    export type ProfileCreateManyAvatarInput = {
        userId: string
        email: string
        firstName: string
        lastName: string
        currency: $Enums.CurrencyCode
        createdAt?: Date | string
        updatedAt?: Date | string
    };
    export type GroupUpdateWithoutCoverImageInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        name?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        participants?: GroupParticipantUpdateManyWithoutGroupNestedInput
        messages?: MessageUpdateManyWithoutGroupNestedInput
        expenses?: ExpenseUpdateManyWithoutGroupNestedInput
        payments?: PaymentUpdateManyWithoutGroupNestedInput
    };
    export type GroupUncheckedUpdateWithoutCoverImageInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        name?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        participants?: GroupParticipantUncheckedUpdateManyWithoutGroupNestedInput
        messages?: MessageUncheckedUpdateManyWithoutGroupNestedInput
        expenses?: ExpenseUncheckedUpdateManyWithoutGroupNestedInput
        payments?: PaymentUncheckedUpdateManyWithoutGroupNestedInput
    };
    export type GroupUncheckedUpdateManyWithoutCoverImageInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        name?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    };
    export type ProfileUpdateWithoutAvatarInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groups?: GroupParticipantUpdateManyWithoutUserNestedInput
        messages?: MessageUpdateManyWithoutAuthorNestedInput
        expensesOwned?: ExpenseUpdateManyWithoutOwnerNestedInput
        expensesPaid?: ExpenseUpdateManyWithoutPayerNestedInput
        expenseShares?: ExpenseShareUpdateManyWithoutUserNestedInput
        paymentsReceived?: PaymentUpdateManyWithoutRecipientNestedInput
        paymentsPaid?: PaymentUpdateManyWithoutPayerNestedInput
    };
    export type ProfileUncheckedUpdateWithoutAvatarInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        groups?: GroupParticipantUncheckedUpdateManyWithoutUserNestedInput
        messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
        expensesOwned?: ExpenseUncheckedUpdateManyWithoutOwnerNestedInput
        expensesPaid?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
        expenseShares?: ExpenseShareUncheckedUpdateManyWithoutUserNestedInput
        paymentsReceived?: PaymentUncheckedUpdateManyWithoutRecipientNestedInput
        paymentsPaid?: PaymentUncheckedUpdateManyWithoutPayerNestedInput
    };
    export type ProfileUncheckedUpdateManyWithoutAvatarInput = {
        userId?: StringFieldUpdateOperationsInput | string
        email?: StringFieldUpdateOperationsInput | string
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    };
    export type MessageAttachmentCreateManyMessageInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        type: $Enums.MessageAttachmentType
        expenseId?: string | null
    };
    export type MessageAttachmentUpdateWithoutMessageInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        type?: EnumMessageAttachmentTypeFieldUpdateOperationsInput | $Enums.MessageAttachmentType
        expense?: ExpenseUpdateOneWithoutMessageAttachmentsNestedInput
    };
    export type MessageAttachmentUncheckedUpdateWithoutMessageInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        type?: EnumMessageAttachmentTypeFieldUpdateOperationsInput | $Enums.MessageAttachmentType
        expenseId?: NullableStringFieldUpdateOperationsInput | string | null
    };
    export type MessageAttachmentUncheckedUpdateManyWithoutMessageInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        type?: EnumMessageAttachmentTypeFieldUpdateOperationsInput | $Enums.MessageAttachmentType
        expenseId?: NullableStringFieldUpdateOperationsInput | string | null
    };
    export type ExpenseShareCreateManyExpenseInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        userId: string
        amount: number
        currency: $Enums.CurrencyCode
        locked?: boolean
        conversion?: CurrencyConversion | null
    };
    export type MessageAttachmentCreateManyExpenseInput = {
        id?: string
        createdAt?: Date | string
        updatedAt?: Date | string
        messageId: string
        type: $Enums.MessageAttachmentType
    };
    export type ExpenseShareUpdateWithoutExpenseInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        locked?: BoolFieldUpdateOperationsInput | boolean
        conversion?: CurrencyConversion | null
        user?: ProfileUpdateOneRequiredWithoutExpenseSharesNestedInput
    };
    export type ExpenseShareUncheckedUpdateWithoutExpenseInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        userId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        locked?: BoolFieldUpdateOperationsInput | boolean
        conversion?: CurrencyConversion | null
    };
    export type ExpenseShareUncheckedUpdateManyWithoutExpenseInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        userId?: StringFieldUpdateOperationsInput | string
        amount?: IntFieldUpdateOperationsInput | number
        currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
        locked?: BoolFieldUpdateOperationsInput | boolean
        conversion?: CurrencyConversion | null
    };
    export type MessageAttachmentUpdateWithoutExpenseInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        type?: EnumMessageAttachmentTypeFieldUpdateOperationsInput | $Enums.MessageAttachmentType
        message?: MessageUpdateOneRequiredWithoutAttachmentsNestedInput
    };
    export type MessageAttachmentUncheckedUpdateWithoutExpenseInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        messageId?: StringFieldUpdateOperationsInput | string
        type?: EnumMessageAttachmentTypeFieldUpdateOperationsInput | $Enums.MessageAttachmentType
    };
    export type MessageAttachmentUncheckedUpdateManyWithoutExpenseInput = {
        id?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        messageId?: StringFieldUpdateOperationsInput | string
        type?: EnumMessageAttachmentTypeFieldUpdateOperationsInput | $Enums.MessageAttachmentType
    };
    /**
     * Aliases for legacy arg types
     */
    /** @deprecated Use ProfileCountOutputTypeDefaultArgs instead */
    export type ProfileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfileCountOutputTypeDefaultArgs<ExtArgs>;
    /** @deprecated Use GroupCountOutputTypeDefaultArgs instead */
    export type GroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupCountOutputTypeDefaultArgs<ExtArgs>;
    /** @deprecated Use ImageCountOutputTypeDefaultArgs instead */
    export type ImageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImageCountOutputTypeDefaultArgs<ExtArgs>;
    /** @deprecated Use MessageCountOutputTypeDefaultArgs instead */
    export type MessageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageCountOutputTypeDefaultArgs<ExtArgs>;
    /** @deprecated Use ExpenseCountOutputTypeDefaultArgs instead */
    export type ExpenseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpenseCountOutputTypeDefaultArgs<ExtArgs>;
    /** @deprecated Use ProfileDefaultArgs instead */
    export type ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfileDefaultArgs<ExtArgs>;
    /** @deprecated Use GroupDefaultArgs instead */
    export type GroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupDefaultArgs<ExtArgs>;
    /** @deprecated Use GroupParticipantDefaultArgs instead */
    export type GroupParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupParticipantDefaultArgs<ExtArgs>;
    /** @deprecated Use ImageDefaultArgs instead */
    export type ImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImageDefaultArgs<ExtArgs>;
    /** @deprecated Use MessageDefaultArgs instead */
    export type MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>;
    /** @deprecated Use MessageAttachmentDefaultArgs instead */
    export type MessageAttachmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageAttachmentDefaultArgs<ExtArgs>;
    /** @deprecated Use ExpenseDefaultArgs instead */
    export type ExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpenseDefaultArgs<ExtArgs>;
    /** @deprecated Use ExpenseShareDefaultArgs instead */
    export type ExpenseShareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpenseShareDefaultArgs<ExtArgs>;
    /** @deprecated Use PaymentDefaultArgs instead */
    export type PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>;
    /** @deprecated Use ExchangeRatesDefaultArgs instead */
    export type ExchangeRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExchangeRatesDefaultArgs<ExtArgs>;
    /**
     * Batch Payload for updateMany & deleteMany & createMany
     */
    export type BatchPayload = {
        count: number
    };
}

export type CurrencyConversion = {
    sourceCurrency: CurrencyCode;
    sourceAmount: number;
    currency: CurrencyCode;
    amount: number;
    exchangeRate: number;
    exchangeRatesId: string;
};
