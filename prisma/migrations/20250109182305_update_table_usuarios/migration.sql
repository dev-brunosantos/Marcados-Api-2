/*
  Warnings:

  - You are about to drop the column `naidpeId` on the `Usuarios` table. All the data in the column will be lost.
  - Added the required column `naipeId` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuarios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cargoId" INTEGER NOT NULL,
    "naipeId" INTEGER NOT NULL,
    "dtCadastro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dtAtualizacao" DATETIME NOT NULL,
    CONSTRAINT "Usuarios_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "Cargos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Usuarios_naipeId_fkey" FOREIGN KEY ("naipeId") REFERENCES "Naipes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Usuarios" ("cargoId", "dtAtualizacao", "dtCadastro", "email", "id", "nome", "senha", "sobrenome") SELECT "cargoId", "dtAtualizacao", "dtCadastro", "email", "id", "nome", "senha", "sobrenome" FROM "Usuarios";
DROP TABLE "Usuarios";
ALTER TABLE "new_Usuarios" RENAME TO "Usuarios";
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
