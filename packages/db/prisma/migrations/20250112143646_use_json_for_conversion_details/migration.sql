/*
  Warnings:

  - You are about to drop the column `conversionId` on the `expense_shares` table. All the data in the column will be lost.
  - You are about to drop the column `conversionId` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the `currency_conversions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."currency_conversions" DROP CONSTRAINT "currency_conversions_exchangeRatesId_fkey";

-- DropForeignKey
ALTER TABLE "public"."expense_shares" DROP CONSTRAINT "expense_shares_conversionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."expenses" DROP CONSTRAINT "expenses_conversionId_fkey";

-- AlterTable
ALTER TABLE "public"."expense_shares" DROP COLUMN "conversionId",
ADD COLUMN     "conversion" JSONB;

-- AlterTable
ALTER TABLE "public"."expenses" DROP COLUMN "conversionId",
ADD COLUMN     "conversion" JSONB;

-- DropTable
DROP TABLE "public"."currency_conversions";
