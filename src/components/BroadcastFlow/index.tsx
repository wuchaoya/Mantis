import {Vue, Component} from 'vue-property-decorator';
import './sdk/saas-sdk.css';
import CryptoJS from 'crypto-js';
import Cloudplay from './sdk';

const state =  {
  accessKey:'5372185a0b276e0842e64eec928172d8',
  packageName: 'com.haima.cloudphone.phone',
  accessKeyId: '9599e53c',
  phoneId:  '3009005',
  userinfo: {
    uId: '1234',
    utoken: 'ab555c',
  }
}
@Component({
  props: {}
})
export default class  extends Vue {
  
  constructor(props: any ) {
    super(props)
  }
  
  data = {
    accessKey:'5372185a0b276e0842e64eec928172d8',
    packageName: 'com.haima.cloudphone.phone',
    accessKeyId: '9599e53c',
    phoneId:  '563621',
    userinfo: {
      uId: '1234',
      utoken: 'ab555c',
    }
  }
  
  mounted () {
     this.initSdk()
     this.startSdk()
  }
  
  generateCToken (raw : string, accessKey : string) {
    let key = CryptoJS.enc.Hex.parse(accessKey);
    let aes = CryptoJS.AES.encrypt(raw, key, {
      iv: "",
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    let aesBytes = aes.ciphertext.toString();
    let inSha1 = CryptoJS.enc.Hex.parse(aesBytes);
    let sha1 = CryptoJS.SHA1(inSha1);
    
    return sha1.toString();
  };
  
  tocken () {
    return this.generateCToken(state.accessKeyId + state.packageName  + state.phoneId, state.accessKey)
  }
  
  initSdk () {
    Cloudplay.initSDK({
      accessKeyID: state.accessKey,
      onSceneChanged: function (sceneId, extraInfo) {
         console.log(sceneId,extraInfo)
      },
      MessageHandler: function (message) {
        console.log(message);
      }
    })
  }
  
  startSdk () {
    Cloudplay.startSDK('sdk', {
      phoneId: state.phoneId,
      accessKeyId: state.accessKeyId,
      packageName: state.packageName,
      token: this.tocken(),
      rotate: true,
      userinfo: state.userinfo
    })
  }
  
  render() {
    return (
      <div id='sdk' />
    )
  }
  
}