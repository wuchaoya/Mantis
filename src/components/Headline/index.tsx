import {Vue, Component} from 'vue-property-decorator';
import './style.less';

@Component({
  props: {}
})
export default class  extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div class='headline-container'>
        <div class='headline'>
          <div>
            <span class='text'>忘记密码</span>
          </div>
        </div>
      </div>
    )
  }
  
}