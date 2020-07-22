module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['eslint-config-alloy/vue'],
    globals: {
        echarts: false,
        _: false
    },
    rules: {
        'vue/html-closing-bracket-newline': 'off',
        // 'function-call-argument-newline': 'never',
        'object-curly-spacing': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    overrides: [
        {
            files: ['*.json'],
            rules: {
                quotes: [2, 'double']
            }
        }
    ]
};
