import {Vue, Component} from 'vue-property-decorator';
import List from '@/components/List';
import Navigation from '@/components/Navigation';
import OrderComponents from '@/components/OrderComponents';



const dataSource = [
  {
    orderId: 'FUOAUSJH82784723828',
    status: 0,
    time: '2018-04-12 14:24',
    orderType: '新主机',
    payType: 'GVIP',
    deviceId: '758362'
  },
  {
    orderId: 'FUOAUSJH82784723828',
    status: 1,
    time: '2018-04-12 14:24',
    orderType: '新主机',
    payType: 'GVIP',
    deviceId: '758362'
  },
  {
    orderId: 'FUOAUSJH82784723828',
    status: 2,
    time: '2018-04-12 14:24',
    orderType: '新主机',
    payType: 'GVIP',
    deviceId: '758362'
  },
  {
    orderId: 'FUOAUSJH82784723828',
    status: 3,
    time: '2018-04-12 14:24',
    orderType: '新主机',
    payType: 'GVIP',
    deviceId: '758362'
  }
]

@Component({
  props: {}
})
export default class Order  extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div class='order grey card'>
        <Navigation title='订单中心' />
        <List
          renderItem={(item, index) => <OrderComponents key={index} data={item} />}
          dataSource={dataSource}
          empty={{description: '还没有订单记录'}} />
      </div>
    )
  }
  
}