/*
  Warnings:

  - You are about to drop the column `enabled` on the `expense_shares` table. All the data in the column will be lost.
  - Made the column `amount` on table `expense_shares` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."expense_shares" DROP COLUMN "enabled",
ALTER COLUMN "amount" SET NOT NULL;
