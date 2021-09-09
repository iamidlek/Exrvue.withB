import { createApp } from 'vue'
import App from './App'
import '~/scss/style.scss'
import router from './routes/route.js'
import store from './store'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
