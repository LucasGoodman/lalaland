/**
 * Created by Lucas on 2020/7/22.
 */
const WorkerPlugin = require('worker-plugin');
module.exports = {
    runtimeCompiler: true,
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
