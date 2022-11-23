# ESM vs CJS classes

> lol JavaScript

A simple benchmark that imports a simple class defined in a CJS file and an ESM module in different ways, instantiates it and calls a method on the class.

## Node v14.21.1

```console
% node index.js
esm named import x 111,761,280 ops/sec ±0.24% (96 runs sampled)
cjs named import x 112,166,049 ops/sec ±0.16% (95 runs sampled)
esm default import x 112,091,845 ops/sec ±0.11% (93 runs sampled)
cjs default import x 112,101,557 ops/sec ±0.10% (97 runs sampled)
esm namespace import x 1,031,611,746 ops/sec ±2.00% (94 runs sampled)
cjs namespace import x 1,042,611,734 ops/sec ±0.10% (97 runs sampled)
esm const binding of namespace import x 1,042,307,380 ops/sec ±0.10% (94 runs sampled)
cjs const binding of namespace import x 996,487,568 ops/sec ±3.00% (92 runs sampled)
esm const binding of named import x 1,001,483,747 ops/sec ±2.85% (89 runs sampled)
cjs const binding of named import x 1,032,741,900 ops/sec ±1.92% (98 runs sampled)
esm const binding of default import x 1,039,850,920 ops/sec ±0.22% (98 runs sampled)
cjs const binding of default import x 1,020,149,272 ops/sec ±2.79% (94 runs sampled)
Fastest is cjs namespace import,esm const binding of namespace import,cjs const binding of named import,cjs const binding of default import
```

## Node v16.18.1

```console
% node index.js
esm named import x 157,728,166 ops/sec ±0.18% (99 runs sampled)
cjs named import x 151,687,853 ops/sec ±0.14% (95 runs sampled)
esm default import x 158,003,146 ops/sec ±0.11% (98 runs sampled)
cjs default import x 157,689,382 ops/sec ±0.11% (99 runs sampled)
esm namespace import x 994,574,822 ops/sec ±0.18% (98 runs sampled)
cjs namespace import x 988,899,435 ops/sec ±0.27% (97 runs sampled)
esm const binding of namespace import x 974,930,113 ops/sec ±0.38% (95 runs sampled)
cjs const binding of namespace import x 994,985,024 ops/sec ±0.17% (102 runs sampled)
esm const binding of named import x 997,615,198 ops/sec ±0.07% (98 runs sampled)
cjs const binding of named import x 997,521,729 ops/sec ±0.07% (98 runs sampled)
esm const binding of default import x 992,885,525 ops/sec ±0.27% (100 runs sampled)
cjs const binding of default import x 959,230,581 ops/sec ±0.21% (95 runs sampled)
Fastest is esm const binding of named import,cjs const binding of named import
```

## Node v18.12.1

```console
% node index.js
esm named import x 143,651,465 ops/sec ±0.60% (98 runs sampled)
cjs named import x 149,111,836 ops/sec ±0.14% (99 runs sampled)
esm default import x 149,056,049 ops/sec ±0.22% (98 runs sampled)
cjs default import x 150,253,771 ops/sec ±0.14% (99 runs sampled)
esm namespace import x 397,889,582 ops/sec ±0.15% (101 runs sampled)
cjs namespace import x 387,277,191 ops/sec ±0.30% (96 runs sampled)
esm const binding of namespace import x 395,243,032 ops/sec ±0.36% (94 runs sampled)
cjs const binding of namespace import x 398,877,755 ops/sec ±0.24% (99 runs sampled)
esm const binding of named import x 399,137,777 ops/sec ±0.14% (101 runs sampled)
cjs const binding of named import x 398,960,888 ops/sec ±0.12% (101 runs sampled)
esm const binding of default import x 390,475,028 ops/sec ±0.53% (101 runs sampled)
cjs const binding of default import x 392,167,862 ops/sec ±0.45% (94 runs sampled)
Fastest is esm const binding of named import,cjs const binding of named import,cjs const binding of namespace import
```