/*
  Warnings:

  - You are about to drop the column `content` on the `JournalEntry` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Todo` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `JournalEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entry` to the `JournalEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `JournalEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `todo` to the `Todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JournalEntry" DROP COLUMN "content",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "entry" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "content",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "todo" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
