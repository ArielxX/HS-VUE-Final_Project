import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/HomePage.vue");
const AnimesPage = () => import("../views/AnimesPage.vue");
const AnimeInfoPage = () => import("../views/AnimeInfoPage.vue");

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
  {
    path: "/animes/:id",
    name: "animePage",
    props: true,
    component: AnimeInfoPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
