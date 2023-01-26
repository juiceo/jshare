-- DropForeignKey
ALTER TABLE "ExpenseShareWithMember" DROP CONSTRAINT "ExpenseShareWithMember_expenseId_fkey";

-- DropForeignKey
ALTER TABLE "ExpenseShareWithMember" DROP CONSTRAINT "ExpenseShareWithMember_memberId_fkey";

-- AddForeignKey
ALTER TABLE "ExpenseShareWithMember" ADD CONSTRAINT "ExpenseShareWithMember_expenseId_fkey" FOREIGN KEY ("expenseId") REFERENCES "Expense"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpenseShareWithMember" ADD CONSTRAINT "ExpenseShareWithMember_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
