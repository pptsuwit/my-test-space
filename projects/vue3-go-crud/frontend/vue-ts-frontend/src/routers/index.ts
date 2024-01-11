import { createRouter, createWebHistory } from "vue-router";
import { routes, authRoutes } from "./routes";
const routerLink = [
  ...routes,
  ...authRoutes,
  ...[
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../pages/404.vue"),
      meta: {
        layout: "Default",
      },
    },
  ],
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerLink,
});
export default router;
