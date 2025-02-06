/*
  Warnings:

  - Made the column `archived` on table `exchange_rates` required. This step will fail if there are existing NULL values in that column.
  - Made the column `archived` on table `expense_shares` required. This step will fail if there are existing NULL values in that column.
  - Made the column `archived` on table `expenses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `archived` on table `group_participants` required. This step will fail if there are existing NULL values in that column.
  - Made the column `archived` on table `groups` required. This step will fail if there are existing NULL values in that column.
  - Made the column `archived` on table `images` required. This step will fail if there are existing NULL values in that column.
  - Made the column `archived` on table `message_attachments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `archived` on table `messages` required. This step will fail if there are existing NULL values in that column.
  - Made the column `archived` on table `payments` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
UPDATE "public"."exchange_rates" SET "archived" = false;
ALTER TABLE "public"."exchange_rates" ALTER COLUMN "archived" SET NOT NULL;

-- AlterTable
UPDATE "public"."expense_shares" SET "archived" = false;
ALTER TABLE "public"."expense_shares" ALTER COLUMN "archived" SET NOT NULL;

-- AlterTable
UPDATE "public"."expenses" SET "archived" = false;
ALTER TABLE "public"."expenses" ALTER COLUMN "archived" SET NOT NULL;

-- AlterTable
UPDATE "public"."group_participants" SET "archived" = false;
ALTER TABLE "public"."group_participants" ALTER COLUMN "archived" SET NOT NULL;

-- AlterTable
UPDATE "public"."groups" SET "archived" = false;
ALTER TABLE "public"."groups" ALTER COLUMN "archived" SET NOT NULL;

-- AlterTable
UPDATE "public"."images" SET "archived" = false;
ALTER TABLE "public"."images" ALTER COLUMN "archived" SET NOT NULL;

-- AlterTable
UPDATE "public"."message_attachments" SET "archived" = false;
ALTER TABLE "public"."message_attachments" ALTER COLUMN "archived" SET NOT NULL;

-- AlterTable
UPDATE "public"."messages" SET "archived" = false;
ALTER TABLE "public"."messages" ALTER COLUMN "archived" SET NOT NULL;

-- AlterTable
UPDATE "public"."payments" SET "archived" = false;
ALTER TABLE "public"."payments" ALTER COLUMN "archived" SET NOT NULL;
