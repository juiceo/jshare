-- AlterTable
ALTER TABLE "public"."expense_shares" ADD COLUMN     "exchangeRate" DOUBLE PRECISION,
ADD COLUMN     "exchangeRatesId" TEXT,
ADD COLUMN     "sourceAmount" INTEGER,
ADD COLUMN     "sourceCurrency" VARCHAR(3);
