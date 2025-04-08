-- AlterTable
ALTER TABLE "public"."profiles" ADD COLUMN     "id" TEXT;

-- Update existing rows to set id equal to userId
UPDATE "public"."profiles" SET "id" = "userId";

