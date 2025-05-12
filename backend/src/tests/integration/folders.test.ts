import { edenTreaty } from '@elysiajs/eden';
import prisma from '@/prisma/client';
import { EdenApi } from '@/types/api';

// @ts-ignore
const api = edenTreaty<EdenApi>('http://localhost:3000');

describe('Folders API Integration Tests', () => {
    beforeAll(async () => {
        // Clean up database before tests
        await prisma.folder.deleteMany();
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    describe('GET /api/folders', () => {
        it('should return all folders', async () => {
            // Create test folders
            const testFolders = await Promise.all([
                prisma.folder.create({
                    data: {
                        name: 'Test Folder 1',
                        parentId: 1
                    }
                }),
                prisma.folder.create({
                    data: {
                        name: 'Test Folder 2',
                        parentId: 1
                    }
                })
            ]);

            // @ts-ignore
            const response = await api['/api/v1/folders'].get();

            expect(response.status).toBe(200);
            expect(response.data.success).toBe(true);
            expect(response.data.data.length).toBeGreaterThanOrEqual(2);

            // Clean up
            await Promise.all(
                testFolders.map(folder => 
                    prisma.folder.delete({ where: { id: folder.id } })
                )
            );
        });

        it('should return folders by parentId', async () => {
            // Create test folder
            const testFolder = await prisma.folder.create({
                data: {
                    name: 'Child Folder',
                    parentId: 1
                }
            });

            // @ts-ignore
            const response = await api['/api/v1/folders'].get({
                query: { parentId: '1' }
            });

            expect(response.status).toBe(200);
            expect(response.data.success).toBe(true);
            expect(response.data.data.some((folder: any) => folder.id === testFolder.id)).toBe(true);

            // Clean up
            await prisma.folder.delete({ where: { id: testFolder.id } });
        });
    });
}); 