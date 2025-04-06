/*
  Warnings:

  - You are about to drop the column `privacyPolicyAcceptedAt` on the `profiles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."profiles" DROP COLUMN "privacyPolicyAcceptedAt",
ADD COLUMN     "termsAcceptedAt" TIMESTAMP(3);
