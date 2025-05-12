import { FileService } from '@/services/FileService';
import { IFileRepository } from '@/repositories/IFileRepository';
import { File } from '@prisma/client';

describe('FileService', () => {
    let fileService: FileService;
    let mockFileRepository: jest.Mocked<IFileRepository>;

    beforeEach(() => {
        mockFileRepository = {
            findAll: jest.fn(),
        };
        fileService = new FileService(mockFileRepository);
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('getFiles', () => {
        it('should return files successfully', async () => {
            const mockFiles: File[] = [{
                id: 1,
                name: 'test.exe',
                folderId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }];

            mockFileRepository.findAll.mockResolvedValue(mockFiles);

            const result = await fileService.getFiles('1', 'test');

            expect(result.success).toBe(true);
            expect(result.data).toEqual(mockFiles);
            expect(mockFileRepository.findAll).toHaveBeenCalledWith('1', 'test');
        });

        it('should handle errors when getting files', async () => {
            mockFileRepository.findAll.mockRejectedValue(new Error('Database error'));

            const result = await fileService.getFiles('1', 'test');

            expect(result.success).toBe(false);
            expect(result.data).toBeNull();
        });
    });
}); 