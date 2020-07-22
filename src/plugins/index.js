import ant_design from './ant_design';

const plugins = [
    ant_design
];

export default {
    install(Vue) {
        plugins.forEach(plugin => {
            Vue.use(plugin);
        });
    }
};
