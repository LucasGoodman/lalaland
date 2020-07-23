<!--菜单 - 菜单组-->
<template>
    <div class="menu-section">
        <slot name="title"></slot>
    </div>
</template>

<script>
export default {
    name: 'MenuSection'
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    // props: [],
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

<style lang="less"
       scoped>
.menu-section {
    box-sizing: border-box;
    border-bottom: 1px solid #f2f2f2;
}
</style>
