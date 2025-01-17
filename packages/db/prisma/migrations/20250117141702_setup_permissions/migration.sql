/*
  Warnings:

  - Changed the type of `currency` on the `expense_shares` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `currency` on the `expenses` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `currency` on the `groups` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `currency` on the `payments` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `currency` on the `profiles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."CurrencyCode" ADD VALUE 'AED';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'ARS';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'AUD';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'BRL';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'CAD';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'CHF';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'CLP';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'COP';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'CZK';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'DKK';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'EGP';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'GBP';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'HUF';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'INR';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'KES';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'MAD';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'MXN';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'NOK';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'PEN';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'PLN';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'RON';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'SEK';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'THB';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'TZS';
ALTER TYPE "public"."CurrencyCode" ADD VALUE 'ZAR';

-- AlterTable
ALTER TABLE "public"."expense_shares" DROP COLUMN "currency",
ADD COLUMN     "currency" "public"."CurrencyCode" NOT NULL;

-- AlterTable
ALTER TABLE "public"."expenses" DROP COLUMN "currency",
ADD COLUMN     "currency" "public"."CurrencyCode" NOT NULL;

-- AlterTable
ALTER TABLE "public"."groups" DROP COLUMN "currency",
ADD COLUMN     "currency" "public"."CurrencyCode" NOT NULL;

-- AlterTable
ALTER TABLE "public"."payments" DROP COLUMN "currency",
ADD COLUMN     "currency" "public"."CurrencyCode" NOT NULL;

-- AlterTable
ALTER TABLE "public"."profiles" DROP COLUMN "currency",
ADD COLUMN     "currency" "public"."CurrencyCode" NOT NULL;
