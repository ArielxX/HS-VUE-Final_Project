import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/HomePage.vue");
const AnimesPage = () => import("../views/AnimesPage.vue");
// const About = () => import("../views/AboutPage.vue");
// const NotFound = () => import("../views/NotFound.vue");

console.log(Home);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/animes",
    name: "animes",
    component: AnimesPage,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: About,
  // },
  // { path: "/:pathMatch(.*)*", name: "notFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
