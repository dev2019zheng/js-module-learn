(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//将 其他模块引入
const module1 = require('./modules/module1');
const module2 = require('./modules/module2');
const module3 = require('./modules/module3');
// const uniq = require('uniq')
module1.foo();

module2();

module3.foo();
module3.bar();

// let result = uniq(module3.arr)
// console.log(result);


},{"./modules/module1":2,"./modules/module2":3,"./modules/module3":4}],2:[function(require,module,exports){
// module.exports = value 暴露一个对象
module.exports = {
    msg: 'module1',
    foo() {
        console.log(this.msg);
    }
}

},{}],3:[function(require,module,exports){
// 暴露一个函数 module.exports = function

module.exports = function () {
    console.log('module2');
}


},{}],4:[function(require,module,exports){
// exports.xxx = _.value


exports.foo = function() {
    console.log('foo() module3');
}

exports.bar = function() {
    console.log('bar() module3');
}

exports.arr = [1,2,3,4,1,2,3,4,12,4,6]
},{}]},{},[1]);
