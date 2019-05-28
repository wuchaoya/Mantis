import Vue from 'vue'
import Component from 'vue-class-component'
import Button from '@/components/Test'

@Component({
  components: {
  },
})
export default class Home extends Vue {
  
  mounted () {
    Vue.axios.get('/api/user').then((response) => {
      console.log(response.data)
    })
  }
  
  render () {
    return (
      <div class='home'>
        首页
        <Button>HAHA</Button> 
      </div>
    )
  }
  
}