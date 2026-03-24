import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './router';
import App from './App.vue';
import './assets/less/app.less';
import './assets/css/tailwind.css';

// Plugins
import 'es6-promise/auto';
import VueLazyLoad from 'vue3-lazyload';
import Notifications from '@kyvg/vue3-notification';

document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('vue-app');
    if (el) {
        const app = createApp(App);
        
        app.use(createPinia());
        app.use(router);
        app.use(VueLazyLoad, {
            loading: '',
            error: ''
        });
        app.use(Notifications);
        
        app.mount('#vue-app');
    }
});
