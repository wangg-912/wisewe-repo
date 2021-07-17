// import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
// import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

import pkg from '../package.json'
const deps = Object.keys(pkg.dependencies)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const vue = require('rollup-plugin-vue')

function createFileName(formatName) {
  return `lib/wisewe.${formatName}.js`;
}
const createBanner = () => {
  return `/*!
  * ${pkg.name} v${pkg.version}
  * author wg
  * (c) ${new Date().getFullYear()} @wisewe/components
  * @license MIT
  */`;
};
export default [
  {
    input: path.resolve(__dirname, '../packages/components/index.ts'),
    output: {
      format: 'cjs',
      file: createFileName('cjs'),
      banner: createBanner(),
      name: 'wisewe',
      globals: {
        vue: 'vue'
      },
      exports: 'named'
    },
    plugins: [
      terser(),
      nodeResolve(),
      // commonjs(),
      vue({
        target: 'browser',
        css: false,
        exposeFilename: false
      }),
      typescript({
        tsconfigOverride: {
          include: ['packages/**/*', 'typings/shims-vue.d.ts'],
          exclude: ['node_modules', 'packages/**/__tests__/*']
        },
        abortOnError: false
      })
    ],
    external(id) {
      return /^vue/.test(id) || deps.some((k) => new RegExp('^' + k).test(id))
    }
  }
]
