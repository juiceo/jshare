/*
  Warnings:

  - You are about to drop the column `avatar` on the `profiles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."groups" ADD COLUMN     "imageId" TEXT;

-- AlterTable
ALTER TABLE "public"."profiles" DROP COLUMN "avatar",
ADD COLUMN     "avatarId" TEXT;
