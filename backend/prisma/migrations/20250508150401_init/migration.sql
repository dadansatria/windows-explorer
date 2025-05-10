/*
  Warnings:

  - You are about to drop the column `parentId` on the `Folder` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Folder` DROP COLUMN `parentId`,
    ADD COLUMN `parent_id` INTEGER NULL;
