import db from '../../src/db'

async function seed() {
  // Clear existing data
  await db.folder.deleteMany()

  // Seed new data
  await db.folder.createMany({
    data: [
      { id: 1, name: 'Root', parentId: 0 },
      { id: 2, name: 'Dokumen Kerja', parentId: 1 },
      { id: 3, name: 'Foto Pribadi', parentId: 1 },
      { id: 4, name: 'Musik', parentId: 1 },
      { id: 5, name: 'Video', parentId: 1 },
      { id: 6, name: 'Laporan Bulanan', parentId: 2 },
      { id: 7, name: 'Presentasi', parentId: 2 },
      { id: 8, name: 'Liburan 2023', parentId: 3 },
      { id: 9, name: 'Keluarga', parentId: 3 },
      { id: 10, name: 'Pop Indonesia', parentId: 4 },
      { id: 11, name: 'Klasik', parentId: 4 },
      { id: 12, name: 'Film Pendek', parentId: 5 },
      { id: 13, name: 'Video Tutorial', parentId: 5 }
    ]
  })
}

seed()
  .catch((e) => {
    console.error('Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })