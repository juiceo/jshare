/*
  Warnings:

  - Changed the type of `currency` on the `Expense` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `currency` on the `Group` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "CurrencyCode" AS ENUM ('EUR', 'USD', 'CHF', 'GBP');

-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "currency",
ADD COLUMN     "currency" "CurrencyCode" NOT NULL;

-- AlterTable
ALTER TABLE "Group" DROP COLUMN "currency",
ADD COLUMN     "currency" "CurrencyCode" NOT NULL;
