<!--默认布局-->
<template>
    <div class="default-layout">
        <div class="main-wrapper">
            <div class="menu-wrapper">
            </div>
            <div class="content-wrapper">
                <div class="nav-wrapper">
                </div>
                <div class="router-wrapper">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div class="player-wrapper">
        </div>
    </div>
</template>

<script>
export default {
    name: 'DefaultLayout'
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
