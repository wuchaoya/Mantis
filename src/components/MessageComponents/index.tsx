import {Vue, Component, Prop} from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support'

import './style.less';

interface IMessageComponentsProps {
  data?: object,
  disabled?: boolean
}

@Component
export default class MessageComponents extends tsx.Component<IMessageComponentsProps> {
  
  @Prop() public data!: object
  @Prop() public disabled!: boolean
  
  render() {
    const {disabled} = this.$props;
    return (
      <div class='message-header' >
        <div class='top-container'>
          <span class={`title ${disabled && 'disabled'}`}>{this.$props.data.title}</span>
          <span class={`date ${disabled && 'disabled'}`}>{this.$props.data.date}</span>
        </div>
        <div class={`content ${disabled && 'disabled'}`}>{this.$props.data.content}</div>
      </div>
    )
  }
  
}