import {Vue, Component} from 'vue-property-decorator';

@Component({
  props: {
    data: Object
  }
})
export default class  extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <span>{this.$props.data.title}</span>
      </div>
    )
  }
  
}