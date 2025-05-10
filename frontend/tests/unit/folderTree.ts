import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FolderTree from '../../src/components/explorer/FolderTree.vue'

describe('FolderTree', () => {
	it('renders folder items', () => {
		const wrapper = mount(FolderTree, {
			props: {
				folders: [
					{ id: 1, name: 'Documents', parentId: null, isOpen: false }
				],
			selectedId: null
			}
		})
	
	expect(wrapper.text()).toContain('Documents')
	})
})