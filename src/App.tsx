import Vue, { VNode } from 'vue'
import Component from 'vue-class-component'
import RouterLink from '@/components/RouterLink';

@Component({})
export default class Home extends Vue {
  
  constructor (props: any) {
    super(props)
  }
  
  events () {
    console.log('传入一个方法')
  }
  
  render () {
    return (
      <div id="app">
        <router-view/>
      </div>
    )
  }
  
}