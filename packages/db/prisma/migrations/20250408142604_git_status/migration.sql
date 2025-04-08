/*
  Warnings:

  - Made the column `id` on table `profiles` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."profiles" ALTER COLUMN "id" SET NOT NULL;
