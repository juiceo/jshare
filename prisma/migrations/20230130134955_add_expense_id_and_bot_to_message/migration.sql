-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "bot" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "expenseId" TEXT;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_expenseId_fkey" FOREIGN KEY ("expenseId") REFERENCES "Expense"("id") ON DELETE SET NULL ON UPDATE CASCADE;
