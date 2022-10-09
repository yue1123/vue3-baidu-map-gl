const path = require('path')
const merge = require('deepmerge')
const { defineConfig } = require('rollup')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('@rollup/plugin-babel').default
const replace = require('@rollup/plugin-replace')
const { terser } = require('rollup-plugin-terser')
const externals = require('rollup-plugin-node-externals').default
const vue = require('rollup-plugin-vue')
const typescript = require('rollup-plugin-typescript')

const pkg = require('./package.json')

const baseConfig = defineConfig({
	input: path.resolve('./packages/index.ts'),
	plugins: [
		externals({
			devDeps: false
		}),
		replace({
			values: {
				__VERSION__: pkg.version
			},
			preventAssignment: true
		}),
		typescript(),
		vue({ exposeFilename: false, css: false }),
		resolve({
			customResolveOptions: {
				moduleDirectory: 'node_modules'
			},
			rootDir: path.join(__dirname, '.'),
			browser: true
		}),
		babel({
			exclude: 'node_modules/**',
			babelHelpers: 'bundled'
		})
	],
	output: {
		name: 'Vue3baiduMapGl',
		format: 'umd',
		exports: 'named',
		globals: {
			vue: 'Vue',
			mitt: 'mitt'
		}
	}
})

const devConfig = defineConfig({
	plugins: [
		replace({
			values: {
				__DEV__: JSON.stringify(true),
				'process.env.NODE_ENV': JSON.stringify('development')
			},
			preventAssignment: true
		})
	],
	output: {
		file: path.resolve('dist/index.js')
	}
})

const prodConfig = defineConfig({
	plugins: [
		replace({
			values: {
				__DEV__: JSON.stringify(false),
				'process.env.NODE_ENV': JSON.stringify('production')
			},
			preventAssignment: true
		}),
		terser()
	],
	output: {
		file: path.resolve('dist/index.prod.js')
	}
})

const componentFileReg = /vue_type_script_setup_true_lang/
const libConfig = defineConfig({
	input: [
		path.resolve('./packages/index.ts'),
		path.resolve('./packages/create.ts')
	],
	output: {
		dir: './es',
		format: 'es',
		preserveModules: true,
		entryFileNames: (chunk) => {
			if (componentFileReg.test(chunk.name)) {
				return `index.vue.js`
			}
			return `${chunk.name}.js`
		}
	}
})

module.exports = [
	// dev umd output
	merge(baseConfig, devConfig),
	// prod umd output
	merge(baseConfig, prodConfig),
	// lib output
	merge(baseConfig, libConfig)
]
