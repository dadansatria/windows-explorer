import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()
export default db  // This is the key change