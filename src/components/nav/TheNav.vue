<!--导航栏-->
<template>
    <div class="nav-wrapper">
        <div class="left">
            <!--搜索框-->
            <the-search></the-search>
        </div>
        <div class="right">
            <!--用户信息-->
            <div class="user"></div>
            <!--操作区-->
            <div class="interface"></div>
        </div>
    </div>
</template>

<script>
import TheSearch from './TheSearch.vue';

export default {
    name: 'TheNav',
    components: {
        TheSearch
    }
};
</script>

<style scoped>
.nav-wrapper {
    display: flex;
}
</style>
