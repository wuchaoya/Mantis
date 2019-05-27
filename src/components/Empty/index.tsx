import {Vue, Component} from 'vue-property-decorator';
import './style.less';

@Component({
  props: {
    description: {
      default: '暂无数据',
      required: false,
      type: String
    },
    imageStyle: Object,
    image: {
      default: require('@/assets/img/emtpy.png'),
      required: false,
    },
  }
})
export default class Empty  extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
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