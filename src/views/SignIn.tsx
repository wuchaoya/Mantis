import { Vue, Component } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';

import Navigation from '@/components/Navigation';
import Logo from '@/components/Logo';
import Input from '@/components/Input';
import Headline from '@/components/Headline';
import Button from '@/components/Button';

import { Observer } from "mobx-vue";
import SigninStory from '@/store/SigninStore';

@Observer
@Component
export default class SignIn extends tsx.Component<any> {
  
  constructor (props : any) {
    super(props)
  }
  
  state = SigninStory
  
  async mounted () {
  
  }
  
  render () {
    return (
      <div class='card'>
        <Navigation title='登录' right={<span class='text'>注册</span>}/>
        <Logo />
        <Input change={(e: any) => this.state.inputOnChange(e.target.value, 'account')} value={this.state.accountInfo.account} iconName='signIn' placeholder='请输入您的账号' />
        <Input change={(e: any) => this.state.inputOnChange(e.target.value, 'password')} value={this.state.accountInfo.password} iconName='passWord' type='password' placeholder='请输入您的密码' />
        <Headline />
        <Button click={() => this.state.login()}>登录</Button>
        {this.state.accountInfo.password}
      </div>
    )
  }
  
}