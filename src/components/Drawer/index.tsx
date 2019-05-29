/**
 * 抽屉
 */
import {Vue, Component, Prop} from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';

import './style.less';

interface IDrawer {
  visible?: boolean,
  hide?: any
}

@Component
export default class Drawer extends tsx.Component<IDrawer> {
  
  @Prop() public visible!: boolean
  @Prop() public hide!: any
  
  
  mounted () {
    console.log(this)
  }
  
  render() {
    return this.$props.visible ? (
      <div class='drawer-container'>
        <div class='drawer-content'>
          {this.$slots.default}
        </div>
        <div onClick={() => this.$props.hide()} class='drawer-right'>
        </div>
      </div>
    ) : null
  }
  
}