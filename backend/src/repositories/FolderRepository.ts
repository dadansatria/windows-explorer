import { Folder } from "@prisma/client";
import prisma from "@/prisma/client";
import { IFolderRepository } from "./IFolderRepository";

export class FolderRepository implements IFolderRepository {
    async findAll(parentId: string | undefined, query: string | undefined): Promise<Folder[]> {
        return await prisma.folder.findMany({
            orderBy: { id: 'desc' },
            where: {
                AND: [
                    { parentId: parentId !== 'undefined' ? Number(parentId) : undefined },
                    query !== 'undefined' ? {
                        name: {
                            contains: query
                        }
                    } : {}
                ]
            }
        });
    }
} 