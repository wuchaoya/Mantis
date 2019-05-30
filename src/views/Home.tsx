import Vue from 'vue';
import Component from 'vue-class-component';
import { Observer } from "mobx-vue";

import Navigation from '@/components/Navigation';
import Drawer from '@/components/Drawer';
import Logo from '@/components/Logo';
import EntryList from '@/components/Entry/EntryList';
import Menu from '@/components/Menu';
import Icon from '@/components/Icon';
import Button from '@/components/Button';
import Swipers from '@/components/Swiper/Swiper2.vue';
import NoticeBar from '@/components/NoticeBar/NoticeBar.vue';


import SigninStory from '@/store/SigninStore';
import HomeStore from '@/store/HomeStore';

import '@/style/home.less';



@Observer
@Component
export default class Home extends Vue {
  
  state = {
    SigninStory,
    HomeStore
  }
  
  mounted () {
    console.log(this)
  }
  
  render () {
    return (
      <div class='home'>
        <Navigation left={<Icon click={() =>this.state.HomeStore.drawerShow()}  name='me'/>} title='爱云兔云手机' right={<Icon name='customer'/>}/>
        <Drawer hide={() => this.state.HomeStore.drawerHide()} visible={this.state.HomeStore.drawerVisible} >
          <Logo className='home-logo' />
          <span class='drawer-title'>爱云兔云手机</span>
          <EntryList />
          <Menu />
          <Button className='signOut-button'>退出登录</Button>
        </Drawer>
        <NoticeBar />
        <Swipers />
      </div>
    )
  }
  
}