import {Vue, Component, Prop} from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';

import './style.less';

interface ILogoProps {
  size?: string;
  className?: string
}

@Component
export default class Logo extends tsx.Component<ILogoProps> {
  
  @Prop() public size!: string
  @Prop() public className!: string
  
  render() {
    const {className} = this.$props;
    return (
      <div class={`logo-container ${className}`}>
        <img style={{height: '80px'}} src={require('@/assets/logo.png')} alt='logo'/>
      </div>
    )
  }
  
}