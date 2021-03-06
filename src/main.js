import Vue from 'vue';
import App from './App.vue';
import plugins from './plugins';
import router from './router';
import store from './store';
import './assets/css/reset.css';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;
Vue.use(plugins);

/**
 *  挂载electron-store存储实例
 *  Homepage：https://github.com/sindresorhus/electron-store
 * */
const Store = require('electron-store');
Vue.prototype.$electronStore = new Store();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
