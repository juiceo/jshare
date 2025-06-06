
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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




  const path = require('path')

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
  archived: 'archived',
  archivedAt: 'archivedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  email: 'email',
  firstName: 'firstName',
  lastName: 'lastName',
  lastActivity: 'lastActivity',
  currency: 'currency',
  avatarId: 'avatarId',
  temporary: 'temporary',
  termsAcceptedAt: 'termsAcceptedAt',
  showInSearch: 'showInSearch'
};

exports.Prisma.GroupScalarFieldEnum = {
  id: 'id',
  archived: 'archived',
  archivedAt: 'archivedAt',
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
  archivedAt: 'archivedAt',
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
  archivedAt: 'archivedAt',
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
  archivedAt: 'archivedAt',
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
  archivedAt: 'archivedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  messageId: 'messageId',
  type: 'type',
  expenseId: 'expenseId'
};

exports.Prisma.ExpenseScalarFieldEnum = {
  id: 'id',
  archived: 'archived',
  archivedAt: 'archivedAt',
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
  archivedAt: 'archivedAt',
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
  archivedAt: 'archivedAt',
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
  archivedAt: 'archivedAt',
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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/Juuso/code/jshare-monorepo/packages/db/src/generated/.logical-prisma-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x"
      }
    ],
    "previewFeatures": [
      "multiSchema"
    ],
    "sourceFilePath": "/Users/Juuso/code/jshare-monorepo/packages/db/logical-1746566039750.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../..",
  "clientVersion": "5.21.1",
  "engineVersion": "bf0e5e8a04cada8225617067eaa03d041e2bba36",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "//////////////////////////////////////////////////////////////////////////////////////////////\n// DO NOT MODIFY THIS FILE                                                                  //\n// This file is automatically generated by ZenStack CLI and should not be manually updated. //\n//////////////////////////////////////////////////////////////////////////////////////////////\n\ndatasource db {\n  provider  = \"postgresql\"\n  url       = env(\"DATABASE_URL\")\n  directUrl = env(\"DIRECT_URL\")\n  schemas   = [\"public\"]\n}\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"src/generated/.logical-prisma-client\"\n  previewFeatures = [\"multiSchema\"]\n  binaryTargets   = [\"native\", \"debian-openssl-3.0.x\"]\n}\n\nenum Role {\n  Owner\n  Admin\n  Member\n\n  @@schema(\"public\")\n}\n\nenum AuthorType {\n  User\n  System\n\n  @@schema(\"public\")\n}\n\nenum MessageAttachmentType {\n  Expense\n\n  @@schema(\"public\")\n}\n\nenum InviteType {\n  Code\n  Invite\n\n  @@schema(\"public\")\n}\n\nenum CurrencyCode {\n  AED\n  ARS\n  AUD\n  BRL\n  CAD\n  CHF\n  CLP\n  COP\n  CZK\n  DKK\n  EGP\n  EUR\n  GBP\n  HUF\n  INR\n  KES\n  MAD\n  MXN\n  NOK\n  PEN\n  PLN\n  RON\n  SEK\n  THB\n  TZS\n  USD\n  ZAR\n  KZT\n  KGS\n\n  @@schema(\"public\")\n}\n\n/// @@deny('read', archived)\n/// @@allow('all', true)\n/// @@auth\nmodel Profile {\n  /// @deny('update', true)\n  id               String             @id() @default(uuid())\n  archived         Boolean            @default(false)\n  archivedAt       DateTime?\n  /// @deny('update', true)\n  createdAt        DateTime           @default(now())\n  /// @deny('update', true)\n  updatedAt        DateTime           @default(now()) @updatedAt()\n  email            String\n  firstName        String\n  lastName         String\n  lastActivity     DateTime           @default(now())\n  currency         CurrencyCode\n  groups           GroupParticipant[]\n  avatarId         String?            @unique()\n  avatar           Image?             @relation(fields: [avatarId], references: [id])\n  temporary        Boolean?\n  termsAcceptedAt  DateTime?\n  messages         Message[]\n  expensesOwned    Expense[]          @relation(\"expense_owner\")\n  expensesPaid     Expense[]          @relation(\"expense_payer\")\n  expenseShares    ExpenseShare[]\n  paymentsReceived Payment[]          @relation(name: \"payment_recipient\")\n  paymentsPaid     Payment[]          @relation(name: \"payment_payer\")\n  showInSearch     Boolean            @default(true)\n\n  @@map(\"profiles\")\n  @@schema(\"public\")\n}\n\n/// @@deny('read', archived)\n/// @@allow('all', true)\nmodel Group {\n  /// @deny('update', true)\n  id           String             @id() @default(uuid())\n  archived     Boolean            @default(false)\n  archivedAt   DateTime?\n  /// @deny('update', true)\n  createdAt    DateTime           @default(now())\n  /// @deny('update', true)\n  updatedAt    DateTime           @default(now()) @updatedAt()\n  name         String\n  currency     CurrencyCode\n  participants GroupParticipant[]\n  coverImageId String?            @unique()\n  coverImage   Image?             @relation(fields: [coverImageId], references: [id])\n  inviteCode   String?            @unique()\n  messages     Message[]\n  expenses     Expense[]\n  payments     Payment[]\n  lastActivity DateTime           @default(now())\n\n  @@map(\"groups\")\n  @@schema(\"public\")\n}\n\n/// @@deny('read', archived)\n/// @@allow('all', true)\nmodel GroupParticipant {\n  /// @deny('update', true)\n  id          String      @id() @default(uuid())\n  archived    Boolean     @default(false)\n  archivedAt  DateTime?\n  /// @deny('update', true)\n  createdAt   DateTime    @default(now())\n  /// @deny('update', true)\n  updatedAt   DateTime    @default(now()) @updatedAt()\n  userId      String\n  user        Profile     @relation(fields: [userId], references: [id])\n  groupId     String\n  group       Group       @relation(fields: [groupId], references: [id], onDelete: Cascade)\n  role        Role\n  invitedById String?\n  inviteType  InviteType?\n\n  @@index([groupId])\n  @@index([userId])\n  @@map(\"group_participants\")\n  @@schema(\"public\")\n}\n\n/// @@deny('read', archived)\n/// @@allow('all', true)\nmodel Image {\n  /// @deny('update', true)\n  id           String    @id() @default(uuid())\n  archived     Boolean   @default(false)\n  archivedAt   DateTime?\n  /// @deny('update', true)\n  createdAt    DateTime  @default(now())\n  /// @deny('update', true)\n  updatedAt    DateTime  @default(now()) @updatedAt()\n  path         String\n  bucket       String\n  uploadedById String\n  blurhash     String?\n  Group        Group?\n  Profile      Profile?\n\n  @@map(\"images\")\n  @@schema(\"public\")\n}\n\n/// @@deny('read', archived)\n/// @@allow('all', true)\nmodel Message {\n  /// @deny('update', true)\n  id          String              @id() @default(uuid())\n  archived    Boolean             @default(false)\n  archivedAt  DateTime?\n  /// @deny('update', true)\n  createdAt   DateTime            @default(now())\n  /// @deny('update', true)\n  updatedAt   DateTime            @default(now()) @updatedAt()\n  key         String\n  text        String?\n  authorType  AuthorType\n  authorId    String?\n  author      Profile?            @relation(fields: [authorId], references: [id])\n  groupId     String\n  group       Group               @relation(fields: [groupId], references: [id], onDelete: Cascade)\n  attachments MessageAttachment[]\n\n  @@map(\"messages\")\n  @@schema(\"public\")\n}\n\n/// @@deny('read', archived)\n/// @@allow('all', true)\nmodel MessageAttachment {\n  /// @deny('update', true)\n  id         String                @id() @default(uuid())\n  archived   Boolean               @default(false)\n  archivedAt DateTime?\n  /// @deny('update', true)\n  createdAt  DateTime              @default(now())\n  /// @deny('update', true)\n  updatedAt  DateTime              @default(now()) @updatedAt()\n  messageId  String\n  message    Message               @relation(fields: [messageId], references: [id], onDelete: Cascade)\n  type       MessageAttachmentType\n  expenseId  String?\n  expense    Expense?              @relation(fields: [expenseId], references: [id], onDelete: SetNull)\n\n  @@map(\"message_attachments\")\n  @@schema(\"public\")\n}\n\n/// @@deny('read', archived)\n/// @@allow('all', true)\nmodel Expense {\n  /// @deny('update', true)\n  id                 String              @id() @default(uuid())\n  archived           Boolean             @default(false)\n  archivedAt         DateTime?\n  /// @deny('update', true)\n  createdAt          DateTime            @default(now())\n  /// @deny('update', true)\n  updatedAt          DateTime            @default(now()) @updatedAt()\n  ownerId            String\n  owner              Profile             @relation(name: \"expense_owner\", fields: [ownerId], references: [id])\n  payerId            String\n  payer              Profile             @relation(name: \"expense_payer\", fields: [payerId], references: [id])\n  groupId            String\n  group              Group               @relation(fields: [groupId], references: [id], onDelete: Cascade)\n  amount             Int\n  currency           CurrencyCode\n  description        String?\n  /// @json\n  conversion         Json?\n  shares             ExpenseShare[]\n  messageAttachments MessageAttachment[]\n\n  @@map(\"expenses\")\n  @@schema(\"public\")\n}\n\n/// @@deny('read', archived)\n/// @@allow('all', true)\nmodel ExpenseShare {\n  /// @deny('update', true)\n  id         String       @id() @default(uuid())\n  archived   Boolean      @default(false)\n  archivedAt DateTime?\n  /// @deny('update', true)\n  createdAt  DateTime     @default(now())\n  /// @deny('update', true)\n  updatedAt  DateTime     @default(now()) @updatedAt()\n  userId     String\n  user       Profile      @relation(fields: [userId], references: [id])\n  expenseId  String\n  expense    Expense      @relation(fields: [expenseId], references: [id], onDelete: Cascade)\n  amount     Int\n  currency   CurrencyCode\n  locked     Boolean      @default(false)\n  /// @json\n  conversion Json?\n\n  @@map(\"expense_shares\")\n  @@schema(\"public\")\n}\n\n/// @@deny('read', archived)\n/// @@allow('all', true)\nmodel Payment {\n  /// @deny('update', true)\n  id          String       @id() @default(uuid())\n  archived    Boolean      @default(false)\n  archivedAt  DateTime?\n  /// @deny('update', true)\n  createdAt   DateTime     @default(now())\n  /// @deny('update', true)\n  updatedAt   DateTime     @default(now()) @updatedAt()\n  groupId     String\n  group       Group        @relation(fields: [groupId], references: [id], onDelete: Cascade)\n  amount      Int\n  currency    CurrencyCode\n  /// @json\n  conversion  Json?\n  recipientId String\n  recipient   Profile      @relation(name: \"payment_recipient\", fields: [recipientId], references: [id])\n  payerId     String\n  payer       Profile      @relation(name: \"payment_payer\", fields: [payerId], references: [id])\n\n  @@map(\"payments\")\n  @@schema(\"public\")\n}\n\n/// @@deny('read', archived)\n/// @@allow('all', true)\nmodel ExchangeRates {\n  /// @deny('update', true)\n  id           String    @id() @default(uuid())\n  archived     Boolean   @default(false)\n  archivedAt   DateTime?\n  /// @deny('update', true)\n  createdAt    DateTime  @default(now())\n  /// @deny('update', true)\n  updatedAt    DateTime  @default(now()) @updatedAt()\n  baseCurrency String    @db.VarChar(3)\n  rates        Json\n\n  @@map(\"exchange_rates\")\n  @@schema(\"public\")\n}\n",
  "inlineSchemaHash": "087126c84aeec8617eed59fd6a88c7c3907ba3254ca8b3987212e5a6db0e7c58",
  "copyEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/.logical-prisma-client",
    "generated/.logical-prisma-client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Profile\":{\"dbName\":\"profiles\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"archived\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"archivedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true,\"documentation\":\"@deny('update', true)\"},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastActivity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CurrencyCode\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"groups\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GroupParticipant\",\"relationName\":\"GroupParticipantToProfile\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatarId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Image\",\"relationName\":\"ImageToProfile\",\"relationFromFields\":[\"avatarId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"temporary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"termsAcceptedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"relationName\":\"MessageToProfile\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expensesOwned\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Expense\",\"relationName\":\"expense_owner\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expensesPaid\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Expense\",\"relationName\":\"expense_payer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expenseShares\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExpenseShare\",\"relationName\":\"ExpenseShareToProfile\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentsReceived\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payment\",\"relationName\":\"payment_recipient\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentsPaid\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payment\",\"relationName\":\"payment_payer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"showInSearch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"@@deny('read', archived)\\\\n@@allow('all', true)\\\\n@@auth\"},\"Group\":{\"dbName\":\"groups\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"archived\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"archivedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true,\"documentation\":\"@deny('update', true)\"},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CurrencyCode\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"participants\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GroupParticipant\",\"relationName\":\"GroupToGroupParticipant\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coverImageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coverImage\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Image\",\"relationName\":\"GroupToImage\",\"relationFromFields\":[\"coverImageId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inviteCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"relationName\":\"GroupToMessage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expenses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Expense\",\"relationName\":\"ExpenseToGroup\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payment\",\"relationName\":\"GroupToPayment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastActivity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"@@deny('read', archived)\\\\n@@allow('all', true)\"},\"GroupParticipant\":{\"dbName\":\"group_participants\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"archived\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"archivedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true,\"documentation\":\"@deny('update', true)\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"GroupParticipantToProfile\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"groupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Group\",\"relationName\":\"GroupToGroupParticipant\",\"relationFromFields\":[\"groupId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Role\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invitedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inviteType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InviteType\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"@@deny('read', archived)\\\\n@@allow('all', true)\"},\"Image\":{\"dbName\":\"images\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"archived\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"archivedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true,\"documentation\":\"@deny('update', true)\"},{\"name\":\"path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bucket\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploadedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"blurhash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Group\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Group\",\"relationName\":\"GroupToImage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Profile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"ImageToProfile\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"@@deny('read', archived)\\\\n@@allow('all', true)\"},\"Message\":{\"dbName\":\"messages\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"archived\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"archivedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true,\"documentation\":\"@deny('update', true)\"},{\"name\":\"key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AuthorType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"MessageToProfile\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"groupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Group\",\"relationName\":\"GroupToMessage\",\"relationFromFields\":[\"groupId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attachments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MessageAttachment\",\"relationName\":\"MessageToMessageAttachment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"@@deny('read', archived)\\\\n@@allow('all', true)\"},\"MessageAttachment\":{\"dbName\":\"message_attachments\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"archived\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"archivedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true,\"documentation\":\"@deny('update', true)\"},{\"name\":\"messageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"relationName\":\"MessageToMessageAttachment\",\"relationFromFields\":[\"messageId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MessageAttachmentType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expenseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expense\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Expense\",\"relationName\":\"ExpenseToMessageAttachment\",\"relationFromFields\":[\"expenseId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"@@deny('read', archived)\\\\n@@allow('all', true)\"},\"Expense\":{\"dbName\":\"expenses\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"archived\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"archivedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true,\"documentation\":\"@deny('update', true)\"},{\"name\":\"ownerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"expense_owner\",\"relationFromFields\":[\"ownerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"expense_payer\",\"relationFromFields\":[\"payerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"groupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Group\",\"relationName\":\"ExpenseToGroup\",\"relationFromFields\":[\"groupId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CurrencyCode\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@json\"},{\"name\":\"shares\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExpenseShare\",\"relationName\":\"ExpenseToExpenseShare\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messageAttachments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MessageAttachment\",\"relationName\":\"ExpenseToMessageAttachment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"@@deny('read', archived)\\\\n@@allow('all', true)\"},\"ExpenseShare\":{\"dbName\":\"expense_shares\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"archived\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"archivedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true,\"documentation\":\"@deny('update', true)\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"ExpenseShareToProfile\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expenseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expense\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Expense\",\"relationName\":\"ExpenseToExpenseShare\",\"relationFromFields\":[\"expenseId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CurrencyCode\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locked\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@json\"}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"@@deny('read', archived)\\\\n@@allow('all', true)\"},\"Payment\":{\"dbName\":\"payments\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"archived\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"archivedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true,\"documentation\":\"@deny('update', true)\"},{\"name\":\"groupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Group\",\"relationName\":\"GroupToPayment\",\"relationFromFields\":[\"groupId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CurrencyCode\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@json\"},{\"name\":\"recipientId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recipient\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"payment_recipient\",\"relationFromFields\":[\"recipientId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"payment_payer\",\"relationFromFields\":[\"payerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"@@deny('read', archived)\\\\n@@allow('all', true)\"},\"ExchangeRates\":{\"dbName\":\"exchange_rates\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"archived\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"archivedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@deny('update', true)\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true,\"documentation\":\"@deny('update', true)\"},{\"name\":\"baseCurrency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rates\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"@@deny('read', archived)\\\\n@@allow('all', true)\"}},\"enums\":{\"Role\":{\"values\":[{\"name\":\"Owner\",\"dbName\":null},{\"name\":\"Admin\",\"dbName\":null},{\"name\":\"Member\",\"dbName\":null}],\"dbName\":null},\"AuthorType\":{\"values\":[{\"name\":\"User\",\"dbName\":null},{\"name\":\"System\",\"dbName\":null}],\"dbName\":null},\"MessageAttachmentType\":{\"values\":[{\"name\":\"Expense\",\"dbName\":null}],\"dbName\":null},\"InviteType\":{\"values\":[{\"name\":\"Code\",\"dbName\":null},{\"name\":\"Invite\",\"dbName\":null}],\"dbName\":null},\"CurrencyCode\":{\"values\":[{\"name\":\"AED\",\"dbName\":null},{\"name\":\"ARS\",\"dbName\":null},{\"name\":\"AUD\",\"dbName\":null},{\"name\":\"BRL\",\"dbName\":null},{\"name\":\"CAD\",\"dbName\":null},{\"name\":\"CHF\",\"dbName\":null},{\"name\":\"CLP\",\"dbName\":null},{\"name\":\"COP\",\"dbName\":null},{\"name\":\"CZK\",\"dbName\":null},{\"name\":\"DKK\",\"dbName\":null},{\"name\":\"EGP\",\"dbName\":null},{\"name\":\"EUR\",\"dbName\":null},{\"name\":\"GBP\",\"dbName\":null},{\"name\":\"HUF\",\"dbName\":null},{\"name\":\"INR\",\"dbName\":null},{\"name\":\"KES\",\"dbName\":null},{\"name\":\"MAD\",\"dbName\":null},{\"name\":\"MXN\",\"dbName\":null},{\"name\":\"NOK\",\"dbName\":null},{\"name\":\"PEN\",\"dbName\":null},{\"name\":\"PLN\",\"dbName\":null},{\"name\":\"RON\",\"dbName\":null},{\"name\":\"SEK\",\"dbName\":null},{\"name\":\"THB\",\"dbName\":null},{\"name\":\"TZS\",\"dbName\":null},{\"name\":\"USD\",\"dbName\":null},{\"name\":\"ZAR\",\"dbName\":null},{\"name\":\"KZT\",\"dbName\":null},{\"name\":\"KGS\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

