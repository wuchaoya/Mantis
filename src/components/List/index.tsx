import {Vue, Component} from 'vue-property-decorator';
import Empty from '@/components/Empty';

@Component({
  props: {
    Header: {
      required: false,
      validator: (value) => value // any
    },
    locale: {
      required: false,
      default: () => import('@/components/Empty'),
      validator: (value) => value // any
    },
    dataSource: {
      required: false,
      default: () => [],
      type: Array
    },
    empty: Object,
    renderItem: Function
  }
})
export default class List extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    const { description } = this.$props.empty;
    return this.$props.dataSource.length === 0 ?
      <Empty description={description} /> :
      <div>
        {this.$props.dataSource.map((item,index) => this.$props.renderItem(item,index))}
      </div>
  }
  
}