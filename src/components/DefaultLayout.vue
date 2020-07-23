<!--默认布局-->
<template>
    <div class="default-layout">
        <!--主界面-->
        <div class="main-wrapper">
            <!--左侧菜单-->
            <div class="menu-wrapper">
            </div>
            <div class="content-wrapper">
                <!--顶部导航-->
                <div class="nav-wrapper">
                </div>
                <!--内容区域-->
                <div class="router-wrapper">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <!--播放模块-->
        <the-player></the-player>
    </div>
</template>

<script>
import ThePlayer from './player/ThePlayer';

export default {
    name: 'DefaultLayout',
    components: {
        ThePlayer
    }
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
.default-layout {
    overflow: hidden;
    height: 100%;
    position: relative;

    .main-wrapper {
        width: 100%;
        height: calc(100% - 70px);
        background: #ffffff;
        display: flex;

        .menu-wrapper {
            width: 210px;
            height: 100%;
            background: #ffffff;
            box-sizing: border-box;
            border-right: 1px solid #f2f2f2;
        }

        .content-wrapper {
            height: 100%;
            width: 100%;

            .nav-wrapper {
                height: 70px;
                box-sizing: border-box;
                border-bottom: 1px solid #f2f2f2;
            }

            .router-wrapper {
                height: calc(100% - 70px);
                background: #fafafa;
            }
        }
    }

    .player-wrapper {
        width: 100%;
        height: 70px;
        background: #ffffff;
        box-shadow: 0px -5px 10px 3px rgba(0, 0, 0, 0.02);
        position: absolute;
        bottom: 0;
    }
}
</style>
