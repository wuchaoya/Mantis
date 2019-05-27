import {Vue, Component} from 'vue-property-decorator';
import './style.less';

@Component({
  props: {
    data: Object,
    disabled: Boolean
  }
})
export default class MessageComponents extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    const {disabled} = this.$props;
    return (
      <div class='message-header' >
        <div class='top-container'>
          <span class={`title ${disabled && 'disabled'}`}>{this.$props.data.title}</span>
          <span class={`date ${disabled && 'disabled'}`}>{this.$props.data.date}</span>
        </div>
        <div class={`content ${disabled && 'disabled'}`}>{this.$props.data.content}</div>
      </div>
    )
  }
  
}