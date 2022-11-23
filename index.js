/* eslint-disable no-console */

/*
$ node index.js
$ npx playwright-test index.js --runner benchmark
*/

import Benchmark from 'benchmark'
import * as cjs from './cjs.cjs'
import * as esm from './esm.js'
import { CJSClass as NamedCJSClass } from './cjs.cjs'
import { ESMClass as NamedESMClass } from './esm.js'
import DefaultCJSClass from './cjs-default.cjs'
import DefaultESMClass from './esm-default.js'

const ConstNamespaceCJSClass = cjs.CJSClass
const ConstNamespaceESMClass = esm.ESMClass

const ConstDefaultCJSClass = DefaultCJSClass
const ConstDefaultESMClass = DefaultESMClass

const ConstNamedCJSClass = NamedCJSClass
const ConstNamedESMClass = NamedCJSClass

new Benchmark.Suite()
  .add('esm named import', () => {
    const obj = new NamedESMClass()
    obj.method()
  })
  .add('cjs named import', () => {
    const obj = new NamedCJSClass()
    obj.method()
  })
  .add('esm default import', () => {
    const obj = new DefaultESMClass()
    obj.method()
  })
  .add('cjs default import', () => {
    const obj = new DefaultCJSClass()
    obj.method()
  })
  .add('esm namespace import', () => {
    const obj = new esm.ESMClass()
    obj.method()
  })
  .add('cjs namespace import', () => {
    const obj = new cjs.CJSClass()
    obj.method()
  })
  .add('esm const binding of namespace import', () => {
    const obj = new ConstNamespaceESMClass()
    obj.method()
  })
  .add('cjs const binding of namespace import', () => {
    const obj = new ConstNamespaceCJSClass()
    obj.method()
  })
  .add('esm const binding of named import', () => {
    const obj = new ConstNamedESMClass()
    obj.method()
  })
  .add('cjs const binding of named import', () => {
    const obj = new ConstNamedCJSClass()
    obj.method()
  })
  .add('esm const binding of default import', () => {
    const obj = new ConstDefaultESMClass()
    obj.method()
  })
  .add('cjs const binding of default import', () => {
    const obj = new ConstDefaultCJSClass()
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
