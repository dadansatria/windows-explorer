import axios from 'axios'
import type { Folder, File } from '../../core/domain/models'

const API_BASE = import.meta.env.VITE_API_BASE_URL

export const getFolders = async (parentId: number | null, query?: string): Promise<Folder[]> => {
	const params = new URLSearchParams()
	if (parentId !== null) params.append('parentId', parentId.toString())
	if (query) params.append('q', query)
	
	const response = await axios.get(`${API_BASE}/folders`, { params })
	return response.data.data.map((f: Folder) => ({ ...f, isOpen: false }))
}

export const getFiles = async (folderId: number | null, query?: string): Promise<File[]> => {
	const params = new URLSearchParams()
	if (folderId !== null) params.append('folderId', folderId.toString())
	if (query) params.append('q', query)
	
	const response = await axios.get(`${API_BASE}/files`, { params })
	return response.data.data
}