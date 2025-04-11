/*
  Warnings:

  - A unique constraint covering the columns `[coverImageId]` on the table `groups` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[avatarId]` on the table `profiles` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "groups_coverImageId_key" ON "public"."groups"("coverImageId");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_avatarId_key" ON "public"."profiles"("avatarId");
