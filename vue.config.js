/**
 * Created by Lucas on 2020/7/22.
 */
const WorkerPlugin = require('worker-plugin');
module.exports = {
    configureWebpack: {
        plugins: [new WorkerPlugin()]
    },
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {}
        }
    }
};
