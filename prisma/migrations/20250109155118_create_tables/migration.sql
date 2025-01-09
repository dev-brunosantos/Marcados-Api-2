-- CreateTable
CREATE TABLE "Cargos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cargo" TEXT NOT NULL,
    "registro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizacao" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Naipes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "naipe" TEXT NOT NULL,
    "registro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizacao" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cargoId" INTEGER NOT NULL,
    "naidpeId" INTEGER NOT NULL,
    "dtCadastro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dtAtualizacao" DATETIME NOT NULL,
    CONSTRAINT "Usuarios_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "Cargos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Usuarios_naidpeId_fkey" FOREIGN KEY ("naidpeId") REFERENCES "Naipes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Cargos_cargo_key" ON "Cargos"("cargo");

-- CreateIndex
CREATE UNIQUE INDEX "Naipes_naipe_key" ON "Naipes"("naipe");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");
