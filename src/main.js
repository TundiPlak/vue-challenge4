import { createApp } from 'vue'
import App from './App.vue'
import store from  './store/index.js';
import router from './router.js'

import BaseDesign from './components/ui/BaseDesign.vue'

app.use(store);
const app = createApp(App);

app.component('base-design', BaseDesign)
app.use(store);
app.use(router);
app.mount('#app')
