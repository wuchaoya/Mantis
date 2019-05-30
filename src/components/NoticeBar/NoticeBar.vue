<template>
    <nut-noticebar
            class="noticebar"
            left-icon="//img.yzcdn.cn/vant/volume.png"
            text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
            :scrollable="false"
    >
    </nut-noticebar>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { NoticeBar } from '@nutui/nutui';

    NoticeBar.install(Vue)

    @Component({
        components: {
            NoticeBar,
        },
    })
    export default class  extends Vue {}
</script>


<style scoped lang="less">
    .noticebar {
        margin-top: 44px;
    }

</style>