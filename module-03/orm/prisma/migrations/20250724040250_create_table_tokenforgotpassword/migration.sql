-- CreateTable
CREATE TABLE "TokenForgotPassword" (
    "token" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TokenForgotPassword_token_key" ON "TokenForgotPassword"("token");
