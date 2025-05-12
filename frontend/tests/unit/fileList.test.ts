import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import FileListView from '@/components/explorer/FileList.vue'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'


const mockFolders = [
	{ id: 1, name: 'Documents', parentId: 0 },
	{ id: 2, name: 'Photos', parentId: 1 }
]

const mockFiles = [
	{ id: 1, name: 'file1.txt', folderId: 1 },
	{ id: 2, name: 'image1.jpg', folderId: 1, url: 'https://example.com/image1.jpg' }
]

const mockTree = [
	{
		id: 1,
		name: 'Documents',
		parentId: null,
		children: [
			{
				id: 2,
				name: 'Photos',
				parentId: 1,
				children: []
			}
		]
	}
]

describe('FileListView.vue', () => {
	let wrapper: ReturnType<typeof mount>
	
	beforeEach(() => {
		wrapper = mount(FileListView, {
			props: {
				files: mockFiles,
				folders: mockFolders,
				currentFolder: mockFolders[0],
				foldersTree: mockTree
			},
			global: {
				components: {
					InputText,
					Dropdown
				},
				config: {
					globalProperties: {
						$primevue: {
							config: {},
						}
					}
				}
			}
		})
	})
	
	it('renders folders and files correctly', () => {
		expect(wrapper.text()).toContain('Documents')
		expect(wrapper.text()).toContain('file1.txt')
	})
	
	it('emits navigate event when folder is clicked', async () => {
		const folderCard = wrapper.findAll('[class*="cursor-pointer"]')[0]
		await folderCard.trigger('click')
		expect(wrapper.emitted('navigate')).toBeTruthy()
		expect(wrapper.emitted('navigate')![0][0]).toEqual(mockFolders[0])
	})
	
	it('emits search event when search button is clicked', async () => {
		await wrapper.find('input[type="text"]').setValue('file1')
		const searchButton = wrapper.find('button')
		await searchButton.trigger('click')
		
		expect(wrapper.emitted('search')).toBeTruthy()
		expect(wrapper.emitted('search')![0][0]).toEqual({
			query: 'file1',
			type: 'All'
		})
	})
	
	it('shows file preview when a file is clicked', async () => {
		const fileCard = wrapper.findAll('[class*="cursor-pointer"]')[1]
		await fileCard.trigger('click')
		expect(wrapper.html()).toContain(mockFiles[1].name)
	})
	
	it('shows empty state when no files and folders', async () => {
		await wrapper.setProps({ files: [], folders: [] })
		expect(wrapper.text()).toContain('This folder is empty')
	})
})
