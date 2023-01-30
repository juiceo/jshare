/*
  Warnings:

  - You are about to drop the column `bot` on the `Message` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "MessageType" AS ENUM ('TEXT', 'EXPENSE', 'BOT');

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "bot",
ADD COLUMN     "type" "MessageType" NOT NULL DEFAULT 'TEXT';
