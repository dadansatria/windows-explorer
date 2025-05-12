// tests/components/ExplorerView.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import ExplorerView from '@/components/explorer/ExplorerView.vue'

// Mock child components
vi.mock('@/components/explorer/FolderTree.vue', () => ({
	default: {
		name: 'FolderTree',
		props: ['folders', 'selectedId'],
		emits: ['select', 'toggle'],
		template: '<div class="folder-tree-mock"></div>'
	}
}))
vi.mock('@/components/explorer/FileList.vue', () => ({
	default: {
		name: 'FileList',
		props: ['files', 'foldersTree', 'folders', 'currentFolder'],
		emits: ['navigate', 'search'],
		template: '<div class="file-list-mock"></div>'
	}
}))

// Mock API
vi.mock('@/infrastructure/api/folderService', () => ({
	getFolders: vi.fn(),
	getFiles: vi.fn()
}))

import { getFolders, getFiles } from '@/infrastructure/api/folderService'

describe('ExplorerView.vue', () => {
	const mockFolders = [
		{ id: 1, name: 'Root', isOpen: false, children: [] }
	]
	const mockFiles = [
		{ id: 101, name: 'File A', folderId: 1 }
	]

	beforeEach(() => {
		vi.clearAllMocks()
		;(getFolders as any).mockResolvedValue(mockFolders)
		;(getFiles as any).mockResolvedValue(mockFiles)
	})

	it('renders component and loads initial data', async () => {
		const wrapper = mount(ExplorerView)
		await flushPromises()

		expect(getFolders).toHaveBeenCalledWith(0)
		expect(getFiles).toHaveBeenCalledWith(1)
		expect(wrapper.find('.folder-tree-mock').exists()).toBe(true)
		expect(wrapper.find('.file-list-mock').exists()).toBe(true)
	})

	it('handles folder selection correctly', async () => {
		const wrapper = mount(ExplorerView)
		await flushPromises()

		// Simulasi trigger event @select pada FolderTree
		const folder = mockFolders[0]
		await wrapper.findComponent({ name: 'FolderTree' }).vm.$emit('select', folder)
		await flushPromises()

		expect(getFolders).toHaveBeenCalledWith(folder.id)
		expect(getFiles).toHaveBeenCalledWith(folder.id)
	})

	it('handles search event from FileList', async () => {
		const wrapper = mount(ExplorerView)
		await flushPromises()

		const searchQuery = { query: 'file', type: 'File' }

		await wrapper.findComponent({ name: 'FileList' }).vm.$emit('search', searchQuery)
		await flushPromises()

		expect(getFiles).toHaveBeenCalledWith(null, 'file')
	})
})
