-- AlterTable
ALTER TABLE "public"."expense_shares" ALTER COLUMN "currency" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."expenses" ALTER COLUMN "currency" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."groups" ALTER COLUMN "currency" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."profiles" ALTER COLUMN "currency" DROP DEFAULT;
