-- AlterTable
ALTER TABLE "public"."exchange_rates" ADD COLUMN     "archived" BOOLEAN;

-- AlterTable
ALTER TABLE "public"."expense_shares" ADD COLUMN     "archived" BOOLEAN;

-- AlterTable
ALTER TABLE "public"."expenses" ADD COLUMN     "archived" BOOLEAN;

-- AlterTable
ALTER TABLE "public"."group_participants" ADD COLUMN     "archived" BOOLEAN;

-- AlterTable
ALTER TABLE "public"."groups" ADD COLUMN     "archived" BOOLEAN;

-- AlterTable
ALTER TABLE "public"."images" ADD COLUMN     "archived" BOOLEAN;

-- AlterTable
ALTER TABLE "public"."message_attachments" ADD COLUMN     "archived" BOOLEAN;

-- AlterTable
ALTER TABLE "public"."messages" ADD COLUMN     "archived" BOOLEAN;

-- AlterTable
ALTER TABLE "public"."payments" ADD COLUMN     "archived" BOOLEAN;
