import { Vue, Component, Prop } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';

import Icon from '@/components/Icon';
import './style.less';

interface INavigationProps {
  title?: string,
  right?: any,
  left?: any
}

@Component
export default class Navigation extends tsx.Component<INavigationProps> {

  @Prop() public title!: string
  @Prop() public right!: any
  @Prop() public left!: any
  mounted () {
  }
  
  render () {
    return (
      <div class='navigation-container'>
        { this.$props.left || <Icon name='back'/>}
        <span class='title'>{this.$props.title}</span>
        <div class='rightButton'>
          {this.$props.right}
        </div>
      </div>
    )
  }
  
  
}