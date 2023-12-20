import { createApp, h } from "vue";
import "@/styles/base.css";
import App from "@/App.vue";

import { createPinia } from "pinia";
const pinia = createPinia();
import { Quasar } from "quasar";
// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";
import routers from "@/routers";
const app = createApp({
  render: () => h(App),
});

app.use(pinia);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});
app.use(routers);
app.mount("#app");
