/*
  Warnings:

  - You are about to drop the `folders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `folders`;

-- CreateTable
CREATE TABLE `Folder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `parentId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
