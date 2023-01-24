const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,

	// 部屬
	publicPath: process.env.NODE_ENV === 'production'
	? '/KUMA_vue/'
	: '/',
})