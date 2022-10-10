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

const packageBuild = require('./scripts/build-package.js')

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
		vue(),
		resolve(),
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
			vue: 'Vue'
		}
	}
})

const devConfig = defineConfig({
	output: {
		file: path.resolve('dist/index.js')
	}
})

const prodConfig = defineConfig({
	plugins: [terser()],
	output: {
		file: path.resolve('dist/index.prod.js')
	}
})

module.exports = [
	// dev umd output
	merge(baseConfig, devConfig),
	// prod umd output
	merge(baseConfig, prodConfig),
	// lib output
	...packageBuild
]
