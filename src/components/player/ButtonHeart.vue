<!--点赞按钮-->
<template>
    <div class="heart-wrapper">
        <div class="heart"
             :class="{ 'is-active': active }"></div>
        <div class="cursor-mask"
             @click="active = !active"></div>
    </div>
</template>

<script>
export default {
    name: 'TheHeart',
    // components: {},
    // directives: {},
    // filters: {},
    model: {
        prop: 'isHeart',
        event: 'updateHeart'
    },
    props: {
        isHeart: {
            type: Boolean,
            default: false
        }
    },
    // data() {},
    computed: {
        active: {
            get() {
                return this.isHeart;
            },
            set(val) {
                this.$emit('updateHeart', val);
            }
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
.heart-wrapper {
    margin-right: -10px;
    width: 60px;
    height: 60px;
    overflow: hidden;
    position: relative;
}

.heart {
    position: absolute;
    top: -20px;
    left: -20px;
    transform: scale(0.6);
    width: 100px;
    height: 100px;
    background: url("../../assets/img/heart3.png") no-repeat;
    background-position: 0 0;
    transition: background-position 1s steps(28);
    transition-duration: 0s;
    z-index: 5;

    &.is-active {
        transition-duration: 1s;
        background-position: -2800px 0;
    }
}

.cursor-mask {
    width: 26px;
    height: 26px;
    position: absolute;
    top: 17px;
    left: 17px;
    z-index: 10;
    cursor: pointer;
    background: transparent;
}
</style>
