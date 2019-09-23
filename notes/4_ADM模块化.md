# ADM
## 规范
### 说明
#### Asynchronous Module Definition (异步模块定义)
    专门用于浏览器端的, 模块的加载是异步的

### 基本语法
#### 定义暴露模块
```js
// 定义没有依赖的模块
define(function() {
    return 模块
})

// 定义有依赖的模块
define(['module1', 'module2'], function(m1, m2) {
    return 模块
})
```

#### 定义使用模块

```js
require(['module1', 'module2'], function(m1, m2) {
    使用m1/m2
})
```

## 实现(浏览器端)
+ https://requirejs.org/


## 使用教程
### require.js 使用
1. 下载require.js, 并引入
    官网: <https://requirejs.org/>
    Github:<https://github.com/requirejs/requirejs>

2. 项目结构
/- js
  /- libs
    /- xxx.js
    /- require.js
  /- modules
    /- alerter.js
    /- dataService.js
  /- main.js
/- index1.html