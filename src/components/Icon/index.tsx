import { Vue, Component } from 'vue-property-decorator';
import Icons from '@/assets/Icons';
import './style.less';

@Component({
  props: {
    backgroundColor: String,
    color: String,
    size: Number,
    name: String,
    styles: Object
  }
})
export default class Icon extends Vue {
  
  constructor (props : any) {
     super(props)
  }
  
  render () {
    return (
      <div class='icon-container' style={this.$props.styles}>
        <Icons name={this.$props.name}/>
      </div>
    )
  }
  
}