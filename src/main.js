import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");



// import autocomplete from './components/autocomplete.vue'
// export default autocomplete