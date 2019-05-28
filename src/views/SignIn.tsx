import { Vue, Component } from 'vue-property-decorator';
import { Observer } from "mobx-vue";
import ViewModel from "@/store/store";
import { initialize } from '@/services/api';
import Container from '../components/Test/index'

@Observer
@Component({
  props: {
    name: String,
    pathName: String,
    events: Function
  }
})
export default class SignIn extends Vue {
  
  constructor (props : any) {
    super(props)
  }
  state = new ViewModel()
  async mounted () {
    await initialize({})
    this.state.setAge()
    console.log(this.state.age)
  }
  
  render () {
    return (
      <div>
        <Container>HAHA</Container> 
        <div onClick={() => this.state.setAge()}></div>
      </div>
    )
  }
  
}