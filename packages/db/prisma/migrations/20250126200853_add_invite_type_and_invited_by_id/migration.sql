-- CreateEnum
CREATE TYPE "public"."InviteType" AS ENUM ('Code', 'Invite');

-- AlterTable
ALTER TABLE "public"."group_participants" ADD COLUMN     "inviteType" "public"."InviteType",
ADD COLUMN     "invitedById" TEXT;
