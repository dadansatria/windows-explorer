/*
  Warnings:

  - You are about to drop the column `parent_id` on the `folders` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `folders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `folders` DROP COLUMN `parent_id`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `parentId` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `name` VARCHAR(255) NOT NULL;
