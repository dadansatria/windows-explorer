<template>
    <div class="h-screen w-screen overflow-hidden flex flex-col bg-gray-50 dark:bg-gray-900">
      <Toast />
      <ExplorerView />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useToast } from 'primevue/usetoast'
import ExplorerView from '@/components/explorer/ExplorerView.vue'
import Toast from 'primevue/toast'

const toast = useToast()

// Penangan error global
onMounted(() => {
  window.addEventListener('unhandledrejection', (event) => {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: event.reason.message,
      life: 5000
    })
    console.error('Unhandled rejection:', event.reason)
  })
})
</script>