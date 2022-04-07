const { join, resolve } = require('path')
import nodeResolve from 'rollup-plugin-node-resolve'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const root = process.cwd()

export default defineConfig({
	root,
	plugins: [vue({ customElement: true, reactivityTransform: true })],
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
			// output: {
			// 	exports: 'named',
			// 	// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
			// 	globals: {
			// 		vue: 'Vue'
			// 	}
			// },
			output: {
				// 必须，输出文件 (如果要输出多个，可以是一个数组)
				exports: 'named', // 输出多个文件
				globals: {
					vue: 'Vue' // 告诉rollup全局变量Vue即是vue
				}
			}
		}
	}
})
