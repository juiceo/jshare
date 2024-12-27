-- CreateTable
CREATE TABLE "public"."expense_shares" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expenseId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "currency" "public"."Currency" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "expense_shares_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."expense_shares" ADD CONSTRAINT "expense_shares_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."profiles"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."expense_shares" ADD CONSTRAINT "expense_shares_expenseId_fkey" FOREIGN KEY ("expenseId") REFERENCES "public"."expenses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
