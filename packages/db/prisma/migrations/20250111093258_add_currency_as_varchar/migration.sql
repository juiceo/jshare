-- AlterTable
ALTER TABLE "public"."expense_shares" ADD COLUMN     "currency" VARCHAR(3) NOT NULL DEFAULT 'USD';

-- AlterTable
ALTER TABLE "public"."expenses" ADD COLUMN     "currency" VARCHAR(3) NOT NULL DEFAULT 'USD';

-- AlterTable
ALTER TABLE "public"."groups" ADD COLUMN     "currency" VARCHAR(3) NOT NULL DEFAULT 'USD';

-- AlterTable
ALTER TABLE "public"."profiles" ADD COLUMN     "currency" VARCHAR(3) NOT NULL DEFAULT 'USD';
