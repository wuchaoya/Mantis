import { action, computed, observable } from "mobx";
import router from '@/router';

class HomeStore {
  
  /**
   * 抽屉状态
   */
  @observable drawerVisible = false;
  
  /**
   * 开启抽屉
   */
  @observable drawerShow () {
    this.drawerVisible = true
  }
  
  /**
   * 隐藏抽屉
   */
  @observable drawerHide () {
    this.drawerVisible = false
  }
  
}

export default new HomeStore();