import {Vue, Component} from 'vue-property-decorator';

import Navigation from '@/components/Navigation';

import Swiper from '@/components/Swiper/PackageSwiper/Swiper.vue';

import Options from '@/components/Selection/Options';

import '@/style/package.less';

@Component
export default class Package extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <Navigation title='套餐购买' />
        <div class='package-container'>
          <Swiper/>
          <Options/>
        </div>
      </div>
    )
  }
  
}