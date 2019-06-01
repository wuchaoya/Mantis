import {Vue, Component} from 'vue-property-decorator';
import './style.less';

const packageCardData: any = {
  title: 'VIP云手机',
  description: [
    '标准级配置，系统流畅性良好',
    '支持标清画质，游戏操作体验流畅',
    '操作便捷，使用体验良好'
  ]
}

@Component
export default class PackageCard  extends Vue {
  
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div class='packageCard-container'>
        <h3 class='title'>{packageCardData.title}</h3>
        {packageCardData.description.map((text: string, index: number) => <p class='description' key={index}>{text}</p>)}
      </div>
    )
  }
  
}