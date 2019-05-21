import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class About extends Vue {
  
  render () {
    return (
      <div class="about">
        <h1>This is an about page</h1>
      </div>
    )
  }
  
}