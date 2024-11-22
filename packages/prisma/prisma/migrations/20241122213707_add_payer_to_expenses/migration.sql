/*
  Warnings:

  - Added the required column `payerId` to the `expenses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."expenses" ADD COLUMN     "payerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."expenses" ADD CONSTRAINT "expenses_payerId_fkey" FOREIGN KEY ("payerId") REFERENCES "public"."profiles"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
