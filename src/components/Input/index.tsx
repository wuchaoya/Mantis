import {Vue, Component} from 'vue-property-decorator';
import Icon from '@/components/Icon';
import './style.less';

@Component({
  props: {
    type: String,
    placeholder: String,
    iconName: String
  }
})
export default class Input  extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div class='input-container'>
        <div class='input'>
          <Icon name={this.$props.iconName} styles={{position: 'absolute', left: '0', top: '0'}}/>
          <input placeholder={this.$props.placeholder} class='input-style' type={this.$props.type || 'text'}/>
        </div>
      </div>
    )
  }
  
}