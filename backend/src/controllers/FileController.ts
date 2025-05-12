import { FileService } from "@/services/FileService";
import { FileRepository } from "@/repositories/FileRepository";

const fileRepository = new FileRepository();
const fileService = new FileService(fileRepository);

/**
 * Get all files
 */
export async function get(folderId: string, query: string) {
    return await fileService.getFiles(folderId, query);
}