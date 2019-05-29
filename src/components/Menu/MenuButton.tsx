import {Vue, Component, Prop} from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';

import Icon from '@/components/Icon';
import './style.less';

interface IMenuButtonProps {
  iconName: string;
  name: string
}

@Component
export default class MenuButton  extends tsx.Component<IMenuButtonProps> {
  
  @Prop() public iconName!: string
  @Prop() public name!: string
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div class='menuButton-container'>
        <Icon name={this.$props.iconName} />
        <span class='menuButton-text'>
          {this.$props.name}
        </span>
      </div>
    )
  }
  
}