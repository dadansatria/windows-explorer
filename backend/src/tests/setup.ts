import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

beforeAll(async () => {
    // Setup global test environment
});

afterAll(async () => {
    await prisma.$disconnect();
}); 