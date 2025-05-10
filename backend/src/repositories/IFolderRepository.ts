import { Folder } from "@prisma/client";

export interface IFolderRepository {
    findAll(parentId: string | undefined, query: string | undefined): Promise<Folder[]>;
} 