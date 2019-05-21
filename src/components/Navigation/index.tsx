import { Vue, Component } from 'vue-property-decorator';
import Icon from '@/components/Icon';
import './style.less';

@Component({
  props: {
    title: String,
    right: Object
  }
})
export default class Navigation extends Vue {
  
  constructor (props : any) {
     super(props)
  }
  
  mounted () {
  }
  
  render () {
    return (
      <div class='navigation-container'>
        <Icon name='back'/>
        <span class='title'>{this.$props.title}</span>
        <div class='rightButton'>
          {this.$props.right}
        </div>
      </div>
    )
  }
  
  
}