# CMD
## 规范
### 说明
    https://github.com/seajs/seajs
    专门用于浏览器端的, 模块的加载是异步的,
    模块使用时才会加载执行

### 基本语法
#### 定义暴露模块
```js
// 定义有依赖模块
define(dunction(require, exports, module) {
    // 引入依赖模块(同步)
    var module2 = require('./module2')
    // 引入依赖模块(异步)
    require.async('./module3', function(m3) {

    })
    // 暴露模块
    exports.xxx = value
})
```
#### 引入使用模块
```js
define(function(require) {
    var m1 = require('./module1')
    var m4 = require('./module4')
    m1.show()
    m4.show()
})
```
## 实现
  下载 sea.js




