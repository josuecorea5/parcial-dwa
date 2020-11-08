import Vue from "vue";
import Router from "vue-router";
import PxDetails from "@/views/PxDetails";
import PxHeader from "@/components/PxHeader";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "px-header",
      component: PxHeader,
    },
    {
      path: "/px-details",
      name: "px-details",
      component: PxDetails,
    },
  ],
});
