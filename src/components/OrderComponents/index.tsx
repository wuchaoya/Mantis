import {Vue, Component, Prop} from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';

import './style.less';

const OrderStatus = ['未支付', '已支付', '已分配', '分配失败']

const ColorStatus = ['default', 'success' , 'success' , 'err']

interface IOrderComponentsProps {
  data?: object,
  key?: any
}

@Component
export default class OrderComponents extends tsx.Component<IOrderComponentsProps> {
  
  @Prop() public data!: object
  @Prop() public key!: any

  
  render() {
    const { orderId, status, time, orderType, payType, deviceId } = this.$props.data;
    const orderInfo = [
      {
        name: '购买时间',
        value: time,
      },
      {
        name: '设备类型',
        value: orderType
      },
      {
        name: '套餐类型',
        value: payType
      },
      {
        name: '设备号',
        value: deviceId
      }
    ]
    return (
      <div class='order-container'>
        <div class='header-container'>
          <span class='left'>订单号：</span>
          <span class='middle'>{orderId}</span>
          <span class={`right ${ColorStatus[status]}`}>{OrderStatus[status]}</span>
        </div>
        <div class='content-container'>
          {orderInfo.map((item,index) => {
            return (
              <div class='content' key={index}>
                <span class='name'>{item.name}</span>
                <span class='value'>{item.value}</span>
              </div>
            )
          })}
          {status == 3 ? <span class='err'>您已支付成功，但设备分配失败，请联系客服</span> : null}
        </div>
      </div>
    )
  }
  
}