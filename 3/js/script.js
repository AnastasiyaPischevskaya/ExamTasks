'use strict';
class Summa {
  constructor(cacheLength) {
    this.cache;
    this.cacheLength = cacheLength;
  }

  SumRes(a, b) {
    this.cache == undefined ? this.cache = [] : null;
    for (let num of this.cache) {
      if (a == num.a && b == num.b) {
        if (this.cache.length < this.cacheLength) {
          this.cache.push({ a: a, b: b, sum: num.sum });
        } else {
          this.cache.shift();
          this.cache.push({ a: a, b: b, sum: num.sum });
        }
        console.log("Cache", { a: a, b: b, sum: num.sum });
        return num.sum;
      }
    }
    let sum = a + b;
    if (this.cache.length < this.cacheLength) {
      this.cache.push({ a: a, b: b, sum: sum });
    } else {
      this.cache.shift();
      this.cache.push({ a: a, b: b, sum: sum });
    }
    console.log("New", { a: a, b: b, sum: sum });
    return sum;
  }
}

let obj = new Summa(3);
obj.SumRes(2, 5);
obj.SumRes(12, 15);
obj.SumRes(2, 5);

