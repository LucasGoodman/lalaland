/**
 * Created by Lucas on 2020/7/22.
 */
export const btnInfo = {
    previousSong: {
        type: 'step-backward', // type指定icon样式
        title: '上一首歌'
    },
    nextSong: {
        type: 'step-forward',
        title: '下一首歌'
    },
    orderPlay: {
        type: 'order-play',
        title: '列表播放'
    },
    randomPlay: {
        type: 'random-play',
        title: '随机播放'
    },
    singlePlay: {
        type: 'single-play',
        title: '单曲循环'
    },
    playList: {
        type: 'play-list',
        title: '播放列表'
    }
};

/**
 * 播放模式
 * */
export const playOrderKeys = [
    'orderPlay',
    'randomPlay',
    'singlePlay'
];
