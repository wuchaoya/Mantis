import {Vue, Component} from 'vue-property-decorator';
import './style.less';

@Component({
  props: {}
})
export default class Button  extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  mounted () {
    console.log(this.$slots.default);
  }
  
  
  render() {
    return (
      <div class='button-container'>
        <div class='button'>
          <span class='text'>{this.$slots.default}</span>
        </div>
      </div>
    )
  }
  
}

