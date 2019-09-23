/** IIFE模式: 匿名函数自调用(闭包) **/

(function (g) {
  var msg = 'module3';
  function foo() {
    console.log('foo()', msg)
  }
  (g || window).module3 = { foo: foo }; // 将方法暴露到全局对象的module3属性

  return
})(window);

