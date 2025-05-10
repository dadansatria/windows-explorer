<template>
	<ul class="list-none space-y-1">
		<li v-for="folder in folders" :key="folder.id" class="ml-[-1rem]">
			<div 
				class="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100"
				:class="{ 'bg-gray-300 hover:bg-gray-300': folder.id === selectedId }"
				@click="$emit('select', folder)"
			>
				<i 
					class="mr-2"
					:class="folder.isOpen ? 'pi pi-folder-open' : 'pi pi-folder'"
					@click.stop="$emit('toggle', folder.id)"
				></i>
				<span class="flex-1 truncate">{{ folder.name }}</span>
			</div>
		
			<div v-if="folder.isOpen && folder.children" class="ml-4">
				<FolderTree 
					:folders="folder.children"
					:selected-id="selectedId"
					@select="$emit('select', $event)"
					@toggle="$emit('toggle', $event)"
				/>
			</div>
		</li>
	</ul>
</template>

<script setup lang="ts">
import type { Folder } from '@/core/domain/models'

defineProps<{
    folders: Folder[]
    selectedId: number | null
}>()

const emit = defineEmits(['select', 'toggle'])
</script>