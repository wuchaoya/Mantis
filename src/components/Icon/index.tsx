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
  click?: any
}

@Component
export default class Icon extends tsx.Component<IIconProps> {

  @Prop() public name!: string;
  @Prop() public size!: number;
  @Prop() public color!: string;
  @Prop() public styles!: object;
  @Prop() public backgroundColor!: string;
  @Prop({default: () => {}}) public click!: any;
  
  render () {
    return (
      <div onClick={ () => this.$props.click ()} class='icon-container' style={this.$props.styles}>
        <Icons name={this.$props.name}/>
      </div>
    )
  }
  
}