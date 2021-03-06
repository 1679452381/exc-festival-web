import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '../public/css/global.css'
import './plugins/element'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  //全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount("#app");
