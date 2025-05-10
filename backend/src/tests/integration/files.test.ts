import { edenTreaty } from '@elysiajs/eden';
import { app } from '../../index';
import prisma from '../../prisma/client';
import { File, ApiResponse, EdenApi } from '../../types/api';

// @ts-ignore
const api = edenTreaty<EdenApi>('http://localhost:3000');

describe('Files API Integration Tests', () => {
    beforeAll(async () => {
        // Clean up database before tests
        await prisma.file.deleteMany();
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    describe('GET /api/files', () => {
        it('should return files with search query', async () => {
            // Create test file
            const testFile = await prisma.file.create({
                data: {
                    name: 'game.exe',
                    folderId: 3
                }
            });

            // @ts-ignore
            const response = await api['/api/v1/files'].get({
                query: { q: 'game' }
            });

            expect(response.status).toBe(200);
            expect(response.data.success).toBe(true);
            expect(response.data.data).toHaveLength(1);
            expect(response.data.data[0].name).toBe('game.exe');

            // Clean up
            await prisma.file.delete({ where: { id: testFile.id } });
        });

        it('should return files by folderId', async () => {
            // Create test file
            const testFile = await prisma.file.create({
                data: {
                    name: 'test.exe',
                    folderId: 3
                }
            });

            // @ts-ignore
            const response = await api['/api/v1/files'].get({
                query: { folderId: '3' }
            });

            expect(response.status).toBe(200);
            expect(response.data.success).toBe(true);
            expect(response.data.data).toHaveLength(1);
            expect(response.data.data[0].folderId).toBe(3);

            // Clean up
            await prisma.file.delete({ where: { id: testFile.id } });
        });
    });
}); 