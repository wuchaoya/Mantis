import Vue from 'vue'
import Component from 'vue-class-component'
import Drawer from '@/components/Drawer/index.vue';
import UserInfo from '@/components/UserInfo';

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
      </div>
    )
  }
  
}