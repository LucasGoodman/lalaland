import Vue from 'vue';
import App from './App.vue';
import plugins from './plugins';
import router from './router';
import './assets/css/reset.css';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;
Vue.use(plugins);
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
