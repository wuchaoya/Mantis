import { Vue, Component} from 'vue-property-decorator';

@Component({
  props: {
    name: String,
    pathName: String,
    events: Function
  }
})
export default class RouterLink extends Vue {
  
  constructor (props : any) {
     super(props)
  }
  
  
  render () {
    return (
      <a onClick={this.onClick}>{this.$props.name}</a>
    )
  }
  
  onClick (): void {
    this.$router.push(this.$props.pathName)
  }
}