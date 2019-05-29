import {Vue, Component} from 'vue-property-decorator';

import MenuButton from '@/components/Menu/MenuButton';

@Component
export default class  extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <MenuButton iconName='msg' name='消息中心' />
        <MenuButton iconName='msg' name='订单中心' />
        <MenuButton iconName='customer' name='联系客服' />
        <MenuButton iconName='bind' name='绑定手机号' />

      </div>
    )
  }
  
}