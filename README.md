# ESM vs CJS classes

> lol JavaScript

A simple benchmark that imports a simple class defined in a CJS file and an ESM module in different ways, instantiates it and calls a method on the class.

## Node v14.21.1

```console
% node index.js
esm const binding x 1,032,380,204 ops/sec ±1.93% (98 runs sampled)
cjs const binding x 1,011,674,136 ops/sec ±3.40% (93 runs sampled)
esm named import x 112,220,150 ops/sec ±0.08% (90 runs sampled)
cjs named import x 111,036,421 ops/sec ±0.35% (96 runs sampled)
esm default export x 108,317,280 ops/sec ±0.40% (84 runs sampled)
cjs default export x 112,191,943 ops/sec ±0.13% (93 runs sampled)
esm const binding of default export x 1,034,005,555 ops/sec ±1.98% (95 runs sampled)
cjs const binding of default export x 1,041,617,008 ops/sec ±0.21% (93 runs sampled)
Fastest is cjs const binding of default export,esm const binding,cjs const binding
```

## Node v16.18.1

```console
% node index.js
esm const binding x 998,004,477 ops/sec ±0.06% (102 runs sampled)
cjs const binding x 995,838,261 ops/sec ±0.14% (99 runs sampled)
esm named import x 152,134,953 ops/sec ±0.62% (94 runs sampled)
cjs named import x 150,544,612 ops/sec ±0.32% (91 runs sampled)
esm default export x 158,162,155 ops/sec ±0.11% (99 runs sampled)
cjs default export x 158,204,613 ops/sec ±0.07% (97 runs sampled)
esm const binding of default export x 996,427,019 ops/sec ±0.11% (102 runs sampled)
cjs const binding of default export x 974,344,071 ops/sec ±0.40% (95 runs sampled)
Fastest is esm const binding,esm const binding of default export
```

## Node v18.12.1

```console
% node index.js
esm const binding x 372,950,307 ops/sec ±0.58% (92 runs sampled)
cjs const binding x 389,310,997 ops/sec ±0.41% (99 runs sampled)
esm named import x 146,526,423 ops/sec ±0.35% (90 runs sampled)
cjs named import x 147,755,941 ops/sec ±0.41% (98 runs sampled)
esm default export x 148,681,968 ops/sec ±0.33% (94 runs sampled)
cjs default export x 150,372,554 ops/sec ±0.13% (98 runs sampled)
esm const binding of default export x 399,509,546 ops/sec ±0.11% (101 runs sampled)
cjs const binding of default export x 398,815,369 ops/sec ±0.22% (102 runs sampled)
Fastest is esm const binding of default export,cjs const binding of default export
```