/*
  Warnings:

  - You are about to drop the column `conversionDetails` on the `expense_shares` table. All the data in the column will be lost.
  - You are about to drop the column `conversionDetails` on the `expenses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."expense_shares" DROP COLUMN "conversionDetails",
ADD COLUMN     "conversionId" TEXT;

-- AlterTable
ALTER TABLE "public"."expenses" DROP COLUMN "conversionDetails",
ADD COLUMN     "conversionId" TEXT;

-- CreateTable
CREATE TABLE "public"."currency_conversions" (
    "id" TEXT NOT NULL,
    "sourceCurrency" VARCHAR(3) NOT NULL,
    "sourceAmount" INTEGER NOT NULL,
    "currency" VARCHAR(3) NOT NULL,
    "amount" INTEGER NOT NULL,
    "exchangeRatesId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "currency_conversions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."expenses" ADD CONSTRAINT "expenses_conversionId_fkey" FOREIGN KEY ("conversionId") REFERENCES "public"."currency_conversions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."expense_shares" ADD CONSTRAINT "expense_shares_conversionId_fkey" FOREIGN KEY ("conversionId") REFERENCES "public"."currency_conversions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."currency_conversions" ADD CONSTRAINT "currency_conversions_exchangeRatesId_fkey" FOREIGN KEY ("exchangeRatesId") REFERENCES "public"."exchange_rates"("id") ON DELETE SET NULL ON UPDATE CASCADE;
