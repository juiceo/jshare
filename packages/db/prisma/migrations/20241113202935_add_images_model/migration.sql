/*
  Warnings:

  - You are about to drop the column `imageId` on the `groups` table. All the data in the column will be lost.
  - You are about to drop the column `avatarId` on the `profiles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."groups" DROP COLUMN "imageId";

-- AlterTable
ALTER TABLE "public"."profiles" DROP COLUMN "avatarId";

-- CreateTable
CREATE TABLE "public"."images" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "bucket" TEXT NOT NULL,
    "uploadedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."images" ADD CONSTRAINT "images_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "public"."profiles"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
