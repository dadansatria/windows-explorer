<template>
<div class="w-full h-screen bg-gray-50">
	<div class="flex h-full">
		<!-- Left Panel -->
		<div class="w-1/4 pr-8 h-full border-r border-gray-200 bg-white">
			<FolderTree 
				:folders="foldersTree"
				:selected-id="selectedFolderId"
				@select="selectFolder"
				@toggle="toggleFolder"
			/>
		</div>
		<!-- Right Panel -->
		<div class="w-3/4 h-full">
			<FileList 
				:files="files"
				:foldersTree="foldersTree"
				:folders="folders"
				:current-folder="currentFolder"
				@navigate="selectFolder"
				@search="handleSearch"
			/>
		</div>
	</div>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getFolders, getFiles } from '@/infrastructure/api/folderService'
import FolderTree from '@/components/explorer/FolderTree.vue'
import FileList from '@/components/explorer/FileList.vue'
import type { File, Folder } from '@/core/domain/models'

// State management
const folders = ref<Folder[]>([])
const foldersTree = ref<Folder[]>([])
const files = ref<File[]>([])
const selectedFolderId = ref<number | null>(null)
const currentFolder = ref<Folder | null>(null)

// Load initial data
const loadInitialData = async (): Promise<void> => {
	try {
		// Get root folders (parentId = null)
		const rootFolders = await getFolders(0)
		folders.value = rootFolders
		foldersTree.value = folders.value.map(folder => ({
			...folder,
			isOpen: false,
			children: []
		}))
		if (folders.value.length > 0) {
			await loadFolderContents(folders.value[0])
		}
	} catch (error) {
		console.error('Failed to load initial data:', error)
	}
}

// Load folder contents
const loadFolderContents = async (folder: Folder): Promise<void> => {
	try {
		selectedFolderId.value = folder.id
		currentFolder.value = folder
		files.value = await getFiles(folder.id)
	} catch (error) {
		console.error('Failed to load folder contents:', error)
	}
}

const selectFolder = async (folder: Folder): Promise<void> => {
    try {
        selectedFolderId.value = folder.id
        currentFolder.value = folder
        const childFolders = await getFolders(folder.id)
        files.value = await getFiles(folder.id)
        
        const updateChildren = (tree: Folder[]): Folder[] => {
            return tree.map(node => {
                if (node.id === folder.id) {
                    return {
                        ...node,
                        isOpen: true,
                        children: childFolders
                    }
                } else if (node.children && node.children.length > 0) {
                    return {
                        ...node,
                        children: updateChildren(node.children)
                    }
                }
                return node
            })
        }

        foldersTree.value = updateChildren(foldersTree.value)
        folders.value = childFolders
    } catch (error) {
        console.error('Failed to load folder contents:', error)
    }
}

// Toggle folder open/close state
const toggleFolder = (folderId: number): void => {
	const folder = folders.value.find((f: Folder) => f.id === folderId)
	if (folder) {
		folder.isOpen = !folder.isOpen
	}
}

// Handle search
const handleSearch = async (searchData: { query: string, type: string }): Promise<void> => {
	try {
		const isFileSearch = searchData.type === 'File'
		files.value = isFileSearch ? await getFiles(null, searchData.query) : []
		folders.value = isFileSearch ? [] : await getFolders(null, searchData.query)
	} catch (error) {
		console.error('Search failed:', error)
	}
}

// Lifecycle hook
onMounted(() => {
	loadInitialData()
})
</script>