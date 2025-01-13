-- CreateTable
CREATE TABLE "Escalas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sopranos" TEXT NOT NULL,
    "contraltos" TEXT NOT NULL,
    "tenores" TEXT NOT NULL,
    "tecladistas" TEXT NOT NULL,
    "violao" TEXT NOT NULL,
    "guitarra" TEXT NOT NULL,
    "baixo" TEXT NOT NULL,
    "bateria" TEXT NOT NULL,
    "culto" DATETIME NOT NULL,
    "dtAtualizacao" DATETIME NOT NULL
);
