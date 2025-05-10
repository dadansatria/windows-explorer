import { File } from "@prisma/client";
import prisma from "../../prisma/client";
import { IFileRepository } from "./IFileRepository";

export class FileRepository implements IFileRepository {
    async findAll(folderId: string | undefined, query: string | undefined): Promise<File[]> {
        return await prisma.file.findMany({
            orderBy: { id: 'desc' },
            where: {
                AND: [
                    { folderId: folderId !== 'undefined' ? Number(folderId) : undefined },
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