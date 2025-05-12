import { IFolderRepository } from "@/repositories/IFolderRepository";

export class FolderService {
    constructor(private readonly folderRepository: IFolderRepository) {}

    async getFolders(parentId: string, query: string) {
        try {
            const folders = await this.folderRepository.findAll(parentId, query);
            return {
                success: true,
                message: "Successfully retrieved folder data!",
                data: folders,
            };
        } catch (e: unknown) {
            console.error(`Error while fetching folders: ${e}`);
            return {
                success: false,
                message: "Failed to retrieve folder data",
                data: null
            };
        }
    }
} 