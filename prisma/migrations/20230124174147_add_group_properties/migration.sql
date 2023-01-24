/*
  Warnings:

  - Added the required column `currency` to the `Group` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "expenseCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "total" INTEGER NOT NULL DEFAULT 0;
