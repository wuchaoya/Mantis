
import {Vue, Component} from 'vue-property-decorator';

@Component({
  props: {
    text: String
  }
})
export default class Message  extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <span class="text">{this.$props.text}</span>
      </div>
    )
  }
  
}
