import { action, computed, observable } from "mobx";
import {login} from '@/services/accountRelated';
import router from '@/router';



class SigninStore {
  
  /**
   * 登录后用户信息
   */
  @observable userInfo;
  
  /**
   * 账号信息
   */
  @observable accountInfo = {
    account: '',
    password: '',
    clientType: 6,
    loginType: 5
  }
  
  @action.bound async login () {
    this.userInfo = await login(this.accountInfo)
    router.push({ path: 'home' })
  }
  
  @computed get check() {
    return this.accountInfo
  }
  
  @action.bound inputOnChange (value: string, name: string)  {
    this.accountInfo = Object.assign({}, this.accountInfo, {[name] : value})
  }
  
}

export default new SigninStore();