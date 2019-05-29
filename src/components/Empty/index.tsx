import {Vue, Component, Prop} from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';

import './style.less';

interface IEmptyProps {
  description?: string,
  imageStyle?: object,
  image?: any
}

@Component
export default class Empty  extends tsx.Component<IEmptyProps> {
  
  @Prop({default: '暂无数据'}) public ndescription!: string;
  @Prop() public imageStyle!: object;
  @Prop({default: require('@/assets/img/emtpy.png')}) public image!: any;
  
  mounted () {
    console.log(this.$props)
  }
  
  render() {
    return (
      <div class='emptyContainer'>
        <img class='img' src={this.$props.image} alt='暂无数据'/>
        <span class='description'>{this.$props.description}</span>
      </div>
    )
  }
  
}