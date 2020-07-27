<!--菜单 - 菜单组-->
<template>
    <div class="menu-section"
         :class="{ fold: menuFold }">
        <div v-if="menuData.title && !menuFold"
             class="section-title">
            {{menuData.title}}
        </div>
        <div class="section-content">
            <div v-for="(menu,index) in menuData.menus"
                 :key="index"
                 :title="menu.name"
                 class="menu-item menu-btn"
                 @click="handleMenuClick(menu)">
                <div class="icon"
                     :title="menu.name">
                    <a-icon :type="menu.type" />
                </div>
                <div v-if="!menuFold"
                     class="name">
                    {{menu.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
    name: 'MenuSection',
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    props: {
        menuData: {
            type: Object,
            default: () => ({
                title: '',
                menus: []
            })
        },
        menuFold: {
            type: Boolean,
            default: false
        }
    },
    // data() {},
    // computed: {},
    // watch: {},
    // mounted() {},
    // created() {},
    // activated() {},
    // beforeDestroy() {},
    // destroyed() {},
    methods: {
        handleMenuClick(menuData) {
            let { name } = menuData;
            if (name === '菜单列表') {
                this.$emit('update:menuFold', !this.menuFold);
            }
        }
    }
};
</script>

<style lang="less"
       scoped>
@import "../../assets/css/buttons";

.menu-section {
    width: 210px;
    box-sizing: border-box;
    border-bottom: 1px solid #f2f2f2;
    padding: 20px;
    text-align: left;
    transition: all 0.2s;

    &:last-child {
        border: none;
    }

    &.fold {
        padding: 10px;
    }

    &:first-child.fold {
        padding: 20px 10px;
    }

    .section-title {
        padding-left: 5px;
        font-size: 12px;
        color: #bbbbbb;
        margin-bottom: 15px;
    }

    .section-content {
        .menu-item {
            cursor: pointer;
            line-height: 30px;
            padding-right: 20px;
        }

        .icon, .name {
            display: inline-block;
        }

        .icon {
            text-align: center;
            font-size: 16px;
            margin-right: 10px;
            width: 30px;
        }
    }
}
</style>
