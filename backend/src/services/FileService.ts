import { File } from "@prisma/client";
import { IFileRepository } from "../repositories/IFileRepository";

export class FileService {
    constructor(private readonly fileRepository: IFileRepository) {}

    async getFiles(folderId: string, query: string) {
        try {
            const files = await this.fileRepository.findAll(folderId, query);
            return {
                success: true,
                message: "Successfully retrieved files data!",
                data: files,
            };
        } catch (e: unknown) {
            console.error(`Error while fetching files: ${e}`);
            return {
                success: false,
                message: "Failed to retrieve files data",
                data: null
            };
        }
    }
} 