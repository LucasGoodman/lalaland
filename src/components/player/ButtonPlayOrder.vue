<!--播放顺序按钮-->
<template>
    <div class="play-mode-wrapper">
        <icon-font :title="currentTitle"
                   class="control-btn"
                   :type="currentType"
                   @click.native="modeChange"></icon-font>
    </div>
</template>

<script>
import IconFont from '../icon_font/Index';
import { btnInfo, playOrderKeys } from '../../utils/constants';

export default {
    name: 'ButtonPlayOrder',
    components: {
        IconFont
    },
    // directives: {},
    // filters: {},
    // model: {},
    // props: [],
    data() {
        return {
            localModel: null
        };
    },
    computed: {
        btnInfo() {
            return btnInfo;
        },
        currentType() {
            return btnInfo[this.localModel] ? btnInfo[this.localModel].type : '';
        },
        currentTitle() {
            return btnInfo[this.localModel] ? btnInfo[this.localModel].title : '';
        }
    },
    watch: {
        localModel(val) {
            this.$store.set('playMode', val);
        }
    },
    // mounted() {},
    created() {
        this.localModel = this.$store.get('playMode') || playOrderKeys[0];
    },
    // activated() {},
    // beforeDestroy() {},
    // destroyed() {},
    methods: {
        modeChange() {
            let index = playOrderKeys.indexOf(this.localModel) || 0;
            index++;
            index = index > playOrderKeys.length - 1 ? 0 : index;
            this.localModel = playOrderKeys[index];
        }
    }
};
</script>

<style lang="less"
       scoped>
@import "../../assets/css/control-btn";

.play-mode-wrapper {

}
</style>
