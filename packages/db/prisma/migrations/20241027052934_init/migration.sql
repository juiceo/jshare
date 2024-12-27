-- CreateTable
CREATE TABLE "public"."profiles" (
    "userId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("userId")
);
