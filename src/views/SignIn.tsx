import { Vue, Component } from 'vue-property-decorator';
import Navigation from '@/components/Navigation';
import Logo from '@/components/Logo';
import Input from '@/components/Input';
import Headline from '@/components/Headline';
import Button from '@/components/Button';

import { initialize } from '@/services/api';
import {login} from '@/services/accountRelated';

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
    console.log(this.$store)
    await initialize({})
    await login({
      account:'18695912990',
      password:'123456',
    })
  }
  
  render () {
    return (
      <div class='card'>
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