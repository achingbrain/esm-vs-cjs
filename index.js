/* eslint-disable no-console */

/*
$ node dist/src/index.js
$ npx playwright-test dist/src/index.js --runner benchmark
*/

import Benchmark from 'benchmark'
import * as cjs from './cjs.cjs'
import * as esm from './esm.js'
import { CJSClass as NamedCJSClass } from './cjs.cjs'
import { ESMClass as NamedESMClass } from './esm.js'
import DefaultCJSClass from './cjs-default.cjs'
import DefaultESMClass from './esm-default.js'

const ConstCJSClass = cjs.CJSClass
const ConstESMClass = esm.ESMClass

const ConstDefaultCJSClass = DefaultCJSClass
const ConstDefaultESMClass = DefaultESMClass

new Benchmark.Suite()
  .add('esm const binding', () => {
    const obj = new ConstESMClass()
    obj.method()
  })
  .add('cjs const binding', () => {
    const obj = new ConstCJSClass()
    obj.method()
  })
  .add('esm named import', () => {
    const obj = new NamedESMClass()
    obj.method()
  })
  .add('cjs named import', () => {
    const obj = new NamedCJSClass()
    obj.method()
  })
  .add('esm default export', () => {
    const obj = new DefaultESMClass()
    obj.method()
  })
  .add('cjs default export', () => {
    const obj = new DefaultCJSClass()
    obj.method()
  })
  .add('esm const binding of default export', () => {
    const obj = new ConstDefaultCJSClass()
    obj.method()
  })
  .add('cjs const binding of default export', () => {
    const obj = new ConstDefaultESMClass()
    obj.method()
  })
  .on('error', (err) => {
    console.error(err)
  })
  .on('cycle', (event) => {
    console.info(String(event.target))
  })
  .on('complete', function () {
    console.info(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  // run async
  .run({ async: true })
