//将 其他模块引入
const module1 = require('./modules/module1');
const module2 = require('./modules/module2');
const module3 = require('./modules/module3');
const uniq = require('uniq')
module1.foo();

module2();

module3.foo();
module3.bar();

let result = uniq(module3.arr)
console.log(result);

