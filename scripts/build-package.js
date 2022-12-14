/* eslint-disable @typescript-eslint/no-var-requires */
const fg = require('fast-glob')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('@rollup/plugin-babel').default
const replace = require('@rollup/plugin-replace')
const vue = require('rollup-plugin-vue')
const typescript = require('rollup-plugin-typescript')

const packageJson = require('../package.json')
const outDir = 'es'
const root = process.cwd()
const internalModuleReg = /^vue|hooks|utils/
const componentsBuildCommonPlugins = [
  resolve(),
  vue(),
  typescript(),
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled'
  })
]

const typeScriptBuildCommonPlugins = [
  replace({
    values: {
      __VERSION__: packageJson.version
    },
    preventAssignment: true
  }),
  resolve(),
  typescript()
]
function getComponentList() {
  const components = fg.sync(['packages/components/**/index.ts', 'packages/components/**/*.vue'], {
    cwd: root
  })
  // components.shift()
  return components.map((component) => {
    let fileName = component.replace('packages', outDir)
    fileName = fileName.endsWith('.vue') ? fileName + '.js' : fileName.replace('.ts', '.js')
    return {
      external(id) {
        if (id.endsWith('.vue') || id.endsWith('index')) return true
        return internalModuleReg.test(id)
      },
      input: component,
      output: {
        exports: 'named',
        file: fileName,
        format: 'esm',
        sourcemap: true
      },
      plugins: componentsBuildCommonPlugins
    }
  })
}

function getTypescriptFilesList() {
  const typescriptFiles = fg.sync(['packages/*.ts', 'packages/utils/**.ts', 'packages/hooks/**.ts'], {
    cwd: root,
    ignore: ['packages/env.d.ts']
  })
  return typescriptFiles.map((tsFile) => {
    return {
      external(id) {
        return true
      },
      input: tsFile,
      output: {
        exports: 'named',
        file: tsFile.replace('packages', outDir).replace('.ts', '.js'),
        format: 'esm'
      },
      plugins: typeScriptBuildCommonPlugins
    }
  })
}

module.exports = [...getComponentList(), ...getTypescriptFilesList()]
