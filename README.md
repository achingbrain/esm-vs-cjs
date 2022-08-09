# ESM vs CJS classes

> lol JavaScript

A simple benchmark that imports a simple class defined in a CJS file and an ESM module, instantiates it and calls a method on the class.

## Node 16

```console
% node index.js
esm x 156,061,934 ops/sec ±0.19% (94 runs sampled)
cjs x 1,034,861,972 ops/sec ±0.19% (97 runs sampled)
Fastest is cjs
```

## Node 18

```console
% node index.js
esm x 144,767,462 ops/sec ±0.35% (93 runs sampled)
cjs x 388,040,620 ops/sec ±0.25% (100 runs sampled)
Fastest is cjs
```