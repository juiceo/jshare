/*
  Warnings:

  - You are about to drop the column `currency` on the `expense_shares` table. All the data in the column will be lost.
  - You are about to drop the column `currency` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `currency` on the `groups` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."expense_shares" DROP COLUMN "currency";

-- AlterTable
ALTER TABLE "public"."expenses" DROP COLUMN "currency";

-- AlterTable
ALTER TABLE "public"."groups" DROP COLUMN "currency";

-- DropEnum
DROP TYPE "public"."Currency";
