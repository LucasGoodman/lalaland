/**
 * Created by Lucas on 2020/7/22.
 */
import { DatePicker, Button, Icon, Tooltip, Slider } from 'ant-design-vue';

export default {
    install(Vue) {
        Vue.use(DatePicker);
        Vue.use(Button);
        Vue.use(Icon);
        Vue.use(Tooltip);
        Vue.use(Slider);
    }
};
