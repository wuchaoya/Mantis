import { action, computed, observable } from "mobx";

class HomeStore {
  
  /**
   * 抽屉状态
   */
  @observable drawerVisible = false;
  
  /**
   * 开启抽屉
   */
  @action.bound drawerShow () {
    this.drawerVisible = true
  }
  
  /**
   * 隐藏抽屉
   */
  @action.bound drawerHide () {
    this.drawerVisible = false
  }
  
}

export default new HomeStore();