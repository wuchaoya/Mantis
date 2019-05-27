import {Vue, Component} from 'vue-property-decorator';
import List from '@/components/List';
import MessageComponents from '@/components/MessageComponents';
import Navigation from '@/components/Navigation';

const dataSource = [
  {
    title: '设备过期通知',
    content: '您的设备《爱云兔0001》在2018年9',
    date: '2018-04-12 14:24',
    type: 'primary',
    disabled: true
  },
  {
    title: '设备过期通知',
    content: '您的设备《爱云兔0001》在2018年92',
    date: '2018-04-12 14:24',
    type: 'primary',
    disabled: false
  }
]

@Component({
  props: {}
})
export default class Message extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div class='order grey card'>
        <Navigation title='消息中心' />
        <List
          renderItem={(item, index) => <MessageComponents disabled={item.disabled} key={index} data={item} />}
          dataSource={dataSource}
          empty={{description: '还没有消息记录'}} />
      </div>
    )
  }
  
}