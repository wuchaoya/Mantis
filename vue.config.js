/* eslint-disable */
const apiMocker = require('webpack-api-mocker');

const path = require('path')

const host = {
	dev: 'http://cloud-phone-dev.xiaoyaoyou.com:2096',
	localhost: 'http://127.0.0.1:8080/api'
}


console.log(process.env.APP_TYPE);

const config = process.env.APP_TYPE === 'localhost' ?
	{
		devServer: {
			before(app) {
				apiMocker(app, path.resolve('./src/mock/index.ts'), {
					proxy: {
						'/api': {
							target: host[process.env.APP_TYPE],
							changeOrigin: true,
							pathRewrite:{'/api':''}
						},
					}
				});
				
			}
		}
	} :
	{
		devServer: {
			proxy: {
				'/api': {
					target: host[process.env.APP_TYPE],
					pathRewrite:{'/api':''}
				},
			}
		},
		chainWebpack: (config) => {
		config.module
		.rule('vuetypescript-pxtransformationvw-loader')
		.test(/\.(vue|tsx?)$/)
		.use('vuetypescript-pxtransformationvw-loader')
		.loader('vuetypescript-pxtransformationvw-loader')
   }
	}

module.exports = config;