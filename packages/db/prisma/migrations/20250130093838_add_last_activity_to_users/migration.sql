/*
  Warnings:

  - Made the column `lastActivity` on table `groups` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."groups" ALTER COLUMN "lastActivity" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."profiles" ADD COLUMN     "lastActivity" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
