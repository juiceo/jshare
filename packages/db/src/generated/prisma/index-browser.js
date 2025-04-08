
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.21.1
 * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
 */
Prisma.prismaVersion = {
  client: "5.21.1",
  engine: "bf0e5e8a04cada8225617067eaa03d041e2bba36"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ProfileScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  email: 'email',
  firstName: 'firstName',
  lastName: 'lastName',
  lastActivity: 'lastActivity',
  currency: 'currency',
  avatarId: 'avatarId',
  temporary: 'temporary',
  termsAcceptedAt: 'termsAcceptedAt',
  showInSearch: 'showInSearch',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GroupScalarFieldEnum = {
  id: 'id',
  archived: 'archived',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  currency: 'currency',
  coverImageId: 'coverImageId',
  inviteCode: 'inviteCode',
  lastActivity: 'lastActivity'
};

exports.Prisma.GroupParticipantScalarFieldEnum = {
  id: 'id',
  archived: 'archived',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId',
  groupId: 'groupId',
  role: 'role',
  invitedById: 'invitedById',
  inviteType: 'inviteType'
};

exports.Prisma.ImageScalarFieldEnum = {
  id: 'id',
  archived: 'archived',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  path: 'path',
  bucket: 'bucket',
  uploadedById: 'uploadedById',
  blurhash: 'blurhash'
};

exports.Prisma.MessageScalarFieldEnum = {
  id: 'id',
  archived: 'archived',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  key: 'key',
  text: 'text',
  authorType: 'authorType',
  authorId: 'authorId',
  groupId: 'groupId'
};

exports.Prisma.MessageAttachmentScalarFieldEnum = {
  id: 'id',
  archived: 'archived',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  messageId: 'messageId',
  type: 'type',
  expenseId: 'expenseId'
};

exports.Prisma.ExpenseScalarFieldEnum = {
  id: 'id',
  archived: 'archived',
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

exports.Prisma.ExpenseShareScalarFieldEnum = {
  id: 'id',
  archived: 'archived',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId',
  expenseId: 'expenseId',
  amount: 'amount',
  currency: 'currency',
  locked: 'locked',
  conversion: 'conversion'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  archived: 'archived',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  groupId: 'groupId',
  amount: 'amount',
  currency: 'currency',
  conversion: 'conversion',
  recipientId: 'recipientId',
  payerId: 'payerId'
};

exports.Prisma.ExchangeRatesScalarFieldEnum = {
  id: 'id',
  archived: 'archived',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  baseCurrency: 'baseCurrency',
  rates: 'rates'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.CurrencyCode = exports.$Enums.CurrencyCode = {
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
  KZT: 'KZT',
  KGS: 'KGS'
};

exports.Role = exports.$Enums.Role = {
  Owner: 'Owner',
  Admin: 'Admin',
  Member: 'Member'
};

exports.InviteType = exports.$Enums.InviteType = {
  Code: 'Code',
  Invite: 'Invite'
};

exports.AuthorType = exports.$Enums.AuthorType = {
  User: 'User',
  System: 'System'
};

exports.MessageAttachmentType = exports.$Enums.MessageAttachmentType = {
  Expense: 'Expense'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
