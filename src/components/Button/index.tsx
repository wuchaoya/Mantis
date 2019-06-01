import {Vue, Component, Prop} from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';

import './style.less';

interface IButtonProps {
  click?: any;
  style?: object;
  className?: string
}

@Component
export default class Button extends tsx.Component<IButtonProps>{
  
  @Prop({default: () => {}}) public click!: any
  @Prop() public styles! : object
  @Prop() public className!: string
  
  mounted () {
  
  }
  
  render() {
    const {click = () => {}, className} = this.$props
    return (
      <div onClick={ click } class='button-container'>
        <div class={`button ${className}`} style={this.$props.styles}>
          <span class='text'>{this.$slots.default}</span>
        </div>
      </div>
    )
  }
  
}

