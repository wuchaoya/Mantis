import {Vue, Component} from 'vue-property-decorator';
import './style.less';

@Component({
  props: {
    size: Number,
    margin: String
  }
})
export default class  extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div class='logo-container' style={{margin: this.$props.margin}}>
        <img style={{height: '80px'}} src={require('@/assets/logo.png')} alt='logo'/>
      </div>
    )
  }
  
}