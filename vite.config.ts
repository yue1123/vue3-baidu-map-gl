const { join, resolve, dirname } = require('path')
import nodeResolve from 'rollup-plugin-node-resolve'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const root = process.cwd()

export default defineConfig({
	root,
	plugins: [vue(), nodeResolve()],
	resolve: {
		alias: {
			hooks: join(root, 'src/hooks/'),
			utils: join(root, 'src/utils/'),
			types: join(root, 'types/')
		}
	},
	build: {
		outDir: './lib',
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'vue3-baidu-map-gl',
			formats: ['cjs', 'es', 'umd']
		},
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue'],
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
