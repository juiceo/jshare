-- This is an empty migration.
UPDATE "public"."expenses" SET "updatedAt" = "updatedAt" + INTERVAL '1 millisecond';