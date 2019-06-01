import {Vue, Component} from 'vue-property-decorator';

import './style.less';

@Component({
  props: {}
})
export default class Options extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div class='options-container recommended-color'>
          <div class='subscript'>
            <img src={require('@/assets/svg/subscript.svg')} alt=""/>
            <span class='text'>推荐</span>
          </div>
          <div>
            <div class='title'>超值套餐买2年送1年</div>
            <div class='content-container'>
              <div class='subtitle'><img src={require('@/assets/svg/fire.svg')} alt=""/>限时抢购</div>
              <div class='content-right'>
                <div class='price'>原价864元</div>
                <div class='actual-price'>576</div>
                <div class='unit'>元</div>
              </div>
            </div>
          </div>
      </div>
    )
  }
  
}