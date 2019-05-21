import { Vue, Component } from 'vue-property-decorator';
import Navigation from '@/components/Navigation';
import Logo from '@/components/Logo';
import Input from '@/components/Input';
import Headline from '@/components/Headline';
import Button from '@/components/Button';

import { initialize } from '@/services/api';

@Component({
  props: {
    name: String,
    pathName: String,
    events: Function
  }
})
export default class SignIn extends Vue {
  
  constructor (props : any) {
    super(props)
  }
  
  async mounted () {
    await initialize({})
  }
  
  render () {
    return (
      <div>
        <Navigation title='登录' right={<span class='text'>注册</span>}/>
        <Logo size={80} margin='36px'/>
        <Input iconName='signIn' placeholder='请输入您的账号' />
        <Input iconName='passWord' type='password' placeholder='请输入您的密码' />
        <Headline />
        <Button>登录</Button>
      </div>
    )
  }
  
}