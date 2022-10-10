const resolve = require('rollup-plugin-node-resolve')
const pkg = require('../package.json')
const babel = require('@rollup/plugin-babel').default
const fs = require('fs')
const path = require('path')
const replace = require('@rollup/plugin-replace')
const vue = require('rollup-plugin-vue')
const typescript = require('rollup-plugin-typescript')


const deps = Object.keys(pkg.dependencies || {})
const outDir = 'es'
const include = /\.vue$|\.ts$/
const cwd = process.cwd()
//递归目录结构
const readDirectory = (dir) => {
	const list = fs.readdirSync(dir)
	const ret = []

	list.forEach((filename) => {
		const dist = path.resolve(dir, filename)
		const stat = fs.statSync(dist)
		if (stat.isFile()) {
			if (include.test(filename)) {
				ret.push(dist)
			}
		} else {
			ret.push(...readDirectory(dist))
		}
	})
	return ret
}

const componentsBuildCommonPlugins = [
	resolve(),
	vue({ isWebComponent: true, compileTemplate: true }),
	typescript(),
	babel({
		exclude: 'node_modules/**',
		babelHelpers: 'bundled'
	})
]
const tsBuildCommonPlugins = [
	replace({
		values: {
			__VERSION__: pkg.version
		},
		preventAssignment: true
	}),
	resolve(),
	typescript()
]

const componentsBuild = readDirectory(path.resolve(cwd, './packages/components')).map((component) => {
	return {
		external(id) {
			if (/^mitt/.test(id)) {
				return false
			}
			return /^vue/.test(id) || /hooks/.test(id) || /utils/.test(id) || deps.some((k) => new RegExp('^' + k).test(id))
		},
		input: component,
		output: [
			{
				exports: 'named',
				file: component.replace('packages', outDir).replace('.vue', '.js').replace('.ts', '.js'),
				format: 'es'
			}
		],
		// 插件
		plugins: componentsBuildCommonPlugins
	}
})
const hooksBuild = readDirectory(path.resolve(cwd, './packages/hooks')).map((hooks) => {
	return {
		external(id) {
			if (/^mitt/.test(id)) {
				return false
			}
			return (
				id.startsWith('./') || /^vue/.test(id) || /hooks/.test(id) || deps.some((k) => new RegExp('^' + k).test(id))
			)
		},
		// 入口
		input: hooks,
		// 出口
		output: [
			{
				// 必须，输出文件 (如果要输出多个，可以是一个数组)
				exports: 'named', // 输出多个文件
				file: hooks.replace('packages', outDir).replace('.ts', '.js'), // 必须，输出文件
				format: 'es'
			}
		],
		// 插件
		plugins: tsBuildCommonPlugins
	}
})
const utilsBuild = readDirectory(path.resolve(cwd, './packages/utils')).map((utils) => {
	return {
		external(id) {
			if (/^mitt/.test(id)) {
				return false
			}
			return /^vue/.test(id) || /hooks/.test(id) || deps.some((k) => new RegExp('^' + k).test(id))
		},
		input: utils,
		output: [
			{
				exports: 'named',
				file: utils.replace('packages', outDir).replace('.ts', '.js'),
				format: 'es'
			}
		],
		plugins: tsBuildCommonPlugins
	}
})

function transformExtVueToJs(options = {}) {
	return {
		name: 'helloworld',

		transform(code, id) {
			let codeStr = `${code}`
			codeStr = codeStr.replace(/\.vue/gi, '.js')
			return {
				code: codeStr
			}
		}
	}
}
const buildIndex = [
	{
		external: () => true,
		input: './packages/index.ts',
		output: {
			exports: 'named',
			file: `./${outDir}/index.js`,
			format: 'es'
		},
		plugins: [...tsBuildCommonPlugins, transformExtVueToJs()]
	}
]
module.exports = [...componentsBuild, ...hooksBuild, ...utilsBuild, ...buildIndex]
