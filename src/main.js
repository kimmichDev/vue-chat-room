import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "../src/css/style.scss";
import "./firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

let app;
onAuthStateChanged(getAuth(), () => {
    if (!app) {
        app = createApp(App).use(router).mount('#app')
    }
})



