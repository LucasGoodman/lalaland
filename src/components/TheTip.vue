<!--提示组件-->
<template>
    <a-tooltip :mouse-enter-delay="0.3">
        <template slot="title">
            {{tip}}
        </template>
        <slot></slot>
    </a-tooltip>
</template>

<script>
export default {
    name: 'TheTip',
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    props: {
        tip: {
            type: String,
            default: ''
        }
    }
    // data() {},
    // computed: {},
    // watch: {},
    // mounted() {},
    // created() {},
    // activated() {},
    // beforeDestroy() {},
    // destroyed() {},
    // methods: {},
};
</script>

<!--<style lang="less"
       scoped>

</style>-->
