/**
 * 入口
 */

import {Vue, Component, Prop} from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import './style.less';

interface IEntry {
  number?: number;
  name: string
}

@Component
export default class Entry  extends tsx.Component<IEntry> {
  
  @Prop({default: 0}) public number! : number
  @Prop() public name!: string;
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div class='entry-container'>
        <span class='entry-top'>{this.$props.number}</span>
        <span class='entry-bottom'>{this.$props.name}</span>
      </div>
    )
  }
  
}