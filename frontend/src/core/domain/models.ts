export interface Folder {
	id: number
	name: string
	parentId: number | null
	isOpen?: boolean
	children?: Folder[]
}
export interface File {
	id: number
	name: string
	folderId: number
	size?: number
	type?: string
}