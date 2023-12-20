import NestedChild from "@/components/base/NestedChild.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Customer from "@/pages/customer/Index.vue";
import CustomerForm from "@/pages/customer/Form.vue";
import User from "@/pages/user/Index.vue";
import Login from "@/pages/authentication/Login.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Dashboard,
    meta: {
      layout: "DefaultLayout",
    },
    iconName: "home",
  },
  {
    path: "/customer",
    name: "customer",
    component: NestedChild,
    children: [
      { path: "", name: "customer.default", component: Customer },
      { path: "page/:page", name: "customer.page", component: Customer },
      { path: "page/:page/pageSize/:pageSize", name: "customer.pageSize", component: Customer },

      { path: "add", name: "customer.create", component: CustomerForm },
      { path: "edit/:id", name: "customer.edit", component: CustomerForm },
    ],
    meta: {
      layout: "DefaultLayout",
    },
    iconName: "supervisor_account",
    props: true,
  },

  {
    path: "/user",
    name: "user",
    component: NestedChild,
    children: [
      { path: "", name: "User.default", component: User },
      { path: "page/:page", name: "User.page", component: User },
      { path: "page/:page/pageSize/:pageSize", name: "User.pageSize", component: User },

      { path: "add", name: "User.create", component: User },
      { path: "edit/:id", name: "User.edit", component: User },
    ],
    meta: {
      layout: "DefaultLayout",
    },
    iconName: "account_circle",
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/pages/About.vue"),
    meta: {
      layout: "DefaultLayout",
    },
    iconName: "description",
  },
];

export const authRoutes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      layout: "AuthLayout",
    },
  },
];
