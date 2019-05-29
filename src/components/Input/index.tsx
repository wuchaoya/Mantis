import {Vue, Component, Prop} from 'vue-property-decorator';
import * as tsx from "vue-tsx-support";
import Icon from '@/components/Icon';
import './style.less';

export enum InputType {
  password = "password",
  default = "text"
}



interface IInputProps {
  type?: any;
  placeholder?: string;
  iconName?: string;
  value?: string;
  change: any;
}

@Component
export default class Input extends tsx.Component<IInputProps> {
  
  @Prop() public type!: any;
  @Prop() public placeholder!: string;
  @Prop() public iconName!: string;
  @Prop() public value!: string;
  @Prop() public change!: any;

  
  render() {
    return (
      <div class='input-container'>
        <div class='input'>
          <Icon name={this.$props.iconName} styles={{position: 'absolute', left: '0', top: '0'}}/>
          <input onInput={(e) => this.$props.change(e)} value={this.$props.value} placeholder={this.$props.placeholder} class='input-style' type={this.$props.type}/>
        </div>
      </div>
    )
  }
  
}