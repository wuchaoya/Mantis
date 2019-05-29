import { Vue, Component, Prop } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import Icons from '@/assets/Icons';
import './style.less';

interface IIconProps {
  name?: string,
  size?: number,
  color?: string,
  styles?: object,
  backgroundColor?: string,
}

@Component
export default class Icon extends tsx.Component<IIconProps> {

  @Prop() public name!: string;
  @Prop() public size!: number;
  @Prop() public color!: string;
  @Prop() public styles!: object;
  @Prop() public backgroundColor!: string;
  
  render () {
    return (
      <div class='icon-container' style={this.$props.styles}>
        <Icons name={this.$props.name}/>
      </div>
    )
  }
  
}