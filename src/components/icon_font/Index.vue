<!--自定义图标-->
<template>
    <icon-font :type="`icon-${type}`" />
</template>
<script>
import { Icon } from 'ant-design-vue';

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: require('./symbol.js')
});
export default {
    components: {
        IconFont
    },
    props: {
        type: {
            type: String,
            default: ''
        }
    }
};
</script>
<!--
<style lang="less"
       scoped>
</style>
-->
