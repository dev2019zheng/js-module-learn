/** namespace: 简单对象封装 **/

const obj = {
  msg: 'module2',
  foo: function() {
  console.log('foo()', this.msg)
  },
  bar: function() {
    console.log('bar()', this.msg)
  }
};

