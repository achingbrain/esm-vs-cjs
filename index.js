/* eslint-disable no-console */

/*
$ node dist/src/index.js
$ npx playwright-test dist/src/index.js --runner benchmark
*/

import Benchmark from 'benchmark'
import cjs from './cjs.cjs'
import { ESMClass } from './esm.js'

const CJSClass = cjs.CJSClass

new Benchmark.Suite()
  .add('esm', () => {
    const obj = new ESMClass()
    obj.method()
  })
  .add('cjs', () => {
    const obj = new CJSClass()
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
