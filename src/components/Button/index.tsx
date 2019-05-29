import {Vue, Component, Prop} from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';

import './style.less';

interface IButtonProps {
  click?: any
}

@Component
export default class Button extends tsx.Component<IButtonProps>{
  
  @Prop() public click!: any
  
  mounted () {
  
  }
  
  render() {
    return (
      <div onClick={this.$props.click} class='button-container'>
        <div class='button'>
          <span class='text'>{this.$slots.default}</span>
        </div>
      </div>
    )
  }
  
}

