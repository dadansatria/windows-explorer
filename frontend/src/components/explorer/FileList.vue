<template>
		<div class="p-4 h-full overflow-y-auto">
			<!-- Search Bar -->
			<div class="max-w-md mb-4">
				<div class="flex items-center space-x-2">
					<InputText 
						v-model="searchQuery"
						type="text"
						placeholder="Search files..."
						class="w-full"
					/>
					<Dropdown 
						v-model="filterType" 
						:options="[{name: 'Folder'}, {name: 'File'}]" 
						optionLabel="name" 
						placeholder="Type" 
						class="w-40"
					/>
					<Button 
						icon="pi pi-search" 
						class="p-button-primary w-1/2" 
						@click="handleSearch"
					>
                        <i class="pi pi-search"></i> &nbsp; Search
                    </Button>
				</div>
			</div>  
			<!-- Breadcrumb Navigation -->
			<Breadcrumb :model="breadcrumbItems" class="mb-3" />
	
			<!-- Loading Indicator -->
			<div v-if="loading" class="flex justify-center items-center py-5">
				<ProgressSpinner/>
			</div>
	
			<!-- Empty State -->
			<div v-else-if="!files.length && !folders.length" class="flex flex-col items-center justify-center py-5">
				<i class="pi pi-folder-open text-5xl text-gray-500"></i>
				<p class="mt-3 text-gray-500">This folder is empty</p>
			</div>
	
			<!-- Files and Folders Grid -->
			<div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
				<!-- Folders -->
				<div
					v-for="folder in props.folders"
					:key="'folder-' + folder.id"
					class="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
					@click="navigateToFolder(folder)"
				>
					<div class="text-2xl mb-2">
						<i class="pi pi-folder text-primary"></i>
					</div>
					<div class="text-sm text-center truncate w-full">{{ folder.name }}</div>
				</div>
	
				<!-- Files -->
				<div
					v-for="file in props.files"
					:key="'file-' + file.id"
					class="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
					@click="handleFileClick(file)"
				>
					<div class="text-2xl mb-2">
						<i :class="getFileIcon(file.name)"></i>
					</div>
					<div class="text-sm text-center truncate w-full">{{ file.name }}</div>
				</div>
			</div>
	
			<!-- File Preview Dialog -->
			<Dialog
				v-model:visible="showFilePreview"
				:style="{ width: '70vw' }"
				:modal="true"
				:dismissable-mask="true"
			>
				<template #header>
                    <h1 class="text-lg font-semibold">{{ selectedFile?.name }}</h1>
				</template>
				<div class="p-4">
					<div v-if="isImage(selectedFile)" class="flex justify-center">
						<img :src="getFilePreviewUrl(selectedFile)" class="max-w-full h-auto rounded-lg" />
					</div>
					<div v-else class="text-center text-gray-500">
						<p>Preview not available</p>
					</div>
				</div>
			</Dialog>
		</div>
	</template>
	
<script setup lang="ts">
	import { ref, computed, watch } from 'vue'
	import { useToast } from 'primevue/usetoast'
	import Breadcrumb from 'primevue/breadcrumb'
	import Dialog from 'primevue/dialog'
	import ProgressSpinner from 'primevue/progressspinner'
    import Dropdown from 'primevue/dropdown'
    import InputText from 'primevue/inputtext'
    import Button from 'primevue/button'
	
	interface File {
		id: number
		name: string
		size?: number
		type?: string
		url?: string
	}
	
	interface Folder {
		id: number
		name: string
		parentId: number | null
	}
	
	const props = defineProps<{
		files: File[]
		folders: Folder[]
		currentFolder: Folder | null,
        foldersTree: Folder[]
	}>()
	
	const emit = defineEmits(['navigate', 'refresh', 'search'])
	
	const toast = useToast()
	const searchQuery = ref('')
	const loading = ref(false)
	const showFilePreview = ref(false)
	const selectedFile = ref<File | null>(null)
    const filterType = ref({ name: 'All' })
	
	const breadcrumbItems = computed(() => {
		const items = []

		const findPath = (tree: Folder[], targetId: number | null, path: any[] = []): any[] => {
			for (const node of tree) {
				if (node.id === targetId) {
					return [...path, { label: node.name, command: () => navigateToFolder(node) }]
				}
				if ((node as any).children && (node as any).children.length > 0) {
					const result = findPath((node as any).children, targetId, [...path, { label: node.name, command: () => navigateToFolder(node) }])
					if (result.length > 0) return result
				}
			}
			return []
		}

		if (props.currentFolder) {
			const path = findPath(props.foldersTree, props.currentFolder.id)
			items.push(...path)
		}
		return items
	})
	
	// Methods
	function navigateToFolder(folder: Folder) {
		emit('navigate', folder)
	}

	function handleSearch() {
		emit('search', {
			query: searchQuery.value,
			type: filterType.value?.name
		})
	}
	
	function getFileIcon(filename: string) {
		const extension = filename.split('.').pop()?.toLowerCase()
		switch (extension) {
			case 'jpg':
			case 'jpeg':
			case 'png':
			case 'gif':
				return 'pi pi-image'
			default:
				return 'pi pi-file'
		}
	}

	
	function handleFileClick(file: File) {
		selectedFile.value = file
		showFilePreview.value = true
	}
	
	function isImage(file: File | null) {
		if (!file) return false
		const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp']
		const extension = file.name.split('.').pop()?.toLowerCase()
		return imageExtensions.includes(extension || '')
	}
	
	function getFilePreviewUrl(file: File | null) {
		if (!file) return ''
		return file.url || `https://cdn-icons-png.flaticon.com/512/13434/13434972.png`
	}
</script>
	
<style scoped lang="scss">
	.file-list-container {
		padding: 1rem;
		height: 100%;
		overflow-y: auto;
	}
	
	.search-container {
		max-width: 400px;
	}
	
	.file-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
		gap: 1rem;
	}
	
	.file-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
		border-radius: 4px;
		cursor: pointer;
		transition: all 0.2s ease;
		background: white;
		border: 1px solid #dee2e6;
		
		&:hover {
			background-color: #f8f9fa;
			transform: translateY(-2px);
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		}
	}
	
	.folder-item {
		border: 1px solid rgba(59, 130, 246, 0.2);
		background-color: rgba(59, 130, 246, 0.05);
		
		&:hover {
			background-color: rgba(59, 130, 246, 0.1);
		}
	}
	
	.file-icon {
		font-size: 2rem;
		margin-bottom: 0.5rem;
		color: #6c757d;
	}
	
	.file-name {
		text-align: center;
		word-break: break-word;
		width: 100%;
		font-size: 0.9rem;
	}
	
	.file-size {
		font-size: 0.8rem;
		color: #6c757d;
		margin-top: 0.25rem;
	}
	
	.empty-state {
		color: #6c757d;
	}
	
	.file-preview-content {
		max-height: 70vh;
		overflow-y: auto;
	}
</style>