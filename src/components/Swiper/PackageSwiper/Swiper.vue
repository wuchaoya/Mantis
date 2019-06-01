<template>
    <nut-swiper
            direction="horizontal"
            ref="demo3"
            :paginationVisible="true"
            :canDragging="false"
            @slideChangeEnd="logPage"

    >
        <div :key="1" class="nut-swiper-slide swiper-container">
            <PackageCard></PackageCard>
        </div>
        <div :key="2" class="nut-swiper-slide swiper-container">
            <PackageCard></PackageCard>
        </div>
        <div :key="3" class="nut-swiper-slide swiper-container">
            <PackageCard></PackageCard>
        </div>
    </nut-swiper>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import {  Swiper } from '@nutui/nutui';
    import PackageCard from '@/components/Swiper/PackageSwiper/PackageCard';
    import './style.less';

    Swiper.install(Vue)
    @Component({
        components: {
            PackageCard,Swiper
        },
    })
    export default class Swipers extends Vue {

        logPage (pageSize: any,el: any) {
            console.log(pageSize, el)
        }

    }
</script>

<style scoped lang="less">

</style>
