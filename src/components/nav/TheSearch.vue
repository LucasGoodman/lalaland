<!--搜索框-->
<template>
    <div class="search-wrapper menu-btn">
        <div class="mask">
            <a-icon type="search" />
            搜索音乐
        </div>
        <a-input v-model="keyword"
                 class="search-input"
                 placeholder="搜索音乐"
                 size="small"
                 allow-clear
                 @blur="handleInputBlur">
            <a-icon slot="suffix"
                    type="search" />
        </a-input>
    </div>
</template>
<script>
export default {
    // el() {},
    // components: {},
    // directives: {},
    // filters: {},
    // props: [],
    // propsData: {},
    data() {
        return {
            keyword: ''
        };
    },
    // computed: {},
    // watch: {},
    // mounted() {},
    // created() {},
    // updated() {},
    // activated() {},
    // deactivated() {},
    // beforeDestroy() {},
    // destroyed() {},
    methods: {
        handleInputBlur() {
            console.log('keyword', this.keyword);
        }
    }
    // template: '',
    // render() {},
};
</script>
<style lang="less"
       scoped>
.search-wrapper {
    cursor: text;
    color: #bbbbbb;
    transition: all 0.15s;
    position: relative;
    line-height: 24px;
    vertical-align: middle;

    &:hover {
        color: #aaaaaa;
    }

    .mask {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        background: #ffffff;

        i {
            margin-right: 15px;
        }
    }

    .search-input {
        width: 150px;

        /deep/ .ant-input-suffix {
            color: #bbbbbb;
        }
    }
}
</style>
