/** IIFE模式增强: 引入依赖 **/

(function (g, $) {
  var msg = 'module4';
  function foo() {
    $('body').css('background', 'red');
    console.log('foo()', msg)
  }
  (g || window).module4 = { foo: foo }; // 将方法暴露到全局对象的module3属性

  return
})(window, jQuery);

