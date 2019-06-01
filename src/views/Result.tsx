import {Vue, Component} from 'vue-property-decorator';

import Navigation from '@/components/Navigation';
import Success from '@/components/Success';

@Component({
  props: {}
})
export default class  extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <Navigation title='支付结果' />
        <Success />
      </div>
    )
  }
  
}