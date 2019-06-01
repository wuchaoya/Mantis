import { action, computed, observable } from "mobx";

class ModalStore {
  
  // 所以弹窗状态
  @observable modalVisible = [
    {
      name: 'homeModal',
      visible: false,
      description: '首页开屏消息'
    }
  ]
  
  
  @action.bound modalShow (name) {
    this.setModalState(name, true)
  }
  
 
  @action.bound modalHide (name) {
    this.setModalState(name, false)
  }
  
  @action.bound setModalState (name,visible) {
    const index = this.modalVisible.map(r => r.name).indexOf('name');
    if (index === -1) return;
    this.modalVisible = this.modalVisible[index].visible = visible
  }
  
  
}

export default new ModalStore();