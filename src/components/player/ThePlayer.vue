<!--播放模块界面-->
<template>
    <div class="player-wrapper">
        <!--控制区域：上一首/下一首/播放/暂停/音量调节-->
        <div class="play-control-wrapper">
            <a-icon class="control-btn"
                    :title="btnInfo.previousSong.title"
                    :type="btnInfo.previousSong.type" />
            <a-button type="primary"
                      shape="circle"
                      size="large"
                      icon="caret-right">
            </a-button>
            <a-icon class="control-btn"
                    :title="btnInfo.nextSong.title"
                    :type="btnInfo.nextSong.type" />
            <div class="volume-wrapper">
                <a-slider v-model="volume"
                          :max="100"
                          :min="0"
                          :step="0.1"
                          :tooltipVisible="false" />
            </div>
        </div>
        <!--当前播放信息区域-->
        <div class="current-info-wrapper">
            <!--封面-->
            <div class="cover">
                <img src="local-resource://D:\工作文档\测试图片\t01da5bd44928dcfc6c.jpg"
                     alt="">
            </div>
            <div class="info-wrapper">
                <div class="info">
                    <!--当前播放时间-->
                    <div class="current-time">
                        03:30
                    </div>
                    <!--歌词-->
                    <div class="lyrics">
                        陈势安 - 天后
                    </div>
                    <!--歌曲总时长-->
                    <div class="total-time">
                        05:30
                    </div>
                </div>
                <!--进度-->
                <div class="progress"
                     :loading="true">
                    <a-slider v-model="progress"
                              :max="100"
                              :min="0"
                              :step="0.1"
                              :tooltipVisible="false" />
                </div>
            </div>
        </div>
        <!--更多操作-->
        <div class="more-action-wrapper">
            <button-heart v-model="isHeart"
                          :title="isHeart ? '💔' : '❤'"></button-heart>
            <button-play-order></button-play-order>
            <icon-font :title="'播放列表'"
                       class="control-btn"
                       :type="btnInfo.playList.type"></icon-font>
        </div>
    </div>
</template>

<script>
import ButtonHeart from './ButtonHeart';
import ButtonPlayOrder from './ButtonPlayOrder';
import { btnInfo } from '@/utils/constants.js';
import IconFont from '../../components/icon_font/Index';

export default {
    name: 'Player',
    components: {
        ButtonHeart,
        ButtonPlayOrder,
        IconFont
    },
    // directives: {},
    // filters: {},
    // model: {},
    // props: [],
    data() {
        return {
            // 音量
            volume: 20,
            isHeart: false,
            // 歌曲进度
            progress: 20
        };
    },
    computed: {
        btnInfo() {
            return btnInfo;
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
@import "../../assets/css/buttons";

.player-wrapper {
    display: flex;

    .play-control-wrapper {
        flex: 0 0 244px;
        display: flex;
        align-items: center;
        padding-left: 10px;

        .volume-wrapper {
            width: 90px;
            margin-left: 10px;
        }
    }

    .current-info-wrapper {
        background: #ffffff;
        flex: 1;
        display: flex;
        align-items: center;
        height: 40px;
        margin-top: 15px;

        .cover {
            width: 40px;
            height: 40px;
            overflow: hidden;
            margin: 0 15px;
            background: #42a4ff;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .info-wrapper {
            flex: 1;

            .info {
                height: 26px;
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                color: #aaaaaa;
            }
        }
    }

    .more-action-wrapper {
        flex: 0 0 150px;
        display: flex;
        align-items: center;
    }
}
</style>

<style lang="less">
.progress {
    .ant-slider {
        margin: 2px 0;

        .ant-slider-track {
            background-color: #1890ff;
        }

        .ant-slider-handle {
            position: relative;
            width: 10px;
            height: 10px;
            border: none;
            margin-top: -4px;
            background-color: #1890ff;
            box-shadow: 0 2px 3px 3px rgba(0, 0, 0, 0.05);
        }

        .ant-slider-rail, .ant-slider-track, .ant-slider-step {
            height: 2px;
        }
    }

    @keyframes loading {
        from {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }
    }

    &.loading {
        .ant-slider {
            .ant-slider-handle:before {
                display: block;
                content: '';
                background-image: url("../../assets/img/progress-loading.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                width: 8px;
                height: 8px;
                position: absolute;
                top: 1px;
                left: 1px;
                z-index: 100;
                animation-name: loading;
                animation-duration: 1s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
            }
        }
    }
}

.volume-wrapper {
    .ant-slider {
        margin: 2px 0;

        .ant-slider-track {
            background-color: #1890ff;
        }

        .ant-slider-handle {
            width: 10px;
            height: 10px;
            border: none;
            margin-top: -4px;
            background-color: #ffffff;
            box-shadow: 0 2px 3px 3px rgba(0, 0, 0, 0.05);
        }

        .ant-slider-rail, .ant-slider-track, .ant-slider-step {
            height: 2px;
        }
    }
}
</style>
