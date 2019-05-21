import Vue from 'vue';
import Component from 'vue-class-component';
import './style.less';

const touxiang = require('@/assets/logo.png');

@Component({
})
export default class UserInfo extends Vue {
  
  render () {
    return (
      <img class='userinfo' src={touxiang} alt=''/>
    )
  }
  
  
}