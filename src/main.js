import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'

import BaseButton from './components/ui/BaseButton.vue'
import BaseCard from './components/ui/BaseCard.vue'

const app = createApp(App)
app.use(store)
app.use(router)

app.component('base-button', BaseButton)
app.component('base-card', BaseCard)

app.mount('#app')
