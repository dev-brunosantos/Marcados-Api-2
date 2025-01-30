-- CreateTable
CREATE TABLE "Louvores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "link" TEXT,
    "dtCadastro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dtAtualizacao" DATETIME
);
