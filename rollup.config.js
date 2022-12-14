/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const merge = require('deepmerge')
const { defineConfig } = require('rollup')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('@rollup/plugin-babel').default
const replace = require('@rollup/plugin-replace')
const { terser } = require('rollup-plugin-terser')
const vue = require('rollup-plugin-vue')
const typescript = require('rollup-plugin-typescript')
const pkg = require('./package.json')

const baseConfig = defineConfig({
  external(id) {
    if (id === 'vue') return true
    if (id === 'index.vue' || id === './components/index') return false
  },
  input: path.resolve('./packages/index.ts'),
  plugins: [
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
  plugins: [
    replace({
      values: {
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

const esmConfig = defineConfig({
  output: {
    globals: {
      vue: 'Vue'
    },
    format: 'esm',
    file: path.resolve('dist/index.esm.js')
  }
})

module.exports = [
  // dev umd output
  merge(baseConfig, devConfig),
  // prod umd output
  merge(baseConfig, prodConfig),
  // esm output
  merge(baseConfig, esmConfig)
]
