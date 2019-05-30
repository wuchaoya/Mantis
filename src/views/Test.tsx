import {Vue, Component} from 'vue-property-decorator';
import Swipers from '@/components/Swiper/Swiper2.vue'

@Component
export default class  extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  
  mounted () {
  }
  
  
  render() {
    return (
      <div>
        <Swipers />
      </div>
    )
  }
  
}