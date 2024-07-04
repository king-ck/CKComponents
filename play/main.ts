import { createApp } from "vue";
import App from "./app.vue";
import ckingui from "@ckingui/el-components";

const app = createApp(App);
app.use(ckingui);
app.mount("#app");
