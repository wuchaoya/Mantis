import Vue, { VNode } from 'vue'
import Component from 'vue-class-component'
import RouterLink from '@/components/RouterLink';

@Component({})
export default class Home extends Vue {
  
  constructor (props: any) {
    super(props)
  }
  
  async mounted () {
    console.log(this.$store)
  }
  
  render () {
    return (
      <div id="app">
        <router-view/>
      </div>
    )
  }
  
}