/*
  Warnings:

  - You are about to drop the column `exchangeRate` on the `expense_shares` table. All the data in the column will be lost.
  - You are about to drop the column `exchangeRatesId` on the `expense_shares` table. All the data in the column will be lost.
  - You are about to drop the column `sourceAmount` on the `expense_shares` table. All the data in the column will be lost.
  - You are about to drop the column `sourceCurrency` on the `expense_shares` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."expense_shares" DROP COLUMN "exchangeRate",
DROP COLUMN "exchangeRatesId",
DROP COLUMN "sourceAmount",
DROP COLUMN "sourceCurrency",
ADD COLUMN     "conversionDetails" JSONB;
