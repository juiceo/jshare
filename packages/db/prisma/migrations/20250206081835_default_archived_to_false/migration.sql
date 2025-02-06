-- AlterTable
ALTER TABLE "public"."exchange_rates" ALTER COLUMN "archived" SET DEFAULT false;

-- AlterTable
ALTER TABLE "public"."expense_shares" ALTER COLUMN "archived" SET DEFAULT false;

-- AlterTable
ALTER TABLE "public"."expenses" ALTER COLUMN "archived" SET DEFAULT false;

-- AlterTable
ALTER TABLE "public"."group_participants" ALTER COLUMN "archived" SET DEFAULT false;

-- AlterTable
ALTER TABLE "public"."groups" ALTER COLUMN "archived" SET DEFAULT false;

-- AlterTable
ALTER TABLE "public"."images" ALTER COLUMN "archived" SET DEFAULT false;

-- AlterTable
ALTER TABLE "public"."message_attachments" ALTER COLUMN "archived" SET DEFAULT false;

-- AlterTable
ALTER TABLE "public"."messages" ALTER COLUMN "archived" SET DEFAULT false;

-- AlterTable
ALTER TABLE "public"."payments" ALTER COLUMN "archived" SET DEFAULT false;
