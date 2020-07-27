<!--左侧菜单-->
<template>
    <div class="menu-wrapper"
         :class="{ fold: menuFold }">
        <template v-for="(menuData,key) in menuList">
            <menu-section :key="key"
                          :menu-fold.sync="menuFold"
                          :menu-data="menuData"></menu-section>
        </template>
    </div>
</template>

<script>
import MenuSection from './MenuSection';

export default {
    name: 'LeftMenu',
    components: {
        MenuSection
    },
    // directives: {},
    // filters: {},
    // model: {},
    // props: [],
    data() {
        return {
            // 菜单折叠
            menuFold: false
        };
    },
    computed: {
        menuList() {
            return {
                summary: {
                    title: '',
                    menus: [
                        {
                            name: '菜单列表',
                            type: 'menu'
                        }
                    ]
                },
                online: {
                    title: '在线音乐',
                    menus: [
                        {
                            name: '搜索',
                            type: 'search'
                        }
                    ]
                },
                mine: {
                    title: '我的音乐',
                    menus: [
                        {
                            name: '我喜欢',
                            type: 'heart'
                        }
                    ]
                },
                other: {
                    title: '其他',
                    menus: [
                        {
                            name: '设置',
                            type: 'setting'
                        }
                    ]
                }
            };
        }
    }
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
.menu-wrapper {
    width: 210px;
    overflow: hidden;
    transition: all 0.2s;

    &.fold {
        width: 50px;
    }
}
</style>
