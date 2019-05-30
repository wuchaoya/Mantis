import {Vue, Component} from 'vue-property-decorator';

import './style.less';

@Component({
  props: {}
})
export default class  extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div class='phone-container'>
        <img class='screen' src={require('@/assets/img/phone-bg.jpg')} alt=""/>
        <div class='bottom'>
          <div class='text' >
            <div class='name'>海马云云兔的云手机</div>
            <div class='time'>20天14小时48分钟</div>
          </div>
          <div class='button'>
            续费
          </div>
        </div>
      </div>
    )
  }
  
}