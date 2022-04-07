// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
const config = {
	input: './src/index.ts', // 必须，入口文件
	output: {
		// 必须，输出文件 (如果要输出多个，可以是一个数组)
		exports: 'named', // 输出多个文件
		globals: {
			vue: 'Vue' // 告诉rollup全局变量Vue即是vue
		}
	},
	plugins: [
		// 引入的插件在这里配置
		typescript(),
		vue({
			exposeFilename: true
		}),
		resolve(),
		babel({
			exclude: '**/node_modules/**'
		})
	]
}

export default config
