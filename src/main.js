import { createApp } from 'vue';
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import  "/node_modules/primeflex/primeflex.css";
import App from './App.vue';
import router from './router';
import store from './store';
import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Card from "primevue/card";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dropdown from "primevue/dropdown";
import MultiSelect  from "primevue/multiselect";
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import DeferredContent from "primevue/deferredcontent";

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
// app.config.globalProperties.$router = router;
app.use(store); 
app.use(ToastService);
app.component("Dialog", Dialog);
app.component("InputText",InputText);
app.component("Card",Card);
app.component("Button", Button);
app.component("Menubar",Menubar);
app.component("DataTable",DataTable);
app.component("Column",Column);
app.component("Dropdown",Dropdown);
app.component("MultiSelect",MultiSelect);
app.component('Toast', Toast);
app.component('DeferredContent', DeferredContent);

app.mount('#app');

export {app};