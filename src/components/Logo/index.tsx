import {Vue, Component, Prop} from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';

import './style.less';

interface ILogoProps {
  size?: string
}

@Component
export default class Logo extends tsx.Component<ILogoProps> {
  
  @Prop() public size!: string
  
  render() {
    return (
      <div class='logo-container' style={{margin: this.$props.margin}}>
        <img style={{height: '80px'}} src={require('@/assets/logo.png')} alt='logo'/>
      </div>
    )
  }
  
}