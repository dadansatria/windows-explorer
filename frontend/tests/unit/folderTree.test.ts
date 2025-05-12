// tests/unit/FolderTree.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import FolderTree from '@/components/explorer/FolderTree.vue'

describe('FolderTree.vue', () => {
	const mockFolders = [
		{
			id: 1,
			name: 'Folder 1',
			isOpen: false,
			children: [
				{ id: 2, name: 'Subfolder 1', isOpen: false, children: [] },
				{ id: 3, name: 'Subfolder 2', isOpen: false, children: [] }
			]
		}
	]
	const selectedId = 1

	it('renders the folder list correctly', async () => {
		const wrapper = mount(FolderTree, {
			props: {
				folders: mockFolders,
				selectedId
			}
		})

		// Check that the first folder is rendered
		expect(wrapper.find('.flex').text()).toContain('Folder 1')
		expect(wrapper.findAll('.flex').length).toBe(1)

		// Check that nested folders are not shown initially (isOpen is false)
		expect(wrapper.find('.ml-4').exists()).toBe(false)
	})

	it('emits select event when folder is clicked', async () => {
		const wrapper = mount(FolderTree, {
			props: {
				folders: mockFolders,
				selectedId
			}
		})

		// Simulate folder click
		await wrapper.find('.flex').trigger('click')

		// Check if select event was emitted with correct folder
		expect(wrapper.emitted('select')?.[0][0]).toEqual(mockFolders[0])
	})

	it('emits toggle event when folder icon is clicked', async () => {
		const wrapper = mount(FolderTree, {
			props: {
				folders: mockFolders,
				selectedId
			}
		})

		// Simulate folder icon click
		await wrapper.find('.pi-folder').trigger('click')

		// Check if toggle event was emitted with the folder id
		expect(wrapper.emitted('toggle')?.[0][0]).toBe(mockFolders[0].id)
	})
})
