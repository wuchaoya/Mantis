<template>
    <swiper :options="swiperOption">
        <swiper-slide><Phone></Phone></swiper-slide>
        <swiper-slide><Phone></Phone></swiper-slide>
        <swiper-slide><Phone></Phone></swiper-slide>
        <swiper-slide><Phone></Phone></swiper-slide>
        <swiper-slide><Phone></Phone></swiper-slide>
    </swiper>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import Phone from '@/components/Swiper/Phone';
    import './style.less';

    @Component({
        components: {
            Phone,
            swiper,
            swiperSlide
        },
    })
    export default class Swipers extends Vue {

        data() {
            return {
                swiperOption: {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                },
                navigation : {

                }
            }
        }

    }
</script>

<style scoped lang="less">
    .swiper-slide {
        width: 80%;
        height: 82vh;
        padding-top: 10%;
    }

</style>
