import db from '../../src/db'

async function seed() {
  // Clear existing data
  await db.file.deleteMany()

  // Seed new data
  await db.file.createMany({
    data: [
      // File di folder Dokumen Kerja (id: 2)
      { name: 'Laporan Keuangan.xlsx', folderId: 2 },
      { name: 'Presentasi Client.pptx', folderId: 2 },
      { name: 'Draft Kontrak.doc', folderId: 2 },
      
      // File di folder Foto Pribadi (id: 3)
      { name: 'Foto Keluarga.jpg', folderId: 3 },
      { name: 'Selfie Liburan.png', folderId: 3 },
      { name: 'Foto Pernikahan.jpg', folderId: 3 },
      
      // File di folder Musik (id: 4)
      { name: 'Lagu Pop.mp3', folderId: 4 },
      { name: 'Musik Klasik.wav', folderId: 4 },
      { name: 'Lagu Daerah.ogg', folderId: 4 },
      
      // File di folder Video (id: 5)
      { name: 'Video Tutorial.mp4', folderId: 5 },
      { name: 'Film Pendek.mov', folderId: 5 },
      { name: 'Video Klip.avi', folderId: 5 },
      
      // File di subfolder Laporan Bulanan (id: 6)
      { name: 'Laporan Januari.pdf', folderId: 6 },
      { name: 'Laporan Februari.pdf', folderId: 6 },
      
      // File di subfolder Liburan 2023 (id: 8)
      { name: 'Foto Pantai.jpg', folderId: 8 },
      { name: 'Video Konser.mp4', folderId: 8 }
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