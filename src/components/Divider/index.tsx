import {Vue, Component} from 'vue-property-decorator';
import './style.less';

@Component
export default class  extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div class='divider-container'>
        <div class='divider'></div>
      </div>
    )
  }
  
}