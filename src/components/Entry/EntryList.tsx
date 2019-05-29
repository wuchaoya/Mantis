import {Vue, Component} from 'vue-property-decorator';
import Entry from '@/components/Entry';
import Divider from '@/components/Divider';

import './style.less';

@Component({
  props: {}
})
export default class  extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div class='entry-list'>
        <Entry number={14} name='打折卡'/>
        <Divider/>
        <Entry number={6} name='代金券'/>
        <Divider/>
        <Entry number={2} name='激活码'/>
      </div>
    )
  }
  
}