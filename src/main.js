import { createApp } from 'vue'
import App from './App.vue'

import router from './router.js'

import BaseDesign from './components/ui/BaseDesign.vue'

import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            counter: 0
        };
    }
});

app.use(store);
const app = createApp(App);

app.component('base-design', BaseDesign)
app.use(router);
app.mount('#app')
