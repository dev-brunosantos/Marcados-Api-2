/*
  Warnings:

  - You are about to drop the column `baixo` on the `Escalas` table. All the data in the column will be lost.
  - You are about to drop the column `bateria` on the `Escalas` table. All the data in the column will be lost.
  - You are about to drop the column `guitarra` on the `Escalas` table. All the data in the column will be lost.
  - You are about to drop the column `violao` on the `Escalas` table. All the data in the column will be lost.
  - Added the required column `baixista` to the `Escalas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baterista` to the `Escalas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guitarrista` to the `Escalas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `violonista` to the `Escalas` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Escalas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
INSERT INTO "new_Escalas" ("contraltos", "culto", "dtAtualizacao", "id", "sopranos", "tecladistas", "tenores") SELECT "contraltos", "culto", "dtAtualizacao", "id", "sopranos", "tecladistas", "tenores" FROM "Escalas";
DROP TABLE "Escalas";
ALTER TABLE "new_Escalas" RENAME TO "Escalas";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
