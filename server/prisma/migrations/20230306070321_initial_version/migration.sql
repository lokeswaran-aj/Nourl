/*
  Warnings:

  - A unique constraint covering the columns `[count]` on the table `Url` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `count` to the `Url` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Url" ADD COLUMN     "count" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Url_count_key" ON "Url"("count");
