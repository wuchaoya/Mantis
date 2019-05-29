import Vue from 'vue'
import Component from 'vue-class-component'
import SigninStory from '@/store/SigninStore';


@Component({
  components: {
  },
})
export default class Home extends Vue {
  
  state = SigninStory
  
  mounted () {
    console.log(this)
  }
  
  render () {
    return (
      <div class='home'>
        首页{this.state.accountInfo.password}
      </div>
    )
  }
  
}