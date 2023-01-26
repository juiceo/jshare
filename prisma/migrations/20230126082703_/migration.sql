/*
  Warnings:

  - A unique constraint covering the columns `[expenseId,memberId]` on the table `ExpenseShareWithMember` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ExpenseShareWithMember_expenseId_memberId_key" ON "ExpenseShareWithMember"("expenseId", "memberId");
