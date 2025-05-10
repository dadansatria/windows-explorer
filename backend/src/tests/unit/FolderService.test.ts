import { FolderService } from '../../services/FolderService';
import { IFolderRepository } from '../../repositories/IFolderRepository';
import { Folder } from '@prisma/client';

describe('FolderService', () => {
    let folderService: FolderService;
    let mockFolderRepository: jest.Mocked<IFolderRepository>;

    beforeEach(() => {
        mockFolderRepository = {
            findAll: jest.fn(),
        };
        folderService = new FolderService(mockFolderRepository);
        // Mock console.error untuk menekan output error
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('getFolders', () => {
        it('should return folders successfully', async () => {
            const mockFolders: Folder[] = [{
                id: 1,
                name: 'Test Folder',
                parentId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }];

            mockFolderRepository.findAll.mockResolvedValue(mockFolders);

            const result = await folderService.getFolders('1', 'test');

            expect(result.success).toBe(true);
            expect(result.data).toEqual(mockFolders);
            expect(mockFolderRepository.findAll).toHaveBeenCalledWith('1', 'test');
        });

        it('should handle errors when getting folders', async () => {
            mockFolderRepository.findAll.mockRejectedValue(new Error('Database error'));

            const result = await folderService.getFolders('1', 'test');

            expect(result.success).toBe(false);
            expect(result.data).toBeNull();
        });
    });
}); 