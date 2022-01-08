import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/components/layout/index'
import ContentView from '@/pages/ContentView/index'
import Details from '@/pages/Details/index'

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/contentView' },
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/contentView",
        name: "contentView",
        component: ContentView,
      },
      {
        path: "/viewList/:id",
        name: "viewList",
        component: Details,
      },
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
