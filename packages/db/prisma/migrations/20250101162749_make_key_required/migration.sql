-- Ensure no null values exist in the `key` column
UPDATE "public"."messages"
SET "key" = gen_random_uuid()
WHERE "key" IS NULL;

-- AlterTable
ALTER TABLE "public"."messages" ALTER COLUMN "key" SET NOT NULL;
