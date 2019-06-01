
import {Vue, Component, Prop} from 'vue-property-decorator';
import * as tsx from 'vue-awesome-swiper';

import './style.less';

interface IModal {
  img?: string;
  closable?: boolean;
  visible?: boolean;
  onClose?: void;
  link?: void;
}


@Component
export default class Modal extends Vue {
  @Prop() public img!: string
  @Prop() public closable!: boolean
  @Prop() public visible!: boolean
  @Prop() public link!: void
  @Prop() public onClose!: void


  constructor(props: any) {
    super(props)
  }

  defaultVoid () {

  }
  
  render() {

    const {img, visible, closable, onClose = this.defaultVoid, link = this.defaultVoid, } = this.$props

    return visible ?  (
      <div class='modal-container'>
        <img onClick={link} class='modal-message' src={require('@/assets/img/modal-img.png')} />
        {closable && <img onClick={onClose} class='modal-close' src="" /> }
      </div>
    ) : null
  }
  
}