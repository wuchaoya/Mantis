import {  observable } from "mobx";

const GlobalState = observable({
  
  scene: '',
  
  
  // 设置场景id
  setScene (scene: string) {
    this.scene = scene;
  },
  
 
})
export default GlobalState;