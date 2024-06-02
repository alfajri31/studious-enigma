import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/routes/index.js";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faUserSecret} from "@fortawesome/free-solid-svg-icons";
library.add(faUserSecret)
createApp(App)
    .use(router)
    .component('font-awesome',FontAwesomeIcon)
    .mount('#app')
