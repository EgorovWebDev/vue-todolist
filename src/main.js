import { createApp } from 'vue'
import App from '@/App.vue'
import components from '@/components/UI/'
import apiPlugin from '@/plugins/apiPlugin';



// styles 
import '@/styles/main.scss';


// import router from './router'
// import store from './store'
// createApp(App).use(store).use(router).mount('#app')

const app = createApp(App);

app.use(apiPlugin)

components.forEach(component => {{
    app.component(component.name, component)
}});

app.mount('#app')
 