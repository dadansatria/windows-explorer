/*
  Warnings:

  - You are about to alter the column `parentId` on the `folders` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `folders` MODIFY `parentId` INTEGER NULL;
