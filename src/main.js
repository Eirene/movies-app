import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import store from "./store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: App,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
