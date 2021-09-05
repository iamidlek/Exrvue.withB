import { createApp } from 'vue'
import App from './App'
import '~/scss/style.scss'
import router from './routes/route.js'

createApp(App)
  .use(router)
  .mount('#app')
