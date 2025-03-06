import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'


import 'quasar/src/css/index.sass'

import App from '@/App.vue'
import { createPinia } from 'pinia'
import router from '@/routes/index.ts'

createApp(App).use(Quasar).use(router).use(createPinia()).mount('#app')
