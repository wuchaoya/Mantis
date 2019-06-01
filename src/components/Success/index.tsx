import {Vue, Component} from 'vue-property-decorator';
import Button from '@/components/Button';

import './style.less';

@Component
export default class Success extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div class='success-container'>
        <img class='img' src={require('@/assets/svg/success.svg')} alt=""/>
        <div class='title'>支付成功</div>
        <div class='sub-title'>5s后返回云手机首页</div>
        <Button class='button'>立即体验云手机</Button>
      </div>
    )
  }
  
}