import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import { createPinia } from 'pinia'

// PrimeVue Theme
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

// Tailwind CSS
import '@/assets/styles/tailwind.css'

const app = createApp(App)

// Plugins
app.use(PrimeVue)
app.use(ToastService)
app.use(createPinia())

// Mount
app.mount('#app')