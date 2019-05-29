import {Vue, Component, Prop} from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';

import Empty from '@/components/Empty';

interface IListProps {
  Header?: any,
  locale?: any,
  dataSource?: any,
  empty?: object,
  renderItem?: any
}

@Component
export default class List extends tsx.Component <IListProps> {
  
  @Prop() public Header !: any
  @Prop({default: () => import('@/components/Empty')}) public locale !: any
  @Prop() public dataSource !: any
  @Prop() public empty!: object
  @Prop() public renderItem!: any
  
  render() {
    const { description } = this.$props.empty;
    return this.$props.dataSource.length === 0 ?
      <Empty description={description} /> :
      <div>
        {this.$props.dataSource.map((item: any,index: number) => this.$props.renderItem(item,index))}
      </div>
  }
  
}