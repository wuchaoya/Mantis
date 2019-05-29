
### 环境说明

**mock数据**


借助webpack启的express服务返回数据， 通过webpack-api-mocker 在 webpack devServer 请求发出之前拦截，
转到本地接口上,详细配置`vue.config.js`,

**连不同环境api**

 使用cross-env能跨平台地设置环境变量, 在 `package.json`的`scripts` 添加携带环境变量 `APP_TYPE` 的命令， 在`vue.config.js`中获取环境变量,
 根据不同的环境变量, `devServer.proxy.target` 为不同的api地址。
 
**移动端适配问题** 

```
yarn add postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units cssnano --S 。
         
```

不同于之前的项目使用rem, 用rem同样可以实现,样式内得写成rem，值得自己计算，本次主要通过 postcss-px-to-viewport 实现将px单位转换成vw单位, 详见
`postcss-px-to-viewport`, `vue-cli@3`创建的`typsScript` 项目，没有 `vue.config .postcssrc`, 需要新建，`postcss` 的配置放在`.postcssrc`不生效,放在
`package.json .postcssrc` 才生效。

  ```
"postcss-px-to-viewport": { 
    viewportWidth: 350, // 视窗的宽度，对应设计稿的宽度
    viewportHeight: 1334, // 视窗的高度，可以不配置 
    unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除） 
    viewportUnit: 'vw', // 指定需要转换成的视窗单位，
    selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，
    minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，可以设置任意值 
    mediaQuery: false // 允许在媒体查询中转换`px` 
}
```

### 关于行内样式转换

  `postcss-px-to-viewport` 转换只能转换css文件的px, 对与行内的css样式转换不了，有些场景封装的组件的style是可以通过props
  传的，开始想的是写一个转换的方法，每次需要传递px的css先调方法，方法返回一个转换后的vw，这种就太麻烦了，
  后来想用node操作文件，直接简单粗暴的将px给替换成换算之后的vw，后来想直接能不能借助webpack去实现，做一个像css loader的东西，
  在构建的时候将它替换，npm包地址 `https://www.npmjs.com/package/vuetypescript-pxtransformationvw-loader`


### 关于svg icon 

想做一个icon 库，将icon单独独立出来，想在是封装了一个icon的组件。


### vue css 莫名丢失前缀问题

vue cli 创建的工程自带了css前缀， 后续增加 px 转换 vw vh 将packjson中 autoprefixer 给丢了


### vue 事件问题

在 vue 中 对 props 的名称的大小写没有严格区分, 组件封装时候 onClick 一直警告

```
"plugins" : {
      "autoprefixer": {},
      }
```


### 调试

```
sudo /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222

```

```
 yarn start  // 启动本地服务，接口连接本地mock数据
 
 yarn dev   // 连接dev服务, 接口使用dev环境数据

```
