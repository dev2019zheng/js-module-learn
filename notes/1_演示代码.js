/**************** 原始方法 *********************/
function foo() {}

function bar() {}


/**************** 简单封装 *********************/

var MYAPP = {
  foo: function() {},
  bar: function() {}
}
MYAPP.foo()


/**************** 闭包实现 *********************/
var Module = (function () {
  var _private = "safe now";
  var foo = function () {
    console.log(_private)
  }
  return {
    foo:foo
  }
})()

Module.foo()
console.log(Module._private) // undefined


/**************** 模块模式 *********************/
var Module2 = (function ($) {
  var _$body = $("body");   // we can use jQuery now!
  var foo = function () {
    console.log(_$body)     // 特权方法
  }
  return {
    foo:foo
  }
})(jQuery)

Module2.foo()
