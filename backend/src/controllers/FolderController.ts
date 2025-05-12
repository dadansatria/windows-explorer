import { FolderService } from "@/services/FolderService";
import { FolderRepository } from "@/repositories/FolderRepository";

const folderRepository = new FolderRepository();
const folderService = new FolderService(folderRepository);

/**
 * Get all folders
 */
export async function get(parentId: string, query: string) {
    return await folderService.getFolders(parentId, query);
}