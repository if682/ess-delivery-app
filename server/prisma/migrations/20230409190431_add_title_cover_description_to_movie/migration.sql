/*
  Warnings:

  - Added the required column `cover` to the `movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" ADD COLUMN     "cover" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
