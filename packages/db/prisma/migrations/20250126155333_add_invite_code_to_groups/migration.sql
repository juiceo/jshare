/*
  Warnings:

  - A unique constraint covering the columns `[inviteCode]` on the table `groups` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."groups" ADD COLUMN     "inviteCode" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "groups_inviteCode_key" ON "public"."groups"("inviteCode");
