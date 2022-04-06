const { join, resolve } = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const root = process.cwd()
// https://vitejs.dev/config/

// function myPlugin() {
// 	return {
// 		name: 'transform-file',
// 		// options(op) {
// 		// 	console.log(op, '=======op========')
// 		// },
// 		transform(src) {
//       console.log('--------------------------------------');
// 			console.log(src)
//       console.log('--------------------------------------')
// 		}
// 		// buildStart(options) {
// 		// 	console.log(options, '=======op2========')
// 		// }
// 	}
// }
export default defineConfig({
	root,
	plugins: [vue({})],
	resolve: {
		alias: {
			hooks: join(root, 'src/hooks/'),
			utils: join(root, 'src/utils/'),
			types: join(root, 'types/')
		}
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'MyLib',
			fileName: (format) => `my-lib.${format}.js`
		},
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue'],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: 'Vue'
				}
			}
		}
	}
})