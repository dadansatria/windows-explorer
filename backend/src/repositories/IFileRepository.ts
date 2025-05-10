import { File } from "@prisma/client";

export interface IFileRepository {
    findAll(folderId: string | undefined, query: string | undefined): Promise<File[]>;
} 