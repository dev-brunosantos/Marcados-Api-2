/*
  Warnings:

  - Added the required column `ministro` to the `Escalas` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Escalas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ministro" TEXT NOT NULL,
    "sopranos" TEXT NOT NULL,
    "contraltos" TEXT NOT NULL,
    "tenores" TEXT NOT NULL,
    "tecladistas" TEXT NOT NULL,
    "violonista" TEXT NOT NULL,
    "guitarrista" TEXT NOT NULL,
    "baixista" TEXT NOT NULL,
    "baterista" TEXT NOT NULL,
    "culto" DATETIME NOT NULL,
    "dtAtualizacao" DATETIME NOT NULL
);
INSERT INTO "new_Escalas" ("baixista", "baterista", "contraltos", "culto", "dtAtualizacao", "guitarrista", "id", "sopranos", "tecladistas", "tenores", "violonista") SELECT "baixista", "baterista", "contraltos", "culto", "dtAtualizacao", "guitarrista", "id", "sopranos", "tecladistas", "tenores", "violonista" FROM "Escalas";
DROP TABLE "Escalas";
ALTER TABLE "new_Escalas" RENAME TO "Escalas";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
