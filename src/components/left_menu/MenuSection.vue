<!--菜单 - 菜单组-->
<template>
    <div class="menu-section"
         :class="{ fold: menuFold }">
        <div v-if="menuData.title"
             class="section-title">
            {{menuData.title}}
        </div>
        <div class="section-content">
            <div v-for="(menu,index) in menuData.menus"
                 :key="index"
                 class="menu-item menu-btn"
                 @click="handleMenuClick(menu)">
                <div class="icon">
                    <a-icon :type="menu.type" />
                </div>
                <div v-if="menuFold"
                     class="name">
                    {{menu.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

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
        }
    },
    data() {
        return {
            // 菜单展开
            // menuFold: false
        };
    },
    computed: {
        ...mapState(['menuFold'])
    },
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
                // this.menuFold = !this.menuFold;
            }
        }
    }
};
</script>

<style lang="less"
       scoped>
@import "../../assets/css/buttons";

.menu-section {
    box-sizing: border-box;
    border-bottom: 1px solid #f2f2f2;
    padding: 19px 20px 20px 20px;
    width: 100%;
    text-align: left;

    &:last-child {
        border: none;
    }

    .section-title {
        padding-left: 10px;
        font-size: 12px;
        color: #bbbbbb;
        margin-bottom: 15px;
    }

    .section-content {
        .menu-item {
            cursor: pointer;
            line-height: 30px;
            padding: 0 20px 0 10px;
        }

        .icon, .name {
            display: inline-block;
        }

        .icon {
            font-size: 16px;
            margin-right: 16px;
        }
    }
}
</style>
