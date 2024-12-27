-- DropForeignKey
ALTER TABLE "public"."images" DROP CONSTRAINT "images_uploadedById_fkey";

-- AlterTable
ALTER TABLE "public"."groups" ADD COLUMN     "coverImageId" TEXT;

-- AlterTable
ALTER TABLE "public"."profiles" ADD COLUMN     "avatarId" TEXT;

-- AddForeignKey
ALTER TABLE "public"."profiles" ADD CONSTRAINT "profiles_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "public"."images"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."groups" ADD CONSTRAINT "groups_coverImageId_fkey" FOREIGN KEY ("coverImageId") REFERENCES "public"."images"("id") ON DELETE SET NULL ON UPDATE CASCADE;
