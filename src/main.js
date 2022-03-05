import { createApp } from 'vue'
import "primevue/resources/themes/saga-blue/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css";
import  "/node_modules/primeflex/primeflex.css";
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Card from "primevue/card";

const app = createApp(App)
app.use(PrimeVue);
app.use(store)
app.use(router)
app.component("Dialog", Dialog);
app.component("InputText",InputText);
app.component("Card",Card);

app.mount('#app')
