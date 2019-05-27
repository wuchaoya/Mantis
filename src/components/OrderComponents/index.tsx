import {Vue, Component} from 'vue-property-decorator';
import './style.less';

const OrderStatus = ['未支付', '已支付', '已分配', '分配失败']

const ColorStatus = ['default', 'success' , 'success' , 'err']

@Component({
  props: {
    data: Object
  }
})
export default class OrderComponents extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    console.log(this.$props.data)
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